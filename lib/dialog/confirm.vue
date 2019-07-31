
<template>
    <div>
        <!--阴影层-->
        <div class="mask" ></div>

        <div class="layer"  >
            <span :class="classes"></span>
            <article class="layer-title">{{this.tit}}</article>
            <div class="layer-content">
                <p class="warn">{{this.msg}}</p>
                <section class="btns-box">
                    <div class="btnl">
                        <a href="javascript:void(0)" class="btn" @click="close()">取消</a>
                    </div>
                    <div class="btnr">
                        <a href="javascript:void(0)" class="btn" @click="confirm()">确认</a>
                    </div>
                </section>
            </div>
            <!-- <a href="javascript:void(0)" class="close"  @click="close()"></a> -->
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
            close(){
                this.$emit("close");
            },
            confirm(){
                this.$emit("confirm");
            }
        }
    }
</script>
<style lang="less" scoped>
    .mask,.layer{
        display: block !important;
    }
</style>
