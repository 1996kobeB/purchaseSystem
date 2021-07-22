/**
 * @desc:   demo模块路由
 * @author: liaowanquan<10720>
 * @create: 2021-07-21 18:44:07
 */
const demo = () => import('@/views/demo' /* webpackChunkName: "demo" */)

export default [
  {
    path: '/demo',
    name: 'demo',
    component: demo
  }
]
