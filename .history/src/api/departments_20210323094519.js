import request from '@/utils/request'

// 获取组织架构的数据

export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

// 删除 组织架构的部门
export function delDepartments(id) {
  return request({
    url: '/company/department/{id}',
    method: 'DELETE'
  })
}
