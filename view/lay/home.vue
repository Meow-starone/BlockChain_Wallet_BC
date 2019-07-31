
<template>
    <div>miaomiaosmiao</div>
    <!--<div>-->
        <!--&lt;!&ndash; 搜索&ndash;&gt;-->
        <!--<div class="search-top">-->
            <!--&lt;!&ndash;<div class="search-box">&ndash;&gt;-->
                <!--&lt;!&ndash;<i>&#xe612;</i>&ndash;&gt;-->
                <!--&lt;!&ndash;<input type="text" placeholder="查找联系人" class="search" @click="jump('lay/friends',{},{history:false})"/>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;未登录&ndash;&gt;-->
            <!--&lt;!&ndash; <a class="hd-login-btn" href="javascript:void(0)">登录</a> &ndash;&gt;-->
            <!--<a href="javascript:void(0)" class="news"  @click="jump('user/center')">-->
                <!--&lt;!&ndash;<span class="point"></span>&ndash;&gt;-->
            <!--</a>-->
            <!--<a href="javascript:void(0)" class="add-btn" @click="addTools"></a>-->
            <!--<section v-show="showTools" class="drop-down-box">-->
                <!--<span class="arrow"></span>-->
                <!--<a href="javascript:void(0)" class="add-contacts" @click="scan()">扫一扫</a>-->
                <!--<a href="javascript:void(0)" class="code"  @click="jump('user/qrcode')">我的二维码</a>-->
            <!--</section>-->
        <!--</div>-->
        <!--<article class="content-c">-->
            <!--&lt;!&ndash; 图片轮播 &ndash;&gt;-->
            <!--<section class="swiper-container title-banner">-->
                <!--<ul class="swiper-wrapper">-->
                    <!--&lt;!&ndash; 公告 &ndash;&gt;-->
                    <!--<li v-for="(item,index) in notices" v-if="item.picMobileUrl&&item.picMobileUrl.trim().length>0" class="swiper-slide" style="height:115px">-->
                        <!--<a href="javascript:void(0)"><img :src="item.picMobileUrl"/></a>-->
                    <!--</li>-->
                    <!--&lt;!&ndash; <li class="swiper-slide"><a href="javascript:void(0)"><img src="https://static.dingtalk.com/media/lALPBbCc1Z6g5qvM5s0C7g_750_230.png"/></a></li>-->
                    <!--<li class="swiper-slide"><a href="javascript:void(0)"><img src="https://static.dingtalk.com/media/lALPBbCc1Z6g-inM5s0C7g_750_230.png"/></a></li> &ndash;&gt;-->
                <!--</ul>-->
                <!--<div class="swiper-pagination"></div>-->
            <!--</section>-->

            <!--<ul class="function-group clearfix">-->
                <!--<li  @click="jump('newton/center')"><a href="javascript:void(0)">-->
                    <!--<span class="icon nd-coin"><i class="iconfont"></i></span>-->
                    <!--<p>牛盾中心</p>-->
                <!--</a></li>-->
                <!--<li><a href="javascript:void(0)" @click="jump('promise/promise')">-->
                    <!--<span class="icon promise"><i class="iconfont">&#xe61c;</i></span>-->
                    <!--<p>一诺千金</p>-->
                <!--</a></li>-->
                <!--<li><a href="javascript:void(0)" @click="buzenga()">-->
                    <!--<span class="icon borrow-book"><i class="iconfont">&#xe637;</i></span>-->
                    <!--<p>图书借阅</p>-->
                <!--</a></li>-->
                <!--<li><a href="javascript:void(0)" @click="buzenga()">-->
                    <!--<span class="icon learning"><i class="iconfont">&#xe60d;</i></span>-->
                    <!--<p>培训中心</p>-->
                <!--</a></li>-->
                <!--<li><a href="javascript:void(0)" @click="jump('apps/more')">-->
                    <!--<span class="icon more"><i class="iconfont">&#xe638;</i></span>-->
                    <!--<p>更多</p>-->
                <!--</a></li>-->
            <!--</ul>-->
            <!--<section class="notice-box clearfix">-->
                <!--<em class="ic-notice"></em>-->

                <!--<div class="swiper-container" id="noticeList">-->
                    <!--<ul class="notice-list clearfix swiper-wrapper">-->
                        <!--<li v-for="(item,index) in notices" v-if="item.content&&item.content.trim().length>0" class="swiper-slide">-->
                            <!--<a href="javascript:void(0)">{{item.content}}</a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<a class="more-notice" href="javascript:void(0)"  @click="jump('user/center')">更多</a>-->
            <!--</section>-->

            <!--<section class="hot-products">-->
                <!--<div class="title-box">-->
                    <!--<h2 class="title">热卖商品</h2>-->
                    <!--<a href="javascript:void(0)" class="link-more" @click="jump('lay/market')">更多</a>-->
                <!--</div>-->
                <!--<div class="all-products">-->
                    <!--<ul class="clearfix">-->
                        <!--<li>-->
                            <!--<section v-for="(good,index) in goodsFilter" v-if="index%2===0" @click="jump('market/detail',{id:good.id})">-->
                                <!--<a href="javascript:void(0)">-->
                                    <!--<div class="product-img"><img :src="good.picMobileUrl" /></div>-->
                                    <!--<h2 class="product-title">{{good.name}}</h2>-->
                                    <!--<div class="product-info clearfix">-->
                                        <!--<strong class="product-price">{{good.discountPrice}}</strong>-->
                                        <!--<em class="fr">库存{{good.stockQty}}件</em>-->
                                    <!--</div>-->
                                <!--</a>-->
                            <!--</section>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<section v-for="(good,index) in goodsFilter" v-if="index%2!==0" @click="jump('market/detail',{id:good.id})">-->
                                <!--<a href="javascript:void(0)">-->
                                    <!--<div class="product-img"><img :src="good.picMobileUrl" /></div>-->
                                    <!--<h2 class="product-title">{{good.name}}</h2>-->
                                    <!--<div class="product-info clearfix">-->
                                        <!--<strong class="product-price">{{good.discountPrice}}</strong>-->
                                        <!--<em class="fr">库存{{good.stockQty}}件</em>-->
                                    <!--</div>-->
                                <!--</a>-->
                            <!--</section>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</section>-->
        <!--</article>-->
    <!--</div>-->
</template>
<!--<script>-->
    <!--import Swiper from 'swiper/dist/js/swiper';-->
    <!--import LightSDK from "light-sdk";-->
    <!--const API = require("../../lib/api");-->
    <!--export default {-->
        <!--data(){-->
            <!--return {-->
                <!--showTools:false,-->
                <!--goods:[],-->
                <!--notices:[],-->
                <!--swiperReady:false,-->
            <!--}-->
        <!--},-->
        <!--computed:{-->
            <!--goodsFilter(){-->
                <!--return this.goods;-->
                <!--// return  this.goods.filter(function (goods) {-->
                <!--//     // return (goods.status===2||goods.status===3)-->
                <!--//     return true;-->
                <!--// })-->
            <!--}-->
        <!--},-->
        <!--methods:{-->
            <!--addTools(){-->
                <!--this.showTools=!this.showTools;-->
            <!--},-->
            <!--scan(){-->
                <!--this.showTools=!this.showTools;-->
                <!--if (navigator.userAgent.toLowerCase().indexOf('lightos') == "-1"){-->
                    <!--const Dialog = require("../../lib/dialog");-->
                    <!--Dialog.alert("APP端才可使用此功能!",false,"提示信息",function () {-->
                    <!--});-->
                <!--}else{-->
                    <!--LightSDK.native.scanCode({},API.local.addFriend);-->
                <!--}-->
            <!--},-->
            <!--getNotice(){-->
                <!--let that = this;-->
            <!--}-->
        <!--},-->
        <!--mounted(){-->
            <!--/*new Swiper ('#noticeList', {-->
                <!--direction: 'vertical',-->
                <!--autoplay: {-->
                    <!--delay: 1500,//切换间隔-->
                <!--},-->
                <!--loop: true,-->
                <!--autoHeight: true,-->
            <!--});*/-->


            <!--let that =this;-->
            <!--let params = {-->
                <!--orderField:'time'-->
            <!--}-->
            <!--API.user.getGoods(params).then(function (data) {-->
                <!--that.goods = JSON.parse(JSON.stringify(data));-->
            <!--});-->
            <!--API.user.getNotice().then(function (data) {-->
                <!--that.notices = JSON.parse(JSON.stringify(data))-->
                <!--that.swiperReady = true-->
            <!--});-->
        <!--},-->
        <!--watch:{-->
            <!--swiperReady(val){-->
                <!--if(val){-->
                    <!--this.$nextTick(()=>{-->
                        <!--new Swiper ('.swiper-container.title-banner', {-->
                            <!--direction: 'horizontal',-->
                            <!--autoplay: {-->
                                <!--delay: 1500,//切换间隔-->
                            <!--},-->
                            <!--loop: true,-->
                            <!--speed: 700,-->
                            <!--autoHeight: true,-->
                            <!--pagination: {-->
                              <!--el: '.swiper-pagination',-->
                            <!--},-->
                        <!--});-->

                        <!--new Swiper ('#noticeList', {-->
                            <!--direction: 'vertical',-->
                            <!--autoplay: {-->
                                <!--delay: 1500,//切换间隔-->
                            <!--},-->
                            <!--loop: true,-->
                            <!--speed: 700,-->
                            <!--autoHeight: true-->
                        <!--});-->
                    <!--})-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style lang="less">-->
    <!--.notice-box .notice-list{overflow: visible !important;}-->
<!--</style>-->
