
<template>
    <div>
        <ui-header :title="'通知详情'"></ui-header>
        <div class="content">
            <div class="notice-details">
                <div class="notice-title">
                    <h2>商品领取通知</h2>
                    <span>今天 12:19</span>
                </div>
                <section class="notice-content">
                    <h2>您有订单商品尚未领取，请尽快到恒生大厦B20来领取，订单信息如下：</h2>
                    <article class="notice-info">
                        <span>订单编号：</span>
                        <strong>0000001</strong>
                    </article>
                    <article class="notice-info">
                        <span>商品名：</span>
                        <strong>星巴克咖啡</strong>
                    </article>
                    <article class="notice-info">
                        <span>购买日期：</span>
                        <strong>2017/01/09</strong>
                    </article>
                    <article class="notice-info">
                        <span>购买数量：</span>
                        <strong>1</strong>
                    </article>
                    <article class="notice-info">
                        <span>总金额：</span>
                        <strong>890牛盾</strong>
                    </article>
                </section>
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
