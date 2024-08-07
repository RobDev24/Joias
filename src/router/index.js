import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/log',
    name: 'login',
    component: Login
  },
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
  {
    path: '/cole',
    name: 'colecoes',
   
    component: () => import('../views/ColecoesView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
