<template>
    <div>
        <ui-header :title="'参与费用'">
            <span @click="promiseShow=true,maskShow=true" class="link-get-promise">许诺</span>
        </ui-header>
        <div class="content">
            <div class="warn-tip">参与者确认参与后，牛盾将自动转入发起者的账户</div>
            <div class="center-transfer">
                <div class="operate-amount">
                    <section class="enter-box">
                        <label class="enter-title">金额</label>
                        <input type="number" placeholder="请输入金额" class="enter-value" />
                    </section>
                    <div class="select-amount">
                        <ul class="clearfix">
                            <li>
                                <a href="javascript:;" class="on">20</a>
                            </li>
                            <li>
                                <a href="javascript:;">50</a>
                            </li>
                            <li>
                                <a href="javascript:;">100</a>
                            </li>
                            <li>
                                <a href="javascript:;">200</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section class="btn-box">
                <span id="Btn" class="btn">
                    <em>确定</em>
                    <span class="wrong-box">
                        <i class="iconfont">&#xe721;</i>
                        <em></em>
                    </span>
                </span>
            </section>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
