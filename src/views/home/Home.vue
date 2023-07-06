<template>
  <div>
    <Langage />
    首页
    <Sidebar />

    <div class="mt-20">
      <router-link to="/aboutUs">关于我们</router-link>
    </div>
  </div>
</template>

<script setup>
import { Langage } from '@/components'
import { Sidebar } from '@/layout/components'
</script>
