<template>
    <div class="box">
            <!--侧边栏-->
            <div class="aside">
                <div class="logo"></div>
                <ul class="aside-list">
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/goods">商品列表</router-link>
                    </li>
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/goods/GoodsManage">分类管理</router-link>
                    </li>
                    <li>
                        <div class="col-box"></div>
                        <router-link to="/goods/GoodsAssess">用户评价</router-link>
                    </li>
                </ul>
            </div>
            <!--主内容-->
            <div class="content">
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366">查看详情</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <div class="bottom">
                        <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                            <div class="col-box"
                                 style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                            编号：<span style="color:#30a3fe;">103</span>
                        </div>
                        <div class="title">
                            <el-form ref="form" :model="form" label-width="120px">
                                <el-row style="width: 500px;">
                                    <el-form-item label="货号:">
                                        <div>ECS00103</div>
                                    </el-form-item>
                                    <el-form-item label="商品名称:">
                                        <el-input v-model="form.name" placeholder="羽绒服清洗"></el-input>
                                    </el-form-item>
                                    <el-form-item label="分类:">
                                        <el-select v-model="form.type" placeholder="洗衣">
                                            <el-option label="洗衣" value="xiyi"></el-option>
                                            <el-option label="洗鞋" value="xixie"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="价格:">
                                        <el-input v-model="form.money1" placeholder="3299.00"></el-input>
                                    </el-form-item>
                                    <el-form-item label="折扣价:">
                                        <el-input v-model="form.money2" placeholder="3199.00"></el-input>
                                    </el-form-item>
                                    <el-form-item label="商品运费:">
                                        <el-select v-model="form.yunfei" placeholder="按固定运费">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="上下架:">
                                        <el-switch
                                                v-model="form.value1"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>
                                    <el-form-item label="商品运费:">
                                    <textarea id="" cols="30" rows="10" v-model="form.desc"
                                              placeholder="多年羽绒服清洗经验，干净无损" class="details"></textarea>
                                    </el-form-item>
                                    <el-form-item label="发布时间:">
                                        <el-date-picker v-model="form.data" type="date"
                                                        placeholder="2018-03-18 12:10:02">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="上传商品图片:">
                                        <div style="width:450px;display: flex;justify-content: space-between">
                                           <div>
                                               <div class="shangpin1"></div>
                                               <div style="display: flex;font-size: 12px;line-height: 30px">
                                                   <span>图片一</span>
                                                   <el-button type="primary" round @click="" style="font-size:10px;width: 60px;margin-top:5px;height:25px;padding-top: 5px;padding-left: 5px">修改图片</el-button>
                                               </div>
                                           </div>
                                            <div>
                                                <div class="shangpin1"></div>
                                                <div style="display: flex;font-size: 12px;line-height: 30px">
                                                    <span>图片二</span>
                                                    <el-button type="primary" round @click="" style="font-size:10px;width: 60px;margin-top:5px;height:25px;padding-top: 5px;padding-left: 5px">修改图片</el-button>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="shangpin1"></div>
                                                <div style="display: flex;font-size: 12px;line-height: 30px">
                                                    <span>图片三</span>
                                                    <el-button type="primary" round @click="" style="font-size:10px;width: 60px;margin-top:5px;height:25px;padding-top: 5px;padding-left: 5px">修改图片</el-button>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="shangpin2"></div>
                                                <div style="display: flex;font-size: 12px;line-height: 30px">
                                                    <span>上传图片</span>
                                                </div>

                                            </div>
                                        </div>
                                    </el-form-item>
                                </el-row>
                            </el-form>
                        </div>
                    </div>
                    <div style="padding-left:40px">
                        <el-button type="primary" round @click="" class="blue">保存</el-button>
                        <el-button type="danger" round @click="" class="red">取消</el-button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsDetails",
        data() {
            return {
                form: {
                    name: '',
                    money1: '',
                    money2: '',
                    type: '',
                    yunfei: '',
                    desc: '',
                    data: '',
                    value1:''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
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
    .aside {
        width: 12%;
        min-height: 800px;
        background: #1f262c;
        float: left;
        position: fixed;
        top: 0;
        left: 0;
    }

    .aside .logo {
        width: 100%;
        height: 125px;
        background: url("../../assets/img/logo.png") no-repeat center center/100% auto;
    }

    .aside-list li {
        width: 100%;
        height: 72px;
        line-height: 72px;
    }
    .content {
        position: absolute;
        top:80px;
        bottom:0;
        left:18%;
        right:0;
        background: white;
    }

    .content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .content .item {
        width: 100%;
        height: 50px;
    }

    .content .item .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        /*margin-top: 10px;*/
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
    }
    .bottom .title .shangpin1 {
        width: 96px;
        height: 96px;
        background: url("../../assets/img/sptp1.png")no-repeat center center /100% auto;
    }
    .bottom .title .shangpin2{
        width: 96px;
        height: 96px;
        background: url("../../assets/img/sptp2.png")no-repeat center center /100% auto;
    }
    .content .red{
        height: 35px;
        background: #FD5E4E;
        border:none;
        box-shadow:0 0px 8px #FD5E4E;
    }

    .content .blue{
        height: 35px;
        background: #30B5FE;
        border:none;
        box-shadow:0 0px 8px #30B5FE;
    }
    .title .details{
        width: 600px;
        height:116px;
        outline:none;
        resize:none;
        border-radius: 3px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }

</style>