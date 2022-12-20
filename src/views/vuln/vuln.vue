<template>
  <UpDownLayout>
    <template #form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="厂商">
          <el-select v-model="formInline.corp" placeholder="请选择厂商">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="漏洞名称">
          <el-input v-model="formInline.vul" placeholder="漏洞名称"></el-input>
        </el-form-item>
        <el-form-item label="URL">
          <el-input v-model="formInline.ip" placeholder="URL"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select
            v-model="formInline.origin"
            placeholder="全部"
            class="small"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-search"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </template>
    <template #btnLeft>
      <el-button type="primary">漏洞复制</el-button>
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
      <ez-table
        :tableData="tableData"
        :colmns="showCols"
        :key="tablekey"
      ></ez-table>
    </template>
  </UpDownLayout>
</template>

<script>
import UpDownLayout from "@coms/UpDownLayout.vue";
import EzTable from "@coms/EzTable";
import TableOperation from "@/components/TableOperation.vue";

export default {
  data() {
    return {
      formInline: {
        corp: "",
        vul: "",
        url: "",
        grade: "",
      },
      /**
       * 1.给一个原始数据列=通过筛选筛选出需要展示的数列=>给一个默认真实的数据列
       * 2.将所有数据传到tableOpt中=>默认所有数据列都展示
       * 3.在触发事件中,直接将数据进行替换
       * */
      colmns: [
        {
          title: "日期",
          prop: "date",
          isSort: true,
          isdynamic: true,
        },
        {
          title: "姓名",
          prop: "name",
          isdynamic: true,
        },
        {
          title: "地址",
          prop: "address",
          isdynamic: true,
        },
        {
          title: "操作",
          isdynamic: false,
          isOperation: [
            {
              title: "删除",
              type: "danger",
              handle: this.deleteItem,
            },
            {
              title: "编辑",
              type: "warning",
              handle(index, row) {
                console.log(index, row);
              },
            },
          ],
        },
      ],
      tableData: {
        baseData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
        config: {
          // 是否存在选择框
          selection: true,
        },
        pagInation: {
          pageSize: 5,
        },
      },
      // 所有列
      realClomn: {
        demic: [], //动态
        undemic: [], //静态
      },
      // 通过为表格设置key,使每次列表项选择重新渲染
      tablekey: 1,
    };
  },
  computed: {
    // 需要进行渲染的列 动态+非动态
    showCols() {
      return [...this.realClomn.demic, ...this.realClomn.undemic];
    },
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    deleteItem(index) {
      console.log("index", index);
    },
    handleCheckChange(params) {
      this.tablekey++;
      //直接将动态列进行覆盖
      this.realClomn.demic = params;
    },
    // 筛选出真实需要渲染的列
    filter() {
      this.colmns.forEach((el) => {
        if (el.isdynamic) {
          this.realClomn.demic.push(el);
        } else {
          this.realClomn.undemic.push(el);
        }
      });
    },
  },
  components: {
    UpDownLayout,
    EzTable,
    TableOperation,
  },
  created() {
    this.filter();
  },
};
</script>

<style></style>
