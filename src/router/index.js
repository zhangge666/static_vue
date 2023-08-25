import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/AboutView.vue'
import Index from '../views/Home/index.vue'
import login from '../views/login.vue'
import Main from '../views/Home/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        // Remove the 'name' property here
        { path: '',name: 'index', component: Main }, // 默认子路由
        { path: 'home', component: Main },
        {path:'/about',name:'about',component:About}
      ]
    }
  ]
})

export default router
