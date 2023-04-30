<script setup="ts">

import UserDialog from "../components/UserDialog.vue";
import GptDialog from "../components/GptDialog.vue";
</script>

<template>
  <div class="main-container">
      <div class="user-dialog">
          <UserDialog :msg="'你好牛马少'"></UserDialog>
      </div>

      <GptDialog :msg="'你好我是gpt'"></GptDialog>
  </div>
</template>
<style lang="less" scoped>
.main-container{
  background-color: #414956;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-y:scroll;//overflow-x 横屏滚动 overflow-y 竖屏滚动
  white-space: nowrap;
}
</style>