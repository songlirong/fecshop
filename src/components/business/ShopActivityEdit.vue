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
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                        <el-breadcrumb-item>店铺活动</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">修改店铺活动</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="bottom">
                    <div class="title">
                        <el-form ref="form" :model="form" label-width="150px">
                            <el-row style="width:850px;">
                                <el-form-item label="*店铺活动名称">
                                    <el-input v-model="form.name"
                                              placeholder="六一儿童节参加活动赢优惠券（部分商品）"
                                              style="width:500px">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="*优惠起止时间">
                                    <el-date-picker v-model="form.data" type="datetimerange" range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期" style="width:500px">

                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="*折扣">
                                    <el-input v-model="form.zhekou" placeholder="输入折扣"
                                              style="width:500px"></el-input>
                                </el-form-item>
                                <el-form-item label="*使用范围">
                                    <div class="shuaixuan">
                                        <div class="left_box">
                                            <div class="shuaixuan_top">请选择第一级类别</div>
                                            <div class="shuaixuan_bottom">
                                                <div>
                                                    <el-radio v-model="radio" label="1" class="danxuan">水</el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radio" label="2" class="danxuan">卫浴</el-radio>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jiantou"></div>
                                        <div class="left_box">
                                            <div class="shuaixuan_top">请选择商品</div>
                                            <div class="shuaixuan_bottom" v-if="radio==1">
                                                <div>
                                                    <el-radio v-model="radios" label="1" class="danxuan">浴室柜3423
                                                    </el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="2" class="danxuan">晾衣架5624
                                                    </el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="3" class="danxuan">花洒</el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="4" class="danxuan">坐便器</el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="5" class="danxuan">洁具陶瓷盆
                                                    </el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="6" class="danxuan">其他</el-radio>
                                                </div>
                                            </div>
                                            <div v-if="radio==2">
                                                <div>
                                                    <el-radio v-model="radios" label="1" class="danxuan">浴室柜3423
                                                    </el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="2" class="danxuan">晾衣架5624
                                                    </el-radio>
                                                </div>
                                                <div>
                                                    <el-radio v-model="radios" label="3" class="danxuan">花洒</el-radio>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                    <div style="float:right">
                        <el-button type="success" round class="green">保存</el-button>
                        <el-button type="danger" round class="red">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopActivityEdit",
        data() {
            return {
                form: {
                    name: '六一儿童节参加活动赢优惠券（部分商品）',
                    data: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                    zhekou: '9折',
                    bankNumber: ''
                },
                radio: '1',
                radios: '1',
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .main-content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .main-content .bottom {
        width: 100%;
    }

    .title .shuaixuan {
        margin-top: 15px;
        display: flex;
    }

    .left_box {
        width: 280px;
        height: 333px;
        background: #f8fcff;
        border: 2px solid #ebf6ff;
        padding-left: 17px;
    }

    .title .shuaixuan .shuaixuan_top {
        line-height: 55px;
        font-size: 14px;
        color: #9bd2fd;
    }

    .bottom .jiantou {
        width: 42px;
        height: 14px;
        margin-top: 33px;
        background: url("../../assets/img/jiantou.png");
    }

    .shuaixuan_bottom .danxuan {
        width: 20px;
        height: 20px;
        font-size: 12px;
    }

    .main-content .red {
        height: 35px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0 8px #FD5E4E;
    }

    .main-content .green {
        height: 35px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        margin-right: 20px;
    }

</style>