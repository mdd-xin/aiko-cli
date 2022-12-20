<!--  -->
<template>
    <div class='content'>
        <el-form :model="form" label-width="100px" :rules="rules" ref="form">
            <el-form-item label="资产列表" prop="resource">
                <el-input type="textarea" v-model="form.resource"
                    :placeholder="resource" :autosize="{ minRows: 5, maxRows:8}"></el-input>
            </el-form-item>
            <el-form-item>
                <el-col :span="2">
                    <el-button type="primary">一键分练</el-button>
                </el-col>
                <el-col :span="6">
                    <label>提取资产中的主域名、子域名、IP、URL</label>
                </el-col>
            </el-form-item>
        </el-form>
        <el-form :model="split_form" label-width="100px">
          <el-form-item label="主域名">
            <el-input v-model="split_form.main_domain" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="子域名">
            <el-input v-model="split_form.child_domain" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="IP">
            <el-input v-model="split_form.ip" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="URL">
            <el-input v-model="split_form.url" type="textarea"></el-input>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'assetsExtract',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        return {
            form: {
                resource: ''
            },
            split_form:{
                main_domain:'',
                child_domain:'',
                ip:'',
                url:''
            },
            resource:'支持域名、IP、URL资产，示例如下：\naaa.com\na.bbb.com\n192.168.1.1\nhttp://aaa.bbb.com/',
            rules: {
                resource: [
                    { required: true, message: '资产列表不能为空', trigger: 'blur' },
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
</style>