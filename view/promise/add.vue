<template>
    <div>
        <ui-header :title="'加入'">
            <span href="javascript:void(0)" @click="jump('market/collect')" class="link-get">发布</span>
        </ui-header>
        <div class="content">
            <div class="warn-tip">参与话题将扣除10牛盾，完成目标将获得500牛盾奖励目标完成将获得10经验值，目标失败将扣除10经验值</div>
            <div class="box">
                <ul>
                    <li class="clearfix">
                        <span class="w30 fl">加入时间</span>
                        <strong class="w70 fl tar">2018年12月21日 21:22</strong>
                    </li>
                    <li class="clearfix">
                        <span class="w30 fl">参与费用</span>
                        <strong class="w70 fl tar">10牛盾</strong>
                    </li>
                </ul>
            </div>
            <section class="clock-info-box mat10">
                <div class="clearfix">
                    <textarea class="info-ipt" placeholder="说说今天的感想和收获吧..."></textarea>
                    <em class="word-count">0/40</em>
                </div>
                <div class="upload-img-box clearfix">
                    <em class="upload-img-btn iconfont">&#xe7ed;</em>
                    <div class="upload-img" style="display: none;">
                        <img src="img/img1.png">
                        <i class="del">-</i>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
 <script>

    const API = require("../../lib/api")
    let currentWallet;
    export default {}
   
// $(".upload-img-btn").on("touchend", function() {
//     $(this)
//         .siblings(".upload-img")
//         .show();
//     $(this).hide();
// });
// $(".upload-img .del").on("touchend", function() {
//     $(this)
//         .parent()
//         .hide();
//     $(this)
//         .parent()
//         .siblings(".upload-img-btn")
//         .show();
// });
</script>