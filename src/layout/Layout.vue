<template>
  <div class="full-height">
    <router-view v-slot="{ Component }" class="content">
      <transition :name="commonStore.routerTransionMode">
        <component :is="Component" />
      </transition>
    </router-view>
    <Navigator />
  </div>
</template>

<script setup>
import { useCommonStore } from '@/store'

import { Navigator } from './components'

const commonStore = useCommonStore()
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: calc(100% - 100px);
  overflow: auto;
}
</style>
