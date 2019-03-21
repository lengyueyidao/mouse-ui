/* 
  默认的http基本信息配置
*/
export default {
  method: 'get',
  // 基础URL
  baseUrl: 'http://localhost:9100',
  // 请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json'
}