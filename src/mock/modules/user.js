// 获取菜单信息
export function getMenuInfo () {
  return {
    // isOpen: false,
    url: 'http://localhost:9100/menu/getMenuInfo',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment', 
        'name': '@name', // 随机生成姓名
        'email': '@email', // 随机生成姓名
        'age|10-20': 12
        // 其他数据
      }
    }
  }
}