
<template>
    <div>
        <keep-alive>
            <sub-view></sub-view>
        </keep-alive>
        <footer class="footer">
            <ul>
                <li :class="{on:$route.path==='/lay/home'}"><a href="javascript:void(0)" @click="jump('lay/home',{},{history:false})">
                    <em class="ic-index iconfont"></em>
                    <p>首页</p>
                </a></li>
                <li :class="{on:$route.path==='/lay/market'}"><a href="javascript:void(0)" @click="jump('lay/market',{},{history:false})">
                    <em class="ic-shop iconfont"></em>
                    <p>商城</p>
                </a></li>
                <li :class="{on:$route.path==='/lay/friends'}"><a href="javascript:void(0)" @click="jump('lay/friends',{},{history:false})">
                    <em class="ic-linkman iconfont"></em>
                    <p>联系人</p>
                </a></li>
                <li :class="{on:$route.path==='/lay/mine'}"><a href="javascript:void(0)" @click="jump('lay/mine',{},{history:false})">
                    <em class="ic-my iconfont"></em>
                    <p>我的</p>
                </a></li>
            </ul>
        </footer>
        <!--新版本上线啦-->
        <div class="mask"></div>
        <div class="layer-new-version" id="newVersion">
            <p>1.界面更新，打造最优用户体验；</p>
            <p>2.优化区块链应用；</p>
            <p>3.吧啦吧啦吧啦更新内容。</p>
            <section class="btn-box">
                <a href="javascript:void(0)" class="btn">立即升级</a>
            </section>
            <a href="javascript:void(0)" class="close" onclick="hideRemind()"></a>
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
