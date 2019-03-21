import axios from '../axios'

/* 
  用户请求
*/

export const getUserInfo = data => {
  return axios({
    url: '/user/getUserInfo',
    method: 'post',
    data
  })
}