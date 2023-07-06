<template>
  <div class="nav flex-box-row flex-around">
    <div
      v-for="(it, key) in navList"
      :key="key"
      :class="['navItem', { active: key === currentTab }]"
      @click="toPage(it, key)"
    >
      <i :class="`iconfont ft-size-48 ${it.icon}`" />
      <div class="ft-size-24">{{ $t(it.label) }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useCommonStore } from '@/store'

const commonStore = useCommonStore()
const router = useRouter()

const currentTab = ref(0)
const navList = [
  {
    label: 'sider_home',
    router: '/',
    icon: 'icon-home',
  },
  {
    label: 'sider_deposit',
    router: '/deposit',
    icon: 'icon-deposit',
  },
  {
    label: 'sider_promotion',
    router: '/promotion',
    icon: 'icon-promotion',
  },
  {
    label: 'sider_withdraw',
    router: '/withdraw',
    icon: 'icon-withdraw',
  },
  {
    label: 'sider_profile',
    router: '/profile',
    icon: 'icon-profile',
  },
]

function toPage(it, key) {
  if (key === currentTab.value) return

  commonStore.routerTransionMode = key > currentTab.value ? 'slide-left' : 'slide-right'

  currentTab.value = key
  router.push(it.router)
}
</script>

<style lang="less" scoped>
.nav {
  position: absolute;
  bottom: 0;
  left: 0;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100px;
  margin: auto;
  text-align: center;

  border-top: 1px solid #e1e1e1;

  & .active {
    color: #00b2a6;
  }

  .navItem {
    width: 100px;
  }
}

@media screen and (min-width: 550px) {
  .nav {
    max-width: 1100px !important;
  }
}
</style>
