import Vue from 'vue'
import Router from 'vue-router'
// import homeIndex from '@/views/home/index'
import Layout from '@/layout'
Vue.use(Router)

import newsRouter from './modules/news'
import productsRouter from './modules/products'

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
    },
    newsRouter,
    productsRouter
    // {
    //   path: '/news',
    //   component: Layout,
    //   redirect: '/news/index',
    //   children: [
    //     {
    //       path: 'index',
    //       component: () => import('@/views/newsInfo/index'),
    //       name: 'newsIndex',
    //       meta: { title: 'newsIndex', icon: 'newsIndex' }
    //     }
    //   ]
    // }

  ]
})
