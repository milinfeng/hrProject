import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

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
