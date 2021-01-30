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

Vue.use(VueRouter)

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
    {
        path: '/',
        name: 'Home',
        meta: {
            name: '主菜单',
            tag: 'Meuns'
        },
        component: Home
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    // let Token = localStorage.getItem('Token')
    // if (Token === null && to.fullPath !== '/login') {
    //     router.push('/login')
    // }
    next()

})

router.afterEach(() => {
    NProgress.done()
})

export default router
