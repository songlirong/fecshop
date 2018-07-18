<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">订单列表</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <ul class="shuaixuan">
                <li>
                    <el-input v-model="input1" placeholder="请输入收货人" style="width: 150px"></el-input>
                </li>
                <li>
                    <el-input v-model="input1" placeholder="请输入订单号" style="width: 150px"></el-input>
                </li>
                <li>
                    <el-input v-model="input2" placeholder="请输入商品编号/关键字" style="width: 200px"></el-input>
                </li>
                <li>
                    <div class="sousuo"></div>
                </li>
            </ul>
            <div class="item">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部订单（2）" name="first">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @row-click="handleSelectionChange"
                                @selection-change="selsChange">
                            <el-table-column type="selection" width="40"></el-table-column>
                            <el-table-column
                                    label="订单号"
                                    width="80">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="name" label="商品信息" width="200">
                                <template slot-scope="scope">
                                    <div class="picture"></div>
                                    <div class="contents">
                                        <div>货号：{{ scope.row.id}}</div>
                                        <div>{{ scope.row.name}}</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="money"
                                    label="单价"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="shouhuo" label="收货人" width="150">
                                <template slot-scope="scope">
                                    <div>{{ scope.row.shouhuoname}}</div>
                                    <div>TEL:{{ scope.row.TEL}}</div>
                                    <div>{{ scope.row.Address}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="zhifu" label="支付方式" width="80" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="jine" label="金额标签" width="160" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div>总金额:{{ scope.row.zong}}</div>
                                    <div>使用优惠券:{{ scope.row.youhui}}</div>
                                    <div>使用金币:{{ scope.row.jinbi}}</div>
                                    <div>应付金额:{{ scope.row.yingfu}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="zhuangtai"
                                    label="订单状态"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="data"
                                    label="下单时间">
                            </el-table-column>
                            <el-table-column prop="operation" label="操作" width="90" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <router-link to="/OrderListDetails">
                                        <el-button type="text" size="small">查看</el-button>
                                    </router-link>
                                    <span style="color: #eaebec">|</span>
                                    <el-button @click="open2(scope.$index, tableData)" type="text" size="small">
                                        <i class="el-icon-delete"></i>
                                    </el-button>
                                    <div><el-button type="primary" round style="font-size:10px;width: 60px;margin-top:5px;height:25px;padding-top: 5px;padding-left: 18px">接单</el-button></div>
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
                                <el-button type="danger" round @click="delGroup" class="red">批量删除</el-button>
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
                    </el-tab-pane>
                    <el-tab-pane label="待支付（1）" name="second">待支付（1）</el-tab-pane>
                    <el-tab-pane label="待取件（1）" name="third">待取件（1）</el-tab-pane>
                    <el-tab-pane label="待评价（1）" name="fourth">待评价（1）</el-tab-pane>
                    <el-tab-pane label="已完成（1）" name="fifth">已完成 （1）</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        data() {
            return {
                sels: [],
                activeName: 'first',
                input1: '',
                input2: '',
                options1: [{
                    value1: '选项1',
                    label: '1'
                }, {
                    value1: '选项2',
                    label: '2'
                }, {
                    value1: '选项3',
                    label: '3'
                }],
                value1: '',
                options2: [{
                    value2: '选项1',
                    label: '4'
                }, {
                    value2: '选项2',
                    label: '5'
                }, {
                    value2: '选项3',
                    label: '6'
                }],
                value2: '',
                tableData: [{
                    id: 'DSV0002',
                    name: '羽绒服清洗',
                    money: '655.00',
                    shouhuo:'',
                    shouhuoname:'李先生',
                    TEL:'1889-3984-0394',
                    Address:'【运城市 万荣县】中山北路789号泰山大厦5层504',
                    zhifu: '微信',
                    jine:'',
                    zong:'6199',
                    youhui:'满300减30',
                    jinbi:'5',
                    yingfu:'6620',
                    zhuangtai:'待接单',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: 'DSV0002',
                    name: '毛衣清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: 'DSV0002',
                    name: '裤子清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: 'DSV0002',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: 'DSV0002',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                },],
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
            handleClick(tab, event){
                console.log(tab, event);
            },
            //批量删除
             delGroup() {
                 var ids = this.sels.map(item => item.id).join();
             },
            handleClick1(row) {
                console.log(row);
            },
            open2(index, rows) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    rows.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }

    }
</script>

<style scoped>

    .content {
        width: 94%;
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
        width: 650px;
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



    .item .picture {
        width: 56px;
        height: 56px;
        background: url("../../../assets/img/sousuo.png") no-repeat center center/100% auto;
        border-radius: 3px;
        display: inline-block;
    }

    .item .contents {
        width: 108px;
        height: 40px;
        margin-left: 10px;
        margin-top:7px;
        float: right;
        font-size: 14px;
        line-height: 20px;
    }
    .content .red{
        height: 35px;
        background: #FD5E4E;
        border:none;
        box-shadow:0 0px 8px #FD5E4E;
    }


</style>