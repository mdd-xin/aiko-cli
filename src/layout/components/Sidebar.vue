<template>
  <div class="sidebar-wrap">
    <div class="sidebar-logo-container">
      <img
        src="@assets/images/logo.png"
        alt=""
        class="sidebar-logo"
        :style="{ 'margin-right': !isCollapse ? '10px' : 0 }"
      />
    </div>
    <el-scrollbar style="height: 100%">
      <!-- 滚动条要包裹的内容 -->
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="rgb(35, 50, 67)"
        text-color="#ffffff"
        active-text-color="#ffffff"
        router
      >
        <div v-for="menu in menuList" :key="menu.index">
          <el-submenu v-if="menu.children" :index="menu.index">
            <template slot="title">
              <i :class="menu.icon"></i>
              <span slot="title">{{ menu.title }}</span>
            </template>
            <el-menu-item
              :index="childmenu.index"
              v-for="childmenu in menu.children"
              :key="childmenu.index"
            >
              <i :class="childmenu.icon"></i>
              <span slot="title">{{ childmenu.title }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="menu.index">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      menuList: [],
    };
  },
  computed: {
    activeMenu() {
      let path = this.$route.path;
      return path;
    },
  },
  created() {
    console.log(this.activeMenu);
    this.menuList = this.$menu;
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
@import "@styles/mixin.scss";

$fontColor: #ffffff;
//   --sidebar-second-bak:rgb(55,68,77);
.sidebar-wrap {
  height: 100%;
  overflow: hidden;
  width: $sideBarWidth;
  background-color: $sideBarBkColor;
  color: $fontColor;
  transition: width 0.3s ease-in-out;

  .sidebar-logo-container {
    width: 100%;
    background-color: rgb(0, 0,0);
    @include flex(center);
    .sidebar-logo {
      height: 60px;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

// 覆盖vue默认样式
::v-deep .el-menu {
  .el-submenu__title > i {
    color: $fontColor !important;
  }
  .el-submenu__title,
  .el-menu-item {
    display: flex;
    align-items: center;
    &:hover {
      background: $primaryColor !important;
    }
  }
  .is-active {
    background: $primaryColor !important;
  }
}
</style>
