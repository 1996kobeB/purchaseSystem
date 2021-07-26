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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
