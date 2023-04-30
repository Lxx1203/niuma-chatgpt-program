<script setup lang="ts">
let { msg } = defineProps(["msg"]);
const getImageUrl = (name: String) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
</script>

<template>
  <div class="gpt-dialog-container">
    <van-icon :name="getImageUrl('chatgpt.png')" size="40"></van-icon>
    <div class="gpt-dialog-message">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.gpt-dialog-container {
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .gpt-dialog-message {
    margin-left: 10px;
    font-size: 16px;
    display: block;
    padding: 10px;
    background-color: #282b34;
    color: #fbffff;
    border-radius: 40px;
    max-width: calc(60vw);
    white-space: normal;
    word-break: break-all;
  }
}
</style>
