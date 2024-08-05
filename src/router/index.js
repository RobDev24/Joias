import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/even',
    name: 'eventos',
   
    component: () => import('../views/EventosView.vue')
  },
  {
    path: '/str',
    name: 'store',
   
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/cont',
    name: 'contato',
   
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/hist',
    name: 'historia',
   
    component: () => import('../views/SobreView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
