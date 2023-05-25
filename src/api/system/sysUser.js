/**
 * 用户管理的相关API请求函数
 */
import request from '@/utils/request'

const api_name = '/admin/system/sysUser'

export default {
    // 获取用户分页列表
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    // 根据id查询
    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get'           
        })
    },
    // 添加用户
    save(user) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: user
        })
    },
    // 根据id修改
    updateById(user) {
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: user
        })
    },
    // 根据id删除用户
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        })
    },
    // 更新用户状态
    updateStatus(id, status) {
        return request({
            url: `${api_name}/updateStatus/${id}/${status}`,
            method: 'get'
        })
    }
}