<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="text-lg text-blue-500">{{ title }}</text>
    </view>
    <view
      class="flex justify-center w-full h-16 rounded-lg p-4 m-4 bg-green-400 text-white"
    >Tailwind Css</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
