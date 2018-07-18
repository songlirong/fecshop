<template>
    <div class="box">
        <!--资金被冻结-->
        <div class="freeze" style="display: none">
            <div class="freeze-content">
                <div style="width:438px;height: 30px;border-bottom: 1px solid #30a3fe;color:#30a3fe;font-size: 20px;font-weight: bolder ">
                    通知
                </div>
                <div class="freeze-content1">
                    <div style="height: 40px;font-size: 12px;line-height: 40px">冻结原因：</div>
                    <div class="text">您好，由于多名用户投诉，所以在2018年5月20日将商家的店铺资金冻结。</div>
                    <div class="text">具体冻结原因：</div>
                    <div class="text">店铺中的交易存在用同一台机器(即同个IP地址)买卖商品,且是同个单位的局域网。</div>
                    <div class="text">若有疑问可以电话咨询，联系电话：0351-8765432</div>
                </div>
                <div class="freeze-content2">
                    <div style="height: 40px;line-height: 40px;font-size: 12px">申请解冻描述：</div>
                    <textarea cols="50" rows="10"
                              style="border-radius:5px;resize:none;height: 81px;width: 438px;background: #f3faff;">您好，我公司已将不规范交易进行修改，申请解决冻结账务。</textarea>
                </div>
                <div class="freeze-content3">
                    <div style="height: 40px;line-height: 40px;font-size: 12px">凭证上传：</div>
                    <!--<div style="box-sizing:border-box;padding-left:15px;font-size:10px;line-height:30px;width: 339px;height: 30px;border-radius: 15px;background: #f3faff;float: left;margin-right: 12px">上传照片能够提高申请通过率</div>-->
                    <input type="file" name="pic" placeholder="上传照片能够提高申请通过率"
                           accept="image/jpg,image/jpeg,image/gif,image/png"/>
                    <div class="button1" style="float: left"></div>
                </div>
                <div class="button2" style="float: left;margin-top: 18px"></div>
                <div class="close"></div>
            </div>
        </div>
        <!--店铺被冻结-->
        <div class="freeze" style="display: none">
            <div class="freeze-content">
                <div style="width:438px;height: 30px;border-bottom: 1px solid #30a3fe;color:#30a3fe;font-size: 20px;font-weight: bolder ">
                    通知
                </div>
                <div class="freeze-content1">
                    <div style="height: 40px;font-size: 12px;line-height: 40px">冻结原因：</div>
                    <div class="text">您好，由于多名用户投诉，所以在2018年5月20日将商家的店铺冻结。</div>
                    <div class="text">具体冻结原因：</div>
                    <div class="text">多名用户投诉商家的商品包装有问题。</div>
                    <div class="text">若有疑问可以电话咨询，联系电话：0351-8765432</div>
                </div>
                <div class="freeze-content2">
                    <div style="height: 40px;line-height: 40px;font-size: 12px">申请解冻描述：</div>
                    <textarea cols="50" rows="10"
                              style="border-radius:5px;resize:none;height: 81px;width: 438px;background: #f3faff;">您好，我公司已将不规范交易进行修改，申请解决冻结账务。</textarea>
                </div>
                <div class="freeze-content3">
                    <div style="height: 40px;line-height: 40px;font-size: 12px">凭证上传：</div>
                    <div style="box-sizing:border-box;padding-left:15px;font-size:10px;line-height:30px;width: 339px;height: 30px;border-radius: 15px;background: #f3faff;float: left;margin-right: 12px">
                        上传照片能够提高申请通过率
                    </div>
                    <div class="button1" style="float: left"></div>
                </div>
                <div class="button2" style="float: left;margin-top: 18px"></div>
                <div class="close"></div>
            </div>
        </div>
            <!--侧边栏-->
            <div class="aside">
                <div class="logo"></div>
            </div>
            <!--主内容-->
            <div class="main-content">
                <div class="main-content1">
                    <div class="dianpu"></div>
                    <div class="content1-center">
                        <div class="col-box"></div>
                        <div class="name">康洁洗衣旗舰店</div>
                        <div class="message1">
                            <div class="jianjie">商家简介:</div>
                            <span>灯具千种热销款式，厂家一站式供货，自由退换货。专业人士上门安装，服务到家。</span>
                        </div>
                        <div class="message2">
                            <div class="gonggao">商家公告:</div>
                            <span>店铺新开张，2018.05.20-05.23所有商品8折优惠</span>
                        </div>
                    </div>
                    <div class="content1-right">
                        <div class="name">
                            <div class="col-box"></div>
                            <span style="color: #41b2fc">商家</span>信息
                        </div>
                        <ul class="message3">
                            <li>
                                <div class="gonggao">所属公司：</div>
                                <span>王卓生活用品有限公司</span>
                            </li>
                            <li>
                                <div class="gonggao">负责人：</div>
                                <span>店长admin</span>
                            </li>
                            <li>
                                <div class="gonggao">最后一次登录时间：</div>
                                <span>2018-05-29 09:16:36</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-content2">
                    <ul class="biaoti">
                        <li>待处理订单（0）</li>
                        <li>退换货订单（0）</li>
                        <li>当前店铺活动（0)</li>
                        <li>即将到期店铺活动（0）</li>
                        <li>待处理回复评论（0）</li>
                    </ul>
                    <ul class="item">
                        <li>
                            <div class="item_box">
                                <div class="item_box1">今日成交额</div>
                                <div class="item_box2">10,915.00</div>
                                <div class="item_box3">昨日成交额 8,222.00
                                    <div class="jiantou1"></div>
                                    11%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_box">
                                <div class="item_box1">今日成交量</div>
                                <div class="item_box2">1976</div>
                                <div class="item_box3">昨日成交额 8,222.00
                                    <div class="jiantou1"></div>
                                    11%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_box">
                                <div class="item_box1">今日下单量</div>
                                <div class="item_box2">1990</div>
                                <div class="item_box3">昨日下单量 8,222.00
                                    <div class="jiantou2"></div>
                                    11%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_box">
                                <div class="item_box1">今日退货量</div>
                                <div class="item_box2">30</div>
                                <div class="item_box3">昨日退货量 8,222.00
                                    <div class="jiantou3"></div>
                                    11%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item_box">
                                <div class="item_box1">今日点击量</div>
                                <div class="item_box2">3919</div>
                                <div class="item_box3">昨日点击量 8,222.00
                                    <div class="jiantou1"></div>
                                    11%
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="main-content3">
                    <div style="font-size: 12px;line-height: 46px;border-bottom: 1px solid #30a2fe;">
                        <span style="margin-left: 17px;color: #99cafe">最近一周销售量趋势</span>
                    </div>
                    <div class="zhexian"></div>
                    <div style="font-size: 12px;line-height: 46px;border-bottom: 1px solid #30a2fe;">
                        <span style="margin-left: 17px;color: #99cafe">最近一周单品销售排名</span>
                        <div style="float: right">
                            <el-radio v-model="radio" label="1">按销售量排名</el-radio>
                            <el-radio v-model="radio" label="2">按销售额排名</el-radio>
                        </div>
                    </div>
                    <div v-if="radio==1">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="id" label="排名" width="80">
                            </el-table-column>
                            <el-table-column prop="number" label="货号">
                            </el-table-column>
                            <el-table-column prop="name" label="商品名称" width="400">
                            </el-table-column>
                            <el-table-column prop="count" label="销售量（件）">
                            </el-table-column>
                            <el-table-column prop="money" label="销售额（元）">
                            </el-table-column>
                            <el-table-column prop="average" label="均价（元）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div v-if="radio==2">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="id" label="排名" width="80">
                            </el-table-column>
                            <el-table-column prop="number" label="货号">
                            </el-table-column>
                            <el-table-column prop="name" label="商品名称" width="500">
                            </el-table-column>
                            <el-table-column prop="count" label="销售量（件）">
                            </el-table-column>
                            <el-table-column prop="money" label="销售额（元）">
                            </el-table-column>
                            <el-table-column prop="average" label="均价（元）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div>
                        <div style="width:180px;float: right;margin-top: 28px;display: flex;justify-content: space-between">
                            <div style="display: flex"><div class="dian"></div>总计<span style="color:#3db0ff;font-weight: bolder">206</span>记录</div>
                            <div style="display: flex"><div class="dian" style="background: #29c99a"></div>分<span style="font-weight:bolder;color:#29c99a;">82</span>页</div>
                        </div>
                        <el-button type="success" round class="green">导出表格</el-button>
                    </div>
                   <div>
                       <div style="width:400px;font-size:12px;float: right;display: flex;justify-content: space-between">
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
        name: "index",
        data() {
            return {
                radio: '1',
                tableData: [{
                    id: '1',
                    number: 'ECS00103',
                    name: 'JOMOO九牧精铜单冷快开水龙头洗衣机快开水龙头自来水嘴',
                    count: '1002',
                    money: '10,915',
                    average: '119.99'
                }, {
                    id: '2',
                    number: 'ECS00103',
                    name: 'JOMOO九牧精铜单冷快开水龙头洗衣机快开水龙头自来水嘴',
                    count: '1002',
                    money: '10,915',
                    average: '119.99'
                }, {
                    id: '3',
                    number: 'ECS00103',
                    name: 'JOMOO九牧精铜单冷快开水龙头洗衣机快开水龙头自来水嘴',
                    count: '1002',
                    money: '10,915',
                    average: '119.99'
                }, {
                    id: '4',
                    number: 'ECS00103',
                    name: 'JOMOO九牧精铜单冷快开水龙头洗衣机快开水龙头自来水嘴',
                    count: '1002',
                    money: '10,915',
                    average: '119.99'
                }, {
                    id: '5',
                    number: 'ECS00103',
                    name: 'JOMOO九牧精铜单冷快开水龙头洗衣机快开水龙头自来水嘴',
                    count: '1002',
                    money: '10,915',
                    average: '119.99'
                },]
            }
        },
        components: {}
    }
</script>

<style scoped>
    .box{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding-top: 50px;
        background: white;
        font-family:Microsoft YaHei;
    }
    .close {
        position: absolute;
        top: 17px;
        right: 18px;
        width: 14px;
        height: 14px;
        background: url("../../assets/img/close.png") no-repeat center center/100% auto;
    }
    .aside{
        width: 12%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index:999;
    }
    .main-content {
        position: absolute;
        top:80px;
        bottom:0;
        left:18%;
        right:0;
        background: white;
    }

    .main-content1 {
        width: 100%;
        height: 135px;
        margin-bottom: 27px;
    }

    .main-content .col-box {
        width: 11px;
        height: 5px;
        border-radius: 3px;
        margin-left: 1px;
        margin-top: 9px;
        margin-right: 7px;
        background-color: #37e06f;
        box-shadow: 0 0 2px #37e06f;
    }

    .main-content1 .dianpu {
        float: left;
        width: 129px;
        height: 129px;
        border: 3px solid #eee;
        background: url("../../assets/img/dianpu.png") no-repeat center center/100% auto;
    }

    .main-content1 .content1-center {
        float: left;
        width: 430px;
        height: 135px;
        border-right: 1px solid #30a2fe;
        padding-left: 25px;
        padding-right: 26px;
        /*background: blue;*/
        box-sizing: border-box;
    }

    .main-content1 .name {
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 24px;
        margin-left: 7px;
        /*background: yellow;*/
        line-height: 24px;
    }

    .main-content1 .message1 {
        width: 360px;
        height: 46px;
        font-size: 12px;
        color: #bdc3c9;
        margin-left: 20px;
        line-height: 18px;
    }

    .main-content1 .message2 {
        width: 360px;
        height: 42px;
        line-height: 42px;
        font-size: 12px;
        color: #bdc3c9;
        margin-left: 20px;
    }

    .message1 .jianjie {
        width: 64px;
        height: 100%;
        font-size: 12px;
        line-height: 18px;
        font-weight: bold;
        color: #82898e;
        float: left;
    }

    .message2 .gonggao {
        width: 64px;
        height: 100%;
        font-size: 12px;
        line-height: 42px;
        font-weight: bold;
        color: #82898e;
        float: left;
        /*background: #f7e1b5;*/
    }

    .main-content1 .content1-right {
        float: left;
        width: 420px;
        height: 135px;
        padding-left: 26px;
        /*background: blue;*/
        box-sizing: border-box;
    }

    .content1-right .message3 {
        height: 75px;
        /*background: #f7e1b5;*/
        color: #bdc3c9;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .message3 li {
        width: 100%;
        height: 18px;
        line-height: 18px;
    }

    .message3 .gonggao {
        height: 100%;
        font-size: 12px;
        line-height: 18px;
        font-weight: bold;
        color: #82898e;
        float: left;
    }

    .main-content2 {
        width: 1012px;
    }

    .main-content2 .biaoti {
        display: flex;
        justify-content: space-around;
        line-height: 48px;
        font-size: 14px;
        background: #eaf6ff;
        font-weight: bolder;
    }

    .main-content2 .item {
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
    }

    .item .item_box {
        width: 190px;
        height: 114px;
        border-radius: 5px;
        box-shadow: 0px 0px 15px 2px #eee;
        padding-left: 17px;
        padding-top: 10px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    .item_box .item_box1 {
        height: 30px;
        font-size: 16px;
        line-height: 30px;
    }

    .item_box .item_box2 {
        height: 38px;
        font-size: 22px;
        color: #30a2fe;
        line-height: 38px;
        font-weight: bolder;
    }

    .item_box .item_box3 {
        font-size: 10px;
        line-height: 36px;
        color: #a4adb5;
    }

    .item_box .jiantou1 {
        display: inline-block;
        width: 14px;
        height: 14px;
        /*margin-right: 3px;*/
        background: url("../../assets/img/jiantou1.png") no-repeat center center/100% auto;
    }

    .item_box .jiantou2 {
        display: inline-block;
        width: 14px;
        height: 14px;
        /*margin-right: 3px;*/
        background: url("../../assets/img/jiantou2.png") no-repeat center center/100% auto;
    }

    .item_box .jiantou3 {
        display: inline-block;
        width: 14px;
        height: 14px;
        /*margin-right: 3px;*/
        background: url("../../assets/img/jiantou3.png") no-repeat center center/100% auto;
    }

    .main-content3 {
        width: 1012px;
        height: 48px;
    }
    .main-content3 .dian{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #3db0ff;
        box-shadow: 0 0 2px #3db0ff;
        margin-top: 10px;
        margin-right: 5px;
    }
    .main-content3 .export {
        width: 89px;
        height: 26px;
        border-radius: 15px;
        background: #37df72;
        color: white;
        line-height: 26px;
        font-size: 12px;
        text-align: center;
        box-shadow: 0px 0px 15px 2px #eee;
    }

    .freeze {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 999;
    }

    .freeze .freeze-content {
        width: 500px;
        height: 456px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 5px;
        padding-top: 23px;
        padding-left: 29px;
        position: relative;
    }

    .freeze .freeze-content1 {
        width: 438px;
        height: 135px;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 5px;
    }

    .freeze-content1 .text {
        font-size: 10px;
        line-height: 20px;
    }

    .freeze-content3 .button1 {
        width: 82px;
        height: 30px;
        background: url("../../assets/img/button1.png") no-repeat center center/100% auto;
    }

    .freeze .button2 {
        width: 90px;
        height: 30px;
        background: url("../../assets/img/button2.png") no-repeat center center/100% auto;
    }

    .zhexian {
        width: 1012px;
        height: 370px;
        background: url("../../assets/img/zhexiantu.png") no-repeat center center/100% auto;
    }

    .green {
        margin-top: 41px;
        width: 88px;
        height: 26px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0px 5px #37DF73;
        padding-top: 8px;
        padding-left: 18px;
    }
    .main-content .button_left{
         width: 54px;
         height: 20px;
         background: #edf8ff;
         border:2px solid #e8f6ff;
         border-radius: 10px;
         color: #41b2fc;
         line-height: 18px;
         text-align: center;
        margin-top: 5px;
     }
    .main-content .button_right{
        width: 54px;
        height: 20px;
        background: #51b7fc;
        border:2px solid #51b7fc;
        border-radius: 10px;
        color: #fff;
        line-height: 18px;
        text-align: center;
        margin-top: 5px;
    }
</style>