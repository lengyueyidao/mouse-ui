import axios from '../axios'

/* 
  菜单请求
*/

export const getMenuInfo = data => {
  return axios({
    url: '/menu/getMenuInfo',
    method: 'post',
    data
  })
}