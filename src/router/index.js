import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from "@/axios/index";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import LeaveTwoMenus from './moudels/index'

Vue.use(VueRouter)

const routes = [
  ...LeaveTwoMenus,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path:'/changePassword',
    name:'changePassword',
    component: ()=>import('../views/changePassword')
  },
  {
    path: '*',
    name:'NotFound',
    component: ()=>import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  NProgress.start()
  let Token = localStorage.getItem('Token')
  if(Token !== null && to.fullPath!=='/login'){
    axios.get('/api/users/menus').catch(error=>{
      router.push('/login')
    })
  }
  next()
  NProgress.done()
})

router.afterEach(()=>{
  NProgress.done()
})

export default router
