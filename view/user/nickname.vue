
<template>
    <div>
        <ui-header :title="'昵称修改'"></ui-header>
        <div class="content">
            <ul class="form-box">
                <li class="clearfix">
                    <span class="item">昵称</span>
                    <input type="text" v-model="nickname" class="ipt"
                    :placeholder="nickname">
                    <em class="clear-btn iconfont" @click="clearNick"></em>
                </li>
            </ul>
            <section class="btn-box">
                <em class="btn" @click="changeNick()">确认修改</em>
            </section>
        </div>
    </div>
</template>
<script>
const Dialog = require("dialog")
const API = require("../../lib/api")
export default {
    data(){
        return {
            userInfo:{},
            nickname:''
        }
    },
    watch:{
        userInfo(){
            this.nickname=this.userInfo.nickName;
        }
    },
    methods:{
        changeNick(){                      
        },
        changeNick: function () {
            const that = this;
            const nick_name = that.nickname
            if(!that.nickname || that.nickname.length>20 ){
                return Dialog.alert("请输入20位以内的昵称",'false','提示信息',function () {
                });
            }
            API.eth.changeNick(nick_name).then(data=>{
                Dialog.alert("修改成功",'true','提示信息',function () {
                    history.back()
                });
            }).catch(error=>{
                Dialog.alert("修改失败",'false','提示信息',function () {
                });
            })
        },
        clearNick(){
            this.nickname = '';
        }
    },
    mounted(){
        const that  = this;
        API.local.loginInfo.then(function (data) {
            API.eth.checkAccountByAddress(data.wallet.getAddressString()).then(function (userInfo) {
                that.userInfo = {
                    address:data.wallet.getAddressString(),
                    nickName:userInfo.nickName,
                    account:data.account||''
                };
            })
        })
    },
}
</script>
<style lang="less">

</style>
