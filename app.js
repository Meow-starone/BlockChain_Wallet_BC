import App from "light"

require('es6-promise').polyfill();
require('fastclick').attach(document.body);
require("./app.less");
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
App.Vue.mixin({
    methods:{
        jump(){
            App.navigate.call(App,...arguments)
        },
        buzenga(){
            this.jump("apps/wait")
        },
        helpPage(){
            'http://rdc.hundsun.com/portal/niudun/?&lan=cn&lan=cn&lan=cn'
        }
    }
});

App.Vue.component("uiHeader",require("./ui/header"));
App.Vue.component("infoButton",require("./ui/info-button"));

App.filter("start",function (next) {
    //启动拦截器
    App.log("app started...");
    next();
}).filter("route",function (from, to, next) {
    //视图拦截器
    App.log(`view changed:${from.path}--${to.path}`);
    next()
}).start();