<template>
    <div id="app">
        <!--头部-->
        <div class="header">
            <ul>
                <li>
                    <router-link to="/">
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/goods">
                        商品管理
                    </router-link>
                </li>
                <li>
                    <router-link to="/order">
                        订单管理
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop">
                        店铺管理
                    </router-link>
                </li>
                <li>
                    <router-link to="/account">
                        账户管理
                    </router-link>
                </li>
                <li>
                    <router-link to="/data">
                        数据统计
                    </router-link>
                </li>
            </ul>
            <div class="header-right">
                <div class="adminname">
                    <div class="admin-img"></div>
                    <span class="name1">商家的名称</span>
                </div>
                <div class="adminname">
                    <div class="clearimg"></div>
                    <span class="name2">清除缓存</span>
                </div>
                <div class="adminname">
                    <div class="out"></div>
                    <span class="name3">退出</span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {

            }
        },
        methods: {

        }

    }
</script>

<style>
    *{
        margin:0;
        padding:0;
        list-style: none;
        text-decoration: none;
        font-family: 微软雅黑;
    }

    /*头部样式*/
    .header{
        width:100%;height: 50px;position: fixed;top:0;right:0;z-index: 99;display: flex;
        background: #eaf6ff;
        justify-content: space-around;
        box-sizing: border-box;
        padding-left: 12%;
    }
    .header ul{
        width: 704px;height: 100%;display: flex;
    }
    .header ul li {
        height:100%;
        width: 110px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        margin-right:10px;
    }
    .header ul li a{
        color:#516676;
    }

    .header ul li:hover {
        cursor: pointer;
    }
    .header .header-right{
        height: 100%;
    }
    .header .header-right .adminname{
        width: 120px;
        height: 100%;
        /*background: forestgreen;*/
        float: left;
        margin-left:10px;
    }
    .admin-img{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-top:8px;
        float: left;
        background: #fff;
    }
    .adminname span{
        line-height: 50px;
        font-size: 14px;
        margin-left: 10px;
    }
    .adminname .name1{
        color: #9aa9b5;
    }
    .adminname .name2{
        color: #32d796;
    }
    .adminname .name3{
        color: #41b2fc;
    }
    .clearimg{
        width: 17px;
        height: 19px;
        background: url("../src/assets/img/clear.png") no-repeat center center/100% auto;
        margin-top:15px;
        float:left;
        margin-left:16px;
    }
    .out{
        width: 17px;
        height: 19px;
        background: url("../src/assets/img/out.png") no-repeat center center/100% auto;
        margin-top:15px;
        float:left;
       /* margin-left:10px;*/
    }
    /*侧边栏*/
    .aside{
        width: 12%;
        position: fixed !important;
        top: 0;
        bottom: 0;
        z-index:999;
        background: #1f262c;
    }
    .aside .logo{
        width: 100%;
        height: 125px;
        background: url("../src/assets/img/logo.png") no-repeat center center/100% auto;
    }
    .aside-list li{
        width: 100%;
        height: 72px;
        line-height: 72px;
    }
    .col-box{
        width: 7px;
        height: 4px;
        border-radius: 1px;
        background: #44b5ff;
        float: left;
        margin-top:34px;
        margin-left:34px;
    }

    .aside a{
        font-size: 14px;
        color: #fff;
        margin-left:7px;
    }
    /*主内容*/
    .main-content {
        position: absolute;
        width:88%;
        top:80px;
        left:12%;
    }
    .el-input--suffix .el-input__inner {
        height: 30px;
        border-radius: 15px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }

    .el-input__inner{
        height: 30px;
        border-radius: 15px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }
    .box{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding-top: 50px;
        background: white;
        font-family:Microsoft YaHei;
    }
    .main-content .button_left {
        width: 54px;
        height: 20px;
        background: #edf8ff;
        border: 2px solid #e8f6ff;
        border-radius: 10px;
        color: #41b2fc;
        line-height: 18px;
        text-align: center;
        margin-top: 8px;
    }

    .main-content .button_right {
        width: 54px;
        height: 20px;
        background: #51b7fc;
        border: 2px solid #51b7fc;
        border-radius: 10px;
        color: #fff;
        line-height: 18px;
        text-align: center;
        margin-top: 8px;
    }

    .main-content .dian {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #3db0ff;
        box-shadow: 0 0 2px #3db0ff;
        margin-top: 10px;
        margin-right: 5px;
    }
    .el-icon-delete{
        color:  #ff8f71;
    }
    .content .col-box {
        width: 12px;
        height: 7px;
        border-radius: 5px;
        margin-left: 10px;
        margin-top: 17px;
        margin-right: 7px;
        background: #37e06f;
        box-shadow: 0 0 2px #37e06f;
    }
    .el-date-editor .el-range-separator{
        line-height: 20px;
    }
    .el-date-editor .el-range__icon{
        line-height: 20px;
    }
    .el-date-editor .el-range-input{
        background: #F3FAFF;
    }
</style>
