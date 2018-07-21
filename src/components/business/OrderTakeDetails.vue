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
                        <el-breadcrumb-item>取件单列表</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">查看详情</span>
                        </el-breadcrumb-item>
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
                                <el-table-column prop="data2" label="取件时间"></el-table-column>
                                <el-table-column prop="data3" label="付款时间"></el-table-column>
                                <el-table-column prop="way" label="支付方式"></el-table-column>
                            </el-table>
                            <el-table :data="tableData" style="width: 80%">
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
                                <el-table-column prop="money1" label="单价"></el-table-column>
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
                            <span style="color:#30a3fe;">取件</span>操作
                        </div>
                        <div class="title">
                            <el-form ref="form" :model="form" label-width="120px">
                                <el-row style="width: 500px;">
                                    <el-form-item label="操作者:">
                                        <div>admin</div>
                                    </el-form-item>
                                    <el-form-item label="退款信息:">
                                        <div>货号/ECS00103；商品名称/洗衣</div>
                                    </el-form-item>
                                    <el-form-item label="操作备注:">
                                        <template>
                                            <textarea id="" cols="30" rows="10" v-model="form.desc"
                                                      class="details"></textarea>
                                        </template>
                                    </el-form-item>
                                    <el-form-item label="当前可执行操作:">
                                        <el-button type="primary" round class="blue">取消取件</el-button>
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
        name: "OrderTakeDetails",
        data() {
            return {
                tableData: [{
                    id: '2018052916056086818',
                    data1: '2018-05-02 18:00',
                    data2: '2016-05-02 18:00',
                    data3: '2016-05-02 18:00',
                    way: '在线支付',
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

    .main-content .item {
        width: 90%;
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

    .bottom .title .shangpinbg {
        width: 56px;
        height: 56px;
        background: #BBDFF6;
        border-radius: 3px;
    }

    .title .details {
        width: 450px;
        height: 150px;
        outline: none;
        resize: none;
        border-radius: 5px;
        background: #f3faff;
        border: 2px solid #e5eff8;
    }

    .main-content .blue {
        width: 100px;
        height: 30px;
        padding-top: 7px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
    }

</style>