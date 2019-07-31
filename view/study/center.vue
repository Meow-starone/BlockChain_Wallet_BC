
<template>
    <div>
        <ui-header :title="'学习中心'"><span>如何获得学习值</span></ui-header>
        <div class="content">
            <div class="center">
                <div class="center-show">
                    <div class="nd-total-num">
                        <i class="ic_study-value"></i>
                        <strong>200</strong>
                    </div>
                    <div class="canvas-box">
                        <canvas id="canvas"></canvas>
                    </div>
                </div>
                <div class="transaction-records">
                    <h2 class="caption">操作记录</h2>
                    <a href="javascript:void(0)" class="filter" id="filter"></a>
                    <ul>
                        <li class="outer">
                            <div class="child time">
                                <span>2017-08-09</span>
                                <strong>15:23:09</strong>
                            </div>
                            <span class="child type">发表书评</span>
                            <strong class="child amount red">+1000</strong>
                        </li>
                        <li class="outer">
                            <div class="child time">
                                <span>2017-08-09</span>
                                <strong>15:23:09</strong>
                            </div>
                            <span class="child type">课程评价</span>
                            <strong class="child amount green">-500</strong>
                        </li>
                        <li class="outer">
                            <div class="child time">
                                <span>2017-08-09</span>
                                <strong>15:23:09</strong>
                            </div>
                            <span class="child type">借书押金</span>
                            <strong class="child amount red">+1000</strong>
                        </li>
                        <li class="outer">
                            <div class="child time">
                                <span>2017-08-09</span>
                                <strong>15:23:09</strong>
                            </div>
                            <span class="child type">还书退押金</span>
                            <strong class="child amount green">-500</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mask"></div>
        <div class="filter-box">
            <div class="filter-class">
                <h2>交易类型</h2>
                <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)" class="on">转牛盾</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">兑换</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">跑腿</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">打赏</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">承诺金</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">讨牛盾</a>
                    </li>
                </ul>
                <h2>收支情况</h2>
                <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)">收入</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">支出</a>
                    </li>
                </ul>
            </div>
            <div class="filter-btn">
                <a href="javascript:void(0)" class="blue">重置</a>
                <a href="javascript:void(0)" class="red" onclick="filterClose()">完成</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style lang="less">

</style>
