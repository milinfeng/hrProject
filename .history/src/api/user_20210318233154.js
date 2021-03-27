import request from '@/utils/request'

export function login(data) {
  request({
    url: '/sys/login'
  })
}

export function getInfo(token) {

}

export function logout() {

}
