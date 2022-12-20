<template>
  <div :class="['app-wrap', { hidden: isCollapse }]">
    <sidebar class="main-sidebar" :isCollapse="isCollapse" />
    <div class="main-container">
      <navbar class="contenter-nav" :isCollapse="isCollapse" />
      <tag />
      <div class="contenter-content">
        <div class="content">
          <!-- 将组件进行缓存 -->
          <keep-alive :include="['MddCorp','MddHome']">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";
import sidebar from "./components/Sidebar.vue";
import Tag from "./components/Tag.vue";

import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    navbar,
    sidebar,
    Tag,
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
.app-wrap {
  height: 100vh;
  width: 100%;
  position: relative;
  .main-sidebar {
    position: absolute;
  }
  .main-container {
    position: relative;
    height: 100%;
    margin-left: $sideBarWidth;
    transition: margin-left 0.3s ease-in-out;

    .contenter-content {
      position: absolute;
      top: calc(#{$navHeight} + #{$tagHeight});
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(245, 245, 245);
      // background-color: red;
      padding: 15px;
      overflow: auto;
      overflow-x: hidden;
      .content {
        // height: 650%;
        width: 100%;
        background-color: white;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

.hidden {
  .main-sidebar {
    width: 64px;
  }
  .main-container {
    margin-left: 64px;
  }
}
</style>
