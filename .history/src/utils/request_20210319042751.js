// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 设置超时时间
}) // 创建一个axios的实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use(response => {
  // axios 默认加了一层 data
  const { success, message, data } = response.data
  // 要根据 success 的成功与否 决定下面的操作
  if (success) {
    return data
  } else {
    Message.error(message)
  }
}, (error) => {
  Message.error(error.message) // 提示错误信息
  return Promise.reject(error) // 返回执行错误,让当前的执行链跳出成功,直接进入 catch
}) // 响应拦截器
export default service // 导出axios实例
