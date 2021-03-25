<template>
  <el-card class="page-tools">
    <el-row type="flex">
      <el-col>
        <div>
          <i class="el-icon-info" />
          <!--  // 定义前面的插槽 -->
          <slot name="before" />
        </div>
      </el-col>
      <el-col>
        <el-row>
          <!-- 定义后面的插槽 -->
          <slot name="after" />
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  components: {

  },
  props: {
    showBefore: {
      type: Boolean,
      default: false
    }
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
