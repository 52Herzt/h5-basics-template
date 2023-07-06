import './style/index.less'
import 'lib-flexible'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { DfDialog, TopHandle } from './components'
import router from './router'
import { i18n } from './utils/i18n'

const app = createApp(App)

app.component('DfDialog', DfDialog)
app.component('TopHandle', TopHandle)

app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount('#app')
