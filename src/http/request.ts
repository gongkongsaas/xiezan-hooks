import axios from 'axios'

/**
 * 基于 axios 进行二次封装，添加统一的配置、拦截器处理等
 */

const baseConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
}

const service = axios.create(baseConfig)

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    // 一定要返回 config
    return config
  },
  (error) => {
    // Do something with request error
    // return Promise.reject(error) 向下传递错误，就是说你自己写的错误处理函数会触发
    // return new Promise(()=>{}) 中断Promise调用，也就是说你自己写的错误处理函数不会触发
    return Promise.reject(error)
  },
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const data = response.data
    return data
  },
  (error) => {
    // Do something with request error
    // return Promise.reject(error) 向下传递错误，就是说你自己写的错误处理函数会触发
    // return new Promise(()=>{}) 中断Promise调用，也就是说你自己写的错误处理函数不会触发
    return Promise.reject(error)
  },
)

export default service
