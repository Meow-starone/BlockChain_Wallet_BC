
<template>
    <div>
        <ui-header :title="'设置'"></ui-header>
        <div class="content">
            <div class="setup-portrait">
                <span class="fl portrait-title">头像</span>
                <span class="fr portrait-imgbox"><img  :src="'https://pself.net/api/identicon/'+userInfo.address+'/100'"/></span>
            </div>
            <div class="box mat0">
                <ul>
                    <li class=" clearfix">
                        <span class="fl">手机号</span>
                        <span class="fr">{{userInfo.account}}</span>
                    </li>
                    <li class=" clearfix arrow" @click="jump('user/nickname',{})">
                        <span class="fl">昵称</span>
                        <span class="fr">{{userInfo.nickName}}</span>
                    </li>
                    <li class="arrow" @click="jump('user/qrcode')">我的二维码</li>
                    <li class="arrow" @click="jump('user/modify')">修改密码</li>
                    <li class="arrow" @click="jump('user/export')">账户导出</li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <li class="arrow"  @click="jump('apps/about')">关于我们</li>
                    <li class="" @click="confirmLogin=true">退出登录</li>
                </ul>
            </div>
        </div>
        <!-- 弹框-->
        <div class="mask" v-show="confirmLogin" style="display:block"></div>
        <section class="operate-layer" v-show="confirmLogin">
            <div class="operate-show">
                <a href="javascript:void(0)" @click="loginOut()" class="last" style="color:#e45e45;">确认退出</a>
            </div>
            <a href="javascript:void(0);" class="cancel" @click="confirmLogin=false">取消</a>
        </section>
    </div>
</template>
<script>
    const API = require("api")
    const Dialog = require("dialog");
    export default {
        data(){
            return {
                confirmLogin:false,
                userInfo:{}
            }
        },
        mounted(){
            const that = this;
            API.local.loginInfo.then(function (data) {
                API.user.getUserByPhone({mobilePhone:data.account}).then(function (userInfo) {
                    that.userInfo={
                        account:data.account,
                        nickName:userInfo.nick,
                        address:userInfo.addr
                    }
                })
            })
        },
        methods:{
            loginOut(){
                let that = this;
                localStorage.clear();
                sessionStorage.clear();
                // that.jump("lay/home");
                // caijk17241 2018-9-24
                that.jump("user/login");
            }
        }
    }
</script>
<style lang="less">

</style>
