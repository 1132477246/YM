import Vue from 'vue'
import Router from 'vue-router'
// import homeIndex from '@/views/home/index'
import Layout from '@/layout'
Vue.use(Router)

import newsRouter from './modules/news'
import productsRouter from './modules/products'
import aboutRouter from './modules/about'
import solutionRouter from './modules/solution'
import partnersRouter from './modules/partners'
import contactRouter from './modules/contact'

export default new Router({
  mode: 'history',
  base: '/homepage',
  scrollBehavior: () => { return { x: 0, y: 0 } },
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index'),
          name: 'Home',
          meta: { title: 'home', icon: 'dashboard', affix: true }
        }
      ]
    },
    newsRouter,
    productsRouter,
    aboutRouter,
    solutionRouter,
    partnersRouter,
    contactRouter
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
