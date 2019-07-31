
<template>
    <div>
        <ui-header :title="'收藏夹'">
            <!--<span>完成</span>-->
        </ui-header>
        <div class="content-c">
            <div class="second-products collect-products-box">
                <ul class="collect-check">
                    <li v-for="(col,i) in goodList">
                        <section class="collect-product outer">
                            <div class="check-outer child">
                                <input  v-model="col.checked" type="checkbox" class="check"/>
                            </div>
                            <div @click="jump('market/detail',{id:col.id})" class="second-product-img child">
                                <a href="javascript:void(0)"><img :src="col.imageUrl" /></a>
                            </div>
                            <div @click="jump('market/detail',{id:col.id})" class="second-product-info child">
                                <a href="javascript:void(0)">
                                    <h2>{{col.name}}</h2>
                                    <article class="second-describe clearfix">
                                        <!-- <span class="limit-num">限兑{{col.stock}}件</span> -->
                                        <span class="discount">{{String(col.discountPrice/col.originalPrice).substr(2,1)}}折优惠</span>
                                        <em class="fr">库存{{col.stock}}件</em>
                                    </article>
                                    <section class="second-price-buy clearfix">
                                        <div class="second-price">
                                            <strong>{{col.discountPrice}}</strong>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </section>
                    </li>
                   <!--  <li>
                        <section class="collect-product outer">
                            <div class="check-outer child">
                                <input type="checkbox" class="check"/>
                            </div>
                            <div class="second-product-img child">
                                <a href="javascript:void(0)"><img src="img/img2.png" /></a>
                            </div>
                            <div class="second-product-info child">
                                <a href="javascript:void(0)">
                                    <h2>星巴克中杯券</h2>
                                    <article class="second-describe clearfix">
                                        <span class="limit-num">限兑2件</span>
                                        <span class="discount">5折优惠</span>
                                        <em class="fr">库存20件</em>
                                    </article>
                                    <section class="second-price-buy clearfix">
                                        <div class="second-price">
                                            <strong>270</strong>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </section>
                    </li> -->
                </ul>
            </div>
            <!-- 失效商品-->
            <!-- <div class="second-products expired-products">
                <div class="title-box">
                    <h2 class="title">失效商品</h2>
                    <a href="javascript:void(0)" class="link-more">清空</a>
                </div>
                <ul>
                    <li class="outer">
                        <div class="second-product-img child">
                            <img src="img/img.png" />
                        </div>
                        <div class="second-product-info child">
                            <h2>星巴克中杯券</h2>
                            <article class="second-describe clearfix">
                                <div class="second-price fl">
                                    <strong>270</strong>
                                </div>
                                <em class="fr">库存20件</em>
                            </article>
                            <span class="fail">失效</span>
                        </div>
                    </li>
                </ul>
            </div> -->
        </div>
        <section class="footer">
            <div class="foot-check-all">
                <label id="check"><input v-model="allChecked" type="checkbox" class="check" @click="allCheck" />全选</label>
            </div>
            <a href="javascript:void(0)" @click="btnDel" class="foot-check-del">删除</a>
        </section>
    </div>
</template>
<script>
const API =  require("../../lib/api");
import {getCollectList,removeCollectList} from '../../lib/class'
    export default {
        data(){
            return {
                goodList:[],
                allChecked:false,
                idList:getCollectList(),            }
        },
        mounted(){
            let that = this;
            this.idList.forEach((col)=>{
                API.user.getGoodsById({goodsId:col}).then(function (data) {
                    data.checked=false;
                    that.goodList.push(data);
                })
            });

            console.log(this.goodList);
        },
        methods:{
            allCheck(){
                this.goodList.forEach(col=>{
                    this.$set(col,'checked',!this.allChecked);
                })
            },
            btnDel(){
                this.goodList.forEach(col=>{
                    if (col.checked) {
                       removeCollectList(col.id);
                    } 
                });
                this.idList = getCollectList();
            },
        },
        watch:{
            idList(val){
                let that = this;
                that.goodList=[];
                val.forEach((col)=>{
                    API.user.getGoodsById({goodsId:col}).then(function (data) {
                        that.goodList.push(data);
                    })
                });
            }
        }
    }
</script>
<style lang="less">
</style>
