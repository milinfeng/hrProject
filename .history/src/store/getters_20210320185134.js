const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 建立 token 的快捷访问
  name: state => state.user.userInfo.username // 建立用户名称的映射
  name: state => state.user.userInfo.userId // 建立用户名称的映射
}
export default getters
