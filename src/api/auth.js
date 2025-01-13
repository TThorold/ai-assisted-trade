import request  from '@/utils/request.js'

export default {
  // 获取业务字典分页
  getToken(data) {
    return request({
      url: '/login/',
      data,
      method:'post'
    })
  },
  // 手机号获取用户信息
  getUserInfo(params) {
    return request({
      url: '/userdata/',
      params,
      method:'get'
    })
  }
}
