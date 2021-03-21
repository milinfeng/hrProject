import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 设定一个独一无二的key
const timeKey = 'hrsaas-timestamp-key' // 设置一个独一无二的 key

// 从缓存读取 token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 将token 写入缓存
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 删除 token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
