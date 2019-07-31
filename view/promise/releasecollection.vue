<template>
    <div>
        <ui-header :title="'征集'"> 
                <span @click="jump('')" >提交</span>
        </ui-header>
        <div class="content"> 
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
    <div class="box">
        <ul>
            <li class="arrow clearfix">
                <span class="fl">完成时间</span>
                <span class="fr">请选择</span>
            </li>
            <li class="arrow clearfix">
                <span class="fl">悬赏金额</span>
                <span class="fr">请选择</span>
            </li>
            <li class="arrow clearfix">
                <span class="fl">参与费用</span>
                <span class="fr">请选择</span>
            </li>
            <li class="li-num">
                <span class="select-num_l">获赏人数</span>
                <div class="select-num_r">
                    <span class="amount-decrease gray">－</span>
                    <input type="number" value="1" class="buy-num">
                    <span class="amount-increase">＋</span>
                </div>
            </li>
        </ul>
    </div>

</div>
</div>
</template>
<script type="text/javascript">
// $(function() {
//     $('.upload-img-btn').on('touchend', function() {
//         $(this).siblings('.upload-img').show();
//         $(this).hide();
//     });
//     $('.upload-img .del').on('touchend', function() {
//         $(this).parent().hide();
//         $(this).parent().siblings('.upload-img-btn').show();
//     });
// });
</script>