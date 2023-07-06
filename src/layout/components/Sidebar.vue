<template>
  <div>
    <div class="ft-size-xxl" @click="visible = !visible">
      <van-icon name="qr" />
    </div>
    <van-popup
      v-model:show="visible"
      duration="0.2"
      closeable
      round
      position="left"
      :style="{ width: '75%', height: '100%' }"
    >
      侧边栏
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="less" scoped>
/deep/ .van-popup {
  position: absolute !important;
}
</style>
