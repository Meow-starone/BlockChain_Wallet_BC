
<template>
    <div>
        <ui-header :title="'公告详情'"></ui-header>
        <div class="content">
            <div class="notice-details mat10">
                <h2 class="announcement-title">{{notice.title}}</h2>
                <span class="time">{{new Date(notice.createTime).Format('yyyy-MM-dd hh:mm:ss')}}</span>
                <p class="announcement-content">{{notice.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    const API = require("../../../lib/api");

    export default {
        data(){
            return {
                notice:{}
            }
        },
        mounted(){
            let that =this;
            API.user.getNotice().then(function (data) {
                that.notice = data[that.$route.query.id];
            });
        },
    }
</script>
<style lang="less">

</style>
