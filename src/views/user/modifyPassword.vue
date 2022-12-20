<!--  -->
<template>
    <div class="content">
        <!-- <div class="content"> -->
            <el-form :model="form" :rules="rules" ref="form" label-width="100px">
                <el-form-item label="原密码" prop="old_password">
                    <el-input v-model="form.old_password"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="new_password">
                    <el-input v-model="form.new_password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirm_password">
                    <el-input v-model="form.confirm_password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">确认修改</el-button>
                </el-form-item>
            </el-form>
        <!-- </div> -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'modifyPasswordView',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        return {
            form:{
                old_password:'',
                new_password:'',
                confirm_password:''
            },
            rules: {
                old_password: [
                    { required: true, message: '原密码不能为空', trigger: 'blur' },
                ],
                new_password:[
                { required: true, message: '新密码不能为空', trigger: 'blur' },
                ],
                confirm_password:[
                { required: true, message: '确认密码不能为空', trigger: 'blur' },
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
/* .el-form{
    padding-top: 15px;
    padding-right: 15px;
} */
</style>