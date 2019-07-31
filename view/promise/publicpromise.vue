<template>
    <div>
        <ui-header :title="'许诺'">
            <span @click="jump('promise/sure')" >发布</span>
        </ui-header>
        <div class="content">
            <div class="warn-tip">目标完成将获得10经验值，失败则扣除10经验值</div>
            <section class="clock-info-box">
                <div class="clearfix">
                    <textarea class="info-ipt" placeholder="在这里许下你的诺言吧..."></textarea>
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
                    <li>
                        <span>许诺周期</span>
                        <div class="promise-cycle">
                            <label @click="isRepeat=false"><input type="radio" class="input-radio" name="radio" />单次
                                <em>（例：我要在月底看完这本书）</em>
                            </label>
                            <label @click="isRepeat=true"><input type="radio" class="input-radio" name="radio" />每天
                                <em>（例：坚持30天每天看书一小时）</em>
                            </label>
                        </div>
                    </li>
                    <div v-if="isRepeat">
                        <li class="arrow clearfix">
                            <span class="fl">开始日期</span>
                            <span class="fr">请选择</span>
                        </li>
                        <li class="arrow clearfix">
                            <span class="fl">总天数</span>
                            <span class="fr">请选择</span>
                        </li>
                    </div>
                    <div v-else>
                        <li class="arrow clearfix">
                            <span class="fl">截止日期</span>
                            <span class="fr">请选择</span>
                        </li>
                    </div>
                    <li class="arrow clearfix">
                        <span class="fl">打卡时间</span>
                        <span class="fr">请选择</span>
                    </li>
                    <li class="arrow clearfix">
                        <span class="fl">重复</span>
                        <span class="fr">永不</span>
                    </li>
                    <li class="li-num">
                        <span class="select-num_l">获赏人数</span>
                        <div class="select-num_r">
                            <input class="switch-check" type="checkbox" />
                        </div>
                    </li>
                    <li class="arrow clearfix">
                        <span class="fl">监督人</span>
                        <span class="fr">请选择</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
    <script>
export default {
    data() {
        return {
            isRepeat: false
        };
    }
};
</script>
    