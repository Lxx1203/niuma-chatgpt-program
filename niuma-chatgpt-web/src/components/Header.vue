<script setup lang="ts">
import useMessageStore from "../stores";
import { useRouter } from "vue-router";
const messageStore = useMessageStore();
const clickCommentHandler = () => {
  messageStore.clearMessageList();
};
const router = useRouter();
const settingLockHandler = () => {
  router.push("/setting");
};
</script>

<template>
  <div class="header-container">
    <span><b>NiuMa GPT</b></span>
    <van-icon name="setting" size="24" @click="settingLockHandler" />
    <van-icon name="comment" size="24" @click="clickCommentHandler" />
  </div>
</template>

<style lang="less" scoped>
.header-container {
  background-color: #22222c;
  font-size: 20px;
  padding: 20px;
  color: #f7fafe;
  overflow: hidden;
  .van-icon {
    float: right;
    margin: 0 5px;
    color: #d3d3db;
  }
}
</style>
