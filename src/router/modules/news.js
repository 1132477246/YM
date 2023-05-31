/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const newsRouter = {
  path: '/news',
  component: Layout,
  redirect: '/news/index',
  name: 'News',
  meta: {
    title: 'News',
    icon: 'news'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/newsInfo/index'),
      name: 'newsIndex',
      meta: { title: '新闻资讯' }
    },
    {
      path: 'details',
      component: () => import('@/views/newsInfo/components/newsDetails'),
      name: 'newsDetails',
      meta: { title: '新闻详情' }
    }
  ]
}
export default newsRouter
