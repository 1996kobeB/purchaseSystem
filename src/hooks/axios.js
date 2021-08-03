/**
 * https://github.com/axios/axios
 * @desc:   网络请求封装
 * @author: liaowanquan<10720>
 * @create: 2021-07-29 14:41:03
 */

import axios from 'axios'

// 创建axios实例
const http = axios.create({
  // 允许携带cookie
  withCredentials: true
})

// 默认请求地址前缀
http.defaults.baseURL = '/api-gateway'

// 请求拦截器
http.interceptors.request.use(
  config => {
    if (config.methods === 'get') {
      config.params = config.data
      delete config.data
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error

    if (response) {
      errorHandler(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的状态
      if (!window.navigator.onLine) {

      } else {
        return Promise.reject(error)
      }
    }
  }
)

// 错误处理
const errorHandler = (status, other) => {
  switch (status) {
    case 401:
      break
    case 403:
      break
    case 404:
      break
    default:
      console.log(other)
  }
}

/**
 *  Usage
 *
 * const { promiseify, data } = useAxios(url,{
 *  method:'GET'||'POST',
 *  data:{...}
 * })
 * promiseify.then(()=>console.log(data))
 */
export default function useAxios (url, config) {
  const response = {}
  const data = {}
  let finished = false
  let error = {}

  const promiseify = http
    .request({ url, ...config })
    .then(res => {
      response.value = res
      data.value = res.data

      finished = true
    })
    .catch(err => {
      error = err
      finished = true
    })

  return {
    promiseify,
    response,
    data,
    error,
    finished
  }
}
