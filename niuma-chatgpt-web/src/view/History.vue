<script setup lang="ts">
import { useRouter } from "vue-router";
import useHistoryStore from "../stores/historyStore";
import useMessageStore from "../stores/messageStore";
import { showConfirmDialog } from "vant";
import "vant/es/dialog/style";

const router = useRouter();
const historyStore = useHistoryStore();
const messageStore = useMessageStore();
const backClickHandler = () => {
  router.push("/");
};
const onclickHandler = (item: any) => {
  messageStore.currentId = item[0];
  messageStore.messageList = [...item[1]];
  router.push("/");
};
const deleteHistory = (item: any) => {
  showConfirmDialog({
    title: "提示",
    message: "确定要删除吗？",
  })
    .then(() => {
      historyStore.messageMap.delete(item);
    })
    .catch(() => {
      // on cancel
    });
};
</script>
<template>
  <div class="setting-container">
    <van-nav-bar left-text="返回" left-arrow @click-left="backClickHandler" />
    <div class="style-container">
      <h3>历史记录</h3>
      <div class="cart">
        <div
          class="cart-item"
          v-for="item in historyStore.messageMap"
          :key="item[0]"
          @click="onclickHandler(item)"
        >
          {{ item[1][0]?.content }}
          <van-icon
            name="delete"
            size="15"
            @click.stop="deleteHistory(item[0])"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.setting-container {
  height: 100vh;
  background-color: #22222c;
  :deep(.van-nav-bar__content) {
    background-color: #22222c;
    border: 0;
  }
  :deep(.van-nav-bar__text) {
    color: white;
    font-size: 20px;
  }
  .style-container {
    height: calc(100vh - 46px);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    .cart {
      margin-top: 20px;
      width: calc(90vw);
      background-color: #282b34;
      color: #f5f9fa;
      border-radius: 10px;
      .cart-item {
        padding: 15px;
        font-size: 15px;
        border-bottom: #3d4049 0.1px solid;
        span {
          margin-left: 5px;
          margin-right: 20px;
        }
        &:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>
