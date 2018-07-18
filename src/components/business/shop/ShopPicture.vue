<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">店铺图片设置</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="item">
                <div class="bottom">
                    <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                        <div class="col-box"></div>
                        <span style="color:#30a3fe;">图片</span>上传
                    </div>
                    <div class="title">
                        <el-form ref="form" :model="form" label-width="150px">
                            <el-row style="width:800px;">
                                <el-form-item label="*LOGO缩略图">
                                    <div style="display: flex;justify-content: space-between">
                                        <el-input v-model="form.url1"
                                                  placeholder="http:test1.ecmoban.com/seller_imgs/seller_logo/seller_logo1.jpg"
                                                  style="width:480px">
                                        </el-input>
                                        <el-button type="success" round @click="" class="green">上传</el-button>
                                        <span style="color:#41b2fc">模板样式</span>
                                    </div>
                                    <div style="color:#ff8564">大小限制：80*80像素</div>
                                </el-form-item>
                                <el-form-item label="*店铺封面图">
                                    <div style="display: flex;justify-content: space-between">
                                        <el-input v-model="form.url2"
                                                  placeholder="http:test1.ecmoban.com/seller_imgs/seller_logo/seller_logo1.jpg"
                                                  style="width:480px"></el-input>
                                        <el-button type="success" round @click="" class="green">上传</el-button>
                                        <span style="color:#41b2fc">模板样式</span>
                                    </div>
                                    <div style="color:#ff8564;">大小限制：无限制</div>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div class="bottom1">
                    <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                        <div class="col-box"></div>
                        <span style="color:#30a3fe;">审核</span>状态
                    </div>
                    <div class="title1">
                        <el-form ref="form" :model="form" label-width="100px">
                            <el-row style="width: 500px;">
                                <el-form-item label="审核状态">
                                    <div style="color: #37df71;font-weight: bolder">审核成功</div>
                                </el-form-item>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div style="float: right">
                    <el-button type="success" round @click="" class="green">提交</el-button>
                    <el-button type="danger" round @click="" class="red">取消</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopPicture",
        data() {
            return {
                form: {
                    url1:'',
                    url2:'',
                },

            }
        },
        methods: {}
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

    .content .item {
        width: 100%;
        height: 50px;
    }

    .content .item .bottom {
        width: 100%;
    }

    .content .item .bottom1 {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        height: 200px;
        /*margin-top: 10px;*/
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        border-bottom: 1px solid #eee;
    }
    .bottom1 .title1 {
        width: 90%;
        height: 100px;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
    }
    .content .red {
        height: 33px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0px 8px #FD5E4E;
    }
    .content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
    }


</style>