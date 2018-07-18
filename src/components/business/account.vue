<template>
    <div>

            <!--侧边栏-->
            <div class="aside">
                <div class="logo"></div>
                <ul class="aside-list">
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/account">实名认证</router-link>
                    </li>
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/account/AccountBill">账单列表</router-link>
                    </li>
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/account/AccountMoney">资金列表</router-link>
                    </li>
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/account/AccountThawing">账户解冻</router-link>
                    </li>
                </ul>
            </div>
            <!--主内容-->
            <div class="main-content">
                <router-view></router-view>
            </div>

    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>

</style>