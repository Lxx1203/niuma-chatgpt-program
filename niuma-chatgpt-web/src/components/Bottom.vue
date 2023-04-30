<script setup="ts">
import {ref} from "vue";
import useMessageStore from "../stores/index.ts";

const messageStore = useMessageStore();
let text = ref('');
const clickHandler = () => {
    console.log(text.value)
    messageStore.addMessage({
        role: "user",
        context: text.value
    })
    text.value = ''
}


</script>

<template>
    <div class="bottom_container">
        <van-field v-model="text" type="text" size="large" input-align="center" placeholder="欢迎使用牛马chatgpt">
            <template #button>
                <van-button size="large" type="primary" round color="#5c927c" @click="clickHandler"
                            :disabled="text.length===0">
                    <van-icon name="chat" color="#f7fafe" size="50"/>
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