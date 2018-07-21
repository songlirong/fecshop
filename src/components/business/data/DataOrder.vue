<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">数据统计</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">订单统计</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <ul class="shuaixuan">
                <li>
                    <el-select v-model="value" placeholder="最近一周">
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
                    <el-button type="primary" round class="blue">查询</el-button>
                </li>
            </ul>
            <ul class="item">
                <li>
                    <div class="item_box">
                        <div class="item_box1">点击量统计</div>
                        <div class="item_box2">10,915</div>
                    </div>
                </li>
                <li>
                    <div class="item_box">
                        <div class="item_box1">下单量统计</div>
                        <div class="item_box2">462</div>
                    </div>
                </li>
                <li>
                    <div class="item_box">
                        <div class="item_box1">成交量统计</div>
                        <div class="item_box2">10,915</div>
                    </div>
                </li>
                <li>
                    <div class="item_box">
                        <div class="item_box1">退货量统计</div>
                        <div class="item_box2">98</div>
                    </div>
                </li>
                <li>
                    <div class="item_box">
                        <div class="item_box1">好评率</div>
                        <div class="item_box2">98%</div>
                    </div>
                </li>
                <li>
                    <div class="item_box">
                        <div class="item_box1">投诉率</div>
                        <div class="item_box2">2%</div>
                    </div>
                </li>
            </ul>
            <div class="item1">
                <div class="box1">
                    <div class="title">
                        <div class="title_left">评价汇总</div>
                        <div class="title_right">
                            <div :class="['btn',{active:now==0}]" @click="now=0">7天</div>
                            <div :class="['btn',{active:now==1}]" @click="now=1">一个月</div>
                            <div :class="['btn',{active:now==2}]" @click="now=2">一个季度</div>
                            <div :class="['btn',{active:now==3}]" @click="now=3">一年</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div :class="['contents',{active:now==0}]">
                            <ul style="display: flex;justify-content: space-between">
                                <li>
                                    <el-date-picker v-model="value1" type="datetimerange" range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期" style="width: 380px">
                                    </el-date-picker>
                                </li>
                                <li style="margin-top:5px">
                                    <el-button type="primary" round class="blue">
                                        确定
                                    </el-button>
                                </li>
                            </ul>
                            <div class="tu1"></div>
                            <div style="display: flex;justify-content: center">
                                <el-button type="primary" round class="blue">导出图片</el-button>
                                <el-button type="success" round class="green">导出表格</el-button>
                                <el-button type="warning" round class="yellow">导出报告</el-button>
                            </div>
                        </div>
                        <div :class="['contents',{active:now==1}]">一个月</div>
                        <div :class="['contents',{active:now==2}]">一个季度</div>
                        <div :class="['contents',{active:now==3}]">一年</div>
                    </div>
                </div>
                <div class="box1">
                    <div class="title">
                        <div class="title_left">投诉汇总</div>
                        <div class="title_right">
                            <div :class="['btn',{active:next==0}]" @click="next=0">7天</div>
                            <div :class="['btn',{active:next==1}]" @click="next=1">一个月</div>
                            <div :class="['btn',{active:next==2}]" @click="next=2">一个季度</div>
                            <div :class="['btn',{active:next==3}]" @click="next=3">一年</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div :class="['contents',{active:next==0}]">
                            <ul style="display: flex;justify-content: space-between">
                                <li>
                                    <el-date-picker v-model="value1" type="datetimerange" range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期" style="width: 380px">
                                    </el-date-picker>
                                </li>
                                <li style="margin-top:5px">
                                    <el-button type="primary" round class="blue">
                                        确定
                                    </el-button>
                                </li>
                            </ul>
                            <div class="tu2"></div>
                            <div style="display: flex;justify-content: center">
                                <el-button type="primary" round class="blue">导出图片</el-button>
                                <el-button type="success" round class="green">导出表格</el-button>
                                <el-button type="warning" round class="yellow">导出报告</el-button>
                            </div>
                        </div>
                        <div :class="['contents',{active:next==1}]">一个月</div>
                        <div :class="['contents',{active:next==2}]">一个季度</div>
                        <div :class="['contents',{active:next==3}]">一年</div>
                    </div>
                </div>
            </div>
            <div class="item2">
                <div class="title2">
                    <div class="title_left">订单数量走势</div>
                    <div class="title_right">
                        <div :class="['btn',{active:next1==0}]" @click="next1=0">7天</div>
                        <div :class="['btn',{active:next1==1}]" @click="next1=1">一个月</div>
                        <div :class="['btn',{active:next1==2}]" @click="next1=2">一个季度</div>
                        <div :class="['btn',{active:next1==3}]" @click="next1=3">一年</div>
                    </div>
                    <ul style="width:490px;display: flex;justify-content: space-between">
                        <li>
                            <el-date-picker v-model="value1" type="datetimerange" range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                            </el-date-picker>
                        </li>
                        <li>
                            <el-button type="primary" round class="blue">
                                确定
                            </el-button>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <div :class="['contents',{active:next1==0}]">
                        <div class="tu3"></div>
                    </div>
                    <div :class="['contents',{active:next1==1}]">一个月</div>
                    <div :class="['contents',{active:next1==2}]">一个季度</div>
                    <div :class="['contents',{active:next1==3}]">一年</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataOrder",
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
                value1: [],
                sels: [],
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
                activeName: 'frist',
                now: 0,
                next:0,
                next1:0
            }
        },

        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
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
        width: 900px;
        display: flex;
        justify-content: space-between;
        line-height: 46px;
    }
    .content .item {
        width: 100%;
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
    }
    .item .item_box {
        width: 140px;
        height: 80px;
        border-radius: 5px;
        box-shadow: 0 0 15px 2px #eee;
        padding-left: 20px;
        padding-top: 10px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .item_box .item_box1 {
        height: 30px;
        font-size: 18px;
        line-height: 30px;
    }
    .item_box .item_box2 {
        height: 35px;
        font-size: 22px;
        color: #30a2fe;
        line-height: 35px;
        font-weight: bolder;
    }
    .content .item1 {
        width:100%;
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
    }
    .content .item1 .box1 {
        width: 485px;
    }
    .content .item1 .box1 .title {
        width: 100%;
        height: 52px;
        line-height: 52px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #30A6FE;
    }
    .item1 .box1 .title_left {
        width: 88px;
        text-align: center;
        color: #30A6FE;
        font-weight: bolder;
    }
    .item1 .box1 .title_right {
        width: 250px;
        color: #30A6FE;
        display: flex;
        justify-content: space-between;
    }
    .item2 .title_right {
        width: 250px;
        color: #30A6FE;
        display: flex;
        justify-content: space-between;
    }
    .title_right .btn {
        float: left;
        line-height: 52px;
    }
    .title_right .active {
        border-bottom: 2px solid #30A6FE;
    }
    .content .item1 .box1 .bottom {
         width: 100%;
         padding-top: 10px;
         padding-bottom: 20px;
         box-sizing: border-box;
     }
    .content .item1 .box1 .bottom .contents {
        width: 100%;
        display: none;
    }
    .item1 .box1 .bottom .contents .tu1 {
        width: 100%;
        height: 330px;
        background: url("../../../assets/img/tu1.png") no-repeat center center /100% auto;
    }
    .item1 .box1 .bottom .contents .tu2 {
        width: 100%;
        height: 330px;
        background: url("../../../assets/img/tu2.png") no-repeat center center /100% auto;
    }
    .content .item1 .box1 .bottom .active {
        display: block;
    }
    .content .item2 {
        width: 100%;
        margin-top: 28px;
    }
    .content .item2 .title2{
        width: 100%;
        border-bottom: 1px solid  #30A6FE;
        display: flex;
        justify-content: space-between;
        line-height: 52px;
        color: #30A6FE;

    }
    .content .item2 .btn {
        float: left;
        line-height: 52px;
    }
    .content .item2 .bottom {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .content .item2 .bottom .contents {
        width: 100%;
        display: none;
    }
    .content .item2 .bottom .active {
        display: block;
    }
    .item2 .bottom .contents .tu3{
        width: 100%;
        height: 500px;
        background: url("../../../assets/img/zhexiantu.png") no-repeat center center /100% auto;
    }
    .content .blue {
        height: 33px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
        padding-top: 10px;
    }
    .content .yellow {
        height: 33px;
        background: #FAC83A;
        border: none;
        box-shadow: 0 0 8px #FAC83A;
        padding-top: 10px;
    }

    .content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        padding-top: 10px;
    }
</style>