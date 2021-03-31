<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="登录账户设置">
            <!-- 放置内容-->
            <el-form>
              <el-form-item label="姓名:">
                <el-input v-model="userInfo.username" style="width:300px" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="userInfo.password2" style="width:300px" type="password" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
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
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      userInfo: {
        username: '',
        password2: ''
      }, rules: {
        username: [{ required: true }]
      }
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

  }
}
</script>

<style scoped lang="scss">

</style>
