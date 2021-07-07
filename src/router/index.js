import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChunkName: "about"
    component: () => import('../views/About.vue')
  },
  {
    path: '/create/project',
    name: 'Create Project',
    component: () => import('../views/CreateProject.vue')
  },
  {
    path: '/create/blob',
    name: 'Create Blob',
    component: () => import('../views/CreateBlob.vue')
  },
  {
    path: '/update/project',
    name: 'Update Project',
    component: () => import('../views/UpdateProject.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('../views/DeleteTester.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
