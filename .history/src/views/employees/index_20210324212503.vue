<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-toole :show-before="true">
        <!--  <span slot="before">共16条数据</span> -->
        <template v-slot:before>
          <span slot="before">共166条记录</span>
        </template>
        <!-- 导入 -->
        <!--  -->
        <!--  -->
      </page-toole>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
