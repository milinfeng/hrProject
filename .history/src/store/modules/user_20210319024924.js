
import { getToken, setToken, removeToken } '@/utils/auth.js'

// 状态
const state = {
  token: getToken() // 设置 token 为共享状态 初始化 Vuex的时候  就先从缓存中读取
}
// 修改状态
const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions: 
}
