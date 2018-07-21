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
                        <el-breadcrumb-item>优惠券管理</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">修改优惠券</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="bottom">
                    <div class="title">
                        <el-form ref="form" :model="form" label-width="150px">
                            <el-row style="width:850px;">
                                <el-form-item label="*优惠券名称">
                                    <el-input v-model="form.name" style="width:500px">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="*有效时间段">
                                    <el-date-picker v-model="form.data" type="datetimerange" range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期" style="width:500px">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="*优惠金额">
                                    <el-input v-model="form.youhui" style="width:300px"></el-input>
                                    <span style="color:#9bd2fd;font-weight: bolder;margin-left: 15px">单位：元</span>
                                </el-form-item>
                                <el-form-item label="*消费金额">
                                    <el-input v-model="form.xiaofei" style="width:300px"></el-input>
                                    <span style="color:#9bd2fd;font-weight: bolder;margin-left: 15px">单位：元（无门槛请设为0）</span>
                                </el-form-item>
                                <el-form-item label="*使用范围">
                                    <el-radio v-model="fanwei" label="1" class="danxuan">全部商品</el-radio>
                                    <el-radio v-model="fanwei" label="2" class="danxuan">指定商品</el-radio>
                                    <div v-if="fanwei==1">
                                        <div class="shuaixuan">
                                            <div class="left_box">
                                                <div class="shuaixuan_top">请选择第一级类别</div>
                                                <div class="shuaixuan_bottom">
                                                    <div>
                                                        <el-radio v-model="radio" label="1" class="danxuan">水</el-radio>
                                                    </div>
                                                    <div>
                                                        <el-radio v-model="radio" label="2" class="danxuan">卫浴
                                                        </el-radio>
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
                                                        <el-radio v-model="radios" label="3" class="danxuan">花洒
                                                        </el-radio>
                                                    </div>
                                                    <div>
                                                        <el-radio v-model="radios" label="4" class="danxuan">坐便器
                                                        </el-radio>
                                                    </div>
                                                    <div>
                                                        <el-radio v-model="radios" label="5" class="danxuan">洁具陶瓷盆
                                                        </el-radio>
                                                    </div>
                                                    <div>
                                                        <el-radio v-model="radios" label="6" class="danxuan">其他
                                                        </el-radio>
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
                                                        <el-radio v-model="radios" label="3" class="danxuan">花洒
                                                        </el-radio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-form-item>
                                <el-form-item label="*优惠券状态">
                                    <el-select v-model="value" filterable
                                               style="width: 200px;display: inline-block">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                    <div style="float: right">
                        <el-button type="success" round class="green">保存</el-button>
                        <router-link to="/ShopCouponEdit">
                            <el-button type="danger" round class="red">取消</el-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopCouponEdit",
        data() {
            return {
                form: {
                    name: '满400减40（全场通用）',
                    data: [new Date(2018, 6, 1, 14, 4, 53), new Date(2018, 6, 20, 14, 4, 53)],
                    youhui: '40',
                    xiaofei: '40',
                    bankNumber: '',
                },
                radio: '1',
                radios: '1',
                fanwei: '1',
                options: [{
                    value: '选项1',
                    label: '有效'
                }, {
                    value: '选项2',
                    label: '2'
                }, {
                    value: '选项3',
                    label: '3'
                }],
                value: '选项1'
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
        width: 309px;
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
        box-shadow: 0 0px 8px #FD5E4E;
    }

    .main-content .green {
        height: 35px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0px 8px #37DF73;
        margin-right: 20px;
    }

</style>