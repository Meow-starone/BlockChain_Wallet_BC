<template>
    <div>
        <ui-header :title="'打卡'">
            <span href="javascript:void(0)" @click="jump('market/collect')" class="link-get">发表</span>
        </ui-header>
        <div class="content">
            <ul class="form-box mat5">
                <li class="clearfix">
                    <span class="item">打卡时间</span>
                    <input class="item-val" value="2018年03月12日 21:32">
                </li>
            </ul>
            <section class="clock-info-box">
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
            <section class="btn-box">
                <span id="Btn" class="btn">
                    <em>发表日记</em>
                    <span class="wrong-box">
                        <i class="iconfont">&#xe721;</i>
                        <em></em>
                    </span>
                </span>
            </section>
        </div>
    </div>
</template>
 <script>

    const API = require("../../lib/api")
    let currentWallet;
    export default {}
    

// $(function() {
//     $("#Btn").bind("touchend", function() {
//         /* 错误分支 */
//         if (true) {
//             $(this).addClass("error-st");
//             $(this)
//                 .find(".wrong-box")
//                 .find("em")
//                 .html("错误信息错误信息错误信息");
//         }
//     });
//     $(".form-box input").bind("touchend", function() {
//         if ($("#Btn").hasClass("error-st")) {
//             $("#Btn").removeClass("error-st");
//         }
//     });
//     $(".upload-img-btn").on("touchend", function() {
//         $(this)
//             .siblings(".upload-img")
//             .show();
//         $(this).hide();
//     });
//     $(".upload-img .del").on("touchend", function() {
//         $(this)
//             .parent()
//             .hide();
//         $(this)
//             .parent()
//             .siblings(".upload-img-btn")
//             .show();
//     });
// });
</script>