<template>
  <!-- 公共导入组件 -->
  <upload-excel :on-success="success" />
</template>

<script>
import { importEmployee } from '@/api/employees'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    async success({ header, results }) {
      const userRelations = {
        '入职日期': 'timeOfEntry',
        '手机号': 'mobile',
        '姓名': 'username',
        '转正日期': 'correctionTime',
        '工号': 'workNumber'
      }
      // results.forEach(item => {
      //   console.log(Object.keys(item))
      // var newArr = results.map(item => {
      //   var userInfo = {}
      //   Object.keys(item).forEach(key => {
      //     userInfo[userRelations[key]] = item[key] // 将原来中文对应的值  赋值给原来英文对应的值
      //   })
      //   return userInfo
      // })
      // await importEmployee(newArr) // 接收一个数组
      // this.$message.success('导入excel成功')
      // this.$router.back() // 回到上一个页面
      const arr = []
      results.forEach(item => {
        const userInfo = {}
        Object.keys(item).forEach(key => {
          userInfo[importEmployee[key]] = item[key]
        })
        arr.push(userInfo)
      })
      await importEmployee(arr) // 调用导入接口
      this.$router.back()
      this.$message.success('导入excel错误')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
