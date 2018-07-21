<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/account">实名认证</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/account/AccountBill">账单列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/account/AccountMoney">资金列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/account/AccountThawing">账户解冻</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin:0 auto">
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">账户管理</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <router-link to="/goods">资金列表</router-link>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">查看详情</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <ul class="shuaixuan">
                    <li>
                        <el-select v-model="value" filterable placeholder="最近一月"
                                   style="display: inline-block">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li>时间段选择
                        <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                        </el-date-picker>
                    </li>
                    <li>
                        <el-input v-model="input" placeholder="请输入关键字搜索"></el-input>
                    </li>
                    <li>
                        <div class="sousuo"></div>
                    </li>
                </ul>
                <div class="item">
                    <div style="border-bottom: 1px solid #eee">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @row-click="handleSelectionChange"
                                @selection-change="selsChange">
                            <el-table-column prop="data" label="交易日期" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="time" label="入账时间" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="number" label="订单号" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="type" label="支付方式" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="money1" label="总余额" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="money2" label="商家所得" show-overflow-tooltip>
                            </el-table-column>
                        </el-table>
                        <ul style="width:90%;display: flex;justify-content: space-between;line-height: 50px">
                            <li><span class="name">5月订单总量：</span>4笔</li>
                            <li><span class="name">总金额：</span>20,220</li>
                            <li><span class="name">应发金额：</span>19,243</li>
                            <li><span class="name">所得税：</span>2,126</li>
                            <li><span class="name">实发金额：</span>17,117</li>
                        </ul>
                    </div>
                    <div style="position: relative;">
                        <div style="width:180px;position:absolute;right:0;bottom: 50px;display: flex;justify-content: space-between">
                            <div style="display: flex">
                                <div class="dian"></div>
                                总计<span style="color:#3db0ff;font-weight: bolder">206</span>记录
                            </div>
                            <div style="display: flex">
                                <div class="dian" style="background: #29c99a"></div>
                                分<span style="font-weight:bolder;color:#29c99a;">82</span>页
                            </div>
                        </div>
                        <div style="margin-top: 40px">
                            <el-button @click="toggleSelection(tableData)">全选</el-button>
                            <el-button type="success" round class="green">导出</el-button>
                            <el-button type="success" round class="blue">打印</el-button>
                        </div>
                    </div>
                    <div style="width: 100%;position: relative">
                        <div style="font-size:12px;position: absolute;bottom:0;right:0;display: flex;justify-content: space-between">
                            <div class="button_left">首页</div>
                            <el-pagination
                                    layout="prev, pager, next"
                                    :total="50">
                            </el-pagination>
                            <div class="button_right">末页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountMoney1",
        data() {
            return {
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                sels: [],
                input: '',
                options: [{
                    value: '选项1',
                    label: '1'
                }, {
                    value: '选项2',
                    label: '2'
                }, {
                    value: '选项3',
                    label: '3'
                }],
                value: '',
                tableData: [{
                    data: '2018-5-29 18:25:00',
                    time: '2018-5-29 18:25:00',
                    number: 'DSV0002',
                    type: '微信支付',
                    money1: '111,098',
                    money2: '6,478',
                }, {
                    data: '2018-5-29 18:25:00',
                    time: '2018-5-29 18:25:00',
                    number: 'DSV0002',
                    type: '微信支付',
                    money1: '111,098',
                    money2: '6,478',
                }, {
                    data: '2018-5-29 18:25:00',
                    time: '2018-5-29 18:25:00',
                    number: 'DSV0002',
                    type: '微信支付',
                    money1: '111,098',
                    money2: '6,478',
                }],
                multipleSelection: []
            }
        },

        methods: {
            toggleSelection(rows) {
                this.$refs.multipleTable.clearSelection();
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                })
            },
            selsChange(sels) {
                this.sels = sels
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleClick(tab, event) {
                console.log(tab, event);
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

    .main-content .shuaixuan {
        height: 46px;
        width:100%;
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

    .main-content .item {
        width:100%;
        height: 50px;
    }

    .main-content .item .name {
        color: #8c8c8c;
    }
    .main-content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        padding-top: 10px;
    }

    .main-content .blue {
        height: 33px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
        padding-top: 10px;
    }
</style>