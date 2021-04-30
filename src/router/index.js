import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from "@/axios/index";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style


NProgress.configure({showSpinner: false}) // NProgress Configuration

import LeaveTwoMenus from './moudels/index'
import AddressBook from "@/router/AddressBook";
import HelpCenter from "@/router/HelpCenter";
import Cultural from "@/router/Cultural";
import MainMenu from "@/router/MainMenu";
import Report from "@/router/Report";
import Guest from "@/router/Guest";
import Schedule from "@/router/Schedule";
import EmployeeCard from "@/router/EmployeeCard";
import AppointmentCenter from "@/router/AppointmentCenter";
import Parking from "@/router/Parking";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push  
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    ...LeaveTwoMenus,
    ...HelpCenter,
    ...AddressBook,
    ...Cultural,
    ...MainMenu,
    ...Report,
    ...Guest,
    ...Schedule,
    ...EmployeeCard,
    ...AppointmentCenter,
    ...Parking,
    {
        path: '/scrollTest',
        name: 'scrollTest',
        meta: {
            name: 'scrollTest',
            showNav: true,
            leave: 1
        },
        // component: Home
        component: () => import('@/views/scrollTest')
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            name: '行政服务工作台',
            tag: 'Meuns',
            showNav: true,
            leave: 1
        },
        // component: Home
        component: () => import('@/views/MainMenu/index')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            name: '登录',
            tag: 'Login'
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/changePassword',
        name: 'changePassword',
        component: () => import('../views/changePassword')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: "/QR/:id",
        name: '我的二维码',
        meta: {
            name: '我的二维码',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/MainMenu/MyQR')
    },
    {
        path: "/Data",
        name: '数据统计',
        meta: {
            name: '发布',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/Data/index')
    },
    {
        path: "/fangkeyuyue",
        name: 'fangkeyuyue',
        meta: {
            name: '二维码',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/QR/index')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
