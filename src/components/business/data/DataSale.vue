<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">数据统计</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">销售统计</span></el-breadcrumb-item>
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
                    <div class="item_box1">6723.9</div>
                    <div class="item_box2">成交金额（元）</div>
                </li>
                <li>
                    <div class="item_box1">3456</div>
                    <div class="item_box2">金币总数</div>
                </li>
                <li>
                    <div class="item_box1">19%</div>
                    <div class="item_box2">成交转化率</div>
                </li>
            </ul>
            <div class="item1">
                <div class="title1">
                    <div class="title_left">销售额趋势</div>
                    <div class="title_right">
                        <div :class="['btn',{active:now==0}]" @click="now=0">7天</div>
                        <div :class="['btn',{active:now==1}]" @click="now=1">一个月</div>
                        <div :class="['btn',{active:now==2}]" @click="now=2">一个季度</div>
                        <div :class="['btn',{active:now==3}]" @click="now=3">一年</div>
                    </div>
                    <ul style="display: flex;">
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
                    <div :class="['contents',{active:now==0}]">
                        <div class="tu3"></div>
                    </div>
                    <div :class="['contents',{active:now==1}]">一个月</div>
                    <div :class="['contents',{active:now==2}]">一个季度</div>
                    <div :class="['contents',{active:now==3}]">一年</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataSale",
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
        width: 800px;
        display: flex;
        justify-content: space-between;
        line-height: 46px;
    }

    .content .item {
        margin-top: 20px;
        height: 85px;
        width: 573px;
        display: flex;
        justify-content: space-between;
        line-height: 46px;

    }
    .content .item li{
        width: 180px;
        height:85px ;
        padding-left: 80px;
        padding-top: 10px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    .content .item li:first-child {

        background: url("../../../assets/img/bg1.png");
    }

    .content .item li:nth-child(2) {

        background: url("../../../assets/img/bg2.png");
    }

    .content .item li:last-child {

        background: url("../../../assets/img/bg3.png");
    }

    .item li .item_box1 {
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        font-weight: bolder;
        color: white;
    }

    .item li .item_box2 {
        height: 35px;
        font-size: 12px;
        color: white;
        line-height: 35px;
    }
.title_right .active {
       border-bottom: 2px solid #30A6FE;
   }

    .content .item1 {
        width: 1014px;
        margin-top: 28px;
    }

    .content .item1 .title1 {
        width: 100%;
        border-bottom: 1px solid #30A6FE;
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        color: #30A6FE;

    }
    .item1 .title_right {
        width: 250px;
        color: #30A6FE;
        display: flex;
        justify-content: space-between;
    }
    .title1 .title_right .btn {
        float: left;
        line-height: 40px;
    }
    .content .item1 .bottom {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }

    .content .item1 .bottom .contents {
        width: 100%;
        display: none;
    }

    .content .item1 .bottom .active {
        display: block;
    }

    .item1 .bottom .contents .tu3 {
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
</style>