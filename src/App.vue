<template>
  <router-view v-slot="{ Component }" class="full-width">
    <transition :name="commonStore.routerTransionMode">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { useCommonStore } from '@/store'

const route = useRoute()
const commonStore = useCommonStore()

watch(route, to => {
  if (!to.meta.isChild) {
    commonStore.routerTransionMode = 'slide-left'
  }
})
</script>
