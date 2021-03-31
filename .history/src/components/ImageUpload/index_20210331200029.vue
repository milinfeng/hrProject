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
      fileList: [{ url: 'https://https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF-1301662700.cos.ap-nanjing.myqcloud.com/banner-64.png' }]
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
