/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const contactRouter = {
  path: '/contact',
  component: Layout,
  redirect: '/contact/index',
  name: 'Contact',
  meta: {
    title: 'Contact',
    icon: 'contact'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/contact/index'),
      name: 'contactIndex',
      meta: { title: '联系我们' }
    }
  ]
}
export default contactRouter
