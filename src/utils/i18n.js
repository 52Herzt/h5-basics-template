import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import frFR from 'vant/es/locale/lang/fr-FR'
import zhCN from 'vant/es/locale/lang/zh-CN'
import { createI18n } from 'vue-i18n'

import messages from '../lang'

export const i18n = createI18n({
  locale: 'en_US',
  fallbackLocale: 'en',
  messages,
})

export function updateVantLocale(lang) {
  switch (lang) {
    case 'zh_CN': {
      Locale.use('zh-CN', zhCN)
      break
    }
    case 'en_US': {
      Locale.use('en-US', enUS)
      break
    }
    case 'fr_FR': {
      Locale.use('fr-FR', frFR)
      break
    }
  }
}
