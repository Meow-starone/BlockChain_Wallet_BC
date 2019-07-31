<template>
    <div>
        <ui-header :title="'诺言详情'"> </ui-header>
        <div class="content">
            <div class="promise-box my-promise">
                <div class="outer">
                    <div class="child promise-img product-img">
                        <img src="img/portrait-s.png">
                    </div>
                    <div class="promise-detail child">
                        <div>
                            <em class="acceptor">王小胖</em>
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
                    <p class="time">开始时间：2018-02-14</p>
                    <p class="time">结束时间：2018-03-14</p>
                </div>
                <div class="option-box clearfix">
                    <a class="link-comment" href="#">143</a>
                    <em class="like-btn">133</em>
                    <em class="link-egg">133</em>
                    <div class="sign-box">
                        <a class="sign-btn btn" href="#">打卡</a>
                    </div>
        </div>
            </div>
            <ul class="clock-record clearfix">
                <li>
                    <p>一</p>
                    <a class="clocked" href="javascript:void(0)">12</a>
                </li>
                <li>
                    <p>二</p>
                    <a class="clocked" href="javascript:void(0)">13</a>
                </li>
                <li class="today">
                    <p>今天</p>
                    <a href="#">14</a>
                </li>
                <li>
                    <p>四</p>
                    <a href="javascript:void(0)">15</a>
                </li>
                <li>
                    <p>五</p>
                    <a href="javascript:void(0)">16</a>
                </li>
                <li>
                    <p>六</p>
                    <a href="javascript:void(0)">17</a>
                </li>
                <li>
                    <p>七</p>
                    <a href="javascript:void(0)">18</a>
                </li>
            </ul>
            <div class="promise-interaction-box">
                <ul class="course-tab">
                    <li :class="{on:menuId===0}" @click="menuId=0">
                        <span class="border_r">日记</span>
                    </li>
                    <li :class="{on:menuId===1}" @click="menuId=1">
                        <span class="border_r">评论</span>
                    </li>
                    <li :class="{on:menuId===2}" @click="menuId=2">
                        <span class="border_r">点赞</span>
                    </li>
                    <li :class="{on:menuId===3}" @click="menuId=3">
                        <span>臭鸡蛋</span>
                    </li>
                    <!-- <li><span>打赏</span></li> -->
                </ul>
                <div class="diary-box J-tab-item" v-if="menuId===0">
                    <ul>
                        <li>
                            <div class="clearfix">
                                <em class="date fl">1月2日 12:30</em>
                                <em class="state fr">第12天</em>
                            </div>
                            <img src="img/img.png">
                            <p class="date-info">已经第13天了，手脚已经不再抖得厉害了！看来坚持还 是很有必要的，加油！</p>
                        </li>
                        <li>
                            <div class="clearfix">
                                <em class="date fl">1月2日 12:30</em>
                                <em class="state fr">第12天</em>
                            </div>
                            <img src="img/img.png">
                            <p class="date-info">已经第13天了，手脚已经不再抖得厉害了！看来坚持还 是很有必要的，加油！</p>
                        </li>
                    </ul>
                </div>
                <div class="comment-box J-tab-item" v-if="menuId===1">
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
                <div class="like-box J-tab-item" v-if="menuId===2">
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
                <div class="like-box J-tab-item" v-if="menuId===3">
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
<script type="text/javascript">
export default {
    data() {
        return {
            menuId: 0
        };
    }
};
</script>