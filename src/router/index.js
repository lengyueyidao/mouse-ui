import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/error/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("进入全局路由守卫" + to.name);
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  let isLogin = sessionStorage.getItem('token');
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (to.name !== 'login' && !isLogin) {
    next({
      path: '/login',
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      query: {redirect: to.fullPath}  
    })
  }else{
    next();
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
  if (isLogin) {
    console.log('已登录');
    router.push({ path: '/' });
  }
  }
});

export default router;


