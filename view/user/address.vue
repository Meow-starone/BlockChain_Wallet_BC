
<template>
    <div>
        <ui-header :title="'配送地址'"><span>保存</span></ui-header>
        <div class="content">
            <div class="box mat0">
                <ul>
                    <li class="clearfix">
                        <span class="w30 fl">收货人</span>
                        <strong class="w70 fl">王小丫</strong>
                    </li>
                    <li class="clearfix">
                        <span class="w30 fl">联系电话</span>
                        <strong class="w70 fl">13809879098</strong>
                    </li>
                    <li class="clearfix">
                        <span class="w30 fl h24">收货人</span>
                        <input type="text" class="w70 fl enter-input" placeholder="请输入..."/>
                    </li>
                    <li class="arrow clearfix">
                        <span class="fl">所在大楼</span>
                        <span class="fr">请选择</span>
                    </li>
                    <li class="arrow clearfix">
                        <span class="fl">所在楼层</span>
                        <span class="fr">请选择</span>
                    </li>
                </ul>
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
