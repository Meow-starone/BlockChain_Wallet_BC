
<template>
    <div  class="login-pg">
        <div class="login-pg" style="position: fixed;top:0;left:0;right:0;bottom: 0"></div>
        <div class="pg-bg"></div>
        <!-- <a class="lg-close iconfont" href="javascript:void(0)">&#xe61a;</a> -->
       <!--  <a href="javascript:history.back()" class="back"><i>&#xe6b7;</i>返回</a> -->
        <a @click="jump('lay/home')" class="back"><i>&#xe6b7;</i>返回</a>
        <a href="javascript:void(0)" class="more-operate" @click="showMore=true">更多</a>
        <article class="login-box">
            <section class="lg-portrait-box">
                <div class="portrait-img">
                    <img src="../../img/first-lg.png">
                </div>
            </section>
            <section class="login-form first-login">
                <ul class="login-list">
                    <li>
                        <span :class="{'edit-st':loginInfo.mobile}" class="lg-item">请输入手机号</span>
                        <input type="number" v-model="loginInfo.mobile" v-if="mode==='unlock'" readonly class="lg-ipt" @focus="focus($event)" />
                        <input type="number" v-model="loginInfo.mobile" v-if="mode!=='unlock'" class="lg-ipt" @focus="focus($event)" />
                    </li>
                    <li>
                        <span class="lg-item">请输入密码</span>
                        <input id="passWd" :type="passType?'password':'text'" v-model="loginInfo.password" class="lg-ipt"  @focus="focus($event)" />
                        <em class="eye-btn iconfont " style="right: 0" :class="{close:passType,open:!passType}" @click="passType=!passType"></em>
                        <!--<a class="forget-passwd" href="javascript:void(0)">忘记密码</a>-->
                    </li>
                    <li v-if="mode!=='unlock'">
                        <span class="lg-item w50">请输入图形验证码</span>
                        <input type="text" class="lg-ipt w50" v-model="loginInfo.tokenValue"  @focus="focus($event)"/>
                        <img :src="captchaPicture(loginInfo.tokenKey)" @click="loginInfo.tokenKey=new Date().getTime()+Math.random()" class="verify-words" style="right: 0"/>
                        <!-- <a href="javascript:void(0)" class="change-img">换一张</a> -->
                    </li>
                    <li v-if="mode!=='unlock'">
                        <span class="lg-item w50">请输入短信验证码</span>
                        <input type="text" class="lg-ipt w50" v-model="loginInfo.smsCode"  @focus="focus($event)"/>
                        <a href="javascript:void(0)" style="width:auto" class="change-img" v-if="countDown===0" @click="getCaptcha">获取短信验证码</a>
                        <a href="javascript:void(0)" style="width:auto" class="change-img" v-if="countDown>0">{{countDown}}秒后重新获取</a>
                    </li>
                </ul>
                <info-button :info="infoButton" @clicked="login(loginInfo)" v-if="mode!=='unlock'"></info-button>
                <info-button :info="infoButton" @clicked="unlockAccount(loginInfo)" v-if="mode==='unlock'"></info-button>
                <a class="lead-lg" href="javascript:void(0)" @click="jump('user/import')">账户导入登录</a>
            </section>
        </article>
        <!-- 弹框-->
        <div class="mask" v-show="showMore"></div>
        <section class="operate-layer" v-show="showMore">
            <div class="operate-show">
                <!--<a href="javascript:void(0)">切换账户</a>-->
                <a href="javascript:void(0)" @click="jump('user/register',{step:'1'})">注册</a>
                <a href="javascript:void(0)" @click="forget()">忘记密码</a>
                <a href="javascript:void(0)" @click="jump('user/help')" class="last">帮助</a>
            </div>
            <a href="javascript:void(0);" class="cancel" @click="showMore=false">取消</a>
        </section>
    </div>
</template>
<script>
    const API = require("../../lib/api")
    let currentWallet;
    export default {
        data(){
            return {
                passType:true,
                infoButton:{
                    button:'登录',
                    error:''
                },
                showMore:false,
                loginInfo:{
                    mobile:'',
                    password:'',
                    tokenKey:new Date().getTime()+Math.random(),
                    tokenValue:'',
                    smsCode:''
                },

                countDown:0,
                mode:''
            }
        },
        computed:{
        },
        methods:{
            forget(){
                this.mode='';
                this.showMore=false
            },
            captchaPicture:API.user.captchaPicture,
            focus(event){
                this.infoButton.error = '';
                event.target.previousElementSibling.classList.add("edit-st");
            },
            unlockAccount(info){
                const that = this;
                API.local.unlockWallet(info.password).then(function () {
                    that.jump("lay/home",{},{history:false});
                }).catch(function (errinfo) {
                   // that.loginInfo.tokenKey= new Date().getTime();
                    that.infoButton.error = "请输入正确的密码";
                })
            },
            login(info){
                const that = this;

                //条件判断
                if(!info.mobile || !API.user.isMobile(info.mobile)){
                    this.infoButton.error = ("请输入正确的手机号码");
                    return;
                }
                if(!info.password || info.password.length<1 ){
                    this.infoButton.error = ("请输入账户密码");
                    return;
                }
                if(!info.tokenValue ){
                    this.infoButton.error = ("请输入图片验证码");
                    return;
                }
                if(!info.smsCode ){
                    this.infoButton.error = ("请输入短信验证码");
                    return;
                }

                //签名
                let ts = new Date().getTime();

                let mobileCiphertext = require("des").desEncode(info.mobile,currentWallet.getPrivateKeyString());
                let sign = require("ethereumjs-util").sha3(`${info.mobile}${info.smsCode}${mobileCiphertext}${ts}`);
                sign = require("ethereumjs-util").hashPersonalMessage(sign);

                let util = require("ethereumjs-util").ecsign(sign, currentWallet.getPrivateKey());
                let r = util.r,s=util.s,v=util.v;
                let signature =  "";
                [r,s,v].forEach(function (buf) {
                    let hex = "";
                    if(typeof buf === "number"){
                        hex = buf.toString(16);
                    }else{
                        hex = buf.toString("hex")
                    }
                    signature+=hex;
                });
                API.user.bindNewUserToMobile({
                    ts:ts,
                    signature:signature,
                    mobile:info.mobile,
                    mobileDes:mobileCiphertext
                }).then(function () {
                    /*return API.eth.checkAccountByAddress(currentWallet.getAddressString()).then(function (user) {
                        API.local.importWallet(currentWallet,info).then(function (data) {
                            that.jump("lay/home")
                        })
                    })*/
                    return API.local.importWallet(currentWallet,info).then(function (data) {
                            that.jump("lay/home")
                        })
                }).catch(function (errinfo) {
                    that.loginInfo.tokenKey= new Date().getTime();
                    that.infoButton.error = (errinfo);
                })
            },
            getCaptcha(){
                let regInfo = this.loginInfo;
                let that = this;

                //条件判断
                if(!regInfo.mobile || !API.user.isMobile(regInfo.mobile)){
                    this.infoButton.error = ("请输入正确的手机号码");
                    return;
                }
                if(!regInfo.password || regInfo.password.length<1 ){
                    this.infoButton.error = ("请输入账户密码");
                    return;
                }
                if(!regInfo.tokenValue ){
                    this.infoButton.error = ("请输入图片验证码");
                    return;
                }

                API.eth.generateWallet(regInfo.password).then(function (wallet) {
                    let params = {
                        tokenKey:regInfo.tokenKey,
                        tokenValue:regInfo.tokenValue,
                        mobile:regInfo.mobile,
                    };
                    currentWallet = wallet.wallet;
                    params.newEthAddress = wallet.wallet.getAddressString();
                    return API.user.sendBindNewUserToMobileCode(params)
                }).catch(function (errinfo) {
                    that.loginInfo.tokenKey= new Date().getTime();
                    that.infoButton.error = (errinfo);
                    return Promise.reject();
                }).then(function () {
                   that.infoButton.error = ("验证码获取成功，请注意查收短信");
                    that.countDown = 120;
                    that.countDownInterval = setInterval(function () {
                        that.countDown--;
                        if(that.countDown===0){
                            clearInterval(that.countDownInterval);
                        }
                    },1000)
                })
            }
        },
        mounted(){
            const that = this;
            API.local.localData(API.local.LOCAL_USER_INFO_KEY).then(function (data) {
                if(data&&data.account){
                    that.mode = 'unlock';
                    that.loginInfo.mobile = data.account;
                }
            })
        }
    }
</script>
<style lang="less">
    .operate-layer {
         visibility: visible;
    }
</style>
