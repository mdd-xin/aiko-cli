<template>
     <el-scrollbar>
       <slot />
    </el-scrollbar>
</template>

<script>
export default {
// 监测滚轮事件,每次滚轮滚动移动40px

}
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
@import "@styles/mixin.scss";

// element样式覆盖
::v-deep .el-scrollbar{
    .el-scrollbar__wrap{
       overflow-x:hidden !important;
       overflow-y: hidden;
       margin: 0 !important;
    }
}
</style>
