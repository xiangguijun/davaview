import Vue from 'vue'
import VueRouter from 'vue-router'

import constantRoutes from './constantRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes]
})

export default router
