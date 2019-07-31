<template>
    <div>
        <ui-header :title="'我的一诺千金'">
            <span @click="promiseShow=true,maskShow=true" class="filters-btn iconfont"></span>
        </ui-header>
        <article class="filter-orders promise-filter">
            <ul>
                <li :class="{on:myType===0}" @click="myType=0">
                    <span>我的许诺</span>
                </li>
                <li :class="{on:myType===1}" @click="myType=1">
                    <span>我的监督</span>
                </li>
                <li :class="{on:myType===2}" @click="myType=2">
                    <span>我的围观</span>
                </li>
            </ul>
        </article>
        <article class="content-tab" v-if="myType==0">
            <section class="my-promise-list">
                <div class="promise-box">
                    <div class="outer">
                        <div class="child promise-img product-img">
                            <img src="img/portrait-s.png">
                        </div>
                        <div class="promise-detail child">
                            <div>
                                <em class="acceptor">王小胖</em>
                                <em class="state red">今日未打卡</em>
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
                    </div>
                    <div class="option-box clearfix">
                        <a class="sign-btn btn" href="#">打卡</a>
                        <em class="wrong-btn">放弃诺言</em>
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
                                <em class="state orange">等待监督</em>
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
                    </div>
                    <div class="option-box clearfix">
                        <em class="wrong-btn">放弃诺言</em>
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
                                <em class="state green">今日已打卡</em>
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
                    </div>
                    <div class="option-box clearfix">
                        <em class="wrong-btn">放弃诺言</em>
                        <span class="explain">坚持就是胜利，还剩19天</span>
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
                                <em class="state">实现诺言</em>
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
                    </div>
                    <div class="option-box clearfix">
                        <em class="wrong-btn">删除记录</em>
                    </div>
                </div>
            </section>
        </article>

        <article class="content-tab" v-if="myType==1">
            <section class="my-promise-list">
                <div class="promise-box">
                    <div class="outer">
                        <div class="child promise-img product-img">
                            <img src="img/portrait-s.png">
                        </div>
                        <div class="promise-detail child">
                            <div>
                                <em class="acceptor">王小胖</em>
                                <em class="state red">待监督</em>
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
                        <p class="time">打卡：2018-03-16 22:30</p>
                    </div>
                    <div class="option-box clearfix">
                        <a class="sign-btn btn" href="#">证实</a>
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
                                <em class="state orange">对方未打卡</em>
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
                        <p class="time">打卡：今日未打卡</p>
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
                                <em class="state green">今日已证实</em>
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
                        <p class="time">打卡：2018-03-16 22:30</p>
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
                                <em class="state">诺言未实现</em>
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
                    </div>
                    <div class="option-box clearfix">
                        <em class="wrong-btn">删除记录</em>
                        <span class="explain">14人瓜分500牛盾币承诺金</span>
                    </div>
                </div>
            </section>
        </article>

        <article class="content-tab" v-if="myType==2">
            <section class="my-promise-list">
                <div class="promise-box clearfix">
                    <div class="topic-info clearfix">
                        <div class="fl w70">
                            <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                            <span class="topic_time">结束时间：18/1/13 12:30</span>
                        </div>
                        <div class="fl w30">
                            <div class="state orange tar">待审核</div>
                            <span class="reward-amount mat5">5000</span>
                        </div>
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
                </div>
                <div class="promise-box clearfix">
                    <div class="topic-info clearfix">
                        <div class="fl w70">
                            <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                            <span class="topic_time">结束时间：18/1/13 12:30</span>
                        </div>
                        <div class="fl w30">
                            <div class="state red tar">待审核不通过</div>
                            <span class="reward-amount mat5">5000</span>
                        </div>
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
                        <em class="explain orange">原因：不符合一诺千金打性质</em>
                    </div>
                </div>
                <div class="promise-box clearfix">
                    <div class="topic-info clearfix">
                        <div class="fl w70">
                            <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                            <span class="topic_time">结束时间：18/1/13 12:30</span>
                        </div>
                        <div class="fl w30">
                            <div class="state green tar">进行中</div>
                            <span class="reward-amount mat5">5000</span>
                        </div>
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
                </div>
                <div class="promise-box clearfix">
                    <div class="topic-info clearfix">
                        <div class="fl w70">
                            <h2 class="topic_name">#最走心的美利坚关键词#</h2>
                            <span class="topic_time">结束时间：18/1/13 12:30</span>
                        </div>
                        <div class="fl w30">
                            <div class="state tar">活动结束</div>
                            <span class="reward-amount mat5">5000</span>
                        </div>
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
                        <em class="wrong-btn">删除记录</em>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myType: 0
        };
    }
};
</script>
