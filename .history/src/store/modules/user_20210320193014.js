
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'

// 状态
const state = {
  token: getToken(), // 设置token初始状态   token持久化 => 放到缓存中
  userInfo: {} // 定义一个空的对象 不是null 因为后边我要开发userInfo的属性给别人用  userInfo.name
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
  },
  setUserInfo(state, result) {
    // 更新一个对象
    state.userInfo = result // 这样是一个响应式
    // state.userInfo = { ...result } // 这样也是响应式  属于浅拷贝
  },
  removeUseInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    // 调用 api 接口
    const result = await login(data) // 拿到 token
    // axios 默认加了一层data
    context.commit('setToken', result) // 设置 koken
  },
  // 获取用户资料action
  async getUserInfo(context) {
    const result = await getUserInfo() // result就是用户的基本资料
    const baseInfo = await getUserDetailById(result.userId) // 为了获取头像
    const baseResult = { ...result, ...baseInfo } // 将两个接口结果合并
    // 此时已经获取到了用户的基本资料 迫不得已 为了头像再次调用一个接口
    context.commit('setUserInfo', baseResult) // 提交mutations
    // 加一个点睛之笔  这里这一步，暂时用不到，但是请注意，这给我们后边会留下伏笔
    return baseResult
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
