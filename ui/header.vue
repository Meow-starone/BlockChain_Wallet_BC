
<template>
    <header class="header">
        <a href="javascript:history.back()" class="back"><i>&#xe6b7;</i>返回</a>
        <h2 v-show="titleSort=='string'" class="pageLeft">{{title}}</h2>
        <section v-show="titleSort=='array'" class="tab">
            <ul>
                <li class="notice" :class="{on:currentTab===0}" @click="tabChange(0)">{{title[0]}}</li>
                <li class="announcement" :class="{on:currentTab===1}" @click="tabChange(1)">{{title[1]}}</li>
            </ul>
        </section>
        <a href="javascript:void(0)" class="link-get">
            <slot></slot>
        </a>
    </header>
</template>
<script>
    export default {
        data(){
            return {
                titleSort:null,
                currentTab:0
            };
        },
        props:['leftIcon','rightIcon','title','leftText','rightText'],
        methods:{
            leftClick(){
                if(this.leftIcon === "icon-back"){
                    history.back();
                }else{
                    this.$emit("left-click")
                }
            },
            rightClick(){
                this.$emit("right-click")
            },
            typeOf(obj) {
              const toString = Object.prototype.toString;
              const map = {
                '[object Boolean]'  : 'boolean',
                '[object Number]'   : 'number',
                '[object String]'   : 'string',
                '[object Function]' : 'function',
                '[object Array]'    : 'array',
                '[object Date]'     : 'date',
                '[object RegExp]'   : 'regExp',
                '[object Undefined]': 'undefined',
                '[object Null]'     : 'null',
                '[object Object]'   : 'object'
              };
              return map[toString.call(obj)];
            },
            tabChange(num){
                this.currentTab=num;
                this.$emit("tab-change",num);
            }
        },
        mounted(){
            this.titleSort = this.typeOf(this.title);
        }
    }
</script>
<style lang="less">

</style>
