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
      fileList: [{ url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F14%2F20171014234316_GcBFK.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619785435&t=4458c7e48128b00c125423d5f764d947' }],
      showDialog: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    preview(file) {
      console.log(file)
    }
  }
}
</script>

<style
  scoped
  lang="
"
></style>
