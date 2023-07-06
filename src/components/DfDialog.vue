<template>
  <van-popup :show="visible" class="flex-box box-radiu" :duration="duration">
    <div class="title middle flex-box-row">
      <span v-if="title">{{ title }}</span>
      <slot v-else name="title" />
      <van-icon v-if="showClose" name="cross" class="ft-size-l close" @click="onClose" />
    </div>
    <div class="content">
      <span v-if="content">{{ content }}</span>
      <slot v-else name="content" />
    </div>

    <div v-if="!showHandle" class="footer">
      <slot name="footer" />
    </div>
    <div v-else class="handle flex-box-row middle text-center">
      <div class="flex-item cancel" @click="onClose">{{ $t('handle_cancel') }}</div>
      <div class="flex-item" @click="onConfirm">{{ $t('handle_confirm') }}</div>
    </div>
  </van-popup>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['update:visible', 'confirm'])

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: [String, Number],
    default: 0,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  showHandle: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})

function onClose() {
  emit('update:visible', false)
}
function onConfirm() {
  onClose()
  emit('confirm')
}
</script>

<style lang="less" scoped>
.title {
  min-height: 80px;
  border-bottom: 1px solid #e1e1e1;

  .close {
    position: absolute;
    top: 8px;
    right: 10px;
  }
}

.content {
  width: 458px;
  min-height: 200px;
  max-height: 400px;
  overflow: auto;
}

.footer,
.handle {
  min-height: 70px;
  border-top: 1px solid #e1e1e1;
}

.handle {
  div {
    padding: 10px 0;
  }

  .cancel {
    border-right: 1px solid #e1e1e1;
  }
}
</style>
