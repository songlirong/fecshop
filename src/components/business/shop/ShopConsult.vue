<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">咨询管理</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="shuaixuan">
                <ul style="width: 500px;display: flex;justify-content: space-between">
                    <li>
                        <el-select v-model="value" filterable placeholder="请输入咨询类型"
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
                        <el-input v-model="input" placeholder="请输入用户名查询" style="width: 200px"></el-input>
                    </li>
                    <li>
                        <div class="sousuo"></div>
                    </li>
                </ul>
                <div>
                    <el-button type="success" round class="green">清空聊天记录</el-button>
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
                    <el-table-column label="用户名">
                        <template slot-scope="scope">{{ scope.row.name }}</template>
                    </el-table-column>
                    <el-table-column prop="id" label="用户ID">
                    </el-table-column>
                    <el-table-column prop="data1" label="开始时间">
                    </el-table-column>
                    <el-table-column prop="data2" label="结束时间">
                </el-table-column>
                    <el-table-column prop="type" label="类型">
                    </el-table-column>
                    <el-table-column prop="recode" label="聊天记录">
                        <template slot-scope="scope">
                            <el-button @click="handleClick1(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" show-overflow-tooltip>
                        <template slot-scope="scope">
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
        name: "ShopConsult",
        data() {
            return {
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
                    name: '136****6578',
                    id:'089',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '咨询',
                    operation: ''
                }, {
                    name: '136****6578',
                    id:'089',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '咨询',
                    operation: ''
                }, {
                    name: '136****6578',
                    id:'089',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '咨询',
                    operation: ''
                }, {
                    name: '136****6578',
                    id:'089',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '咨询',
                    operation: ''
                }, {
                    name: '136****6578',
                    id:'089',
                    data1: '2018-5-29 18:25',
                    data2: '2018-5-29 18:25',
                    type: '咨询',
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
        width:100%;
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
    .content .red {
        height: 33px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0 8px #FD5E4E;
        padding-top: 10px;
    }

</style>