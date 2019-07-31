
<template>
    <div>
        <ui-header :title="'给TA转'"></ui-header>
        <div class="content">
            <div class="center-transfer">
                <div class="person-info">
                    <section class="lg-user-info-box">
                        <div class="portrait-img">
                            <img :src="'https://pself.net/api/identicon/'+$route.query.address+'/100'">
                        </div>
                        <p class="nickname">{{user.nickName}}</p>
                        <p class="phonenum">{{$route.query.address}}</p>
                        <p class="phonenum">{{$route.query.mobile}}</p>
                    </section>
                </div>
                <div class="operate-amount">
                    <section class="enter-box">
                        <label class="enter-title">金额</label>
                        <input type="number" v-model="amount" placeholder="请输入金额" class="enter-value"/>
                    </section>
                    <div class="select-amount">
                        <ul class="clearfix">
                            <li><a href="javascript:void(0)" @click="amount=20" :class="{on:amount===20}">20</a></li>
                            <li><a href="javascript:void(0)" @click="amount=50" :class="{on:amount===50}">50</a></li>
                            <li><a href="javascript:void(0)" @click="amount=100" :class="{on:amount===100}">100</a></li>
                            <li><a href="javascript:void(0)" @click="amount=200" :class="{on:amount===200}">200</a></li>
                        </ul>
                    </div>
                </div>
                <div class="leave-message">
                    <section class="enter-box">
                        <label class="enter-title">留言</label>
                        <input type="text" v-model="remark"  class="enter-value" placeholder="请输入转账留言"/>
                    </section>
                    <div class="select-message">
                        <ul>
                            <li v-for="msg in transMessage" @click="remark=msg" :class="{on:remark===msg}">{{msg}}</li>
                        </ul>
                    </div>
                </div>
                <section class="btn-box">
                    <a href="javascript:void(0)" class="btn"  @click="trans()">赏TA牛盾</a>
                </section>
            </div>
        </div>
        <!--阴影层-->
        <div class="mask" v-show="error||showConfirm"></div>
        <!--失败弹窗-->
        <div class="layer" v-show="error">
            <span class="wrong"></span>
            <article class="layer-title">唉～ 不小心犯错了～</article>
            <div class="layer-content">
                <p class="warn">{{error}}</p>
                <section class="btn-box">
                    <a href="javascript:void(0)" class="btn" @click="error=''">知道了</a>
                </section>
            </div>
            <a href="javascript:void(0)" class="close"  @click="error=''"></a>
        </div>
        <!--成功弹窗-->
        <div class="layer"  v-show="showConfirm">
            <span class="right"></span>
            <article class="layer-title">转吧转吧，超期待～</article>
            <div class="layer-content">
                <p class="warn">是否确认转牛盾！</p>
                <section class="btns-box">
                    <div class="btnl">
                        <a href="javascript:void(0)" class="btn" @click="showConfirm=false">取消</a>
                    </div>
                    <div class="btnr">
                        <a href="javascript:void(0)" class="btn" @click="transNow()">确认</a>
                    </div>
                </section>
            </div>
            <a href="javascript:void(0)" class="close"  @click="showConfirm=false"></a>
        </div>
    </div>
</template>
<script>
    const API = require("../../lib/api")
    const Dialog = require("dialog");
    export default {
        data(){
            return {
                user:{
                    nickName:''
                },
                amount:null,
                remark:'',
                transMessage:[
                    '亲，给你的牛盾，么么哒～',
                    '给，这些牛盾小爷我赏你了！',
                    '山常在，水长流，牛盾代表我的心～'
                ],
                error:'',
                showConfirm:false
            }
        },
        mounted(){
            const that = this;
            require("api").eth.checkAccountByAddress(this.$route.query.address).then(function (data) {
                that.user = data;
            })
        },
        methods:{
            transNow(){
                require("api").eth.transfer({
                    address:this.$route.query.address,
                    amount:this.amount,
                    remark:this.remark
                }).then(function () {
                    Dialog.alert("转账成功!",'true','提示信息',function () {
                            
                        })
                    //alert("转账成功!");
                    history.back();
                })
            },
            trans(){
                if(!this.amount){
                    this.error = "请输入转账金额~";
                    return;
                }
                if(!this.remark){
                    this.error = "请输入转账备注~";
                    return;
                }
                this.showConfirm = true;
            }
        }
    }
</script>
<style lang="less" scoped>
    .mask,.layer{
        display: block;
    }
</style>
