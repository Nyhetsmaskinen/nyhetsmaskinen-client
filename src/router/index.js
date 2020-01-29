import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewHome.vue')
  },
  {
    path: '/spela',
    name: 'Game',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewGame.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewInfo.vue')
  },
  {
    path: '/topplista',
    name: 'Highscore',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewHighscore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
