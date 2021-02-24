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
    if (localStorage.getItem('ToolsManager')) {
    } else {
        localStorage.setItem('ToolsManager', JSON.stringify([
            {icon: 'HelpCenter', text: '帮助中心', isCommonly: true},
            {icon: 'CulrturalBuild', text: '文化建设', isCommonly: true},
            {icon: 'DianShang', text: '电商采购', isCommonly: true},
            {icon: 'Guest', text: '访客预约', isCommonly: true},
            {icon: 'AddressBook', text: '通讯录', isCommonly: true},
            {icon: 'Report', text: '员工信息报备', isCommonly: true},
            {icon: 'YuYue', text: '预约中心', isCommonly: true},
            {icon: 'EmployeeCard', text: '员工卡申请', isCommonly: true},
            {icon: 'Food', text: '去哪吃', isCommonly: false},
            {icon: 'DaoHang', text: '园区导航', isCommonly: false},
            {icon: 'Parking', text: '智能停车场', isCommonly: false},
            {icon: 'BianLiDian', text: '便利店', isCommonly: false},
            {icon: 'XieTong', text: '日程协同', isCommonly: false},
            {icon: 'WuYe', text: '物业', isCommonly: false},
            {icon: 'QR', text: '我的二维码', isCommonly: false},
            {icon: 'Data', text: '数据统计', isCommonly: false},
        ]))
    }
    next()

})

router.afterEach(() => {
    NProgress.done()
})

export default router
