<template>
    <div class="box">
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
                    <div class="biaoti">
                        <el-breadcrumb separator="·">
                            <el-breadcrumb-item :to="{ path: '/' }">订单管理</el-breadcrumb-item>
                            <el-breadcrumb-item>纠纷订单</el-breadcrumb-item>
                            <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">查看详情</span></el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="item">
                        <div class="bottom">
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                                <div class="col-box"
                                     style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                                <span style="color:#30a3fe;">基本</span>信息
                            </div>
                            <div class="title">
                                <el-table :data="tableData" style="width: 100%;">
                                    <el-table-column prop="id" label="流水号"></el-table-column>
                                    <el-table-column prop="data1" label="下单时间"></el-table-column>
                                    <el-table-column prop="data2" label="付款时间"></el-table-column>
                                    <el-table-column prop="data3" label="取件时间"></el-table-column>
                                </el-table>
                                <el-table :data="tableData" style="width: 100%">
                                    <el-table-column prop="number" label="订单号"></el-table-column>
                                    <el-table-column prop="name" label="购货人"></el-table-column>
                                    <el-table-column prop="type" label="订单状态"></el-table-column>
                                    <el-table-column prop="data4" label="送件时间"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <div class="bottom">
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                                <div class="col-box"
                                     style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                                <span style="color:#30a3fe;">收货人</span>信息
                            </div>
                            <div class="title">
                                <el-table :data="tableData1" style="width: 100%;">
                                    <el-table-column prop="name" label="收货人" width="100"></el-table-column>
                                    <el-table-column prop="number" label="手机号"></el-table-column>
                                    <el-table-column prop="address" label="收货地址" width="250"></el-table-column>
                                    <el-table-column prop="data" label="送货时间"></el-table-column>
                                    <el-table-column prop="zip" label="邮政编码"></el-table-column>
                                    <el-table-column prop="email" label="电子邮件" width="180"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <div class="bottom">
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                                <div class="col-box"
                                     style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                                <span style="color:#30a3fe;">商品</span>信息
                            </div>
                            <div class="title">
                                <el-table :data="tableData2" style="width: 100%;">
                                    <el-table-column label="商品名称" width="180">
                                        <template slot-scope="scope">
                                            <div style="display: flex;">
                                                <div class="shangpinbg"></div>
                                                <span style="margin-left:10px;line-height: 50px">{{scope.row.name}}</span>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="number" label="货号"></el-table-column>
                                    <el-table-column prop="money1" label="单价" width="250"></el-table-column>
                                    <el-table-column prop="count" label="数量"></el-table-column>
                                    <el-table-column prop="activity" label="参与活动"></el-table-column>
                                    <el-table-column prop="money2" label="实付金额" width="180"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <div class="bottom">
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                                <div class="col-box"
                                     style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                                <span style="color:#30a3fe;">退款、退货</span>审核信息
                            </div>
                            <div class="title">
                                <el-form ref="form" :model="form" label-width="120px">
                                    <el-row style="width: 500px;">
                                        <el-form-item label="申请人用户名:">
                                            <div>ECS00103</div>
                                        </el-form-item>
                                        <el-form-item label="申请类型:">
                                            <div>退货退款</div>
                                        </el-form-item>
                                        <el-form-item label="退款金额:">
                                            <div>426.00</div>
                                        </el-form-item>
                                        <el-form-item label="退款信息:">
                                            <div>货号/ECS00103；商品名称/洗衣</div>
                                        </el-form-item>
                                        <el-form-item label="退货、退款原因:">
                                            <div>清洗不干净</div>
                                        </el-form-item>
                                        <el-form-item label="上传商品图片:">
                                            <div style="width:350px;display: flex;justify-content: space-between">
                                                <div class="tupian1"></div>
                                                <div class="tupian1"></div>
                                                <div class="tupian1"></div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="操作备注:">
                                            <template>
                                                <textarea id="" cols="30" rows="10" v-model="form.desc" class="details"></textarea>
                                            </template>
                                        </el-form-item>
                                        <el-form-item label="当前可执行操作:">
                                            <el-button type="primary" round class="blue">审核通过</el-button>
                                            <el-button type="success" round class="green">客服介入</el-button>
                                            <el-button type="danger" round class="red">不予处理</el-button>
                                        </el-form-item>
                                    </el-row>
                                </el-form>
                                <el-table :data="tableData3" style="width: 100%;">
                                    <el-table-column prop="name" label="操作者"></el-table-column>
                                    <el-table-column prop="data" label="操作时间"></el-table-column>
                                    <el-table-column prop="zhuangtai" label="审核状态"></el-table-column>
                                    <el-table-column prop="beizhu" label="操作备注"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "OrderDetails",
        data() {
            return {
                tableData: [{
                    id: '2018052916056086818',
                    data1: '2018-05-02 18:00',
                    data2: '2016-05-02 18:00',
                    data3: '2016-05-02 18:00',
                    number: '2018052916056086818',
                    name: '张三',
                    type: '代取件',
                    data4: '2016-05-02 18:00',
                }],
                tableData1: [{
                    name: '李先生',
                    number: '13112345678',
                    address: '山西省太原市龙城大街163号',
                    data: '2016-05-02 18:00',
                    zip: '040000',
                    email: '16548923@163.com'
                }],
                tableData2: [{
                    name: '洗衣',
                    number: 'E49834029',
                    money1: '30.00',
                    count: '2',
                    activity: '满200减30',
                    money2: '60.00'
                }],
                tableData3: [{
                    name: 'ADMIN',
                    data: '2018-05-02 18:00',
                    zhuangtai: '审核通过',
                    beizhu: '已付款'
                }],
                form: {
                    desc: ''
                }
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
        }
    }
</script>

<style scoped>
    .main-content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .main-content .item {
        width: 100%;
        height: 50px;
    }

    .main-content .item .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        margin-top: 10px;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        padding-bottom: 20px;

    }

    .bottom .title .tupian1 {
        width: 96px;
        height: 96px;
        background: #BBDFF6;
    }

    .main-content .red {
        width: 100px;
        padding-top:7px;
        height:30px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0 8px #FD5E4E;
    }

    .main-content .green {
        width: 100px;
        height: 30px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        padding-top: 7px;
    }

    .main-content .blue {
        width: 100px;
        height: 30px;
        padding-top: 7px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0px 8px #30B5FE;
    }
    .title .details{
        width: 450px;
        height:150px;
        outline:none;
        resize:none;
        border-radius: 5px;
        background: #f3faff;
        border:2px solid #e5eff8;

    }

</style>