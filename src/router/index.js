import Vue from 'vue'
import Router from 'vue-router'
// import homeIndex from '@/views/home/index'
import Layout from '@/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/home/index'),
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ]
    }

  ]
})
