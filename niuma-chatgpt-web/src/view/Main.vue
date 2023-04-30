<script setup lang="ts">
import UserDialog from "../components/UserDialog.vue";
import GptDialog from "../components/GptDialog.vue";
import useMessageStore from "../stores";

const messageStore = useMessageStore();
let messageList = messageStore.messageList;
const cartItemClickHandler = (e: any) => {
  messageStore.currentText = e.target.innerText;
};
</script>

<template>
  <div class="main-container">
    <template v-if="messageList.length === 0">
      <div class="cart">
        <h3>提示</h3>
        <div class="cart-item">点击右上角聊天图标即可创建新对话</div>
        <div class="cart-item">默认以当前全部对话进行关联</div>
      </div>
      <div class="cart">
        <h3>创作</h3>
        <div class="cart-item" @click="cartItemClickHandler">
          写一手赞美祖国的诗句
        </div>
        <div class="cart-item" @click="cartItemClickHandler">
          来一篇查重率低于10%的论文
        </div>
      </div>
      <div class="cart">
        <h3>提问</h3>
        <div class="cart-item" @click="cartItemClickHandler">
          为什么程序员容易秃头
        </div>
        <div class="cart-item" @click="cartItemClickHandler">
          牛马程序员象征着什么
        </div>
        <div class="cart-item" @click="cartItemClickHandler">
          为什么现在越来越卷
        </div>
      </div>
      <div class="cart">
        <h3>翻译</h3>
        <div class="cart-item" @click="cartItemClickHandler">
          用英语说 "今天天气真不错"
        </div>
      </div>
    </template>
    <template v-for="item in messageList" :key="item.id">
      <UserDialog :msg="item.content" v-if="item.role === 'user'"></UserDialog>
      <GptDialog :msg="item.content" v-else></GptDialog>
    </template>
  </div>
</template>
<style lang="less" scoped>
.main-container {
  background-color: #22222c;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll; //overflow-x 横屏滚动 overflow-y 竖屏滚动
  white-space: nowrap;
  .cart {
    color: #fcfdfe;
    h3 {
      margin-left: 20px;
    }
    .cart-item {
      font-size: 14px;
      margin-left: 20px;
      background-color: #282b34;
      height: 20px;
      padding: 10px;
      border-radius: 1px;
      width: calc(80vw);
      border-bottom: #33363f 0.1px solid;
    }
  }
}
</style>
