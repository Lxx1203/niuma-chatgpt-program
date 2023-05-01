<script setup lang="ts">
import useMessageStore from "../stores/index.ts";
import axios from "axios";
import "vant/es/toast/style";
import "vant/es/notify/style";
import { showNotify, showLoadingToast, closeToast } from "vant";

const messageStore = useMessageStore();
const clickHandler = async () => {
  messageStore.addMessageList({
    id: Date.now(),
    role: "user",
    content: messageStore.currentText,
  });
  const messageList = messageStore.messageList;
  messageStore.currentText = "";
  try {
    showLoadingToast({
      message: "加载中...",
      forbidClick: true,
      duration: 10000000,
    });
    let res = await axios.post("/api/chatgpt/easy", messageList);
    let data: any = res.data;
    console.log("success");
    closeToast();
    if (data.code == 1) {
      data.data.id = Date.now();
      messageStore.addMessageList(data.data);
    } else {
      messageStore.popMessageList();
    }
  } catch (error) {
    closeToast();
    showNotify({ type: "danger", message: "网络错误", duration: 1000 });
    messageStore.popMessageList();
  }
};
</script>

<template>
  <div class="bottom_container">
    <van-field
      style="margin-bottom: 10px"
      v-model="messageStore.currentText"
      type="text"
      size="large"
      input-align="center"
      placeholder="欢迎使用牛马chatgpt"
    >
      <template #button>
        <van-button
          size="large"
          type="primary"
          round
          color="#00994c"
          @click="clickHandler"
          :disabled="messageStore.currentText.length === 0"
        >
          <van-icon name="chat-o" color="#f7fafe" size="50" />
        </van-button>
      </template>
    </van-field>
  </div>
</template>

<style lang="less" scoped>
.bottom_container {
  width: 100%;
  z-index: 999999;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #22222c;
  :deep(.van-cell) {
    background-color: #22222c;
    .van-field__control {
      color: #f7fafe;
      background-color: #414956;
      border-radius: 50px;
      height: 50px;
      font-size: 16px;
    }
  }
}
</style>
