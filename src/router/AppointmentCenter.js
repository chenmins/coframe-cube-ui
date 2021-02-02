import router from "@/router/index";


export default [
    {
        path: '/AppointmentCenter',
        name: 'AppointmentCenter',
        meta: {
            name: '预约中心',
            tag: 'AppointmentCenter',
            leave:2,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/index')
    },
    {
        path: '/MyAppointment',
        name: 'MyAppointment',
        meta: {
            name: '预约中心',
            tag: 'MyAppointment',
            leave:2,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/MyAppointment')
    },
    {
        path: '/func/:id',
        name: 'func',
        meta: {
            name: 'func',
            dataType:{
                hospital:[
                    {
                        content:'问诊',
                    },
                    {
                        content:'理疗',
                    },
                    {
                        content:'拿药'
                    }
                ],
                barbershop:[
                    {
                        content:'理发',
                    },
                    {
                        content:'护理',
                    },
                    {
                        content:'洗发'
                    }
                ],
                restaurant:[
                    {
                        content:'一号餐厅',
                    },
                    {
                        content:'二号餐厅',
                    },
                    {
                        content:'三号餐厅'
                    }
                ],
            },
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/BusinessPage'),
    },
    {
        path: '/ReservePage',
        name: 'ReservePage',
        meta: {
            name: '预约页面',
            tag: '预约页面',
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/ReservePage')
    },
    {
        path: '/BusinessIntroduction',
        name: 'BusinessIntroduction',
        meta: {
            name: '业务介绍',
            tag: '业务介绍',
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/BusinessIntroduction')
    },
    {
        path: '/ResultPage',
        name: 'ResultPage',
        meta: {
            name: '二维码结果页',
            tag: '业务介绍',
        },
        component: () => import('@/views/AppointmentCenter/ResultPage')
    },
    {
        path: '/DryClean',
        name: 'DryClean',
        meta: {
            name: '衣物干洗',
            tag: '衣物干洗',
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/DryClean')
    },
    {
        path: '/AppointmentAdmin',
        meta: {
            name: '管理员',
            tag: '管理员',
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/index'),
        children:[
            {
                path: '/',
                name: 'AppointmentAdminList',
                meta: {
                    name: '预约管理',
                    tag: '预约管理',
                    leave:3,
                    showNav: true
                },
                component: () => import('@/views/AppointmentCenter/admin/List')
            }, {
                path: '/Release',
                name: 'AppointmentAdminRelease',
                meta: {
                    name: '发布管理',
                    tag: '发布管理',
                    leave:3,
                    showNav: true
                },
                component: () => import('@/views/AppointmentCenter/admin/Release')
            },
        ]
    },
    {
        path: '/ReleaseEdit',
        name: 'AppointmentAdminReleaseEdit',
        meta: {
            name: '发布',
            tag: '发布',
            leave:3,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/ReleaseEdit')
    },
]