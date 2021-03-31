<template>
  <el-upload
    list-type="picture-card"
    :limit="1"
    action="#"
    :on-preview="preview"
    :file-list="fileList"
  >
    <i class="el-icon-plus" />
  </el-upload>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      fileList: [{ url: 'https://t7.baidu.com/it/u=334080491,3307726294&fm=193&f=GIF' }]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    preview(file) {}
  }
}
</script>

<style
  scoped
  lang="
"
></style>
