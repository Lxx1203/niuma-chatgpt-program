<script setup lang="ts">
let { msg } = defineProps(["msg"]);
</script>

<template>
  <div class="user-dialog-container">
    <div class="user-dialog-message">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-dialog-container {
  margin: 20px 10px;
  display: flex;
  flex-direction: row-reverse;

  .user-dialog-message {
    font-size: 16px;
    display: block;
    padding: 10px;
    background-color: #7cdc9f;
    color: black;
    border-radius: 40px;
    max-width: calc(70vw);
    white-space: normal;
    word-break: break-all;
  }
}
</style>
