<script setup lang="ts">
import useMessageStore from "../stores/messageStore";
import useHistoryStore from "../stores/historyStore";
import { useRouter } from "vue-router";

const historyStore = useHistoryStore();
const messageStore = useMessageStore();
const clickCommentHandler = () => {
  if (messageStore.messageList.length > 0) {
    historyStore.putMessage(messageStore.getId().toString(), [
      ...messageStore.messageList,
    ]);
  }
  messageStore.clearId();
  messageStore.clearMessageList();
};
const router = useRouter();
const settingLockHandler = () => {
  router.push("/setting");
};
const underwayClickHandler = () => {
  router.push("/history");
  if (messageStore.messageList.length > 0) {
    historyStore.putMessage(messageStore.getId().toString(), [
      ...messageStore.messageList,
    ]);
  }

  messageStore.clearId();
  messageStore.clearMessageList();
};
</script>

<template>
  <div class="header-container">
    <span><b>NiuMa GPT</b></span>
    <van-icon name="setting" size="24" @click="settingLockHandler" />
    <van-icon name="add-square" size="24" @click="clickCommentHandler" />
    <van-icon name="underway" size="24" @click="underwayClickHandler" />
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
