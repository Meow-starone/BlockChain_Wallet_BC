
<template>
    <div>
        <ui-header :title="'订单详情'">
            <!--<span>编辑</span>-->
        </ui-header>
        <div class="content-c">
            <div class="second-products collect-products-box">
                <ul class="order-products">
                    <li>
                        <section class="collect-product outer">
                            <a href="javascript:void(0)">
                                <div class="second-product-img child">
                                    <img v-if="goods.picMobileUrl" :src="goods.picMobileUrl" />
                                </div>
                                <div class="second-product-info child">
                                    <h2>{{goods.name}}</h2>
                                    <section class="second-price-buy clearfix">
                                        <div class="second-price">
                                            <strong>{{goods.discountPrice}}</strong>
                                        </div>
                                    </section>
                                </div>
                                <span class="num">x{{$route.query.amount}}</span>
                            </a>
                        </section>
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <!--<li class="arrow clearfix" ontouchend="showBox('#J-drop-down')">-->
                        <!--<span class="fl">配送方式</span>-->
                        <!--<span class="fr" id="select-value">自己领取</span>-->
                    <!--</li>-->
                    <!--<li class="arrow">-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<p>-->
                                <!--<span>王小丫</span>-->
                                <!--<span>13809890817</span>-->
                            <!--</p>-->
                            <!--<p class="mat5">恒生大厦B幢15楼</p>-->
                        <!--</a>-->
                    <!--</li>-->
                    <li class="mat10 tar">
                        <span>共1件商品</span>
                        <em class="mal10">小计</em>
                        <strong class="mal10 product-price">{{goods.discountPrice*$route.query.amount}}</strong>
                    </li>
                </ul>
            </div>
        </div>
        <section class="footer">
            <div class="foot-check-all tac">
                <span>合计金额：</span>
                <strong class="product-price">{{goods.discountPrice*$route.query.amount}}</strong>
            </div>
            <a href="javascript:void(0)" class="foot-check-del" @click="confirmOrder()">提交订单</a>
        </section>
        <!-- 选择配送方式-->
        <div class="mask"></div>
        <div class="delivery-method" id="J-drop-down">
            <h2>配送方式</h2>
            <section class="select-method">
                <ul>
                    <li>自己领取</li>
                    <li>跑腿服务 20牛盾</li>
                </ul>
            </section>
            <a href="javascript:void(0)" class="close-delivery-method">关闭</a>
        </div>
    </div>
</template>
<script>
    const API =  require("../../lib/api");
    const Dialog = require("dialog")
    export default {
        data(){
            return {
                goods:{},
                order:{
                    amount:1
                }
            }
        },
        mounted(){
            const that = this;
            API.user.getGoodsById({goodsId:this.$route.query.id}).then(function (data) {
                that.goods = data;
            })
        },
        watch:{
            "order.amount":function (amount) {
                if(amount<=0){
                    alert("请至少选择一件商品!");
                    this.order.amount = 1;
                }
            }
        },
        methods:{
            confirmOrder(){
                const that = this;

                console.log("confirmOrder", this.$route.query.id, this.$route.query.amount);

                API.eth.buyGoods(this.$route.query).then(function (err,data) {
                    console.log("confirmOrder", data);

                    return Dialog.alert("牛小二正在为您备货中~",'true','购买成功',function () {
                        history.go(-2);
                    });
                })
            }
        }
    }
</script>
<style lang="less">

</style>
