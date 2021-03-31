<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="登录账户设置">
            <!-- 放置内容-->
            <el-form ref="userForm" :model="userInfo">
              <el-form-item label="姓名:">
                <el-input v-model="userInfo.username" style="width:300px" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="userInfo.password2" style="width:300px" type="password" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveUser">保存</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 放置内容-->
          <el-tab-pane label="个人详情" />
          <!-- 放置内容-->
          <el-tab-pane label="岗位信息" />
        </el-tabs>
      </el-card>

    </div>

  </div>
</template>

<script>
import { getUserDetailById } from '@/api/user'
import { saveUserDetailById } from '@/api/employees'
export default {
  name: 'Ss',
  components: {

  },
  props: {

  },
  data() {
    return {
      userId: this.$route.params.id, // 直接将路由中的参数 赋值给data 中的属性
      userInfo: {
        username: '',
        password2: '' // 为什么叫password2  因为读取出来的是password 是密文
      }, rules: {
        username: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        password2: [{ required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 9, message: '密码长度6-9位', trigger: 'blur' }]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getUserDetailById()
  },
  mounted() {

  },
  methods: {
    async  getUserDetailById() {
      this.userInfo = await getUserDetailById(this.userId)
    },
    saveUser() {
      // 校验
      this.$refs.userForm.validate( isOk => {
       await saveUserDetailById({ ...this.userInfo, password: this.userInfo.password2 })
        this.$message.success('修改用户信息')
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
