<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/shop">店铺信息</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/shop/ShopPicture">店铺图片设置</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/shop/ShopActivity">店铺活动</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/shop/ShopCoupon">优惠券管理</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/shop/ShopConsult">咨询管理</router-link>
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
        name: "shop"
    }
</script>

<style scoped>

</style>