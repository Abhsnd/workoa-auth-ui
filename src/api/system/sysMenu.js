import request from '@/utils/request'

/*
菜单管理相关的API请求函数
*/
const api_name = '/admin/system/sysMenu'

export default {
    // 获取菜单列表
    findNodes() {
        return request({
          url: `${api_name}/findNodes`,
          method: 'get'
        })
    },
    // 删除菜单
    removeById(id) {
        return request({
          url: `${api_name}/remove/${id}`,
          method: "delete"
        })
    },
    // 新增菜单
    save(sysMenu) {
        return request({
          url: `${api_name}/save`,
          method: "post",
          data: sysMenu
        })
    },
    // 更新菜单
    updateById(sysMenu) {
        return request({
          url: `${api_name}/update`,
          method: "put",
          data: sysMenu
        })
    },
    //查看某个角色的权限列表
    toAssign(roleId) {
      return request({
        url: `${api_name}/toAssign/${roleId}`,
        method: 'get'
      })
    },
    // 给某个角色授权
    doAssign(assignMenuVo) {
      return request({
        url: `${api_name}/doAssign`,
        method: "post",
        data: assignMenuVo
      })
    }
}
