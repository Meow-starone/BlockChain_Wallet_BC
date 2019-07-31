
<template>
    <div>
        <div class="content-i">
            <div class="my-info">
                <section class="my-operate">
                    <a href="javascript:void(0)" class="set"  @click="jump('user/config')"></a>
                    <a href="javascript:void(0)" class="info" @click="jump('user/center')">
                        <!--<span class="point"></span>-->
                    </a>
                </section>
                <section class="lg-user-info-box">
                    <div class="portrait-img" @click="jump('user/config')">
                        <img  :src="'https://pself.net/api/identicon/'+userInfo.address+'/100'">
                    </div>
                    <p class="nickname">{{userInfo.nickName}}</p>
                </section>
                <article class="currency clearfix">
                    <div class="tac">
                        <strong class="nd_icon">{{newton}}</strong>
                    </div>
                    <!-- <div class="fl w50">
                        <strong class="nd_left">{{newton}}</strong>
                    </div>
                    <div class="fl w50">
                        <strong class="nd_right">--</strong>
                    </div> -->
                </article>
                <div class="canvas-box">
                    <canvas ref="canvas"></canvas>
                </div>
            </div>
            <section class="my-box">
                <a href="javascript:void(0)"   @click="jump('user/orders',{current:-1})" class="link-title">我的订单</a>
                <div class="function">
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:void(0)"  @click="jump('user/orders',{current:0})" class="ic_ordered">已下单</a>
                            <!--<span class="point">1</span>-->
                        </li>
                        <li>
                            <a href="javascript:void(0)"  @click="jump('user/orders',{current:1})" class="ic_pickup_to">待取货</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"  @click="jump('user/orders',{current:5})" class="ic_pickup_already">已取货</a>
                        </li>
                    </ul>
                </div>
            </section>
            <!--<section class="my-box" @click="buzenga()">-->
                <!--<a href="javascript:void(0)" class="link-title">我的一诺千金</a>-->
                <!--<div class="function">-->
                    <!--<ul class="clearfix">-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_promise">我的许诺</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_supervise">我的监督</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_look">我的围观</a>-->
                            <!--<span class="point">12</span>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="my-box" @click="buzenga()">-->
                <!--<a href="javascript:void(0)" class="link-title">我的图书借阅</a>-->
                <!--<div class="function">-->
                    <!--<ul class="clearfix">-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_take-book">待取书</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_return-book-no">未还书</a>-->
                            <!--<span class="point">过期</span>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_return-book">已还书</a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="my-box" @click="buzenga()">-->
                <!--<a href="javascript:void(0)" class="link-title">我的课程</a>-->
                <!--<div class="function">-->
                    <!--<ul class="clearfix">-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_not-start">未开始</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_in-training">培训中</a>-->
                            <!--<span class="point">签到</span>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="javascript:void(0)" class="ic_finish">已结束</a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</section>-->
        </div>
    </div>
</template>
<script>
    import wave from "../../lib/wave"
    const API = require("api")
    export default {
        data(){
            return {
                newton:0,
                userInfo:{
                    nickName: '匿名用户',
                    address:'0x0'
                }
            }
        },
        mounted(){
            //查询账户的牛盾数据
            const that = this;
            /*API.eth.getNewtonAmount().then(function (data) {
                console.log("call getNewtonAmount",data);
                that.newton = data;
            });*/

            /*API.local.loginInfo.then(function (data) {
                console.log("mine.vue call loginInfo", data.wallet.getAddressString());
                API.eth.checkAccountByAddress(data.wallet.getAddressString()).then(function (userInfo) {
                    console.log("call checkAccountByAddress",userInfo);
                    that.userInfo = userInfo;
                })
            })*/
            console.log("mine.vue call --");

            API.local.loginInfo.then(function (data) {
                console.log("mine.vue call getUserByPhone", data.account);
                API.user.getUserByPhone({mobilePhone:data.account}).then(function (userInfo) {
                    that.newton = userInfo.available;
                    that.userInfo={
                        account:data.account,
                        nickName:userInfo.nick,
                        address:userInfo.addr
                    }
                }).catch(function (err) {
                    console.log("mine.vue ",err);
                    if(err){
                        location.href='#/user/login';
                        return Promise.reject()
                    }
                })
            })

            // wave(this.$refs.canvas)
        }
    }
</script>
<style lang="less">

</style>
