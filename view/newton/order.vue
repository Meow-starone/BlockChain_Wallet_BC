
<template>
    <div>
        <ui-header :title="'交易详情'"></ui-header>
        <div class="content">
            <div class="transaction-details">
                <article>
                    <!-- <img src="img/portrait-s.png"/> -->
                    <span>{{record.remark}}</span>
                </article>
                <h3 class="transaction-amount" :class="{'green':getFlag(record.tyType)<0,'red':getFlag(record.tyType)>0}">{{getFlag(record.tyType)*Number(record.amount)}}</h3>
                <span class="transaction-situation">成功</span>
            </div>
            <div class="view-box">
                <ul>
                    <li class="clearfix">
                        <span class="view-title">交易金额</span>
                        <strong class="view-value">{{getFlag(record.tyType)*record.amount}}牛盾币</strong>
                    </li>
                    <li class="clearfix">
                        <span class="view-title">交易时间</span>
                        <strong class="view-value">{{new Date(record.time).Format('yyyy-MM-dd')}}  {{new Date(record.time).Format('hh:mm:ss')}}</strong>
                    </li>
                    <li class="clearfix">
                        <span class="view-title">交易类型</span>
                        <strong class="view-value">{{getType(record.txType)}}</strong>
                    </li>
                    <li class="clearfix">
                        <span class="view-title">用途</span>
                        <strong class="view-value">{{record.remark}}</strong>
                    </li>
                    <li class="clearfix">
                        <span class="view-title">交易状态</span>
                        <strong class="view-value">成功</strong>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    const API = require("../../lib/api")
    export default {
        data(){
            return {
                record:[],
            }
        },
        mounted(){
            let that = this;
            API.local.loginInfo.then(function (data) {
                API.user.queryTradeByPhone({mobilePhone:data.account}).then(function(data) {
                    that.record = data[that.$route.query.index];
                })
            })
        },
        methods:{
            getFlag(types){
                if(types===2||types===3||types===5){
                    // green (payment)
                    return -1;
                }else{
                    // red (income)
                    return 1;
                }
            },
            getType(index){
                let goodType ={ 1:"发放代币(管理员)" ,2:"转账" ,3:"收回代币(管理员)" ,5:"兑换商品" };
                return goodType[index];

            }
        }
    }
</script>
<style lang="less">

</style>
