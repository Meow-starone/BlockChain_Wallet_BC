
<template>
    <div>
        <ui-header :title="'修改密码'"></ui-header>
        <div class="content">
            <ul class="form-box">
                <li class="clearfix">
                    <span class="item">新密码</span>
                    <input id="passWd" type="password" v-model="password" class="ipt" placeholder="请输入新密码">
                </li>
            </ul>
            <section class="btn-box">
                <em class="btn" @click="changePassword()">确认修改</em>
            </section>
        </div>
    </div>
</template>
<script>

    const API = require("api")
    const Dialog = require("dialog")
    export default {
        data(){
            return {
                password:''
            }
        },
        methods:{
            changePassword(){
                const that = this;
                if(!that.password || that.password.length<1 ){
                    return Dialog.alert("请输入账户密码",'false','提示信息',function () {

                    });
                }

                API.local.changePassword(that.password).then(function () {
                    return Dialog.alert("密码修改成功!",'true','提示信息',function () {
                        history.back()
                    });
                })
            }
        }
    }
</script>
<style lang="less">

</style>
