import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import WatchPage from '@/pages/WatchPage.vue'

import AdminPage from '@/pages/admin/AdminPage.vue'
import CreateMoviePage from '@/pages/admin/CreateMoviePage.vue'
import UpdateMoviePage from '@/pages/admin/UpdateMoviePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/watch/:movieId',
    name: 'Watch',
    component: WatchPage,
    props: true,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
  },
  {
    path: '/admin/create',
    name: 'CreateMovie',
    component: CreateMoviePage,
  },
  {
    path: '/admin/update/:movieId',
    name: 'UpdateMovie',
    component: UpdateMoviePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
