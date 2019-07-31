
<template>
    <div>
        <ui-header :title="'商品信息'">
            <!-- <span href="javascript:void(0)"  @click="jump('market/collect')" class="collect"></span> -->
        </ui-header>
        <div class="content-c">
            <div class="product-details">
                <!--<div class="product-img"><img v-if="goods.imageUrl" :src="goods.imageUrl[0]" /></div>-->
                <!--<section class="spike-situation">-->
                    <!--<div class="situation_l">-->
                        <!--<article class="spike-price">-->
                            <!--<strong>{{goods.discountPrice}}</strong>-->
                            <!--<span>{{goods.originalPrice}}</span>-->
                        <!--</article>-->
                        <!--<p class="num">-->
                            <!--<span>库存：{{goods.stockQty}}</span>-->
                            <!--<span class="mal40">已兑：{{goods.sales}}</span>-->
                        <!--</p>-->
                    <!--</div>-->
                    <!--<div class="situation_r" v-if="false">-->
                        <!--<div class="spike-countdown">-->
                            <!--<p class="countdown-title">距离结束仅剩</p>-->
                            <!--<section onclick="showTime('1000',this)">-->
                                <!--<span>00</span>-->
                                <!--<em>&nbsp;天&nbsp;</em>-->
                                <!--<span>00</span>-->
                                <!--<em>:</em>-->
                                <!--<span>00</span>-->
                                <!--<em>:</em>-->
                                <!--<span>0</span>-->
                            <!--</section>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</section>-->
                <div class="product-img"><img v-if="goods.picMobileUrl" :src="goods.picMobileUrl" /></div>
                <h2 class="product-title">{{goods.name}}</h2>
                <div class="product-info clearfix">
                    <strong class="product-price">{{goods.discountPrice}}</strong>
                    <em class="fr mat10">库存：{{goods.stockQty}}</em>
                </div>
                <article class="second-describe clearfix" v-if="false">
                    <span class="limit-num" v-if="goods.limit!=0">限兑{{goods.limit}}件</span>
                    <span class="discount">{{Number(goods.discountPrice/goods.originalPrice)*10}}折优惠</span>
                </article>
            </div>
            <div class="select-num">
                <span class="select-num_l">选择数量
                <!--<em>（每位用户限兑2个）</em>-->
                </span>
                <div class="select-num_r">
                    <span class="amount-decrease gray" v-if="goods.stockQty===0">－</span>
                    <span class="amount-decrease" v-else @click="order.amount--">－</span>
                    <input type="number" v-model="order.amount" readonly class="buy-num"/>
                    <span class="amount-increase gray"  v-if="goods.stockQty===0">＋</span>
                    <span class="amount-increase" v-else @click="order.amount++">＋</span>
                </div>
            </div>
            <div class="product-introduce">
                <h2 class="title">商品描述</h2>
                <div class="product-intro-c" v-html="goods.description">
                </div>
            </div>
        </div>
        <div class="footer">
            <!-- <div class="collect-box" @click="clolect">
                <section>
                    <a href="javascript:void(0)" v-show="!goods.collect" >收藏</a>
                    <a href="javascript:void(0)" v-show="goods.collect" class="collected">已收藏</a>
                </section>
            </div> -->
            <!-- 未开始 class="redeem gray"-->
            <a href="javascript:;" class="redeem gray"  v-if="goods.stockQty===0">立即兑换</a>
            <a href="javascript:void(0)" class="redeem" @click="checkJump()" v-else>立即兑换</a>

        </div>
    </div>
</template>
<script>
    import {addCollectList,isCollectList,removeCollectList} from '../../lib/class'
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
                if(isCollectList(that.goods.id)){
                    that.$set(that.goods,'collect',true)
                }else{
                    that.$set(that.goods,'collect',false)
                }
            })
        },
        methods:{
            clolect(){
                if (this.goods.collect) {
                    removeCollectList(this.goods.id)
                    this.$set(this.goods,'collect',false)
                }else{
                    addCollectList(this.goods.id)
                    this.$set(this.goods,'collect',true)
                }
            },
            checkJump(){
                const that = this;
                if(this.order.amount<=0){
                    return Dialog.alert("请至少选择一件商品!",'false','提示信息',function () {
                        that.order.amount = 1;
                    });

                }
                if(that.order.amount>that.goods.stockQty){
                    return Dialog.alert("看看牛小二为您准备的其他好物吧~",'false','当前库存不足',function () {
                        that.order.amount = 1;
                    });
                }
                API.eth.getNewtonAmount().then(function (data) {
                    console.log("detail.vue checkJump getNewtonAmount", data);
                    if(!data || that.order.amount*that.goods.discountPrice > data){
                        return Dialog.alert("当前余额不足，赶紧去赚牛盾吧！",'false','余额不足',function () {
                            that.order.amount = 1;
                        });
                    }
                    that.jump('market/confirm',{id:that.$route.query.id,amount:that.order.amount})
                });
            }
        },
        watch:{
            "order.amount":function (amount) {
                const that = this;
                if(amount<=0){
                    Dialog.alert("请至少选择一件商品!",'false','提示信息',function () {
                        that.order.amount = 1;
                    });
                }
                if(amount>this.goods.stockQty){
                    Dialog.alert("看看牛小二为您准备的其他好物吧~",'false','当前库存不足',function () {
                        that.order.amount = 1;
                    });
                }
            }
        }
    }
</script>
<style lang="less">

    .collected{
        background-image: url("../../img/collected.png") !important;
    }
</style>
