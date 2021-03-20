import request from '@/utils/request'

// 登录接口封装
export function login(data) {
  // 返回一个 promise
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户基本资料
expect function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: "POST"
  })
}

export function getInfo(token) {

}

export function logout() {

}
