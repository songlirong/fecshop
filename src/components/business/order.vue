<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order">订单列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderIssue">纠纷列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderTake">取件单列表</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin:0 auto">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>

</style>