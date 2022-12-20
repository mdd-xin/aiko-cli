<!--  -->
<template>
    <div class='content'>
        <fieldset class="table-search-fieldset">
            <legend align="left">IP归属地查询</legend>
            <div style="margin: 10px 10px 10px 10px;float: left;">
                <el-form :model="form" :inline="true">
                    <el-form-item>
                        <el-input v-model="form.ip">
                            <template slot="prepend">IP</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('formInline')" icon="el-icon-search">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </fieldset>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'IP',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        return {
            form: {
                ip: ''
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
.table-search-fieldset {
    margin: 10px;
    border: 1px solid #e6e6e6;
    padding: 10px 20px 5px 20px;
    color: #6b6b6b;
}

/* legend {
    padding-left: 2px;
    padding-right: 2px;
} */
</style>