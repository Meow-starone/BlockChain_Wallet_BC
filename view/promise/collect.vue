<template>
    <div>
        <ui-header :title="'征集详情'"> </ui-header>
        <div class="content">
            <div class="promise-box">
                <div class="topic-info clearfix">
                    <div class="fl w70">
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
                     <div class="sign-box" v-if="isMy">
                        <a class="sign-btn btn" href="#">打卡</a>
                    </div>
                </div>
            </div>
            <div class="promise-interaction-box">
                <ul class="course-tab course-three">
                    <li :class="{on:menuId===0}" @click="menuId=0">
                        <span class="border_r">参与日记</span>
                    </li>
                    <li :class="{on:menuId===1}" @click="menuId=1">
                        <span class="border_r">评论</span>
                    </li>
                    <li :class="{on:menuId===2}" @click="menuId=2">
                        <span>点赞</span>
                    </li>
                </ul>
                <div class="diary-box J-tab-item" v-if="menuId==0">
                    <div class="promise-box pr">
                        <span class="cup">标记为获奖者</span>
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
                    <div class="promise-box pr">
                        <span class="cup_on">已为获奖者</span>
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
                </div>
                <div class="comment-box J-tab-item" v-if="menuId==1">
                    <ul>
                        <li>
                            <div class="img"><img src="img/portrait-s.png"></div>
                            <div class="infos">
                                <p class="source">笑风</p>
                                <p class="date">1月3日 12:30</p>
                                <p class="comment">好身材就是靠练出来的，加油！好身材就是靠练出来的，加油！好身材就是靠练出来的，加油！</p>
                            </div>
                        </li>
                        <li>
                            <div class="img"><img src="img/portrait-s.png"></div>
                            <div class="infos">
                                <p class="source">笑风</p>
                                <p class="date">1月3日 12:30</p>
                                <p class="comment">好身材就是靠练出来的，加油！</p>
                            </div>
                        </li>
                    </ul>
                    <div class="comment-enter-box">
                        <input class="enter" placeholder="期待你的神评论...">
                        <em class="enter-btn iconfont">&#xe604;</em>
                    </div>
                </div>
                <div class="like-box J-tab-item" v-if="menuId==2">
                    <ul class="clearfix">
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                        <li><img src="img/portrait-s.png">
                            <p>笑风</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            menuId: 0,
            isMy: false
        };
    }
};
</script>