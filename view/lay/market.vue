
<template>
    <div>
        <!-- 搜索-->
        <div class="search-top">
            <div class="search-box">
                <i>&#xe612;</i>
                <input type="text" placeholder="查找商品" class="search" v-model="search"/>
            </div>
            <!-- <a href="javascript:void(0)"  @click="jump('market/collect')" class="collect"></a> -->
        </div>
        <div class="content-c">
            <!-- 图片轮播 -->
            <section class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide"><a href="javascript:void(0)"><img src="https://static.dingtalk.com/media/lALPBbCc1Z6gFdvM5s0C7g_750_230.png"/></a></li>
                </ul>
                <div class="swiper-pagination"></div>
            </section>
            <!--限时秒杀-->
            <!--<div v-show="false" class="limit-shop">-->
                <!--<div class="second-title">-->
                    <!--<h2>限时秒杀</h2>-->
                    <!--<span class="countdown">距离秒杀开始还有<em onclick="showTime('1000',this)"><i>00</i>:<i>00</i>:<i>00</i></em></span>-->
                <!--</div>-->
                <!--<section class="second-products">-->
                    <!--<ul>-->
                        <!--<li class="outer">-->
                            <!--<div class="second-product-img child">-->
                                <!--<img src="img/img.png" />-->
                            <!--</div>-->
                            <!--<div class="second-product-info child">-->
                                <!--<h2>星巴克中杯券</h2>-->
                                <!--<article class="second-describe clearfix">-->
                                    <!--<span class="limit-num">限兑2件</span>-->
                                    <!--<span class="discount">5折优惠</span>-->
                                    <!--<em class="fr">库存20件</em>-->
                                <!--</article>-->
                                <!--<section class="second-price-buy clearfix">-->
                                    <!--<div class="second-price">-->
                                        <!--<strong>270</strong>-->
                                        <!--<span>540</span>-->
                                    <!--</div>-->
                                    <!--<div class="second-buy-box">-->
                                        <!--<a href="javascript:void(0)" class="second-btn">立即抢</a>-->
                                    <!--</div>-->
                                <!--</section>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li class="outer">-->
                            <!--<div class="second-product-img child">-->
                                <!--<img src="img/img.png" />-->
                            <!--</div>-->
                            <!--<div class="second-product-info child">-->
                                <!--<h2>星巴克中杯券</h2>-->
                                <!--<article class="second-describe clearfix">-->
                                    <!--<span class="limit-num">限兑2件</span>-->
                                    <!--<span class="discount">5折优惠</span>-->
                                    <!--<em class="fr">库存20件</em>-->
                                <!--</article>-->
                                <!--<section class="second-price-buy clearfix">-->
                                    <!--<div class="second-price">-->
                                        <!--<strong>270</strong>-->
                                        <!--<span>540</span>-->
                                    <!--</div>-->
                                    <!--<div class="second-buy-box">-->
                                        <!--<a href="javascript:void(0)" class="second-btn_gray">已抢光</a>-->
                                    <!--</div>-->
                                <!--</section>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</section>-->
            <!--</div>-->
            <!--全部商品-->
            <h2 class="title">全部商品</h2>
            <section class="products-sort">
                <ul>
                    <li :class="{on:sortType===1}" @click="sortType=1">
                        <span>上架时间</span>
                    </li>
                    <li :class="{on:sortType===2}" @click="sortType=2">
                        <span>价格从低到高</span>
                    </li>
                </ul>
            </section>

            <div class="all-products">
                <ul class="clearfix">
                    <li>
                        <section v-for="(good,index) in goodsFilter" v-if="index%2===0" @click="jump('market/detail',{id:good.id})">
                            <a href="javascript:void(0)">
                                <div class="product-img"><img :src="good.picMobileUrl" /></div>
                                <h2 class="product-title">{{good.name}}</h2>
                                <div class="product-info clearfix">
                                    <strong class="product-price">{{good.discountPrice}}</strong>
                                    <em class="fr">库存{{good.stockQty}}件</em>
                                </div>
                            </a>
                        </section>
                    </li>
                    <li>
                        <section v-for="(good,index) in goodsFilter" v-if="index%2!==0" @click="jump('market/detail',{id:good.id})">
                            <a href="javascript:void(0)">
                                <div class="product-img"><img :src="good.picMobileUrl" /></div>
                                <h2 class="product-title">{{good.name}}</h2>
                                <div class="product-info clearfix">
                                    <strong class="product-price">{{good.discountPrice}}</strong>
                                    <em class="fr">库存{{good.stockQty}}件</em>
                                </div>
                            </a>
                        </section>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    const API =  require("../../lib/api");
    import Swiper from 'swiper/dist/js/swiper';
    export default {
        data(){
            return {
                goods:[],
                search:'',
                sortType:0
            }
        },
        computed:{
            goodsFilter(){
                const that = this;
                return this.goods.filter(function (goods) {
                    return !that.search||goods.name.indexOf(that.search)>-1
                    // return (goods.status===2||goods.status===3)&&(!that.search||goods.name.indexOf(that.search)>-1)
                })
                .sort(function (t1,t2) {
                    if(that.sortType===1){
                        return t1.updateTime-t2.updateTime
                    }
                    if(that.sortType===2){
                        return t1.discountPrice-t2.discountPrice
                    }
                })
            }
        },
        mounted(){
            let that =this;
            let params = {
                orderField:'time'
            }
            API.user.getGoods(params).then(function (data) {
                that.goods = JSON.parse(JSON.stringify(data));
            });
            // new Swiper ('.swiper-container', {
            //     direction: 'horizontal',
            //     autoplay: {
            //         delay: 1500,//切换间隔
            //     },
            //     loop: true,
            //     speed: 700,
            //     autoHeight: true,
            //     pagination: {
            //         el: '.swiper-pagination',
            //     },
            // });
        },
    }
</script>
<style lang="less">

</style>
