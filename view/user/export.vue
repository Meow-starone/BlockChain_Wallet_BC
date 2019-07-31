
<template>
    <div>
        <ui-header :title="'账户导出'"></ui-header>
        <article class="content">
            <section class="accout-export-box">
                <textarea class="export-code_h" readonly>{{v3}}</textarea>
            </section>
            <section class="btn-box">
                <em class="btn" @click="copy(v3)">复制</em>
            </section>
            <!--<a href="javascript:;" class="account-cancellation">帐户注销</a>-->
        </article>
    </div>
</template>
<script>
    const API =  require("../../lib/api");
    const Dialog = require("dialog")
    export default {
        data(){
            return {
                v3:''
            }
        },
        mounted(){
            const that = this;
            API.local.localData(API.local.LOCAL_USER_INFO_KEY).then(function (data) {

                that.v3 = data.wallet;
            })
        },
        methods:{
            copy(text) {
                API.eth.copy2Clipboard(text, (text)=>{
                    Dialog.alert("钱包已经复制到剪贴板",true,'提示信息',function () {
                        
                    });
                });
                // API.alert("请")
            },
        }
    }
</script>
<style lang="less">

</style>
