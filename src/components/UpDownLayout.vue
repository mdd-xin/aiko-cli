<template>
  <div class="layout-wrap">
    <div class="top">
      <!-- 插槽 -->
      <slot name="form"></slot>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <div class="content">
          <div class="content-left">
            <!-- 插槽 -->
            <slot name="btnLeft"></slot>
          </div>
          <div class="content-right">
            <!-- 插槽 -->
            <slot name="btnRight"></slot>
          </div>
        </div>
      </div>
      <div class="bottom-bottom">
        <!-- 插槽 -->
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@styles/variable.scss";
@import "@styles/mixin.scss";

$bk-grey: rgb(250, 250, 250);
.layout-wrap {
  width: 100%;
  .top {
    width: 100%;
    @include flex(flex-start);
  }
  .bottom {
    border: 1px $borderColor solid;
    &-top {
      height: 50px;
      box-sizing: border-box;
      padding: 10px 15px;
      background-color: $bk-grey;
      .content {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        @include flex;
        &-left {
          width: 90%;
          height: 100%;
          // background-color: pink;
          @include flex(flex-start);
          .el-button {
            height: 100%;
            padding: 0 10px;
            box-sizing: border-box;
            border-radius: 0;
            border: 1px $borderColor solid;
          }
        }
        &-right {
          width: 10%;
          height: 100%;
          @include flex;
        }
      }
    }
  }
}
// 覆盖原生样式
::v-deep .el-form-item__content {
  .small {
    width: 90px;
  }
}
::v-deep .el-form {
  .el-form-item {
    margin-bottom: 10px;
    .el-form-item__label {
      height: 40px;
      box-sizing: border-box;
      border: 1px solid $borderColor;
      border-right: 0px;
      padding-left: 12px;
      border-radius: 4px;
      background-color: rgb(250, 250, 250);
      margin-bottom: 0px;
    }
  }
}
</style>
