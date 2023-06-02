/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const partnersRouter = {
  path: '/partners',
  component: Layout,
  redirect: '/partners/index',
  name: 'Partners',
  meta: {
    title: 'Partners',
    icon: 'partners'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/partners/index'),
      name: 'partnersIndex',
      meta: { title: '合作伙伴' }
    }
  ]
}
export default partnersRouter
