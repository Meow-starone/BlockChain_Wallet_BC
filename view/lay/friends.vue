
<template>
    <div>
        <div class="search-top">
            <div class="search-box">
                <i>&#xe612;</i>
                <input type="text" placeholder="查找联系人" class="search" v-model="search"/>
            </div>
            <a href="javascript:void(0)" class="add-btn r10" @click="scan()"></a>
        </div>
        <div class="content-c" v-if="friendsFiltered.length>0||matchFriend">
            <section class="contact">
                <ul>
                    <!-- 选中状态class="on"-->
                    <li  v-for="friend in friendsFiltered" @click="jump('newton/trans',{address:friend.address,mobile:friend.account})" v-if="!matchFriend "><!-- 
                        <a href="javascript:void(0)" class="btn-del">删除</a>
                        <a href="javascript:void(0)" class="remark">备注</a> -->
                        <div class="contact-info outer" >
                            <article class="avatar child">
                                <img :src="'https://pself.net/api/identicon/'+friend.address+'/100'" />
                            </article>
                            <section class="contact-describe child">
                                <h2>{{friend.user_name}}</h2>
                                <p v-show="friend.description">{{friend.description}}</p>
                            </section>
                            <span class="time" v-if="friend.seen_time">{{Date.Format(new Date(friend.seen_time),'yy/MM/dd')}}</span>
                        </div>
                    </li>
                    <li @click="jump('newton/trans',{address:matchFriend.address,mobile:friend.account})" v-if="matchFriend"><!-- 
                        <a href="javascript:void(0)" class="btn-del">删除</a>
                        <a href="javascript:void(0)" class="remark">备注</a> 
                        <div class="contact-info outer" @touchstart="touchstart($event)" @touchmove="touchmove($event)">-->
                         <div class="contact-info outer"  >                               
                            <article class="avatar child">
                                <img :src="'https://pself.net/api/identicon/'+matchFriend.address+'/100'" />
                            </article>
                            <section class="contact-describe child">
                                <h2>{{matchFriend.user_name}}</h2>
                                <p v-show="matchFriend.description">{{matchFriend.description}}</p>
                            </section>
                            <span class="time" v-if="matchFriend.seen_time">{{Date.Format(new Date(matchFriend.seen_time),'yy/MM/dd')}}</span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <article v-if="friendsFiltered.length===0&&!matchFriend" class="content">
            <section class="tac">
                <img class="wait-img" src="../../img/nodata.png">
                <p class="wait-ws">哎呀，暂时没有数据呢～</p>
                <section class="btn-box" @click="scan()">
                    <span id="Btn" class="btn">
                        <em>添加联系人</em>
                    </span>
                </section>
            </section>
        </article>
    </div>
</template>
<script>
    import LightSDK from "light-sdk";
    const API = require("../../lib/api");
    export default {
        data(){
            return {
                friends:[],
                search:'',
                matchFriend:null
            }
        },
        mounted(){
            const that = this;
            require("api").local.getFriends().then(function (data) {
                that.friends = data;
            })
        },
        computed:{
            friendsFiltered(){
                const that = this;
                return this.friends.filter(function (friend) {
                    return !that.search || friend.user_name.indexOf(that.search)>-1
                })
            }
        },
        methods:{
            scan(){
                if (navigator.userAgent.toLowerCase().indexOf('lightos') == "-1"){
                    const Dialog = require("../../lib/dialog");
                    Dialog.alert("APP端才可使用此功能!",'false','提示信息',function () {
                    })
                }else{
                    LightSDK.native.scanCode({},API.local.addFriend);
                }
            },
            touchstart(ev){
                let touch = ev.changedTouches[0];
                this.startX = touch.pageX;
            },
            touchmove(ev){
                let touch = ev.changedTouches[0];//移动时的touch对象
                if((touch.pageX < this.startX) && (Math.abs(this.startX-touch.pageX) > 30)){   //左
                    ev.currentTarget.style['transform'] = 'translate('+-140+'px)'
                }
                else{   //右
                    ev.currentTarget.style['transform'] = 'translate('+0+'px)';
                }
            }
        },
        watch:{
            search:function (data) {
                const that = this;

                if(that.search.length===11){
                    API.user.getUserByPhone({mobilePhone:that.search}).then(function (userInfo) {
                        if(userInfo){
                            that.matchFriend = {
                                user_name:userInfo.nick,
                                address:userInfo.address
                            }
                        }else{
                            that.matchFriend = null;
                        }
                    })
                }else{
                    that.matchFriend = null;
                }
            }
        }
    }
</script>
<style lang="less">
</style>
