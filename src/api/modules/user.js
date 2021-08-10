/**
 * @desc:   用户模块api
 * @author: liaowanquan<10720>
 * @create: 2021-08-06 14:26:09
 */

import axios from '@/hooks/axios'

// 用户登录
export function login (data) {
  return axios({
    url: '/yiwu-admin/api/v1/users/login',
    method: 'post',
    data
  })
}
