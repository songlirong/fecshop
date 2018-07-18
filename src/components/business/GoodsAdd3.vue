<template>
    <div class="box">
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
            <div style="width: 1064px;margin:0 auto">
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <router-link to="/goods">商品列表</router-link>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">添加商品</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <ul class="top">
                        <router-link to="/GoodsAdd1">
                            <li class="btn1">
                                <span class="btn">选择商品分类</span>
                            </li>
                        </router-link>
                        <router-link to="/GoodsAdd2">
                            <li class="btn2">
                                <span class="btn">填写商品信息</span>
                            </li>
                        </router-link>
                        <router-link to="/GoodsAdd3">
                            <li class="btn3">
                                <span class="btn">选择商品关联</span>
                            </li>
                        </router-link>
                    </ul>
                    <ul class="shuaixuan">
                        <li>
                            <el-select v-model="value1" placeholder="请选择分类" style="width: 120px">
                                <el-option
                                        v-for="item in options1"
                                        :key="item.value1"
                                        :label="item.label"
                                        :value="item.value1">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            <el-input v-model="input" placeholder="请输入关键词搜索" style="width: 200px"></el-input>
                        </li>
                        <li>
                            <div class="sousuo"></div>
                        </li>
                    </ul>
                    <div class="bottom">
                        <div class="title">
                            <span style="font-size: 14px;color: #CECBCB">您当前选择的商品类别是：</span>
                            <el-breadcrumb separator="/" style="display: inline-block">
                                <el-breadcrumb-item>洗衣</el-breadcrumb-item>
                                <el-breadcrumb-item>羽绒服清洗</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="select">
                            <div>
                                <div class="left_box">
                                    <div class="select_box">
                                        <div class="col-box"></div>
                                        可选择商品
                                    </div>
                                    <div class="shuaixuan_bottom">
                                        <div>
                                            <el-radio v-model="radio" label="1" class="danxuan">羽绒服</el-radio>
                                        </div>
                                        <div>
                                            <el-radio v-model="radio" label="2" class="danxuan">卫浴</el-radio>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <el-radio v-model="radio" label="1" class="danxuan">全选</el-radio>
                                    <el-button type="primary" round class="blue">确定</el-button>
                                </div>
                            </div>
                            <div class="danshuang">
                                <div>
                                    <el-radio v-model="radio2" label="1" class="danxuan">单向关联</el-radio>
                                </div>
                                <div style="margin-top: 15px">
                                    <el-radio v-model="radio2" label="2" class="danxuan">双向关联</el-radio>
                                </div>
                            </div>
                            <div>
                                <div class="left_box">
                                    <div class="select_box">
                                        <div class="col-box"></div>
                                        跟该商品关联的商品
                                    </div>
                                    <div class="shuaixuan_bottom" v-if="radio==1">
                                        <div>
                                            <el-radio v-model="radios" label="1" class="danxuan">浴室柜3423</el-radio>
                                        </div>
                                        <div>
                                            <el-radio v-model="radios" label="2" class="danxuan">晾衣架5624</el-radio>
                                        </div>
                                        <div>
                                            <el-radio v-model="radios" label="3" class="danxuan">花洒</el-radio>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <el-radio v-model="radio" label="1" class="danxuan">全选</el-radio>
                                    <el-button type="primary" round class="blue">移除关联</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/GoodsAdd2">
                        <el-button type="primary" round class="blue">上一步，填写商品信息</el-button>
                        <el-button type="primary" round class="blue">完成，发布商品</el-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsAdd1",
        data() {
            return {
                input: '',
                options: [{
                    value: 'xiyi',
                    label: '洗衣',
                    children: [{
                        value: 'maoyi',
                        label: '毛衣清洗',
                    }, {
                        value: 'mianyi',
                        label: '棉衣清洗',
                    }, {
                        value: 'yurongfu',
                        label: '羽绒服清洗',
                    },
                        {
                            value: 'mianyi',
                            label: '棉衣清洗',
                        }, {
                            value: 'yurongfu',
                            label: '羽绒服清洗',
                        },
                        {
                            value: 'mianyi',
                            label: '棉衣清洗',
                        }, {
                            value: 'yurongfu',
                            label: '羽绒服清洗',
                        }, {
                            value: 'sichou',
                            label: '丝绸清洗',
                        }]
                }, {
                    value: 'xixie',
                    label: '洗鞋',
                    children: [{
                        value: 'maoyi',
                        label: '皮革清洗',
                    }, {
                        value: 'mianyi',
                        label: '帆布清洗',
                    }, {
                        value: 'yurongfu',
                        label: '羽绒服清洗',
                    }, {
                        value: 'sichou',
                        label: '丝绸清洗',
                    }]
                }, {
                    value: 'xijiafang',
                    label: '洗家纺',
                    children: [{
                        value: 'maoyi',
                        label: '皮革清洗',
                    }, {
                        value: 'mianyi',
                        label: '帆布清洗',
                    }, {
                        value: 'yurongfu',
                        label: '羽绒服清洗',
                    }, {
                        value: 'sichou',
                        label: '丝绸清洗',
                    }]
                }, {
                    value: 'xichuanglian',
                    label: '洗窗帘',
                    children: [{
                        value: 'maoyi',
                        label: '皮革清洗',
                    }, {
                        value: 'mianyi',
                        label: '帆布清洗',
                    }, {
                        value: 'yurongfu',
                        label: '羽绒服清洗',
                    }, {
                        value: 'sichou',
                        label: '丝绸清洗',
                    }]
                }],
                selectedOptions: [],
                radio: '1',
                radios: '1',
                radio1: '1',
                radio2:'1'
            };
        },
        methods: {}
    }
</script>

<style scoped>
    .main-content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
    }

    .main-content .item {
        width: 100%;
        height: 50px;
    }

    .main-content .item .top {
        width: 100%;
        height: 39px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #000;
        line-height: 39px;
    }

    .item .top .btn1 {
        background: url("../../assets/img/add1.png") no-repeat center center/100% auto;
    color: white;
    }

    .item .top .btn2{
        background: url("../../assets/img/add4.png") no-repeat center center/100% auto;
        color: white;
    }

    .item .top .btn3 {
        background: url("../../assets/img/add5.png") no-repeat center center/100% auto;
        color: white;
    }

    .top li {
        width: 333px;
        height: 100%;
        text-align: center;
    }

    

    .main-content .item .bottom {
        width: 100%;
        margin-bottom: 40px;
    }

    .bottom .title {
        width: 320px;
        height: 46px;
        margin-top: 10px;
        line-height: 46px;
        font-size: 12px;
    }

    .bottom .select {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-top: 15px;
        display: flex;
    }

    .shuaixuan {
        height: 46px;
        width: 450px;
        display: flex;
        justify-content: space-between;
        line-height: 46px;
    }
    .sousuo {
        margin-top: 5px;
        width: 40px;
        height: 40px;
        background: url("../../assets/img/sousuo.png") no-repeat center center/100% auto;
    }

    .main-content .blue {
        height: 30px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 5px #30B5FE;
        margin-left: 20px;
        padding-top: 8px;
    }

    .select .left_box {
        width: 309px;
        height: 250px;
        background: #f8fcff;
        border: 2px solid #ebf6ff;
        padding-left: 17px;
        padding-top: 20px;
        line-height: 36px;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .select .select_box {
        width: 309px;
        height: 42px;
        line-height: 42px;
        font-size: 18px;
        font-weight: bolder
    }

    .main-content .col-box {
        width: 12px;
        height: 7px;
        border-radius: 5px;
        margin-top: 17px;
        margin-left: 10px;
        margin-right: 7px;
        background-color: #37e06f;
    }

    .select .danshuang {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .shuaixuan_bottom{
        margin-left: 20px;
        color: #9AA1A5;
    }
    .shuaixuan_bottom .danxuan {
        width: 20px;
        height: 20px;
        font-size: 12px;
    }
</style>