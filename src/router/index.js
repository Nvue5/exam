import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mul from '../views/Mul.vue'
import Timu from '../views/Timu.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single',
    name: 'Single',
    component: Single
  },
  {
    path: '/mul',
    name: 'Mul',
    component: Mul
  },
  {
    path: '/timu',
    name: 'Timu',
    component: Timu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
