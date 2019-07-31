<template>
    <div>
        <ui-header :title="'许诺确认'"> </ui-header>
        <div class="content"> 
    <section class="promise-info-box">
        <p>我许诺</p>
        <p class="mat10">坚持每天5分钟的拼板支撑30天！</p>
    </section>
    <ul class="show-box">
        <li class="clearfix">
            <span class="view-title">开始日期</span>
            <strong class="view-value">2018年3月12日</strong>
        </li>
        <li class="clearfix">
            <span class="view-title">总天数</span>
            <strong class="view-value">30天</strong>
        </li>
    </ul>
    <ul class="show-box">
        <li class="clearfix">
            <span class="view-title">监督人</span>
            <strong class="view-value">王小胖</strong>
        </li>
    </ul>
    <ul class="show-box">
        <li class="clearfix">
            <span class="view-title">支付承诺金</span>
            <strong class="view-value"><em class="red">50</em>牛盾币</strong>
        </li>
    </ul>
    <section class="btn-box" @click="jump('promise/promise')">
        <em class="btn">郑重诺言</em>
    </section>
</div>
</div>
</template>
