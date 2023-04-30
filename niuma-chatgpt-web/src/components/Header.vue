<script setup="ts">
const clickLockHandler = () => {
    console.log("clickLockHandler")
}

const settingLockHandler = () => {
    console.log("settingLockHandler")
}
</script>

<template>
    <div class="header-container">
        <span><b>NiuMa GPT</b></span>
        <van-icon name="setting" size="24" @click="settingLockHandler"/>
        <van-icon name="lock" size="24" @click="clickLockHandler"/>
    </div>
</template>

<style lang="less" scoped>
.header-container {
  background-color: #22222c;
  font-size: 18px;
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
