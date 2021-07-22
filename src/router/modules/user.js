/**
 * @desc:   用户模块路由
 * @author: liaowanquan<10720>
 * @create: 2021-07-21 18:44:07
 */
const userLogin = () => import('@/views/user/login' /* webpackChunkName: "userLogin" */)

export default [
  {
    path: '/user/login',
    name: 'userLogin',
    component: userLogin
  }
]
