<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
// @ts-ignore // 忽略 ts 错误
import { mainStore } from '@/stores/MainStore'

mainStore()

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
</style>
