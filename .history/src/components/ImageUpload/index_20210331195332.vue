<template>
  <el-upload
    list-type="picture-card"
    :limit="1"
    action="#"
    :on-preview="preview"
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
      fileList: [{ url: '' }]
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
