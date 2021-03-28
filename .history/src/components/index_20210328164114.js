// 该文件负责所有的公共的组件的全局注册   Vue.use
// 全局组件的注册
import PageTools from './PageTools'
import UploadExcel from './UploadExcel'

export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)
    Vue.component('UploadExcel', UploadExcel)
  }
}
