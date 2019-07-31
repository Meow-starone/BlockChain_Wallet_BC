
<template>
    <div>
        <ui-header :title="'财富榜'" class="header_c">
            <a href="javascript:void(0);" class="question"></a>
        </ui-header>
        <div class="content">
            <div class="wealth">
                <div class="wealth-info">
                    <section class="wealth-ranking">
                        <strong>15</strong>
                        <span>名次</span>
                    </section>
                    <section class="wealth-person">
                        <div class="portrait-img">
                            <img src="img/portrait.png">
                        </div>
                        <p class="nickname">王*胖</p>
                    </section>
                    <section class="wealth-ranking">
                        <strong>985</strong>
                        <span>总财富</span>
                    </section>
                </div>
                <div class="canvas-box">
                    <canvas ref="canvas"></canvas>
                </div>
            </div>
            <div class="wealth-ranking-box">
                <h2 class="caption">排行榜</h2>
                <section class="wealth-ranking-show">
                    <ul>
                        <li>
                            <section class="wealth-ranking-info">
                                <span class="cow-num">1</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li>
                            <section class="wealth-ranking-info">
                                <span class="cow-num">2</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li>
                            <section class="wealth-ranking-info">
                                <span class="cow-num">3</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray on">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">4</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">5</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">6</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">7</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">8</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">9</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                        <li class="gray">
                            <section class="wealth-ranking-info">
                                <span class="cow-num">10</span>
                                <img src="img/portrait-s.png" class="person-img"/>
                                <span class="employee">笑风</span>
                                <strong class="amount">10908</strong>
                            </section>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    import wave from "../../lib/wave"
    export default {
        data(){
            return {}
        },
        mounted(){
            wave(this.$refs.canvas)
        }
    }
</script>
<style lang="less">

</style>
