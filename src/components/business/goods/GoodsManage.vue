<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·" style="display: inline-block;line-height: 52px;">
                    <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">分类管理</span></el-breadcrumb-item>
                </el-breadcrumb>
                <div class="fangkuai"></div>
            </div>
            <div class="shuaixuan">
                <ul style="width:300px;display: flex;justify-content: space-between">
                    <li>
                        <el-select v-model="value" filterable placeholder="请输入关键字搜索">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li>
                        <div class="sousuo" @click=""></div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <router-link to="/">
                            <el-button type="primary" round class="blue" style="width: 100px;margin-right:10px">保存</el-button>
                        </router-link>
                        <router-link to="/GoodsAdd1">
                            <el-button type="success" round class="green">
                                添加商品
                            </el-button>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="item">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @row-click="handleSelectionChange"
                        @selection-change="selsChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column
                            label="编号"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.id }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="商品类型名称" width="300">
                        <template slot-scope="scope">
                            <div class="contents">
                                <el-select v-model="value1"  filterable placeholder="洗衣">
                                    <el-option
                                            v-for="item in options1"
                                            :key="item.value1"
                                            :label="item.label"
                                            :value="item.value1">
                                    </el-option>
                                </el-select>
                                <el-input v-model="input1" style="width:170px;margin:7px 0"></el-input>
                                <div style="width:200px;display: flex;">
                                    <el-input v-model="input2"></el-input>
                                    <i class="el-icon-circle-plus" style="color: #30a3fe;font-size: 30px;line-height: 40px"></i>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="zhankai"
                            label="默认展开"
                            show-overflow-tooltip>
                        <template slot-scope="scope">
                            <el-switch
                                    v-model="value2"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="data"
                            label="创建时间"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="zhuangtai"
                            label="审核状态"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" width="100" show-overflow-tooltip>
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
                        <el-button @click="toggleSelection(tableData3)">全选</el-button>
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
        name: "GoodsManage",
        data() {
            return {
                sels: [],
                input1: '',
                input2: '',
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
                options1: [{
                    value1: '选项1',
                    label: '1'
                }, {
                    value1: '选项2',
                    label: '2'
                }, {
                    value1: '选项3',
                    label: '3'
                }, {
                    value1: '选项4',
                    label: '4'
                }, {
                    value1: '选项5',
                    label: '5'
                }],
                value1: '',
                tableData: [{
                    id: '001',
                    name: '羽绒服清洗',
                    zhankai:'',
                    zhuangtai:'审核通过',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: '002',
                    name: '羽绒服清洗',
                    zhankai:'',
                    zhuangtai:'审核通过',
                    data: '2018-06-01 18:25',
                    operation: ''
                }],
                value2:'',
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
            delGroup() {
                var ids = this.sels.map(item => item.id).join();
            },
            selsChange(sels) {
                this.sels = sels
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
        margin-bottom: 20px;
    }

    .content .biaoti .fangkuai {
        margin-left: 20px;
        display: inline-block;
        width: 150px;
        height: 100%;
        background: url("../../../assets/img/fenlei1.png") no-repeat center center/100% auto;
    }

    .content .shuaixuan {
        height: 46px;
        width: 1040px;
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
        width: 1040px;
        height: 50px;
    }


    .item .contents {
        width: 108px;
        /*height: 56px;*/
        margin-left: 10px;
        display: inline-block;
        font-size: 12px;
        line-height: 18px;
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
    }
    .content .blue{
        height: 35px;
        background: #30B5FE;
        border:none;
        box-shadow:0 0px 8px #30B5FE;
    }
    .content .button_left {
        width: 54px;
        height: 20px;
        background: #edf8ff;
        border: 2px solid #e8f6ff;
        border-radius: 10px;
        color: #41b2fc;
        line-height: 18px;
        text-align: center;
        margin-top: 8px;
    }

    .content .button_right {
        width: 54px;
        height: 20px;
        background: #51b7fc;
        border: 2px solid #51b7fc;
        border-radius: 10px;
        color: #fff;
        line-height: 18px;
        text-align: center;
        margin-top: 8px;
    }

    .content .dian {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #3db0ff;
        box-shadow: 0 0 2px #3db0ff;
        margin-top: 10px;
        margin-right: 5px;
    }
</style>