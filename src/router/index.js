import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from "@/axios/index";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import LeaveTwoMenus from './moudels/index'
import blue from "@/router/blue";

Vue.use(VueRouter)

const routes = [
  ...LeaveTwoMenus,
  ...blue,
  {
    path: '/',
    name: 'Home',
    meta:{
      name:'常见问题'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录',
      tag:'Login'
    },
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
  if(Token === null && to.fullPath!=='/login'){
      router.push('/login')
  }
  next()
  NProgress.done()
})

router.afterEach(()=>{
  NProgress.done()
})

export default router
