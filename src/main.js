import { app } from '@/plugins/app'
import router from './router'
import { store } from './store'
import '@/plugins/antd'
app.config.devtools = true
app.use(store).use(router).mount('#app')
