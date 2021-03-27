<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ }}</div>
    <page-tools :show-before="true">
      <!--   <span slot="before">赘婿</span> -->
      <template v-slot:before>
        <span slot="after">共{{ page.total }}条数据</span>
      </template>
      <el-button
        slot="after"
        type="primary"
      >导入excel
      </el-button>
    </page-tools>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import PageTools from '@/components/PageTools'
export default {
  name: 'Dashboard',
  components: {

  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
