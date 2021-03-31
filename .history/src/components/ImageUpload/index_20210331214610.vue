<template>
  <div>
    <el-upload
      list-type="picture-card"
      :limit="1"
      action="#"
      :on-preview="preview"
      :file-list="fileList"
      :class="{disabled: fileComputed }"
      :on-remove="handleRemove"
      :on-change="changeFile"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" style="width:100%" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      fileList: [{ url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F14%2F20171014234316_GcBFK.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619785435&t=4458c7e48128b00c125423d5f764d947' }],
      showDialog: false,
      imgUrl: null
    }
  },
  computed: {
    // 设定一个计算属性 判断是否已经上传完了一张
    fileComputed() {
      return this.fileList.length === 1
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    preview(file) {
      console.log(file)
      this.imgUrl = file.url
      this.showDialog = true
    },
    // 经过打印2个参数  看出 file 是要删除的文件  fileList是删过之后的文件
    handleRemove(file, fileList) {
      // console.log(file)
      // console.log(fileList)
      console.log(this.fileList)
      this.fileList = this.fileList.filter(item => item.uid !== file.uid) // 将当前的删除文件排除在外
    },
    // 不能用push 因为这个钩子会执行多次
    changeFile(file, fileList) {
      this.fileList = fileList.map(item => item)
      // console.log('1')
    },
    beforeUpload(file) {
      // 要开始做文件上传的检查了
    // 文件类型 文件大小
      const types = [  const types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png']]
    }

  }
}
</script>

<style>
.disabled .el-upload--picture-card {
  display: none
}
</style>
