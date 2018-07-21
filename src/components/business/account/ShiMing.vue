<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">账户管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">实名认证</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="bottom">
                <div class="title">
                    <el-form ref="form" :model="form" label-width="150px">
                        <el-row style="width:850px;">
                            <el-form-item label="*真实姓名">
                                <el-input v-model="form.name"
                                          placeholder="王卓"
                                          style="width:500px">
                                </el-input>
                                <div>为确保您的账户安全，请填写本人的实名认证信息。</div>
                            </el-form-item>
                            <el-form-item label="*身份证号码">
                                <el-input v-model="form.number"
                                          placeholder="342605121212121200"
                                          style="width:500px">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="*身份证正面图片">
                                <div style="display: flex;justify-content: space-between">
                                    <el-input v-model="form.url1"
                                              placeholder="http:test1.ecmoban.com/seller_imgs/seller_logo/seller_logo1.jpg"
                                              style="width:500px">
                                    </el-input>
                                    <el-button type="primary" round class="blue">上传</el-button>
                                </div>
                            </el-form-item>
                            <el-form-item label="*身份证背面图片">
                                <div style="display: flex;justify-content: space-between">
                                    <el-input v-model="form.url2"
                                              placeholder="http:test1.ecmoban.com/seller_imgs/seller_logo/seller_logo1.jpg"
                                              style="width:500px">
                                    </el-input>
                                    <el-button type="primary" round class="blue">上传</el-button>
                                </div>
                            </el-form-item>
                            <el-form-item label="*开户行">
                                <el-input v-model="form.bank" placeholder="上海建设银行中山支行"
                                          style="width:500px"></el-input>
                            </el-form-item>
                            <el-form-item label="*银行卡号">
                                <el-input v-model="form.bankNumber" placeholder="123456789123456789"
                                          style="width:500px"></el-input>
                            </el-form-item>
                            <el-form-item label="*手机号码">
                                <el-input v-model="form.telephone" placeholder="13112341234"
                                          style="width:500px"></el-input>
                            </el-form-item>
                            <el-form-item label="*手机号码">
                                <div>已认证</div>
                            </el-form-item>
                        </el-row>
                    </el-form>
                </div>
            </div>
            <el-button type="primary" round class="blue">确定</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShiMing",
        data() {
            return {
                form: {
                    name: '',
                    number: '',
                    url1: '',
                    url2: '',
                    bank: '',
                    bankNumber: '',
                    telephone: '',
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

    .content .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
    }
    .content .blue {
        height: 33px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
        padding-top: 8px;
    }

</style>