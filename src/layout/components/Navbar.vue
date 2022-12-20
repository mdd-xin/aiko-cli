<template>
  <div class="navbar">
    <el-row class="left-nav">
      <el-col :span="12" class="col-start">
        <i class="el-icon-s-fold" @click="click" v-show="isCollapse"></i>
        <i class="el-icon-s-unfold" @click="click" v-show="!isCollapse"></i>
      </el-col>
      <el-col :span="12" class="col-center bk-grey">
        <span>EZ</span>
      </el-col>
    </el-row>
    <el-row class="right-nav">
      <el-col :span="4" class="col-center"
        ><i class="el-icon-refresh"></i
      ></el-col>
      <el-col :span="4" class="col-center"
        ><i class="el-icon-full-screen"></i
      ></el-col>
      <el-col :span="12" class="col-center"
        ><el-dropdown>
          <span class="el-dropdown-link">
            Hello,EZ<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></el-col
      >
      <el-col :span="4" class="col-center"
        ><i class="el-icon-s-operation"></i
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    click() {
      this.$store.dispatch("app/toggleSidBar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
@import "@styles/mixin.scss";
.navbar {
  height: $navHeight;
  width: 100%;
  font-size: 16px;
  @include flex(space-between);
  & > div {
    @include flex(space-between);
  }
  .bk-grey {
    height: 100%;
    font-weight: 550;
    background-color: rgb(228, 228, 228);
  }
  .col-start {
    @include flex(flex-start);
  }
  .col-center {
    @include flex(center);
  }
  .left-nav {
    width: 120px;
    height: 100%;
    margin-left: 37px;
  }
  .right-nav {
    width: 240px;
    height: 100%;

    .el-dropdown-link {
      cursor: pointer;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  i:hover {
    cursor: pointer;
  }
}
</style>
