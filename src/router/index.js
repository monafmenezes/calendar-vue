import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Description from '../views/Description.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/description/:publicId',
    name: 'Description',
    component: Description
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
