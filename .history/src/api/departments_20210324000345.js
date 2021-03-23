
import request from '@/utils/request'

/**
 * 获取组织架构
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}
/**
 * 删除部门
 * @param {string} 部门 id
 */
export function delDepartments(id) {
  return request({
    method: 'DELETE',
    url: `/company/department/${id}`
  })
}

/**
 * 增加部门
 * @param {object} data
 */
export function addDepartments(data) {
  console.log(233)
  return request({
    // !这里不能写成 type，必须是 method，注意！
    method: 'POST',
    url: '/company/department',
    data
  })
}
