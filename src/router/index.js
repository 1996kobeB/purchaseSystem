import { createRouter, createWebHistory } from 'vue-router'

// 引入拆分路由
import userRoute from './modules/user'
import demoRoute from './modules/demo'

const index = () => import('@/views/index')
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  ...userRoute,
  ...demoRoute
]

// process.env模式和环境变量（https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F）BASE_URL：特殊环境变量。NODE_ENV："development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
