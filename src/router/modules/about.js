/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const aboutRouter = {
  path: '/about',
  component: Layout,
  redirect: '/about/index',
  name: 'About',
  meta: {
    title: 'About',
    icon: 'about'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/about/index'),
      name: 'aboutIndex',
      meta: { title: '关于我们' }
    }
  ]
}
export default aboutRouter
