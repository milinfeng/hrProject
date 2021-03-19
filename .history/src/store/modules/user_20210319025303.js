
import { getToken, setToken, removeToken } from '@/utils/auth'

// 状态
const state = {
  token: getToken() // 设置 token 为共享状态 初始化 Vuex的时候  就先从缓存中读取
}
// 修改状态
const mutations = {
  setToken(state, token) {
    state.token = token // 将数据设置给Vuex
    // 同步给 缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex 的数据设置为空
    removeToken()
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions: 
}
