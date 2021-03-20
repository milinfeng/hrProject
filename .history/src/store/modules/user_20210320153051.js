
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

// 状态
const state = {
  token: getToken() // 设置 token 为共享状态 初始化 Vuex的时候  就先从缓存中读取
  userInfo: null
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
    removeToken() // 同步到缓存
  }
}
const actions = {
  async login(context, data) {
    // 调用 api 接口
    const result = await login(data) // 拿到 token
    // axios 默认加了一层data
    context.commit('setToken', result) // 设置 koken
  },
  // 获取用户资料
  async getUserInfo() {
    const result = await getUserInfo() // 获取返回值
    context.commit('set')
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
