import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'

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
    component: () => import('@/views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterUser.vue')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('@/views/SignInUser.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue')
  },
  {
    path: '/user/:id',
    name: 'Other User',
    component: () => import('@/views/OtherUser.vue')
  },
  {
    path: '/create/project',
    name: 'Create Project',
    component: () => import('@/views/CreateProject.vue')
  },
  {
    path: '/create/blob',
    name: 'Create Blob',
    component: () => import('@/views/CreateBlob.vue')
  },
  {
    path: '/update/project',
    name: 'Update Project',
    component: () => import('@/views/UpdateProject.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('@/views/DeleteTester.vue')
  },
  {
    path: '/project/:projid',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
