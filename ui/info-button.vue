
<template>
    <div>
        <section @click="click" class="btn-box">
            <span :class="{'error-st':info.error}" class="lg-btn">
                <em>{{info.button}}</em>
                <span class="wrong-box"><i class="iconfont">&#xe721;</i><em>{{info.error}}</em></span>
            </span>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {};
        },
        props:['info'],
        methods:{
            click(){
                this.$emit("clicked")
            }
        }
    }
</script>
<style lang="less" scoped>
    .wrong-box{
        display: block;
    }
</style>
