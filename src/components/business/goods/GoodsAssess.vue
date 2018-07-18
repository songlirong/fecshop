<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·" style="display: inline-block;line-height: 52px;">
                    <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">评价</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="shuaixuan">
                <ul style="width:400px;display: flex;justify-content: space-between">
                    <li>
                        <el-select v-model="value" placeholder="好评" style="width: 100px;">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li>
                        <el-input v-model="input" placeholder="请输入关键词搜索" style="width: 200px"></el-input>
                    </li>
                    <li>
                        <div class="sousuo" @click=""></div>
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
                    <el-table-column label="编号">
                        <template slot-scope="scope">{{ scope.row.id }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="用户名" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="type1" label="用户类型" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="type2" label="评价类型" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="object" label="评价对象" width="200" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="number" label="订单号" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="data" label="创建时间" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="zhuangtai" label="评价状态" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="operation" label="操作" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <el-button @click="handleClick1(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div style="position: relative;">
                <div style="width:180px;position:absolute;top:20px;right:0;bottom: 50px;display: flex;justify-content: space-between">
                    <div style="display: flex">
                        <div class="dian"></div>
                        总计<span style="color:#3db0ff;font-weight: bolder">206</span>记录
                    </div>
                    <div style="display: flex">
                        <div class="dian" style="background: #29c99a"></div>
                        分<span style="font-weight:bolder;color:#29c99a;">82</span>页
                    </div>
                </div>
            </div>
            <div style="width: 100%;position: relative">
                <div style="font-size:12px;position: absolute;bottom:0;top:50px;right:0;display: flex;justify-content: space-between">
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
</template>

<script>
    export default {
        name: "GoodsAssess",
        data() {
            return {
                input: '',
                sels: [],
                input1: '',
                input2: '',
                options: [{
                    value: '选项1',
                    label: '好评'
                }, {
                    value: '选项2',
                    label: '差评'
                }, {
                    value: '选项3',
                    label: '3'
                }],
                value: '',
                tableData: [{
                    id: '001',
                    name: 'R-123',
                    type1: '白金用户',
                    type2: '好评',
                    object: 'HATER海尔EG10014BGU啊10公斤',
                    number: 'DSV0002',
                    data: '2018-06-01 18:25',
                    zhuangtai: '已回复',
                    operation: ''
                }, {
                    id: '002',
                    name: 'R-123',
                    type1: '白金用户',
                    type2: '好评',
                    object: 'HATER海尔EG10014BGU啊10公斤',
                    number: 'DSV0002',
                    data: '2018-06-01 18:25',
                    zhuangtai: '已回复',
                    operation: ''
                }, {
                    id: '001',
                    name: 'R-123',
                    type1: '白金用户',
                    type2: '好评',
                    object: 'HATER海尔EG10014BGU啊10公斤',
                    number: 'DSV0002',
                    data: '2018-06-01 18:25',
                    zhuangtai: '已回复',
                    operation: ''
                }, {
                    id: '001',
                    name: 'R-123',
                    type1: '白金用户',
                    type2: '好评',
                    object: 'HATER海尔EG10014BGU啊10公斤',
                    number: 'DSV0002',
                    data: '2018-06-01 18:25',
                    zhuangtai: '已回复',
                    operation: ''
                }],
                value2: '',
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
            handleClick1(row) {
                console.log(row);
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

    .content .shuaixuan {
        height: 46px;
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