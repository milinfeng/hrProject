<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <!-- 左侧显示总计录入数 -->
        <!--  <span slot="before">共16条数据</span> -->
        <template v-slot:before>
          <span slot="before">共{{ page.total }}条数据</span>
        </template>
        <!-- 右侧显示按钮 -->
        <template v-slot:after>
          <el-button
            size="small"
            type="warning"
            @click="$router.push('/import')"
          >导入</el-button>
          <el-button
            size="small"
            type="danger"
            @click="exportData"
          >导出</el-button>
          <el-button
            icon="plus"
            type="primary"
            size="small"
            @click="showDialog = true"
          >新增员工</el-button>
        </template>
        <!--  -->
      </page-tools>
      <!-- 放置表格和分页 -->
      <el-table v-loading="loading" border :data="list">
        <el-table-column type="index" label="序号" sortable="" />
        <el-table-column label="姓名" sortable="" prop="username" />
        <el-table-column label="头像" align="center">
          <template v-slot="{ row }">
            <img
              slot="reference"
              v-imageerror="require('@/assets/common/bigUserHeader.png')"
              :src="row.staffPhoto"
              style="border-radius: 50%; width: 100px; height: 100px; padding: 10px"
              alt=""
              @click="showQrCode(row.staffPhoto)"
            >
          </template>
        </el-table-column>
        <el-table-column label="工号" sortable="" prop="workNumber" />
        <el-table-column
          label="聘用形式"
          sortable=""
          prop="formOfEmployment"
          :formatter="formatEmployment"
        />
        <el-table-column label="部门" sortable="" prop="departmentName" />
        <!-- 作用域插槽来做  + 过滤器 -->
        <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
          <template v-slot="{ row }">
            {{ row.timeOfEntry | formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="账户状态" sortable="" prop="enableState">
          <template v-slot="{ row }">
            <el-switch
              :value="row.enableState === 1"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" sortable="" fixed="right" width="280">
          <template slot-scope="{ row }">
            <el-button
              type="text"
              size="small"
              @click="$router.push(`/employees/detail/${row.id}`)"
            >查看</el-button>
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button
              type="text"
              size="small"
              @click="delEmployee(row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-row type="flex" justify="center" align="middle" style="height: 60px">
        <el-pagination
          layout="prev, pager, next"
          :page-size="page.size"
          :current-page="page.page"
          :total="page.total"
          @current-change="changePage"
        />
      </el-row>
    </div>
    <!-- 放置组件弹层
          .sync 修饰符  是  自由件  去改变父组件的数据的一种 语法糖
    -->
    <add-employee :show-dialog.sync="showDialog" />
    <el-dialog
      title="二维码"
      :visible.sync="showCodeDialog"
      @opened="showQrCode"
    >
      <el-row>
        <canvas
          ref="
      @opened="
          showQrCode"
        />
      </el-row>
    </el-dialog>

  </div>
</template>

<script>
import { getEmployeeList, delEmployee } from '@/api/employees'
import EmployeeEnum from '@/api/constant/employees' // 引入员工的枚举  对象D
import AddEmployee from './components/add-employee'
import { formatDate } from '@/filters'
export default {
  components: {
    AddEmployee
  },
  data() {
    return {
      EmployeeEnum, //  在 data 中定义数据
      loading: false,
      showDialog: false,
      list: [], // 接数据的
      page: {
        page: 1,
        size: 10,
        total: 0 // 总数
      },
      showCodeDialog: false // 显示二维码弹层
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    // newPage 是最新的页码
    changePage(newPage) {
      this.page.page = newPage // 赋值最新的页码
      this.getEmployeeList()
    },
    async getEmployeeList() {
      this.loading = true
      const { total, rows } = await getEmployeeList(this.page)
      this.page.total = total
      this.list = rows
      this.loading = false
    },
    // 格式化  聘用形式
    formatEmployment(row, column, cellValue, index) {
      // 要去找 1  所 对应的值
      const obj = EmployeeEnum.hireType.find(item => item.id === cellValue)
      return obj ? obj.value : '未知'
    },
    // 删除员工功能
    async delEmployee(id) {
      try {
        await this.$confirm('确认删除该员工吗?')
        // 点击了确定
        await delEmployee(id)
        this.$message.success('删除员工成功了')
        this.getEmployeeList() // 重新拉取数据
      } catch (error) {
        console.log(error)
      }
    },
    // 导出 excel
    exportData() {
      //  做操作
      // 表头对应关系
      const headers = {
        姓名: 'username',
        手机号: 'mobile',
        入职日期: 'timeOfEntry',
        聘用形式: 'formOfEmployment',
        转正日期: 'correctionTime',
        工号: 'workNumber',
        部门: 'departmentName'
      }
      import('@/vendor/Export2Excel').then(async excel => {
        // excel 是引入文件的导出对象
        const { rows } = await getEmployeeList({
          page: 1,
          size: this.page.total
        })
        const data = this.formatJson(headers, rows) // 返回的data 就是要  返回的结构
        const multiHeader = [['姓名', '主要信息', '', '', '', '', '部门']]
        const merges = ['A1:A2', 'B1:F1', 'G1:G2']
        excel.export_json_to_excel({
          header: Object.keys(headers),
          data,
          multiHeader,
          merges
        })
      })
    },
    // 将表头数据和数据进行对应
    // 该方法负责将数组转化成二维数组
    formatJson(headers, rows) {
      // 首先遍历数组
      // [{ username: '张三'},{},{}]  => [[’张三'],[],[]]
      return rows.map(item => {
        return Object.keys(headers).map(key => {
          if (
            headers[key] === 'timeOfEntry' ||
            headers[key] === 'correctionTime'
          ) {
            return formatDate(item[headers[key]]) // 返回格式化之前的时间
          } else if (headers[key] === 'formOfEmployment') {
            var en = EmployeeEnum.hireType.find(
              obj => obj.id === item[headers[key]]
            )
            return en ? en.value : '未知'
          }
          return item[headers[key]]
        }) // => ["张三", "13811"，"2018","1", "2018", "10002"]
      })
      // return data
      // return rows.map(item => {
      //   // item是对象  => 转化成只有值的数组 => 数组值的顺序依赖headers  {username: '张三'  }
      //   // Object.keys(headers)  => ["姓名", "手机号",...]
      //   return Object.keys(headers).map(key => {
      //     return item[headers[key]]
      //   }) // /  得到 ['张三'，’129‘，’dd‘,'dd']
      // })
    },
    showQrCode(url) {
      this.showDialog = true
    }
  }
}
</script>

<style></style>
