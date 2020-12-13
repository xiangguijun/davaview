import Dashboard from '@/views/Dashboard'
import Dashboard2 from '@/views/Dashboard2'
import Dashboard3 from '@/views/Dashboard3'
import Homepage from '@/views/homepage'
// import EmptyLayout from '../EmptyLayout'
// import _import from './_import'
export default [
  // { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'view1', component: Dashboard, hidden: true },
  { path: '/index2', name: 'view2', component: Dashboard2, hidden: true },
  { path: '/index3', name: 'view3', component: Dashboard3, hidden: true },
  { path: '/home', name: 'home', component: Homepage, hidden: true }
]
