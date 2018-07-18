<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/data">订单统计</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/data/DataSale">销售统计</router-link>
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
        name: "data"
    }
</script>

<style scoped>

</style>