<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods">商品列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods/GoodsManage">分类管理</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods/GoodsAssess">用户评价</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin:0 auto;">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "goods"
    }
</script>

<style scoped>

</style>