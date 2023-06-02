/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const solutionRouter = {
  path: '/solution',
  component: Layout,
  redirect: '/solution/index',
  name: 'Solution',
  meta: {
    title: 'Solution',
    icon: 'solution'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/solution/index'),
      name: 'solutionIndex',
      meta: { title: '解决方案' }
    }
  ]
}
export default solutionRouter
