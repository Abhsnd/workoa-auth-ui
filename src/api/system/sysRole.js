/**
 * 角色管理相关的API请求函数
 */
import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {
    // 获取所有角色
    findAll() {
        return request({
            url: `${api_name}/findAll`,
            method: 'get'
        })
    },
    // 获取角色分页列表
    getPageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/${current}/${limit}`,
            method: 'get',
            params: searchObj
            // 普通对象参数 params: 对象参数名称
            // json格式 data: 对象参数名称
        })
    },
    // 根据id删除角色
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        })
    },
    // 添加角色
    saveRole(role) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: role
        })
    },
    // 根据id查询
    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get'           
        })
    },
    // 根据id修改
    updateById(role) {
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: role
        })
    },
    // 批量删除
    batchRemove(idList) {
        return request({
            url: `${api_name}/batchRemove`,
            method: 'delete',
            data: idList
        })
    },
    // 根据用户id获取角色数据
    getRoles(adminId) {
        return request({
          url: `${api_name}/toAssign/${adminId}`,
          method: 'get'
        })
    },
    // 根据用户分配角色
    assignRoles(assginRoleVo) {
        return request({
          url: `${api_name}/doAssign`,
          method: 'post',
          data: assginRoleVo
        })
    }
}