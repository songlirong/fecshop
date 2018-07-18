<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">店铺信息</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="item">
                <div class="bottom">
                    <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                        <div class="col-box"></div>
                        <span style="color:#30a3fe;">基本</span>信息
                    </div>
                    <div class="title">
                        <el-form ref="form" :model="form" label-width="100px">
                            <el-row style="width: 500px;">
                                <el-form-item label="公司名称" placeholder="洗衣旗舰店">
                                    <div>王卓生活用品有限公司</div>
                                </el-form-item>
                                <el-form-item label="*店铺名称">
                                    <el-input v-model="form.name" placeholder="洗衣旗舰店"></el-input>
                                </el-form-item>
                                <el-form-item label="*店铺关键字">
                                    <el-input v-model="form.key" placeholder="洗衣、洗鞋、洗家纺、洗窗帘、袋洗"></el-input>
                                </el-form-item>
                                <el-form-item label="店铺公告">
                                    <textarea id="" cols="30" rows="10" v-model="form.desc1" class="details"
                                              placeholder="店铺新开张，2018.5.20-2018.5.23所有商品打8折"></textarea>
                                </el-form-item>
                                <el-form-item label="店铺简介">
                                    <textarea id="" cols="30" rows="10" v-model="form.desc2" class="details"
                                              placeholder="灯具千种热销款式，厂家一站式供货，自由退换货。专业人士上门安装，服务到家。"></textarea>
                                </el-form-item>
                                <el-form-item label="*营业执照">
                                    <div style="width:600px;display: flex;justify-content: space-between">
                                        <div class="zhizhao1"></div>
                                        <div class="zhizhao2"></div>
                                    </div>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div class="bottom1">
                    <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                        <div class="col-box"
                             style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                        <span style="color:#30a3fe;">联系</span>方式
                    </div>
                    <div class="title1">
                        <el-form ref="form" :model="form" label-width="100px">
                            <el-row style="width: 500px;">
                                <el-form-item label="*联系方式">
                                    <el-input v-model="form.number" placeholder="13567890765"></el-input>
                                </el-form-item>
                                <el-form-item label="*所在城市">
                                    <el-select v-model="form.city" placeholder="太原">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="*所在区/县">
                                    <el-select v-model="form.qu" placeholder="小店区">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="*详细地址">
                                    <el-input v-model="form.address" placeholder="东北旺东路4号泰山大厦"></el-input>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div class="bottom2">
                    <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                        <div class="col-box"
                             style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                        <span style="color:#30a3fe;">审核</span>状态
                    </div>
                    <div class="title2">
                        <el-form ref="form" :model="form" label-width="100px">
                            <el-row style="width: 500px;">
                                <el-form-item label="审核状态">
                                    <div>资料审核成功，店铺申请成功。</div>
                                </el-form-item>
                                <el-form-item label="注意" style="width: 800px">
                                    <div>修改提交后，会重新审核，请慎重填写提交。如需要改入住信息，请点击更改按钮。</div>
                                    <el-button type="success" round class="green">更改入驻信息</el-button>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div style="float: right">
                    <el-button type="success" round @click="" class="green">提交</el-button>
                    <el-button type="danger" round @click="" class="red">取消</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopMessage",
        data() {
            return {
                form: {
                    name: '',
                    key: '',
                    desc1: '',
                    desc2: '',
                    number: '',
                    address: '',
                    city: '',
                    qu: ''
                },
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .content {
        width: 90%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 8px;
    }

    .content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .content .item {
        width: 100%;
        height: 50px;
    }

    .content .item .bottom {
        width: 100%;
    }

    .content .item .bottom1 {
        width: 100%;
    }

    .content .item .bottom2 {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        height: 690px;
        /*margin-top: 10px;*/
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        border-bottom: 1px solid #eee;
    }

    .bottom1 .title1 {
        width: 100%;
        height: 300px;
        /*margin-top: 10px;*/
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        border-bottom: 1px solid #eee;
    }

    .bottom .title .zhizhao1 {
        width: 272px;
        height: 159px;
        background: url("../../../assets/img/shop1.png");
    }

    .bottom .title .zhizhao2 {
        width: 272px;
        height: 159px;
        background: url("../../../assets/img/shop2.png");
    }
    .title .details{
        width: 600px;
        height:120px;
        outline:none;
        resize:none;
        border-radius: 5px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }
    .content .red {
        height: 33px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0px 8px #FD5E4E;
    }
    .content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
    }

</style>