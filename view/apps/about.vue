
<template>
    <div>
        <ui-header :title="'关于我们'"></ui-header>
        <div class="content">
            <div class="logo">
                <img src="img/first-lg.png"/>
            </div>
            <h2 class="nd-version">牛盾 V2.0</h2>
            <div class="box mat30">
                <ul>
                    <li class="arrow">
                        <a href="javascript:void(0)" @click="checkVersion()">检查更新</a>
                    </li>
                    <li class="arrow">
                        <a href="javascript:void(0)" @click="jump('apps/description')">产品介绍</a>
                    </li>
                    <li class="arrow">
                        <a href="javascript:void(0)" @click="jump('user/help')">常见问题</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import LightSDK from "light-sdk";
    const API = require("../../lib/api");
    export default {
        data(){
            return {}
        },
        methods:{
            checkVersion(){
                const Dialog = require("../../lib/dialog");
                Dialog.confirm("该版本已是最新版本",true,'提示信息',function () {
                });
             }   
         }   
    }
</script>
<style lang="less">

</style>
