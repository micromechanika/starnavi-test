import Vue from 'vue'
import VueRouter from 'vue-router'

import game from '../views/game'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/game',
    component: game
  },
  {
    path: '/',
    redirect: '/game',
    component: game
  },
  {
    path: '/game',
    name: 'game',
    component: game
  }
]

const router = new VueRouter({
  routes
})

export default router
