// 权限拦截在路由跳转  导航守卫

import router from '@/router'

// 不需要导出 因为只需要让代码执行即可
// 前置守卫
router.beforeEach()
// 后置守卫
router.afterEach((to, from, next))
