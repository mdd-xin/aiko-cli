<template>
  <UpDownLayout>
    <template #form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="厂商名称">
          <el-input
            v-model="formInline.portname"
            placeholder="厂商名称"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-search"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </template>
    <template #btnLeft>
      <el-button type="primary">添加厂商</el-button>
      <el-button type="danger">删除</el-button>
      <el-button>刷新表格</el-button>
    </template>
    <template #btnRight>
      <div>
        <table-operation
          :filterClomn="realClomn.demic"
          @handleCheckChange="handleCheckChange"
        ></table-operation>
      </div>
    </template>
    <template #content>
      <mdd-table  
        :key="tablekey"
        ref="tableClomns"
        :tableData="tableData"
        :VisibleCol="VisibleCol">
        <template #clomns >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
             <template>
               <tab-control></tab-control>
             </template>
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </template>
      </mdd-table>
    </template>
  </UpDownLayout>
</template>

<script>
import UpDownLayout from "@coms/UpDownLayout.vue";
import MddTable from "@/components/MddTable.vue";
import TableOperation from "@/components/TableOperation.vue";
import TabControl from "@/layout/components/TabControl.vue";

export default {
  name:'MddCorp',
  data() {
    return {
      formInline: {
        portname: "",
      },
      VisibleCol:['日期','姓名','地址'],
      tableData: [
          {
            switch: true,
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            switch: false,
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            switch: false,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            switch: true,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            switch: false,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            switch: true,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      realClomn: {
        demic: [], //动态
        undemic: [], //静态
      },
      tablekey: 1,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleCheckChange(params) {
      this.tablekey++;
      //直接将动态列进行覆盖
      this.realClomn.demic = params;
    },
  },
  mounted(){
    // 获取所有列
    console.log('ref',this.$refs.tableClomns);
    // 将所有列列名进行提取
    // 查看是否存在this.VisibleCol
    
  }, 
  components: {
    UpDownLayout,
    MddTable,
    // EzTable,
    TableOperation,
    TabControl
  },
};
</script>

<style></style>
