
<template>
    <div>
        <ui-header :title="steps[$route.query.step].title"></ui-header>
        <article class="content" v-if="+$route.query.step===1">
            <ul class="form-box">
                <li class="clearfix">
                    <span class="item">手机号</span>
                    <input @focus="inputFocus()" type="number" v-model="regInfo.mobile" class="ipt"
                           placeholder="请输入与协同信息相同的手机号">
                    <em class="clear-btn iconfont"></em>
                </li>
            </ul>
            <p class="deal">已阅读并同意以下协议，<a href="#">《恒生服务协议》</a></p>
            <info-button @clicked="confirmMobile(regInfo)" :info="steps[$route.query.step]"></info-button>
        </article>

        <article class="content" v-if="+$route.query.step===2">
            <p v-show="countDown>0" class="form-tip" style="">已发送短信验证码至手机号{{$route.query.mobile}}，请注意查收</p>
            <ul class="form-box">
                <li class=" clearfix">
                    <span class="item">图形验证码</span>
                    <input v-model="regInfo.tokenValue" @focus="inputFocus()" class="ipt code-ipt" placeholder="请输入">
                    <img :src="captchaPicture(regInfo.tokenKey)" style="left: 0;margin-right: 0" @click="regInfo.tokenKey=new Date().getTime()+Math.random()" class="txyz-code"/>
                </li>
                <li class="linetop clearfix">
                    <span class="item">密码</span>
                    <input v-model="regInfo.password" @focus="inputFocus()" :type="passwordType" class="ipt" placeholder="6~12位数字／字母／符号">
                    <em class="eye-btn iconfont close" @click="passwordType=passwordType==='password'?'text':'password'"></em>
                </li>
                <li class="linetop clearfix">
                    <span class="item">验证码</span>
                    <input v-model="regInfo.mobileCaptcha" @focus="inputFocus()" class="ipt code-ipt" placeholder="请输入">
                    <em v-show="countDown===0" class="code-btn send" @click="getCaptcha(regInfo)">获取验证码</em>
                    <em v-show="countDown>0" class="code-btn sending"><i>{{countDown}}</i>s后重新发送</em>
                </li>
            </ul>
            <info-button @clicked="confirmCode(regInfo)" :info="steps[$route.query.step]"></info-button>
        </article>

        <!--<article class="content" v-if="+$route.query.step===3">-->
            <!--<section class="accout-export-box">-->
                <!--<div class="accout-info clearfix">-->
                    <!--<img class="doll" src="../../img/doll-1.png">-->
                    <!--<p class="result">注册成功！</p>-->
                    <!--<p class="explain">账户私钥是专属于您的身份证书，非常重要 请务必复制到剪贴板！</p>-->
                <!--</div>-->
                <!--<p class="export-code">{{walletString}}</p>-->
            <!--</section>-->
            <!--<info-button :info="steps[$route.query.step]" @clicked="copyAndJump()"></info-button>-->
        <!--</article>-->
    </div>
</template>
<script>
    import API from "../../lib/api";
    const ethutils = require("ethereumjs-util");
    const Dialog = require("dialog");
    import LightSDK from "light-sdk";
    let currentWallet;
    export default {
        data(){
            return {
                regInfo:{
                    tokenKey:new Date().getTime(),
                    tokenValue:'',//图片验证码
                    mobile:'',
                    mobileCaptcha:'',
                    password:'',
                },
                steps:[{
                    title:'注册',
                    error:'',
                    button:"同意协议并注册"
                },{
                    title:'身份验证',
                    error:'',
                    button:"下一步"
                },{
                    title:'设置密码',
                    error:'',
                    button:"提交"
                },{
                    title:'账户导出',
                    error:'',
                    button:"复制至剪贴板"
                }],
                passwordType:'password',
                countDown:0,
                walletString:'111'
            }
        },
        methods:{
            inputFocus(){
                this.steps[this.$route.query.step].error = ("");
            },
            copyAndJump(){
                const that = this;
                API.local.localData(API.local.LOCAL_USER_INFO_KEY).then(function (data) {
                    that.walletString = data.wallet
                    LightSDK.native.setClipBoardContent({
                        value:data.wallet
                    },function () {
                        that.jump("lay/home");
                    })
                })
            },
            captchaPicture:API.user.captchaPicture,
            confirmMobile(regInfo){
                const that = this;

                //条件判断
                if(!regInfo.mobile || !API.user.isMobile(regInfo.mobile)){
                    that.steps[that.$route.query.step].error = ("请输入正确的手机号码");
                    return;
                }

                that.jump("user/register",{
                    step:2,
                    mobile:regInfo.mobile
                })
            },
            getCaptcha(regInfo){
                const that = this;

                if (!regInfo.tokenValue) {
                    that.steps[that.$route.query.step].error = ("请输入图片验证码！");
                    return;
                }

                if(!regInfo.password || regInfo.password.length<6 ){
                    that.steps[that.$route.query.step].error = ("请输入6-8位的账户密码");
                    return;
                }

                API.eth.generateWallet(regInfo.password).then(function (wallet) {
                    currentWallet = wallet.wallet;

                    return API.user.register({
                        nick: "匿名用户",
                        ethAddress: currentWallet.getAddressString(),
                        phone: "",
                        email: ""
                    }).then(function () {
                        return new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve()
                            },500)
                        })
                    })
                }).then(function () {
                    return API.user.sendBindMobileCode({
                        tokenKey: regInfo.tokenKey,
                        tokenValue: regInfo.tokenValue,
                        mobile: that.$route.query.mobile,
                        ethAddress:currentWallet.getAddressString()
                    });
                }).catch(function (errinfo) {
                    that.regInfo.tokenKey= new Date().getTime();
                    that.steps[that.$route.query.step].error = (errinfo);
                    return Promise.reject();
                }).then(function () {
                    that.steps[that.$route.query.step].error = ("验证码获取成功，请注意查收短信");
                    that.countDown = 120;
                    that.countDownInterval = setInterval(function () {
                        that.countDown--;
                        if(that.countDown===0){
                            clearInterval(that.countDownInterval);
                        }
                    },1000)
                })
            },
            confirmCode(regInfo){
                const that = this;

                if(!regInfo.mobileCaptcha ){
                    that.steps[that.$route.query.step].error = ("请输入短信验证码");
                    return;
                }

                //签名
                let ts = new Date().getTime();

                let mobileCiphertext = require("des").desEncode(this.$route.query.mobile,currentWallet.getPrivateKeyString());
                let sign = require("ethereumjs-util").sha3(`${this.$route.query.mobile}${regInfo.mobileCaptcha}${mobileCiphertext}${ts}`);
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
                API.user.bindMobileToUser({
                    ts:ts,
                    signature:signature,
                    mobile:this.$route.query.mobile,
                    mobileDes:mobileCiphertext
                }).then(function () {
                    /*return API.eth.checkAccountByAddress(currentWallet.getAddressString()).then(function (user) {
                        API.local.importWallet(currentWallet,{
                            password:regInfo.password,
                            mobile:that.$route.query.mobile
                        }).then(function (data) {

                            Dialog.alert("跟我一起来玩转牛盾吧！",'true','注册成功！',function () {
                                that.jump("lay/home");
                            });
                        })
                    })*/
                    return API.local.importWallet(currentWallet,{
                            password:regInfo.password,
                            mobile:that.$route.query.mobile
                        }).then(function (data) {

                            Dialog.alert("跟我一起来玩转牛盾吧！",'true','注册成功！',function () {
                                that.jump("lay/home");
                            });
                        })
                }).catch(function (errinfo) {
                    that.regInfo.tokenKey= new Date().getTime();
                    that.steps[that.$route.query.step].error = (errinfo);
                })
            }
        },
        mounted(){
        }
    }
</script>
<style lang="less">
</style>
