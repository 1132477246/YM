/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const productsRouter = {
  path: '/products',
  component: Layout,
  redirect: '/products/index',
  name: 'Products',
  meta: {
    title: 'Products',
    icon: 'products'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/products/index'),
      name: 'productsIndex',
      meta: { title: '产品介绍' }
    }
  ]
}
export default productsRouter
