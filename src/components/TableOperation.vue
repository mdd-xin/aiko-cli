<template>
  <!-- 筛选项 -->
  <div class="opera-wrap">
    <el-popover placement="left-start" width="200" trigger="click">
      <el-checkbox-group v-model="checkColmns" @change="handleCheckChanges">
        <el-checkbox
          v-for="(item, index) in allColmns"
          :key="index"
          :label="item.title"
        >
          {{ item.title }}
        </el-checkbox>
      </el-checkbox-group>
      <el-tooltip
        class="item"
        effect="dark"
        content="筛选项"
        placement="top"
        slot="reference"
      >
        <i class="el-icon-set-up icon"></i>
      </el-tooltip>
    </el-popover>
    <!-- 导出 -->
    <el-tooltip class="item" effect="dark" content="导出" placement="top">
      <i class="el-icon-folder-opened icon"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    filterClomn: Array,
  },
  data() {
    return {
      allColmns: [],
      checkColmns: [],
    };
  },
  methods: {
    handleCheckChanges(arr) {
      let result = this.allColmns.filter((el) => arr.includes(el.title));
      // 修改某列是否显示
      this.$emit("handleCheckChange", result);
    },
  },
  created() {
    // 将数据重新进行赋值,使其失去响应式,作为所有列
    this.allColmns = JSON.parse(JSON.stringify(this.filterClomn));
    // 在生命周期
    this.checkColmns = this.filterClomn.map((el) => el.title);
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
.opera-wrap {
  .icon {
    height: 14px;
    width: 14px;
    padding: 5px;
    border: 1px $borderColor solid;
    margin-left: 10px;
  }
  .icon:hover {
    cursor: pointer;
  }
}
</style>
