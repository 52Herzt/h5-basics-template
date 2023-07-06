<template>
  <div :class="['text-center', 'container', { opacity: opacity }]">
    <div class="back" @click="onBack">
      <van-icon name="arrow-left" />
      返回
    </div>
    <div class="ft-size-l ft-weight">
      {{ title }}
    </div>
    <div class="handle">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

import { useCommonStore } from '@/store'

const router = useRouter()
const commonStore = useCommonStore()

defineProps({
  title: {
    type: String,
    required: true,
  },
  opacity: {
    type: Boolean,
    default: true,
  },
})

function onBack() {
  commonStore.routerTransionMode = 'slide-right'
  router.back()
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100px;
  line-height: 100px;
}
.back {
  position: absolute;
  top: 0;
  left: 20px;

  .van-icon {
    font-size: @font-size-xl;
  }
}

.opacity {
  color: #fff;
  background: @primary-color;
}

.handle {
  position: absolute;
  top: 0;
  right: 20px;
}
</style>
