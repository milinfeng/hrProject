<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <!-- 左侧显示总计录入数 -->
        <!--  <span slot="before">共16条数据</span> -->
        <template v-slot:before>
          <span slot="before">共166条记录</span>
        </template>
        <!-- 右侧显示按钮 -->
        <template>
          <el-button>excel导入</el-button>
          <el-button>excel导出</el-button>
          <el-button>新增员工</el-button>
        </template>
        <!--  -->
        <!--  -->
      </page-tools></page-toole>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
