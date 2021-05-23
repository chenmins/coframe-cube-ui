import router from "@/router/index";


export default [
    {
        path: '/YuYue',
        redirect:'/YuYue/',
        name:'预约中心',
        meta: {
            name: '预约中心',
            tag: 'AppointmentCenter',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/index'),
        children: [
            {
                path: '/',
                name: 'YuYueCenter',
                meta: {
                    name: '预约中心',
                    tag: 'YuYueCenter',
                    leave: 2,
                    showNav: true
                },
                component: () => import('@/views/AppointmentCenter/YuYueCenter')
            },
            {
                path: '/MyYuYue',
                name: 'MyYuYue',
                meta: {
                    name: '我的预约',
                    tag: 'MyYuYue',
                    leave: 2,
                    showNav: true
                },
                component: () => import('@/views/AppointmentCenter/MyYuYue')
            },
            {
                path: '/AppointmentAdminRelease',
                name: 'AppointmentAdminRelease',
                meta: {
                    name: '发布管理',
                    tag: '发布管理',
                    leave: 3,
                    backRouter:'Home',
                    showNav: true
                },
                component: () => import('@/views/AppointmentCenter/admin/Release')
            },
        ]
    },
    {
        path: '/YuYue/:id',
        name: 'YuYueItem',
        meta: {
            name: 'YuYueItem',
            dataType: {
                yiwushi: [
                    {
                        text: '问诊',
                        value:'问诊'
                    },
                    {
                        text: '理疗',
                        value:'理疗'
                    },
                    {
                        text: '拿药',
                        value:'拿药'
                    }
                ],
                lifashi: [
                    {
                        text: '理发',
                        value:'理发'
                    },
                    {
                        text: '护理',
                        value:'护理'
                    },
                    {
                        text: '洗发',
                        value:'洗发'
                    }
                ],
                lingdian: [
                    {
                        text: '一号餐厅',
                        value:'一号餐厅'

                    },
                    {
                        text: '二号餐厅',
                        value:'二号餐厅'
                    },
                    {
                        text: '三号餐厅',
                        value:'三号餐厅'
                    }
                ],
                yiwuganxi: [
                    {
                        text: '一号餐厅',
                        value:'一号餐厅'

                    },
                    {
                        text: '二号餐厅',
                        value:'二号餐厅'
                    },
                    {
                        text: '三号餐厅',
                        value:'三号餐厅'
                    }
                ],
                huiyishi: [
                    {
                        text: '一号餐厅',
                        value:'一号餐厅'

                    },
                    {
                        text: '二号餐厅',
                        value:'二号餐厅'
                    },
                    {
                        text: '三号餐厅',
                        value:'三号餐厅'
                    }
                ],
                wenyingshi: [
                    {
                        text: '文印社',
                        value:'文印社'

                    }
                ],
                kufang: [
                    {
                        text: '一号仓库',
                        value:'一号仓库'

                    },
                    {
                        text: '二号仓库',
                        value:'二号仓库'
                    },
                    {
                        text: '三号仓库',
                        value:'三号仓库'
                    }
                ]
            },
            leave: 3,
            backRouter:'YuYueCenter',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/BusinessPage'),
    },
    {
        path: '/YuYueSuccess',
        name: 'YuYueSuccess',
        meta: {
            name: '预约成功',
            tag: '预约成功',
            leave: 3,
            backRouter:'YuYueCenter',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/YuYueSuccess')
    },
    {
        path: '/ReservePage',
        name: 'ReservePage',
        meta: {
            name: '预约页面',
            tag: '预约页面',
            leave: 3,
            backRouter:'预约中心',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/ReservePage')
    },
    {
        path: '/MyAppointment',
        name: 'MyAppointment',
        meta: {
            name: '我的预约',
            tag: 'MyAppointment',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/MyYuYue')
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

    //管理员
    {
        path: '/AppointmentAdmin',
        name:'AppointmentAdmin',
        meta: {
            name: '预约管理',
            tag: '预约管理',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/index'),
    },

    {
        path: '/AdminReleaseEdit',
        name: 'AdminReleaseEdit',
        meta: {
            name: '发布时间段管理',
            tag: '发布时间段管理',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/ReleaseEdit')
    },
    {
        path: '/AdminRelease',
        name: 'AdminRelease',
        meta: {
            name: '发布',
            tag: '发布',
            leave: 3,
            backRouter:'AppointmentAdminRelease',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/addRelease')
    },
    {
        path: '/AdminRelease-yiwuganxi',
        name: 'AdminRelease-yiwuganxi',
        meta: {
            name: '发布-衣物干洗',
            tag: '发布-衣物干洗',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/addRelease-yiwugannxi')
    },
    {
        path: '/AdminRelease-meeting',
        name: 'AdminRelease-meeting',
        meta: {
            name: '添加会议',
            tag: '添加会议',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/addMeeting')
    },
    {
        path: '/AdminRelease-restaurant',
        name: 'AdminRelease-restaurant',
        meta: {
            name: '餐厅',
            tag: '餐厅',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/restaurant')
    },
    {
        path: '/meetingConfirm',
        name: 'meetingConfirm',
        meta: {
            name: '会议室确认',
            tag: '会议室确认',
            leave: 3,
            backRouter:'Home',
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/meetingConfirm')
    },
    {
        path: '/meetingSuccess',
        name: 'meetingSuccess',
        meta: {
            name: '',
            tag: 'AppointmentCenter',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/AppointmentCenter/admin/meetingSuccess')
    },


]