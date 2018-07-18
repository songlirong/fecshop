<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">优惠券管理</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="shuaixuan">
                <ul style="width: 500px;display: flex;justify-content: space-between">
                    <li>
                        <el-select v-model="value" filterable placeholder="请输入优惠券状态"
                                   style="width: 200px;display: inline-block">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li>
                        <el-input v-model="input" placeholder="请输入优惠券名称/关键字" style="width: 200px"></el-input>
                    </li>
                    <li>
                        <div class="sousuo"></div>
                    </li>
                </ul>
                <div>
                    <router-link to="/ShopCouponAdd">
                        <el-button type="success" round class="green">添加优惠券</el-button>
                    </router-link>
                </div>
            </div>
            <div class="item">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @row-click="handleSelectionChange"
                        @selection-change="selsChange">
                    <el-table-column type="selection" width="50"></el-table-column>
                    <el-table-column label="优惠券名称" width="200" show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.name }}</template>
                    </el-table-column>
                    <el-table-column prop="money1" label="优惠金额" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="money2" label="消费金额" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="data1" label="开始时间" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="data2" label="结束时间" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column label="优惠券状态">
                        <template slot-scope="scope"><span class="" style="color: #36dd7c">{{ scope.row.type }}</span></template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作"  show-overflow-tooltip>
                        <template slot-scope="scope">
                            <el-button @click="handleClick1(scope.row)" type="text" size="small">编辑</el-button>
                            <span style="color: #eaebec">|</span>
                            <el-button @click="open2(scope.$index, tableData)" type="text" size="small">
                                <i class="el-icon-delete"></i>
                            </el-button>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopCoupon",
        data() {
            return {
                radio: '1',
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
                    name: '满300减30（全场通用）',
                    money1:'30.00',
                    money2:'300.00',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '有效',
                    operation: ''
                }, {
                    name: '满300减30（全场通用）',
                    money1:'30.00',
                    money2:'300.00',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '有效',
                    operation: ''
                }, {
                    name: '618年中大促，优惠送不停',
                    money1:'30.00',
                    money2:'300.00',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '有效',
                    operation: ''
                }, {
                    name: '满300减30（全场通用）',
                    money1:'30.00',
                    money2:'300.00',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '有效',
                    operation: ''
                }, {
                    name: '满300减30（全场通用）',
                    money1:'30.00',
                    money2:'300.00',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '有效',
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
            handleClick(tab, event) {
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
        width: 100%;
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
        width:100%;
        height: 50px;
    }

    .content .red{
        height: 35px;
        background: #FD5E4E;
        border:none;
        box-shadow:0 0px 8px #FD5E4E;
    }
    .content .green{
        height: 35px;
        background: #37DF73;
        border:none;
        box-shadow:0 0px 8px #37DF73;
        margin-right: 20px;
    }

</style>