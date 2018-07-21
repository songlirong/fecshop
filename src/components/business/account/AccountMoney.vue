<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">账户管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">资金列表</span></el-breadcrumb-item>
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
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @row-click="handleSelectionChange"
                        @selection-change="selsChange">
                    <el-table-column type="selection" width="50"></el-table-column>
                    <el-table-column prop="data" label="账户变动时间" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="xiangqing" label="操作详情" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="type" label="类型" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="money1" label="金额" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="money2" label="账户可用余额" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <router-link to="../AccountMoney1">{{scope.row.action}}</router-link>
                        </template>
                    </el-table-column>
                </el-table>
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
</template>

<script>
    export default {
        name: "AccountMoney",
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
                value1: [new Date(2000, 10, 10, 22, 22,11), new Date(2000, 10, 11, 10, 10)],
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
                    data:'2018-5-29 18:25:00',
                    xiangqing:'6月平台结算',
                    type:'月底结算',
                    money1: '6,720',
                    money2: '111,098',
                    action:'资金明细'

                }, {
                    data:'2018-5-29 18:25:00',
                    xiangqing:'6月平台结算',
                    type:'月底结算',
                    money1: '6,720',
                    money2: '111,098',
                    action:'资金明细'
                }, {
                    data:'2018-5-29 18:25:00',
                    xiangqing:'6月平台结算',
                    type:'月底结算',
                    money1: '6,720',
                    money2: '111,098',
                    action:'资金明细'
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
    .content {
        width: 100%;
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

    .content .shuaixuan {
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
        background: url("../../../assets/img/sousuo.png") no-repeat center center/100% auto;
    }

    .content .item {
        width: 100%;
        height: 50px;
    }
    .content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        padding-top: 10px;
    }

    .content .blue {
        height: 33px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
        padding-top: 10px;
    }


</style>