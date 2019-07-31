
<template>
    <div>
        <ui-header :title="'二维码名片'"></ui-header>
        <div class="content">
            <div class="qr-code-outer">
                <section class="qr-code-box">
                    <div class="personal-info">
                        <img :src="'https://pself.net/api/identicon/'+userInfo.address+'/100'" class="person-img"/>
                        <div class="name-phonenum" style="overflow: hidden">
                            <h2>{{userInfo.nickName}}</h2>
                            <span>{{userInfo.account||userInfo.address}}</span>
                        </div>
                    </div>
                    <div ref="qrcode" class="qr-code-img">
                        <!-- <img src="img/ewm.jpg" /> -->
                    </div>
                    <article class="prompt">扫一扫上面的二维码图案，加我牛盾</article>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    import QRCode from 'qrcode.js'
    const API = require("../../lib/api")
    export default {
        data(){
            return {
                userInfo:{}
            }
        },
        watch:{
            userInfo(){
                this.qrcode = new QRCode(this.$refs.qrcode, {
                    text: JSON.stringify({
                        type: "friend",
                        address: this.userInfo.address,
                        account:this.userInfo.account,
                        user_name: this.userInfo.nickName,
                    }),
                    width: 128,
                    height: 128,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
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
        destory(){
            this.qrcode.clear();
        }
    }
</script>
<style lang="less">

</style>
