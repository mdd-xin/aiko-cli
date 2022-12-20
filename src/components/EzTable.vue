<template>
  <!-- 
     props.colmns=[
        {
          title: "日期", //列名(必需)
          prop: "date",  //字段名(必需)
          isSort: true,  //是否排序
          isdynamic: true,  //是否为动态菜单(必需)
        },
     ]
     props.tableData={
        baseData:{},=>数据表数据
        config:{   //<=该项为扩展项
          selection: true,
        }
        pagInation:{
          pageSize:3 每页数目
          pageChange(){}当页码发生改变时,触发的事件
        }
     }
     -->
  <div>
    <el-table
      :data="baseData"
      border
      style="width: 100%"
      @select="selectRow"
      @select-all="selectAll"
    >
      <el-table-column v-if="config.selection" type="selection" width="40">
      </el-table-column>
      <el-table-column
        v-for="item in colmns"
        :key="item.title"
        :prop="item.prop"
        :label="item.title"
        :type="item.type"
        :sortable="!!item.isSort"
        show-overflow-tooltip
      >
        <template slot-scope="{ row, $index }">
          <span>{{ row[item.prop] }}</span>
          <template v-if="item.isOperation">
            <span v-for="opera in item.isOperation" :key="opera.title">
              <el-button
                size="mini"
                :type="opera.type"
                @click="opera.handle(1, 2)"
                >{{ opera.title }}</el-button
              ></span
            >
          </template>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="this.baseData.length"
        :page-size="pagInation.pageSize"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      require: true,
    },
    colmns: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    baseData() {
      return this.tableData.baseData;
    },
    config() {
      return this.tableData.config;
    },
    pagInation() {
      return this.tableData.pagInation;
    },
  },
  methods: {
    // 页面改变
    pageChange(page) {
      this.$emit("pageChange", page);
    },
    // 勾选单项
    selectRow(row) {
      console.log("row", row);
    },
    // 勾选所有
    selectAll(all) {
      console.log("all", all);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/mixin.scss";
@import "@styles/variable.scss";
.block {
  @include flex(flex-end);
}
button {
  margin-right: 5px;
}
::v-deep .el-table__header {
  .el-table__cell {
    padding: 5px 0px;
    background-color: rgb(250, 250, 250);
  }
}

::v-deep .el-table__body {
  .el-table__cell {
    padding: 5px 0px;
  }
}
</style>
