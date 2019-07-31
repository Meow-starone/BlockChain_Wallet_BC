const config = require("./config");
const prefix = config.admin_prefix;

module.exports = {
    isMobile:function(mobile){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|199|17[0135678]|18[0-9]|14[57])[0-9]{8}$/ig.test(mobile);
    },
    register:function (params,cb) {
        return request("post","/open/user/register.json",params)
    },
    captchaPicture(tokenKey){
        return `${prefix}/open/sms/genVerifyCode.htm?tokenKey=${tokenKey}`
    },
    bindMobileToUser(params, cb){
        return request("post","/open/user/bindMobileToUser.json",params)
    },
    sendBindMobileCode:function(params){
        return request("post","/open/sms/sendBindMobileCode.json",params);
    },
    bindNewUserToMobile:function (params, cb) {
        return request("post","/open/user/bindNewUserToMobile.json",params)
    },
    sendBindNewUserToMobileCode:function(params,cb){
        return request("post","/open/sms/sendBindNewUserToMobileCode.json",params);
    },
    notifyNickChange:function (params) {
        request("post","/open/user/updated.json",params,function () {
        });
    },
    getGoods:function (params) {
        return request1("post","/open/shop/getAllGoods.json",params)
    },
    getGoodsById:function (params) {
        return request1("post","/open/shop/queryGoodsById.json",params)
    },
    getNotice:function () {
        return request1("get","/open/notice/getNotice.json")
    },
    getUserByPhone:function (params) {
        return request1("post","/open/user/getUserByPhone.json",params)
    },
    getOrdersByPhone:function (params) {
        return request1("post","/open/order/getOrdersByPhone.json",params)
    },
    queryOrderById:function (params) {
        return request1("post","/open/order/queryOrderById.json",params)
    },
    queryTradeByPhone:function (params) {
        return request1("post","/open/trade/queryTransactionByPhone.json",params)
    },
};

import Light from "light";
function request(method, func, params) {
    return new Promise(function (resolve,reject) {
        Light.ajax({
            type: method,
            url: prefix+func,
            data: params,
            headers: {
                ts:params.ts || new Date().getTime()
            },
            dataType:"json",
            success: function (data) {
                if(+data.code !== 0){
                    reject(data.msg)
                }else{
                    resolve(data)
                }
            },
            error: function (err) {
            }
        })
    })
}
function request1(method, func, params) {
    return new Promise(function (resolve,reject) {
        Light.ajax({
            type: method,
            url: prefix+func,
            data: params,
            dataType:"json",
            success: function (data) {
                if (data) {
                    resolve(data)
                }
            },
            error: function (err) {
            }
        })
    })
}
