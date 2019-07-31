const Contracts = require("./contract");
const Wallet = require("ethereumjs-wallet");
const EthereumTx = require('../ethereumjs-tx/tx')
const config = require("./config");
//初始化web3和钱包
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(config.web3HttpProvider));

const registryContract = new Promise(function (resolve, reject) {
    const contract =  web3.eth.contract(Contracts.RegistryContract).at(config.registryContractAddress);
    resolve(contract);
});

let nonce = 1;
const busContract = {};
[
    ["UserContract",2],
    ["TokenContract",3],
    ["TradeContract",4],
    ["GoodsServiceContract",1001],
    ["OrderServiceContract",1002],
].forEach(function (contract) {
    let contract_p = null;
    //延时产生合约对象
    Object.defineProperty(busContract,contract[0],{
        get:function () {
            if(!contract_p){
                contract_p = registryContract.then(u_configContract=>{
                    return new Promise(function (resolve, reject) {
                        var contractAddress = u_configContract.getContractAddress(contract[1]);
                        console.log(contract[0], contract[1], contractAddress);
                        const u_contract =  web3.eth.contract(Contracts[contract[0]]).at(contractAddress);
                        resolve(u_contract);
                    })
                })
            }
            return contract_p;
        }
    })
});


module.exports = {
    generateWallet(passwd){
        return new Promise(function (resolve) {
            const v3Config = config.v3Config;
            const w = Wallet.generate();
            const v3 = w.toV3String(passwd, v3Config);

            resolve({
                wallet:Wallet.fromV3(v3, passwd),
                v3String:v3
            });
        })
    },
    unlockWalletForImport: function(v3Str, passwd) {
        return new Promise(function (resolve,reject) {

            let defaultMsg = "钱包格式错误，请提供正确的V3格式钱包文件！"
            let ko = null;
            try {
                ko = JSON.parse(v3Str);
            } catch (e) {
                reject(defaultMsg);
                return;
            }
            if (ko === null || ko.address === null || ko.version === null) {
                reject(defaultMsg);
                return;
            }
            if (ko.Crypto !== null && ko.crypto === null) {
                // Old Mist Version
                ko.crypto = ko.Crypto;
            }
            if (ko.version !== 3 || ko.crypto === null) {
                reject('钱包文件版本不正确，仅支持V3格式钱包！');
                return;
            }
            let wallet = null;
            try {
                wallet = Wallet.fromV3(JSON.stringify(ko), passwd+"");
            } catch (e) {
                reject("钱包密码错误！");
                return;
            }
            resolve(wallet);
        })
    },
    
    checkAccountByAddress: function(address) {
        return busContract.UserContract.then(contract=>{
            return new Promise(function (resolve) {
                console.log("eth.js checkAccountByAddress", address);
                // _state, _mobileHash, _create, _flagBits, _nonce, _userId, _addr
                contract.getUserInfo(address, function(err, data) {
                    if(err) {
                        console.log("eth.js checkAccountByAddress", err);
                    }
                    console.log("eth.js checkAccountByAddress getUserInfo(id)", data[5].toNumber());
                    resolve({
                        nickName: 'Unknown',
                        mobileDes: data[1] ? data[1].toString() : null,
                        address: address.toString(),
                        state: data[0].toNumber(),
                        id:data[5].toNumber()
                    });
                });
            })
        })
    },

    //牛盾
    /*
     * 查询牛盾余额
     */
    getNewtonAmount: function() {
        return Promise.all([
            busContract.TokenContract,
            require("./local").loginInfo
        ]).then(result=>{
            return new Promise(function (resolve) {
                var userAddress = result[1].wallet.getAddressString();
                console.log("eth.js getNewtonAmount userAddress", userAddress);
                var issuerIdNiudun = 0;
                result[0].getUserBalance(result[1].wallet.getAddressString(), issuerIdNiudun, function (err, data) {
                    console.log("eth.js getNewtonAmount balance", data[0].toNumber());
                    resolve(data[0].toNumber());
                })
            })
        }).catch(function (err) {
            if(err&&err.error_no==='-1'){
                location.href='#/user/login';
                return Promise.reject()
            }
        })
    },
    /**
     * 转账
     */
    transfer: function(transfer) {
        return Promise.all([
            busContract.TokenContract,
        ]).then(function (data) {
            //transfer(address to_, uint16 issuerId_, uint64 amount_)
            var issuerId = 0;
            const payload = data[0].transfer.getData(transfer.address,issuerId,transfer.amount);
            transaction(data[0].address, payload)
        }).catch(function (err) {
            if(err&&err.error_no==='-1'){
                location.href='#/user/login';
                return Promise.reject()
            }
        })

    },

    //汽油
    getGasAmount(){
        return require("./local").loginInfo.then(function (loginInfo) {
            return new Promise(function (resolve) {
                web3.eth.getBalance(loginInfo.wallet.getAddressString(), function(e, balance) {
                    if (e === null || e === 'success') {
                        resolve(web3.fromWei(balance, 'ether').round(4).toString())
                    }
                });
            })
        })
    },

    //商城
    /**
     * 获取商店的所有货物列表
     */
    buyGoods(params){
        return Promise.all([
            busContract.GoodsServiceContract,
        ]).then(function (data) {
            var remark = 'buy goodsId:' + params.id + ' amount:' + params.amount;
            // nonce = 9; XXX

            console.log("eth.js buyGoods(id amount nonce remark)", params.id, params.amount,nonce,remark);

            const payload = data[0].placeOrder.getData(params.id, params.amount,++nonce,remark);
            return transaction(data[0].address, payload)
        }).catch(function (err) {
            console.log("eth.js buyGoods", err);

            if(err&&err.error_no==='-1'){
                location.href='#/user/login';
                return Promise.reject()
            }
        })
    },
    processOrder: function(type,id) {
        console.log('eth.js processOrder (type,orderId)', type, id);

        if (type == 'cancelOrder') {
            return busContract.OrderServiceContract.then(function (contract) {
                var remark = 'cancel orderId:' + id;
                const payload = contract[type].getData(id, remark);
                return transaction(contract.address, payload)
            }).catch(function (err) {
                console.log('eth.js processOrder', type, err);

                if(err&&err.error_no==='-1'){
                    location.href='#/user/login';
                    return Promise.reject()
                }
            })
        }else{
            return busContract.OrderServiceContract.then(function (contract) {
                const payload = contract[type].getData(id);
                return transaction(contract.address, payload)
            }).catch(function (err) {
                console.log('eth.js processOrder', type, err);

                if(err&&err.error_no==='-1'){
                    location.href='#/user/login';
                    return Promise.reject()
                }
            })
       }
    },
    // copy
    copy2Clipboard:function(text,cb){
        if(window.LightJSBridge){
            LightJSBridge.call("native.setClipBoardContent",{
                value:text
            },function (data) {
            });
        }
        cb(text)
    },

};


function transaction(address, payload) {
    const gasPrice = web3.eth.gasPrice;
    const gasPriceHex = web3.toHex(gasPrice);
    const gasLimit = 3000000;

    return require("./local").loginInfo.then(function (info) {
        const nonceHex = web3.toHex(web3.eth.getTransactionCount(info.wallet.getAddressString(), 'pending'));
        const rawTx = {
            nonce: nonceHex,
            gasPrice: gasPriceHex,
            gasLimit: web3.toHex(gasLimit),
            to: address,
            from: info.wallet.getAddressString(),
            value: 0,
            data:web3.toHex(payload)
        };
        const tx = new EthereumTx(rawTx);
        tx.sign(info.wallet.getPrivateKey());

        const serializedTx = tx.serialize();
        return new Promise(function (resolve) {
            web3.eth.sendRawTransaction("0x" + serializedTx.toString('hex'), function(err, data) {
                if (!err) {
                    resolve(data);
                }
            });
        })
    });
}
