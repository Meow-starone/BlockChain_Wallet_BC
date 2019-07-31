<template>
    <div>
        <ui-header :title="'一诺千金'">
            <span @click="promiseShow=true,maskShow=true" class="link-get-promise">许诺</span>
        </ui-header>
        <div class="content">
            <div class="promise-box my-promise">
                <div class="outer mab10">
                    <div class="child promise-img product-img"  @click="jump('promise/mypromise')">
                        <img src="img/portrait-s.png">
                    </div>
                    <div class="promise-detail child">
                        <div class="clearfix">
                            <div class="acceptor fl w64"  @click="jump('promise/detail')">
                                <span class="fl w33">许诺：</span>
                                <em class="fl w67">每天坚持跑步30分钟</em>
                            </div>
                            <em class="reward-user">胖子的忧伤</em>
                        </div>
                        <div class="pat5">
                            <em class="info">已坚持打卡11天</em>
                        </div>
                    </div>
                </div>
                <div class="option-box clearfix">
                    <a class="link-comment" href="#">143</a>
                    <em class="like-btn" @click="accountAdd()">{{num}}</em>
                    <a class="link-egg" href="#">143</a>
                    <div class="sign-box">
                        <a class="sign-btn btn" @click="jump('promise/clock')">打卡</a>
                    </div>
                </div>
            </div>
            <section class="promise-tab-box clearfix">
                <ul class="course-tab">
                    <li class="on">
                        <span class="border_r">最热动态</span>
                    </li>
                    <li>
                        <span class="border_r">最新动态</span>
                    </li>
                </ul>
                <span id="filter" class="filter-btn iconfont" @click="filterShow=true,maskShow=true">&#xe608;</span>
            </section>
            <div class="promise-box my-promise">
                <div class="topic-info clearfix">
                    <div class="fl w70" @click="jump('promise/collect')">
                        <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                        <span class="topic_time">结束时间：18/1/13 12:30</span>
                    </div>
                    <span class="reward-amount">悬赏：5000</span>
                </div>
                <section class="topic-describe">
                    <p>emmm.....你觉得美利坚的关键词是什么？</p>
                    <p>写下你心中的American keywords，</p>
                    <p>例：独立日、曼森、牛仔很忙、薯条、Supreme….</p>
                </section>
                <div class="topic-caption">
                    <span class="fl">参与费用：
                        <em>10</em> 牛盾</span>
                    <span class="fr">获奖人数：
                        <em>2</em> 人</span>
                </div>
                <div class="option-box clearfix">
                    <a class="link-person" href="#">133</a>
                    <a class="link-comment" href="#">133</a>
                    <em class="like-btn">133</em>
                    <div class="sign-box">
                        <a class="sign-btn btn" href="#">打卡</a>
                    </div>
                </div>
            </div>
            <section class="promise-list">
                <div class="promise-box">
                    <div class="outer">
                        <div class="child promise-img product-img">
                            <img src="img/portrait-s.png">
                        </div>
                        <div class="promise-detail child">
                            <div>
                                <em class="acceptor">王小胖</em>
                            </div>
                            <div class="clearfix">
                                <em class="info">1月3日 12:30</em>
                            </div>
                        </div>
                    </div>
                    <div class="promise-infos">
                        <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                        <p class="infos">九月的夜、洛杉矶的景、华尔街、百老汇的音乐剧、自 由女神像、华盛顿
                        </p>
                    </div>
                    <div class="option-box clearfix">
                        <a class="link-comment" href="#">133</a>
                        <em class="like-btn">133</em>
                        <a class="link-egg" href="#">133</a>
                    </div>
                </div>
                <div class="promise-box" >
                    <div class="outer">
                        <div class="child promise-img product-img">
                            <img src="img/portrait-s.png">
                        </div>
                        <div class="promise-detail child">
                            <div>
                                <em class="acceptor">王小胖</em>
                                <em class="state red">成功</em>
                            </div>
                            <div class="clearfix">
                                <em class="info">已坚持打卡11天</em>
                                <em class="reward-user">胖子的忧伤</em>
                                <em class="reward">500</em>
                            </div>
                        </div>
                    </div>
                    <div class="promise-infos" @click="jump('promise/result')">
                        <p class="tit">许诺：
                            <em>每天坚持跑步30分钟</em>
                        </p>
                        <img class="promise-img" src="img/img.png">
                        <p class="infos">已经第13天了，手脚已经不再抖得厉害了！看来坚持还 是很有必要的，加油！</p>
                    </div>
                    <div class="option-box clearfix">
                        <a class="link-comment" href="#">133</a>
                        <em class="like-btn">133</em>
                        <a class="link-egg" href="#">133</a>
                    </div>
                </div>
                <div class="promise-box">
                    <div class="outer">
                        <div class="child promise-img product-img">
                            <img src="img/portrait-s.png">
                        </div>
                        <div class="promise-detail child">
                            <div>
                                <em class="acceptor">王小胖</em>
                                <em class="state green">失败</em>
                            </div>
                            <div class="clearfix">
                                <em class="info">已坚持打卡11天</em>
                                <em class="reward-user">胖子的忧伤</em>
                                <em class="reward">500</em>
                            </div>
                        </div>
                    </div>
                    <div class="promise-infos">
                        <p class="tit">许诺：
                            <em>每天坚持跑步30分钟</em>
                        </p>
                        <p class="infos">没有打卡！</p>
                        <div class="system-infos">
                            <p class="tip">[系统消息]</p>
                            <p class="info">
                                <em class="info-to">球球</em>许下的诺言“情人节要向女神表白”没有实现，
                                <em class="red">14</em>名围观群众将瓜分
                                <em class="red">500</em>牛盾币的承诺金，每人将获得
                                <em class="red">35</em>牛盾币，恭喜各位。</p>
                            <p class="info">信守诺言的你，得到的不仅仅是这些！</p>
                        </div>
                    </div>
                    <div class="option-box clearfix">
                        <a class="link-comment" href="#">133</a>
                        <em class="like-btn">133</em>
                        <a class="link-egg" href="#">133</a>
                    </div>
                </div>
            </section>



             <!-- 弹框-->
            <div class="mask" v-if="maskShow"> </div>
            <div class="filter-box" v-show="filterShow">
                <div class="filter-class">
                    <h2>交易类型</h2>
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:;" class="on">转牛盾</a>
                        </li>
                        <li>
                            <a href="javascript:;">兑换</a>
                        </li>
                        <li>
                            <a href="javascript:;">跑腿</a>
                        </li>
                        <li>
                            <a href="javascript:;">打赏</a>
                        </li>
                        <li>
                            <a href="javascript:;">承诺金</a>
                        </li>
                        <li>
                            <a href="javascript:;">讨牛盾</a>
                        </li>
                    </ul>
                    <h2>收支情况</h2>
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:;">收入</a>
                        </li>
                        <li>
                            <a href="javascript:;">支出</a>
                        </li>
                    </ul>
                </div>
                <div class="filter-btn">
                    <a href="javascript:;" class="blue">重置</a>
                    <a href="javascript:;" class="red" @click="filterShow=false,maskShow=false">完成</a>
                </div>
            </div>
           
            <section class="operate-layer" v-show="promiseShow">
                <div class="operate-show">
                    <a @click="jump('promise/publicpromise')">许下承诺</a>
                    <a @click="jump('promise/releasecollection')" class="last">征集承诺</a>
                </div>
                <a class="cancel" @click="promiseShow=false,maskShow=false">取消</a>
            </section>
        </div>
    </div>    
</template>
<script>
    const API = require("../../lib/api")
    let currentWallet;
    export default {
        data(){
            return{
                maskShow:false,
                promiseShow:false,
                filterShow:false,
                num:132,
            }
        },
        methods:{
            accountAdd(){
                this.num=this.num+1;
            }
        }
    }
    
</script>
<style lang="less" scoped>
    .mask{
        display: block;
    }
    .operate-layer {
         visibility: visible;
    }
</style>
