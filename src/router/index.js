import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemnoriesPage from './../pages/MemoriesPage.vue'
const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component:MemnoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
