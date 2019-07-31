
<template>
    <div>
        <ui-header :title="'我的订单'">
            <!--<span class="search-order"></span>-->
        </ui-header>
        <section class="filter-orders">
            <ul>
                <li :class="{on:+$route.query.current===-1}"  @click="jump('user/orders',{current:-1},{history:false})"><span>全部</span></li>
                <li :class="{on:+$route.query.current===0}"  @click="jump('user/orders',{current:0},{history:false})"><span>已下单</span></li>
                <li :class="{on:+$route.query.current===1}"  @click="jump('user/orders',{current:1},{history:false})"><span>待取货</span></li>
                <li :class="{on:+$route.query.current===4}"  @click="jump('user/orders',{current:4},{history:false})"><span>已取货</span></li>
            </ul>
        </section>
        <div class="content-tab">
            <div  v-if="ordersFiltered.length===0">
                <section class="tac">
                <img class="wait-img" src="../../img/nodata.png">
                <p class="wait-ws">哎呀，暂时没有数据呢～</p>
            </section>
            </div>
            <div class="my-orders">
                <ul v-for="order in ordersFiltered" v-if="+order.status!==6">
                    <li>
                        <div class="my-order-details outer">
                            <div class="product-img child">
                                 <img :src="order.picMobileUrl"  />
                            </div>
                            <section class="my-order-info child">
                                <div class="clearfix">
                                    <div class="fl w70">
                                        <h2>{{order.goodsName}}</h2>
                                        <strong class="product-price">{{order.price}}</strong>
                                    </div>
                                    <div class="fl w30 order-situation">
                                        <span :class="{'green':order.state=='0','yellow':order.state!='0'}">{{orderState[order.state]}}</span>
                                        <span class="num">x {{order.qty}}</span>
                                    </div>
                                </div>
                                <p class="time">{{new Date(order.modifyTime).Format('yyyy-MM-dd hh:mm:ss')}}</p>
                            </section>
                        </div>
                        <!--<div class="send">-->
                            <!--<span class="send-title">跑腿服务</span>-->
                            <!--<strong class="product-price">20</strong>-->
                        <!--</div>-->
                        <div class="total-price">
                            <span>共1件商品 合计：</span>
                            <strong class="product-price">{{order.qty*order.price}}</strong>
                            <!--<span>(包含跑腿服务</span>-->
                            <!--<strong class="product-price">20</strong>-->
                            <!--<span>)</span>-->
                        </div>
                        <div class="order-operate outer">
                            <!-- <span class="remind child" v-if="order.status=='1'">已购买订单服务，请等待送货</span> -->
                            <section class="child">
                                <!--<a href="javascript:void(0)" class="order-btn_l">订单留言</a>-->
                                <a href="javascript:void(0)" class="order-btn_r" v-if="order.state=='1'" @click="confirm(order)">确认收货</a>
                                <a href="javascript:void(0)" class="order-btn_l" v-if="order.state=='0'" @click="cancel(order)">取消订单</a>
                                <a href="javascript:void(0)" class="order-btn_l" v-if="order.state!='1'&&order.state!='0'" @click="del(order)">删除订单</a>
                            </section>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    const API = require("../../lib/api")
    const Dialog = require("dialog");
    export default {
        data(){
            return {
                orders:[],
                orderState:{
                    "0":"已下单",
                    "1":"已出库",
                    "2":"已取消",
                    "3":"已取消(管理员)",
                    "4":"已签收",
                    "5":"已退货(管理员)",
                    "6":"已删除",
                },
                current:null
            }
        },
        computed:{
            ordersFiltered(){
                const that = this;
                return this.orders.filter(function (order) {
                    return +that.$route.query.current===-1||order.state === +that.$route.query.current
                }).reverse()
            }
        },
        methods:{
            confirm(order){
                Dialog.confirm("确认收货吗?",true,'提示信息',function () {
                    console.log('orders.vue confirm orderId', order.id);

                    API.eth.processOrder("signOrder",order.id).then(function () {
                        Dialog.alert("牛小二等待您的下次光临哦~",'true','交易成功',function () {
                            order.state = '4';
                        })
                    })
                })
            },
            cancel(order){
                Dialog.confirm("确认取消吗?",false,'提示信息',function () {
                    console.log('orders.vue cancel orderId', order.id);

                    API.eth.processOrder("cancelOrder",order.id).then(function () {
                        Dialog.alert("交易已取消~",'true','',function () {
                            order.state = '2';
                        })
                    })
                })
            },
            del(order){
                Dialog.confirm("确认删除吗?",false,'提示信息',function () {
                    console.log('orders.vue del orderId', order.id);

                    API.eth.processOrder("trashOrder",order.id).then(function () {
                        Dialog.alert("订单已丢进废纸篓~",'true','',function () {
                            order.state = '6';
                        })
                    })
                })
            }
        },
        mounted(){
            const that = this;
            API.local.loginInfo.then(function (data) {
                API.user.getOrdersByPhone({mobilePhone:data.account}).then(function(data) {
                    that.orders = data;
                })
            })
            this.current = +this.$route.query.current;
        }
    }
</script>
<style lang="less">

</style>
