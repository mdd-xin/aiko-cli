<template>
  <div class="tag-wrap">
    <div
      class="btn"
      @click="leftMove"
    ><i class="el-icon-arrow-left"></i></div>
    <div class="tag-items">
      <div class="tag-slider">
        <tag-slide>
          <el-tag
          v-for="tag in tagViews"
          :key="tag.name"
          :closable="!fixArr.includes(tag)"
          :type="isAcitve(tag)?'success':'info'"
          :style="{marginRight:'3px'}"
          @click="skipRouter(tag)"
          @close="closeTag(tag)"
        >
          {{tag.name}}
        </el-tag>
        </tag-slide>
      </div>
    </div>
    <div
      class="btn"
      @click="rightMove"
    >
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="btn"><i class="el-icon-arrow-down"></i></div>
  </div>
</template>

<script>
import { routes } from '@router/index.js'
import TagSlide from './TagSlide.vue';
export default {
  data () {
    return {
      fixArr: [],
      marLeft: 0
    };
  },
  computed: {
    tagViews () {
      return this.$store.state.tags.visitedViews;
    }
  },
  methods: {
    isAcitve (tag) {
      return this.$route.fullPath == (tag.fullPath ?? tag.path);
    },
    // 增加tag
    addTagViews () {
      this.$store.dispatch('tags/addView', this.$route)
    },
    // 初始化tag,将fixtag放到tag列表中
    filterFixTag (routes) {
      // 筛选route中所有路径的meta,查看是否存在fixtag
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.fix) {
          tags.push(route);
        }
        if (route.children) {
          const tempChild = this.filterFixTag(route.children);
          if (tempChild.length >= 1) {
            tags = [...tags, ...tempChild]
          }
        }
      })
      return tags;
    },
    // 点击tag跳转到当前tag对应路径
    skipRouter (tag) {
      if (this.$route.fullPath != tag.fullPath) {
        this.$router.push(tag.fullPath ?? tag.path).catch(err => err)
      }
    },
    // 关闭当前标签
    closeTag (tag) {
      // 不是=>直接关闭
      this.$store.dispatch('tags/delView', tag);
      let allTag = this.$store.state.tags.visitedViews;
      if (tag.fullPath == this.$route.path) {
        // 将路由切换到最后一个
        let last = allTag[allTag.length - 1];
        this.$router.push(last.fullPath)
      }
    },
    // 初始化tag
    initTag () {
      // 将筛选出来的tag存放到tags中
      let tags = this.fixArr = this.filterFixTag(routes);
      for (let tag of tags) {
        this.$store.dispatch('tags/addView', tag);
      }
    },
    leftMove () {
      // 左移
      if (this.marLeft > 0) {
        this.marLeft -= 100;
      }
    },
    rightMove () {
      // 右移
      if (this.marLeft < 0) {
        this.marLeft += 100;
      }
    },
  },
  components:{
    TagSlide
  },
  mounted () {
    this.initTag(); //初始化
    this.addTagViews();
  },
  watch: {
    $route () {
      this.addTagViews();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
@import "@styles/mixin.scss";

$btnWidth: 37px;

.tag-wrap {
  height: $tagHeight;
  width: 100%;
  // background-color: red;
  @include flex(space-between);
  .btn {
    width: $btnWidth;
    line-height: $tagHeight;
    text-align: center;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid $borderColor;
  }
  .btn:hover {
    cursor: pointer;
  }
  .tag-items {
    width: calc(100% - 3 *#{$tagHeight});
    height: 100%;
    overflow: hidden;
    .tag-slider {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      @include flex(flex-start);
      border-top: 1px solid $borderColor;
      border-bottom: 1px solid $borderColor;
    }
  }
}
.avtive {
  background-color: red !important;
}

::v-deep .el-tabs__header {
  margin: 0 !important;
}
::v-deep .el-scrollbar__view{
  .el-tag{
    border-radius: 0;
  }
}
</style>
