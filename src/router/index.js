import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'category/:id',
        name: 'Category',
        component: Category
      },
      {
        path: 'category/sub/:id',
        name: 'SubCategory',
        component: Category
      }
      ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
