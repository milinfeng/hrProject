<template>
  <!-- 公共导入组件 -->
  <upload-excel :on-success="success" />
</template>

<script>
import { importEmployee } from '@/api/employees'
import { getUserInfo } from '@/api/user'
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
      var newArr = results.map(item => {
        var userInfo = {}
        Object.keys(item).forEach(key => {
          userInfo[userRelations[item]] = item[key] // 将原来中文对应的值  赋值给原来英文对应的值
        })
        return userInfo
      })
      await importEmployee(newArr) // 接收一个数组
      this.$message.success('导入excel成功')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
