const LOCAL_USER_INFO_KEY = "userInfo";
const LOCAL_FRIENDS_INFO_KEY = "friends";
const LOCAL_PRIVATEKEY_KEY = "LOCAL_PRIVATEKEY_KEY";
const api = {
    LOCAL_USER_INFO_KEY,
    LOCAL_PRIVATEKEY_KEY,
    localData(key,value){
        return new Promise(function (resolve, reject) {
            if(!value){
                if(window.LightJSBridge){
                    LightJSBridge.call("native.readData",{
                        key:key
                    },function (data) {
                        if(data&&data.data&&data.data.result){
                            resolve(data.data.result);
                        }else{
                            reject();
                        }
                    });
                }else{
                    value = localStorage[key];
                    if(value) {
                        resolve(JSON.parse(value))
                    }else{
                        reject()
                    }
                }
            }else{
                if(window.LightJSBridge){
                    LightJSBridge.call("native.writeData",{
                        key:key,
                        value:value
                    },function (data) {
                        resolve();
                    });
                }else{
                    if(value){
                        localStorage[key] = JSON.stringify(value);
                        resolve();
                    }
                }
            }
        })
    },
    getFriends(){
        return api.localData(LOCAL_FRIENDS_INFO_KEY).then(function (data) {
            if(data && data.data) return data.data;
        }).catch(function () {
            return [];
        })
    },
    importWallet(wallet,info){
        return api.localData(LOCAL_USER_INFO_KEY,{
            wallet:wallet.toV3String(info.password,require("./config").v3Config),
            account:info.mobile
        }).then(function () {
            sessionStorage[LOCAL_PRIVATEKEY_KEY] = wallet.getPrivateKeyString();
        })
    },
    unlockWallet(password){
        const Wallet = require("ethereumjs-wallet");
        return api.localData(LOCAL_USER_INFO_KEY).then(function (data) {
            let wallet = Wallet.fromV3(data.wallet, password);
            sessionStorage[LOCAL_PRIVATEKEY_KEY] = wallet.getPrivateKeyString();
        });
    },
    changePassword(password){
        if(sessionStorage[LOCAL_PRIVATEKEY_KEY]){
            return api.loginInfo.then(function (wallet) {
                return api.importWallet(wallet.wallet,{
                    mobile:wallet.account,
                    password
                });
            })
        }else{
            return Promise.reject();
        }
    },
    addFriend(text){
        //这是之前写的，但是text返回的是对象，包含了info{...},data{result:"{"type":"friend"}"}
        //text = JSON.parse(decodeURIComponent(text.trim().replace(require("./config").apps_home,"")));
        //这是我根据现在的text写的wjr
        text=JSON.parse(text.data.result);
        const Dialog = require("../../lib/dialog");
        if(text.type==='friend'){
            require("./eth").checkAccountByAddress(text.address).then(function (data) {
                if(!data.id){
                    Dialog.alert("该账户不是恒生技术币账户，无法添加好友!",false,"提示信息",function () {
                    });
                }else{
                    api.getFriends().then(function (friends) {
                        //friends是现在有的好友，friend是数组形式
                        //f也是现在具有的好友，对象形式
                        //text是要新增的好友，对象形式
                        const isFriend = friends.filter(function (f) {
                            if(f.address===text.address){
                                return true
                            }else{
                                return false
                            }
                        });
                        if(isFriend.length>0){
                            Dialog.alert(text.user_name+"已经是您的好友，不可重复添加",false,"提示信息",function(){
                            });
                            return
                        }
                        friends.push(text);
                        api.localData(LOCAL_FRIENDS_INFO_KEY,{
                            data:friends
                        }).then(function () {
                            const friendName="已添加"+text.user_name+"("+(text.account||(text.address.substring(0,11))+'...')+")"+"为好友";
                           Dialog.alert(friendName,true,"提示信息",function(){
                           });
                        });
                    })
                }
            });
        }
    }
};

Object.defineProperty(api,"loginInfo",{
    get(){
        return api.localData(LOCAL_USER_INFO_KEY).then(function (user) {
            return new Promise(function (resolve, reject) {
                if(sessionStorage[LOCAL_PRIVATEKEY_KEY]){
                    resolve({
                        wallet:require("ethereumjs-wallet").fromPrivateKey(require("ethereumjs-util").toBuffer(sessionStorage[LOCAL_PRIVATEKEY_KEY]),"hex"),
                        account:user.account||''
                    })
                }else{
                    reject({
                        error_no:'-1'
                    });
                }
            })
        }).catch(function () {
            return Promise.reject({
                error_no:'-1'
            });
        });
    }
});

module.exports = api;