<template>
    <div class="content">
        <div class="biaoti">
            <el-breadcrumb separator="·">
                <el-breadcrumb-item :to="{ path: '/' }">账户管理</el-breadcrumb-item>
                <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">账户冻结</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tongzhi">
            <div style="height: 52px;">
                <div style="width: 9px;height: 6px;border-radius: 3px;background:#37e06f;display: inline-block;"></div>
                <span style="margin-left: 9px;color: #41b2fc;font-size: 16px;line-height: 52px;font-weight: bolder">通知</span>
            </div>
            <div class="message">
                <div>您好，由于多名用户投诉，所以在2018年5月20日将商家的店铺冻结。</div>
                <div>具体冻结原因：</div>
                <div>多名用户投诉商家的商品包装有问题。</div>
                <div class="text">
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-row style="width: 500px;">
                            <el-form-item label="申请描述：">
                                    <textarea id="" cols="30" rows="10" v-model="form.desc" class="details"></textarea>
                            </el-form-item>
                            <el-form-item label="凭证上传：">
                                <div style="display: flex;justify-content: space-between">
                                    <el-input v-model="form.url">
                                    </el-input>
                                    <el-button type="primary" round class="blue" style="margin-left:20px">上传照片</el-button>
                                </div>
                            </el-form-item>
                            <el-form-item label="审核状态：">
                                <div>暂无审核记录</div>
                            </el-form-item>
                        </el-row>
                    </el-form>
                    <el-button type="primary" round class="blue">申请</el-button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountThawing",
        data() {
            return {
                form: {
                    desc: '',
                    url: ''
                }
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
        font-size: 12px;
        font-weight: bolder;
        margin-bottom: 5px;
    }

    .content .tongzhi {
        width: 100%;
    }

    .tongzhi .message {
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 10px;
        line-height: 20px;
    }

    .message .text {
        margin-top: 30px;
    }
    .content .blue {
        height: 33px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
        padding-top: 10px;
    }
    .text .details{
        width: 500px;
        height:120px;
        outline:none;
        resize:none;
        border-radius: 5px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }
</style>