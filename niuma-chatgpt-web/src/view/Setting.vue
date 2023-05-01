<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const backClickHander = () => {
  router.push("/");
};
interface CartItem {
  id: number;
  iconName: string;
  content: string;
}
interface Cart {
  id: number;
  child: CartItem[];
}
const cartList: Array<Cart> = [
  {
    id: 1,
    child: [
      {
        id: 111,
        iconName: "chat-o",
        content: "联系我们",
      },
      {
        id: 112,
        iconName: "share",
        content: "告诉朋友",
      },
    ],
  },
  {
    id: 2,
    child: [
      {
        id: 211,
        iconName: "lock",
        content: "隐私协议",
      },
      {
        id: 212,
        iconName: "column",
        content: "用户协议",
      },
      {
        id: 213,
        iconName: "smile",
        content: "免责声明",
      },
      {
        id: 214,
        iconName: "bill",
        content: "支付记录",
      },
    ],
  },
];
</script>
<template>
  <div class="setting-container">
    <van-nav-bar left-text="设置" left-arrow @click-left="backClickHander" />
    <div class="cart-container">
      <div class="cart-list" v-for="cart in cartList" :key="cart.id">
        <div
          class="cart-item"
          v-for="cartItem in cart.child"
          :key="cartItem.id"
        >
          <van-icon :name="cartItem.iconName" size="18" />
          <span>{{ cartItem.content }}</span>
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
  :deep(.van-nav-bar .van-icon) {
    color: white;
  }
  .underline {
    border: 1px white solid;
  }
  .cart-container {
    height: calc(100vh - 46px);
    display: flex;
    align-items: center;
    flex-direction: column;
    .cart-list {
      margin-top: 20px;
      width: calc(90vw);
      background-color: #282b34;
      color: #f5f9fa;
      border-radius: 10px;
      .cart-item {
        padding: 15px;
        font-size: 18px;
        border-bottom: #3d4049 0.1px solid;
        span {
          margin-left: 5px;
        }
        &:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>
