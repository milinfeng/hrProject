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
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function getUserDetailById(id) {

}

export function logout() {

}
