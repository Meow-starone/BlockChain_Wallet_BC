//配置文件的定义
module.exports = {
    res: {
        logo: "/native/res/icon.png",
        launch: "/native/res/launch.png"
    },
    menuBar:{
        menus:[{
            view:"index",
        }]
    },
    navBar:{
        backgroundColor:"#011036",
        titleColor:"#ffffff",
        buttonColor:"#ffffff",
    },
    views:{
        "index":{
             url:"index.html#/lay/home",
            // url:"https://vrvoa9zxm.lightyy.com/index.html",
            navBar:{
                type:"2"
            }
        }
    }
};