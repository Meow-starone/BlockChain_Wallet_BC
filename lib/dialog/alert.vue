
<template>
    <div>
        <!--阴影层-->
        <div class="mask"></div>
        <!--失败弹窗-->
        <div class="layer">
            <span :class="classes"></span>
            <article class="layer-title">{{this.tit}}</article>
            <div class="layer-content">
                <p class="warn">{{this.msg}}</p>
                <section class="btn-box">
                    <a href="javascript:void(0)" class="btn" @click="confirm()">知道了</a>
                </section>
            </div>
           <!--  <a href="javascript:void(0)" class="close" @click="confirm()" ></a> -->
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {};
        },
        computed:{
            classes(){
                if (this.status=='false') {
                    return 'wrong';
                }else{
                    return 'right';
                }
            }
        },
        props:['msg','status','tit'],
        methods:{
            confirm(){
                this.$emit("close")
            }
        },
        mounted(){
            const that =this;
        }
    }
</script>
<style lang="less" scoped>
    .mask,.layer{
        display: block !important;
    }
</style>
