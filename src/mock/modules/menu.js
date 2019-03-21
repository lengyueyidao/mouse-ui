// 获取用户信息
export function getUserInfo () {
  return {
    // isOpen: false,
    url: 'http://localhost:9100/user/getUserInfo',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment',
        'name': 'name',
        'order|1-20': 10
        // 其他数据
      }
    }
  }
}