const uiAlert = require("./dialog/alert.vue");
const uiConfirm = require("./dialog/confirm.vue");
import Vue from "vue"

module.exports = {
    alert:function (msg,status,tit,cb) {
        const dom = `
            <div>
                <ui-alert :msg="'${msg}'" :status="'${status}'" :tit="'${tit}'" @close="close"></ui-alert>
            </div>
        `;
        const wrap = document.createElement("div");
        wrap.innerHTML = dom;
        document.body.appendChild(wrap);
        const alert = new Vue({
            el:wrap,
            components:{
                uiAlert
            },
            methods:{
                close:function () {
                    alert.$el.remove();
                    cb()
                }
            }
        });
    },
    confirm:function (msg,status,tit,cb) {
        const dom = `
            <div>
                <ui-confirm :msg="'${msg}'" :status="'${status}'" :tit="'${tit}'" @confirm="confirm"  @close="close"></ui-confirm>
            </div>
        `;
        const wrap = document.createElement("div");
        wrap.innerHTML = dom;
        document.body.appendChild(wrap);
        const alert  = new Vue({
            el:wrap,
            components:{
                uiConfirm
            },
            methods:{
                confirm:function () {
                    alert.$el.remove();
                    cb();
                },
                close:function () {
                    alert.$el.remove();
                }
            }
        })
    }
};