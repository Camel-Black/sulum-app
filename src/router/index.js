import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/loginPage'
import forget from '@/components/forget'
import notfound from '@/components/notfound'
import register from '@/components/register'
Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        auth: true,
        title: 'Login'
      }
    }, {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta:{
        title:'forget password'
      }
    },{
      path: '*',
      redirect: '/404'
    },{
      path:'/404',
      component: notfound,
      meta:{
        title:'Not found'
      }
    },{
      path: '/register',
      name: 'register',
      meta:{
        title: 'register'
      },
      component: register
    }
  ]
})
