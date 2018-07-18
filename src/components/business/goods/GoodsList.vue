<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder;">商品列表</span>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <ul class="shuaixuan">
                <li>分类
                    <el-select v-model="value1" class="xiala">
                        <el-option
                                v-for="item in options1"
                                :key="item.value1"
                                :label="item.label"
                                :value="item.value1">
                        </el-option>
                    </el-select>
                </li>
                <li>上下架
                    <el-select v-model="value2" class="xiala2">
                        <el-option
                                v-for="item in options2"
                                :key="item.value2"
                                :label="item.label"
                                :value="item.value2">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    商家编号
                    <el-input v-model="input1" placeholder="请输入订单号" class="input1"></el-input>
                </li>
                <li>
                    商家编号
                    <el-input v-model="input2" placeholder="请输入商品编号/关键字" class="input2"></el-input>
                </li>
                <li>
                    <div class="sousuo"></div>
                </li>
                <li>
                    <router-link to="/GoodsAdd1">
                        <el-button type="success" round class="green">
                            添加商品
                        </el-button>
                    </router-link>
                </li>
            </ul>
            <div class="item">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部商品（2）" name="first">
                        <el-table
                                ref="multipleTable"
                                :data="tableData3"
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
                            <el-table-column prop="name" label="商品名称" width="200">
                                <template slot-scope="scope">
                                    <div class="picture"></div>
                                    <div class="contents">
                                        <div><span style="color: #babec1">货号：</span>DSV0002</div>
                                        <div>羽绒服清洗</div>
                                        <div><span style="color: #babec1">运费：</span>按固定运费</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="money"
                                    label="价格/折扣价"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="fenlei"
                                    label="分类"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="shangxiajia"
                                    label="上下架"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <el-switch
                                            v-model="value3"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949">
                                    </el-switch>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="data"
                                    label="发布时间"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="operation" label="操作" width="100" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <router-link to="/GoodsDetails">
                                        <el-button type="text" size="small">查看</el-button>
                                    </router-link>
                                    <span style="color: #eaebec">|</span>
                                    <el-button @click="open2(scope.$index, tableData3)" type="text" size="small">
                                        <i class="el-icon-delete" style="color: #ff8f71"></i>
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
                                <el-button type="success" round class="green">导出表格</el-button>
                                <el-button type="primary" round class="blue">导出图片</el-button>
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
                    <el-tab-pane label="回收站（1）" name="second">回收站（1）</el-tab-pane>
                    <el-tab-pane label="上架（1）" name="third">上架（1）</el-tab-pane>
                    <el-tab-pane label="下架（1）" name="fourth">下架（1）</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data() {
            return {
                sels: [],
                activeName: 'first',
                input1: '',
                input2: '',
                options1: [{
                    value1: '选项1',
                    label: '全部分类'
                }, {
                    value1: '选项2',
                    label: '2'
                }, {
                    value1: '选项3',
                    label: '3'
                }],
                value1: '选项1',
                options2: [{
                    value2: '选项1',
                    label: '全部'
                }, {
                    value2: '选项2',
                    label: '5'
                }, {
                    value2: '选项3',
                    label: '6'
                }],
                value2: '选项1',
                value3: '',
                tableData3: [{
                    id: '239874983289',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: '239874983289',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: '239874983289',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: '239874983289',
                    name: '羽绒服清洗',
                    money: '288.00',
                    fenlei: '洗衣',
                    shangxiajia: '',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: '239874983289',
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
        font-size: 20px;
        line-height: 52px;
        font-weight: bolder;
    }

    .content .shuaixuan {
        height: 46px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 46px;
        color: #a4adb5;
    }

    .content .shuaixuan .xiala {
        width: 110px;
        outline: none;
        border: none;
        font-size: 12px;
    }
    .content .shuaixuan .xiala2 {
        width: 83px;
        height: 28px;
        outline: none;
        border: none;
        font-size: 12px;
    }

    .content .shuaixuan .input1 {
        width: 110px;
        height: 24px;
        outline: none;
        font-size: 12px;
        text-align: center;
    }

    .content .shuaixuan .input2 {
        width: 160px;
        height: 24px;
        outline: none;
        font-size: 12px;
        text-align: center;
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
        background: #d8eaf3;
        border-radius: 3px;
        display: inline-block;
    }

    .item .contents {
        width: 108px;
        height: 56px;
        margin-left: 10px;
        display: inline-block;
        font-size: 12px;
        line-height: 18px;
    }

    .content .red {
        height: 33px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0 8px #FD5E4E;
        padding-top: 10px;
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