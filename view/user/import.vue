
<template>
    <div class="login-pg">
        <div class="login-pg" style="position: fixed;top:0;left:0;right:0;bottom: 0"></div>
        <div class="pg-bg"></div>
        <a href="javascript:history.back()" style="z-index: 100" class="lg-return"><i class="iconfont">&#xe6b7;</i>返回</a>
        <article class="login-box">
            <section class="lg-user-info-box">
                <div class="portrait-img">
                    <img :src="'https://pself.net/api/identicon/'+userAddress+'/100'">
                </div>
                <p class="nickname">{{nickName}}</p>
            </section>
            <section class="login-form">
                <ul class="login-list">
                    <li>
                        <span class="lg-item">请复制V3格式的钱包账户，并长按粘贴剪贴板</span>
                        <input type="text" @focus="focus($event)" v-model="wallet.v3String" class="lg-ipt" />
                    </li>
                    <li>
                        <span class="lg-item">请输入密码</span>
                        <input type="password" @focus="focus($event)" v-model="wallet.password" class="lg-ipt" />
                        <em class="passwd-btn"></em>
                    </li>
                </ul>
                <info-button :info="infoButton" @clicked="importAccount(wallet)"></info-button>
            </section>
        </article>
    </div>
</template>
<script>
    const API = require("../../lib/api");
    import Light from "light";
    export default {
        data(){
            return {
                nickName:"匿名用户",
                userAddress:'0',
                wallet:{
                    v3String:'',
                    password:''
                },
                infoButton:{
                    button:'导入',
                    error:''
                }
            }
        },
        methods:{
            importAccount(wallet){
                const that =this;
                API.eth.unlockWalletForImport(wallet.v3String,wallet.password).then(function (data) {
                    API.eth.checkAccountByAddress(data.getAddressString()).then(function (user) {
                        that.nickName = user.nickName;
                        that.userAddress = user.address;
                        API.local.importWallet(data,{
                            password:wallet.password,
                            mobile:require("des").desDecode(user.mobileDes,data.getPrivateKeyString())
                        }).then(function () {
                            that.jump("lay/home")
                        })
                    })
                }).catch(function (err) {
                    that.infoButton.error = err;
                })
            },
            focus(event){
                this.infoButton.error = '';
                event.target.previousElementSibling.classList.add("edit-st");
            }
        }
    }
</script>
<style lang="less" scoped>
        .portrait-img img{
            border-radius: 50%;
        }
</style>
