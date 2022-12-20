<!--  -->
<template>
    <div id="main">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
            <el-form-item prop="password">
                <el-input type="password" v-model="formInline.password" placeholder="初始密码为ez"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formInline')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { userLogin } from '@/apis/user/login'
export default {
    name: 'loginView',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        return {
            formInline: {
                password: ''
            },
            rules: {
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                ]
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    userLogin(this.formInline).then(res => {
                        console.log(res);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
#main {
    background-image: url(../../assets/images/loginbg.jpg);
    width: 100%;
    height: 100%;
    position: fixed;
    text-align: center;
    background-size: 100% 100%;
}

.demo-form-inline {
    margin-top: 90px;
}
</style>