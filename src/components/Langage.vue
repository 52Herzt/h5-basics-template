<template>
  <div>
    <van-field v-model="localeLabel" is-link readonly :label="$t('locale_label')" @click="showPicker = true" />

    <DfDialog v-model:visible="showPicker" show-handle :title="$t('locale_label')" @confirm="onConfirm">
      <template #content>
        <DfLocaleList v-if="showPicker" :columns="langList" @change="onChange" />
      </template>
    </DfDialog>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue'

import { DfLocaleList } from '@/components'
import { useCommonStore } from '@/store'
import { updateVantLocale } from '@/utils/i18n'
import { langList } from '@/utils/variable'

const commonStore = useCommonStore()
const { proxy } = getCurrentInstance()

const showPicker = ref(false)

const localeLabel = ref('')
const currentLocale = ref('')

function getLocaleName(locale) {
  const item = langList.find(it => it.value === locale)
  return item.label
}

function changeLocale(locale) {
  proxy.$i18n.locale = currentLocale.value
  localeLabel.value = getLocaleName(currentLocale.value)
  localStorage.setItem('LOCALE', locale)

  updateVantLocale(locale)
}

function onConfirm() {
  if (currentLocale.value) {
    changeLocale(currentLocale.value)
  }
}
function onChange(val) {
  currentLocale.value = val
}

onMounted(() => {
  const LOCALE = localStorage.getItem('LOCALE')
  if (LOCALE) {
    localeLabel.value = getLocaleName(LOCALE)
    proxy.$i18n.locale = LOCALE
  } else {
    localStorage.setItem('LOCALE', commonStore.locale)
    localeLabel.value = getLocaleName(commonStore.locale)
  }
})
</script>
