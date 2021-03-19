// 权限拦截在路由跳转  导航守卫

import router from '@/router'
import store from '@/store'
// 不需要导出 因为只需要让代码执行即可
// 前置守卫
// next 是前置守卫必须必须执行的钩子, next 必须执行  如果不执行   页面就死了
// next()  放过
// next(false)  跳转终止
// next(地址)   跳转到某个地址
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 如果有 token
    if (to.path === '/login') {
      // 如果要访问的是登录页
      next('/') // 跳转到主页
    } else {
      next()
    }
  } else {

  }
})
// 后置守卫
router.afterEach()
