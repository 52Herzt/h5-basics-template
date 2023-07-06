<template>
  <van-radio-group v-model="checked" direction="vertical" @change="onChange">
    <van-radio v-for="(it, key) in columns" :key="key" :name="it.value">{{ it.label }}</van-radio>
  </van-radio-group>
</template>

<script setup>
import { defineEmits, defineProps, getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()

const emit = defineEmits(['change'])

defineProps({
  columns: {
    type: Array,
    required: true,
  },
})

const checked = ref('')

function onChange(value) {
  emit('change', value)
}
onMounted(() => {
  checked.value = proxy.$i18n.locale
})
</script>

<style lang="less" scoped>
.van-radio-group {
  padding: 10px;
}

.van-radio {
  padding: 10px;
  padding-left: 75px;

  /deep/ .van-radio__icon {
    margin-right: 40px;
  }
}
</style>
