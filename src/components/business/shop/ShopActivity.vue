<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">店铺活动</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="shuaixuan">
                <ul style="width: 500px;display: flex;justify-content: space-between">
                    <li>
                        <el-input v-model="input" placeholder="请输入优惠活动名称/关键字" style="width: 250px"></el-input>
                    </li>
                    <li>
                        <div class="sousuo"></div>
                    </li>
                    <li>
                        <el-radio v-model="radio" label="1">仅显示进行中的活动</el-radio>
                    </li>
                </ul>
                <div>
                    <router-link to="/ShopActivityAdd">
                        <el-button type="success" round class="green">添加店铺活动</el-button>
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
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column label="活动编号">
                        <template slot-scope="scope">{{ scope.row.id }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="优惠活动名称" width="300" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="data1" label="开始时间" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="data2" label="结束时间" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="type" label="折扣" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" show-overflow-tooltip>
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
        name: "ShopActivity",
        data() {
            return {
                radio: '1',
                sels: [],
                input: '',
                tableData: [{
                    id: 'HD001',
                    name: '六一儿童节参加活动赢优惠券（部分商品）',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '9折',
                    operation: ''
                }, {
                    id: 'HD002',
                    name: '六一儿童节赢优惠券（全场通用）',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '9折',
                    zhuangtai: '已处理',
                }, {
                    id: 'HD003',
                    name: '六一儿童节参加活动赢优惠券（部分商品）',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '9折',
                    zhuangtai: '已处理',
                }, {
                    id: 'HD004',
                    name: '六一儿童节赢优惠券（全场通用）',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '9折',
                    zhuangtai: '已处理',
                }, {
                    id: 'HD005',
                    name: '六一儿童节参加活动赢优惠券（部分商品）',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '9折',
                    zhuangtai: '已处理',
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
        width:100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 8px;
    }

    .content .biaoti {
        width: 100%;
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
    .content .shuaixuan .green{
        height: 35px;
        background: #37DF73;
        border:none;
        box-shadow:0 0 8px #37DF73;
    }
    .content .item .red{
        height: 35px;
        background: #FD5E4E;
        border:none;
        box-shadow:0 0 8px #FD5E4E;
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


</style>