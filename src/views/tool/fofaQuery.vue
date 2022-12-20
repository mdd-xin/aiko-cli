<!--  -->
<template>
    <div class="content">
        <div>
            <el-form :model="form" :inline="true">
                <el-form-item>
                    <el-input v-model="form.fofa" placeholder="ip='1.1.1.1' && title='百度'">
                        <template slot="prepend">FOFA查询语法</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('formInline')" icon="el-icon-search">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table">
            <div class="filter_col">
                <el-popover placement="bottom" trigger="click" width="40" style="float: left;">
                    <el-checkbox-group v-model="checkedColumns">
                        <el-checkbox v-for="item in checkBoxGroup" :key="item" :label="item" :value="item">
                        </el-checkbox>
                    </el-checkbox-group>
                    <el-button slot="reference" icon="el-icon-c-scale-to-original" class="filter_button">
                    </el-button>
                </el-popover>
            </div>
            <div class="filter_export">
                <el-popover placement="bottom" width="40" style="float: left;">
                    <div class="export_button">
                        <el-button type="text">导出到Csv文件</el-button>
                        <el-button type="text">导出到Excel文件</el-button>
                    </div>
                    <el-button slot="reference" icon="el-icon-folder-opened" class="filter_button">
                    </el-button>
                </el-popover>
            </div>
            <div>
                <el-table :key="reload" :data="data" border>
                    <el-table-column v-if="colData[0].istrue" prop="serverCode" label="IP" width="80px">
                    </el-table-column>
                    <el-table-column v-if="colData[1].istrue" prop="innerIp" label="端口" width="120px" sortable>
                    </el-table-column>
                    <el-table-column v-if="colData[2].istrue" prop="isRestartStr" label="协议"></el-table-column>
                    <el-table-column v-if="colData[3].istrue" prop="duration" label="标题"></el-table-column>
                    <el-table-column v-if="colData[4].istrue" prop="updatetimeStr" label="URL"></el-table-column>
                    <el-table-column v-if="colData[5].istrue" prop="sysStatusStr" label="域名"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'fofaQuery',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        return {
            form: {
                fofa: ''
            },
            colData: [
                { title: "IP", istrue: true },
                { title: "端口", istrue: true },
                { title: "协议", istrue: true },
                { title: "标题", istrue: true },
                { title: "URL", istrue: true },
                { title: "域名", istrue: true },
            ],
            // 多选框的列表，列出表格的每一列
            checkBoxGroup: ["IP", "端口", "协议", "标题", "URL", "域名"],
            // 当前选中的多选框，代表当前展示的列
            checkedColumns: ["IP", "端口", "协议", "标题", "URL", "域名"],
            // exportChoice:["导出到Csv文件", "导出到Excel文件"],
            data: [],
            reload: 0
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        checkedColumns(val) {
            let arr = this.checkBoxGroup.filter(i => !val.includes(i));
            this.colData.filter(i => {
                if (arr.indexOf(i.title) != -1) {
                    i.istrue = false;
                } else {
                    i.istrue = true;
                }
            });
            this.reload = Math.random()
        }
    },
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
.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
}

.table {
    width: 100%;
}

.filter_button {
    border-radius: 0px;
    margin-bottom: 5px;
}

.export_button{
    display: flex;
    flex-direction: column;
}

</style>