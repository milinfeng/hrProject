<template>
  <el-card class="page-tools">
    <el-row>
      <el-col>
        <div>
          <i class="el-icon-info" />
          <!--  // 定义前面的插槽 -->
          <slot name="before" />
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
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

  }
}
</script>

<style scoped lang="scss">

</style>
