// 权限拦截在路由跳转  导航守卫

import router from '@/router'

// 不需要导出 因为只需要让代码执行即可
// 前置守卫
// next 是前置守卫必须必须执行的钩子, next 必须执行  如果不执行   页面就死了
router.beforeEach((to, from, next) => {

})
// 后置守卫
router.afterEach()
