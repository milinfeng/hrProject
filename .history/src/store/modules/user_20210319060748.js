
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

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
const actions = {
  async login(vontext, data) {
    // 调用 api 接口 
    const result = await login(data)
    // axios 默认加了一层data
    if (result.data.success) {
      context.commit('setToken', result, data.data)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions: 
}
}
