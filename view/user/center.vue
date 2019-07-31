
<template>
    <div>
        <ui-header :title="'公告'" @tab-change="tabChange"></ui-header>
        <div class="content">
            <div class="tab-content">
                <ul>
                    <li v-for="(notice,index) in notices" v-if="notice.content&&notice.content.trim().length>0" @click="jump('user/center/detail',{id:index})">
                        <a href="javascript:void(0)">
                            <img src="img/ic-notice_m.png"/>
                            <div class="info-describe">
                                <h2>{{notice.title}}</h2>
                                <p class="info-details">
                                    {{notice.content}}
                                </p>
                            </div>
                            <span class="time">{{new Date(notice.createTime).Format('yyyy-MM-dd hh:mm:ss')}}</span>
                        </a>
                    </li>
                    <!--<li>-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<img src="img/icon1.png"/>-->
                            <!--<span class="dot"></span>-->
                            <!--<div class="info-describe">-->
                                <!--<h2>牛盾币到账通知</h2>-->
                                <!--<p class="info-details">管理员转你200牛盾，请注意查收！</p>-->
                            <!--</div>-->
                            <!--<span class="time">今天 12:19</span>-->
                        <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<img src="img/ic-notice_m.png"/>-->
                            <!--<span class="dot"></span>-->
                            <!--<div class="info-describe">-->
                                <!--<h2>编程大赛赢牛盾活动开始啦!</h2>-->
                                <!--<p class="info-details">编程大赛报名即将开始！参加编程大赛赢取牛</p>-->
                            <!--</div>-->
                            <!--<span class="time">今天 12:19</span>-->
                        <!--</a>-->
                    <!--</li>-->
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
                notices:[]
            }
        },
        methods:{
            tabChange(num){
                console.log(num);
            }
        },
        mounted(){
            let that =this;
            API.user.getNotice().then(function (data) {
                that.notices = JSON.parse(JSON.stringify(data))
            });
        },
    }
</script>
<style lang="less">

</style>
