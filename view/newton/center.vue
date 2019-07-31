
<template>
    <div>
        <ui-header :title="'牛盾中心'"><span @click="jump('user/help')">如何获得牛盾</span></ui-header>
        <div class="content" :style="contentStyle">
            <div class="center">
                <div class="center-show tac">
                    <div class="nd-total-num">
                        <i class="ic_ndcoin"></i>
                        <strong>{{newton}}</strong>
                    </div>
                    <div class="canvas-box">
                        <canvas ref="canvas"></canvas>
                    </div>
                    <!--<a href="javascript:void(0)" class="nd-transfer" id="12345" @click="jump('lay/friends')"></a>
                     <a href="javascript:void(0)" class="nd-discuss" id="abcde" @click="jump('apps/wait')"></a> -->
                 </div>
                 <div class="znd-box">
                    <a href="javascript:void(0)" class="link"  @click="jump('lay/friends')">
                      <span class="icon-znd">转牛盾</span>
                  </a>
              </div>
              <div class="transaction-records">
                <h2 class="caption">交易记录</h2>
                <a href="javascript:void(0)" class="filter" id="filter" @click="addSort"></a>
                <ul>
                    <li class="outer" v-for="(record,inx) in recordsFilter" @click="jump('newton/order',{index:inx})">
                        <div class="child time">
                            <span>{{new Date(record.time).Format('yyyy-MM-dd')}}</span>
                            <strong>{{new Date(record.time).Format('hh:mm:ss')}}</strong>
                        </div>
                        <span class="child type">{{transMap[record.txType]}}</span>
                        <strong class="child amount" :class="{'green':getFlag(record.txType)<0,'red':getFlag(record.txType)>0}">{{getFlag(record.txType)*record.amount}}</strong>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div :style="maskStyle" class="mask" @click="maskClick"></div>
    <div :class="filterBox">
        <div class="filter-class">
            <h2>交易类型</h2>
            <ul class="clearfix">
                <li v-for="(type,index) in transMap" @click="chooseIt(index)">
                    <a href="javascript:void(0)" :class="{on:choosedTypes.indexOf(index)>-1}" style="overflow: hidden;">{{type}}</a>
                </li>
            </ul>
            <h2>收支情况</h2>
            <ul class="clearfix">
                <li @click="chooseIt(100)">
                    <a href="javascript:void(0)" :class="{on:choosedTypes.indexOf(100)>-1}">收入</a>
                </li>
                <li @click="chooseIt(101)">
                    <a href="javascript:void(0)" :class="{on:choosedTypes.indexOf(101)>-1}">支出</a>
                </li>
            </ul>
        </div>
        <div class="filter-btn">
            <a href="javascript:void(0)" class="blue" @click="choosedTypes=[]">重置</a>
            <a href="javascript:void(0)" class="red" @click="confirm()">完成</a>
        </div>
    </div>
</div>
</template>
<script>
import wave from 'wave.js';
import flexMove from 'move.js';
const API = require("../../lib/api")
export default {
    data(){
        return {
            filterState:false,
            newton:0,
            records:[],
            transMap:{ 1:"发放代币(管理员)" ,2:"转账" ,3:"收回代币(管理员)" ,5:"兑换商品" },
            choosedTypes:[],
            confirmTypes:[]
        }
    },
    computed:{
        filterBox(){
            return [
            'filter-box',
            {
                'filter-box-r0':this.filterState
            }
            ]
        },
        contentStyle(){
            let style={}
            if (this.filterState) {
                style.position="fixed";
            }else{
                style.position="static";
            }
            return style;
        },
        maskStyle(){
            let style={}
            style.display=this.filterState?"block":"none";
            return style;
        },
        recordsFilter(){
            const that = this;
            return that.records.filter(function (record) {
                let result = false;
                that.confirmTypes.forEach(function (type) {
                    if(record.txType===+type){
                        result = true;
                    }

                    if(+type===100 && that.getFlag(record.txType)>0){
                        result = true;
                    }

                    if(+type===101 && that.getFlag(record.txType)<0){
                        result = true;
                    }
                });

                if(that.confirmTypes.length===0){
                    result = true;
                }

                return result;
            })
        }
    },
    methods:{
        addSort(){
            this.filterOpen();
        },
        filterOpen(){
            this.filterState=true;
        },
        filterClose(){
            this.filterState=false;
        },
        maskClick(){
            this.filterClose();
        },
        getFlag(types){
            if(types===2||types===3||types===5){
                // green (payment)
                return -1;
            }else{
                // red (income)
                return 1;
            }
        },
        chooseIt(index){
            if(this.choosedTypes.indexOf(index)>-1){
                this.choosedTypes.splice(this.choosedTypes.indexOf(index),1)
            }else{
                this.choosedTypes.push(index)
            }
        },
        confirm(){
            this.confirmTypes = this.choosedTypes;
            this.filterState=false;
        },
    },
    mounted(){
        // wave(this.$refs.canvas);

        //查询账户的牛盾数据
        const that = this;
        require("api").eth.getNewtonAmount().then(function (data) {
            that.newton = data;
        });

        API.local.loginInfo.then(function (data) {
            API.user.queryTradeByPhone({mobilePhone:data.account}).then(function(data) {
                that.records = data;
            })
        })
        }
    }
    </script>
    <style lang="less">

    </style>
