<script setup lang="ts">
import Header from "../components/Header.vue";
import Bottom from "../components/Bottom.vue";
</script>

<template>
  <div class="app-container">
    <Header></Header>
    <router-view class="rv"></router-view>
    <Bottom></Bottom>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  background-color: #414956;
  height: 100vh;

  .rv {
    height: calc(100vh - 64px - 74px);
  }
}
</style>
