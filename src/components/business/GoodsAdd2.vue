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
                        <el-breadcrumb-item>
                            <router-link to="/goods">商品列表</router-link>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">添加商品</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <ul class="top">
                        <li>
                            <router-link to="/GoodsAdd1"><span class="btn" style="color: white">选择商品分类</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/GoodsAdd2"><span class="btn" style="color: white">填写商品信息</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/GoodsAdd3"><span class="btn">选择商品关联</span></router-link>
                        </li>
                    </ul>
                    <div class="bottom">
                        <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                            <div class="col-box"></div>
                            基本信息
                        </div>
                        <div class="title">
                            <span style="font-size: 16px">商品分类：</span>
                            <el-breadcrumb separator="/" style="display: inline-block">
                                <el-breadcrumb-item>洗衣</el-breadcrumb-item>
                                <el-breadcrumb-item>羽绒服清洗</el-breadcrumb-item>
                            </el-breadcrumb>
                            <i class="el-icon-edit"></i>
                            <div class="neirong">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="商品货号">
                                    <el-input v-model="form.id" class="inputbox"></el-input>
                                    <div class="tishi">商家货号是指商家管理商品的编号，买家不可见，最多可输入20个字符，支持输入中文、英文、字母、_、/和小数点</div>
                                </el-form-item>
                                    <el-form-item label="商品名称">
                                        <el-input v-model="form.name" class="inputbox"></el-input>
                                        <div class="tishi">商品标题名称长度至少1个字符，最长150个汉字</div>
                                    </el-form-item>
                                    <el-form-item label="商品简单描述">
                                        <template>
                                            <textarea id="" cols="30" rows="10" v-model="form.desc" class="details"></textarea>
                                        </template>
                                    </el-form-item>
                                    <el-form-item label="价格">
                                        <el-input v-model="form.money" class="inputbox"></el-input>
                                        <div class="tishi">
                                            价格必须是在0.01-99999999之间的数字，且不能高于市场价，此价格为商品实际销售价格，如果商品存在规格，该价格显示最低价格
                                        </div>
                                    </el-form-item>

                                    <el-form-item label="折扣价">
                                        <el-input v-model="form.zhekou" class="inputbox"></el-input>
                                    </el-form-item>
                                    <el-form-item label="上传商品图片" style="height: 80px;overflow: hidden">
                                        <el-upload
                                                class="avatar-uploader"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :show-file-list="false"
                                                :on-success="handleAvatarSuccess"
                                                :before-upload="beforeAvatarUpload">
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder;margin-top: 15px">
                            <div class="col-box"
                                 style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                            基本信息
                        </div>
                        <div class="message">
                            <div><span style="color: #a4adb5">基本要求：</span>手机详情总体大小：图片+文字不超过20张，文字不超过5000字&nbsp&nbsp&nbsp&nbsp<span
                                    style="color:#3bacfe;">建议:</span>所有图片都是本宝贝相关的图片
                            </div>
                            <div><span style="color: #a4adb5">图片大小：</span>1.建议使用宽度480-620像素，高度小于等于960像素的图片。&nbsp&nbsp2.格式为：JPG/PNG/GIF
                            </div>
                            <div><span style="margin-left:70px;color:#3bacfe;">举例：可以上传宽度为480，高度为960像素，格式为JPG的图片。</span>
                            </div>
                            <div><span style="color: #a4adb5">文字要求：</span>每次插入文字不超过500字，标点、特殊字符按一个字算。2.请手动输入文字，不要复制粘贴网页上的文字，防止出现乱码。3.以下特殊字符“＜”“＞”“、”“/”会被替换为空。
                            </div>
                            <div><span style="margin-left:70px;color:#3bacfe;">建议:</span>不要添加太多的文字，这样看起来更清晰。
                            </div>
                            <div style="width:100%;margin-left: 70px;margin-top:15px;">
                                <router-link to=""></router-link>
                                <div @click="open" class="shangchuan"></div>
                            </div>
                            <el-form ref="form" :model="form" label-width="80px"
                                     style="margin-left: 60px;margin-top: 20px;margin-bottom: 20px">
                                <el-form-item label="文字描述">
                                    <el-input v-model="form.countent" class="inputbox"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder;margin-top: 15px">
                            <div class="col-box"
                                 style="width:12px;height:7px;border-radius:5px;margin-top:17px;margin-left:10px;margin-right: 7px;background-color: #37e06f;"></div>
                            其他信息
                        </div>
                        <div class="message" style="height: 180px;margin-bottom: 20px;">
                            <el-form ref="form" :model="form" label-width="80px"
                                     style="margin-top: 20px;margin-bottom: 20px">
                                <el-form-item label="上架">
                                <el-switch
                                    v-model="value2"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                                </el-form-item>
                                <el-form-item label="关键词">
                                    <el-input v-model="form.key" class="inputbox"></el-input>
                                    <div class="tishi">
                                        商品关键词请用空格分隔
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>

                        <router-link to="/GoodsAdd1">
                            <el-button type="primary" round style="margin-right: 20px" class="blue">上一步，选择商品分类</el-button>
                        </router-link>
                        <router-link to="/GoodsAdd3">
                            <el-button type="primary" round class="blue">下一步，选择商品关联</el-button>
                        </router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsAdd2",
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    desc: '',
                    money: '',
                    zhekou: '',
                    countent: '',
                    key:''
                },
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false,
                value2: true
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            open() {
                const h = this.$createElement;
                this.$msgbox({
                    title: '消息',
                    message: h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
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
    }
    .content {
        position: absolute;
        top:80px;
        bottom:0;
        left:18%;
        right:0;
        background:white;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border: 1px dashed #ccc;
    }

    .avatar {
        width: 80px;
        height: 80px;
        display: block;
        border: 1px dashed #ccc;
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


    .content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .content .item {
        width: 90%;
        height: 50px;
    }

    .content .item .top {
        width: 100%;
        height: 39px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #000;
        line-height: 39px;
    }

    .item ul li:first-child {
        background: url("../../assets/img/add1.png") no-repeat center center/100% auto;
    }

    .item ul li:nth-child(2) {
        background: url("../../assets/img/add4.png") no-repeat center center/100% auto;
    }

    .item ul li:last-child {
        background: url("../../assets/img/add3.png") no-repeat center center/100% auto;
    }

    .top li {
        width: 333px;
        height: 100%;
        text-align: center;
    }

    .top li .btn {
        width: 333px;
        height: 100%;
        color: #000;
    }

    .content .item .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        height: 686px;
        margin-top: 10px;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        border-bottom: 1px solid #eee;
    }
    .bottom .col-box{
        width:12px;
        height:7px;
        border-radius:5px;
        margin-top:17px;
        margin-left:10px;
        margin-right: 7px;
        background-color: #37e06f;
    }
    .bottom .title .neirong {
        width: 100%;
        height: 640px;
        padding-left: 25px;
    }

    .inputbox {
        width: 272px;
    }
    .tishi {
        font-size: 12px;
        color: #999;
    }

    .bottom .message {
        width: 100%;
        height: 570px;
        padding-left: 25px;
        box-sizing: border-box;
        line-height: 28px;
        font-size: 12px;
        border-bottom: 1px solid #eee;
    }
    .bottom .message .shangchuan{
        width: 218px;height: 312px;background:#bbdff6;
        background: url("../../assets/img/shangchuan.png")no-repeat center center/100% auto;
    }
    .el-icon-edit{
        margin-left:10px;
        font-size:24px;
        text-align:center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background:#3bacfe;
        line-height: 30px;
        box-shadow: 0 3px 8px #48A1FF;
    }
    .content .blue {
        height: 30px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 5px #30B5FE;
        margin-left: 20px;
        padding-top: 8px;
    }
    .title .details{
        width: 350px;
        height:84px;
        outline:none;
        resize:none;
        border-radius: 5px;
        background: #f3faff;
        border:2px solid #e5eff8;
    }

</style>