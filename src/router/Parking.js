export default [
    {
        path: '/Parking',
        redirect:'Parking/',
        name:'智能停车场',
        meta: {
            name: '申请车位',
            tag: '释放车位',
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/Parking/index'),
        children: [
            {
                path: '/',
                name: 'Parking',
                meta: {
                    name: '申请车位',
                    tag: '',
                    sliderNav: {
                        selectedLabel: 'B2层',
                        tabs: [
                            {
                                label: 'B2层'
                            }, {
                                label: 'B3层'
                            }, {
                                label: 'B4层'
                            }
                        ],
                        center:false
                    },
                    leave: 2,
                    showNav: true
                },
                component: () => import('@/views/Parking/Apply'),
            }, {
                path: 'MyApproval',
                name: 'MyApproval',
                meta: {
                    name: '我的审批',
                    tag: '我的审批',
                    sliderNav: {
                        selectedLabel: 'B2层',
                        tabs: [
                            {
                                label: 'B2层'
                            }, {
                                label: 'B3层'
                            }, {
                                label: 'B4层'
                            }
                        ],
                        center:true
                    },
                    leave: 2,
                    showNav: true
                },
                component: () => import('@/views/Parking/MyApproval'),
            }, {
                path: 'Approval/:id',
                name: 'Parking-ApprovalDetail',
                meta: {
                    name: '审批详情',
                    tag: '审批详情',
                    leave: 2,
                    showNav: true,
                    showBottom: 'false'
                },
                component: () => import('@/views/Parking/ApprovalDetail'),
            }, {
                path: 'OutsideCar',
                name: 'OutsideCar',
                meta: {
                    name: '外来车辆审批',
                    tag: '外来车辆审批',
                    leave: 2,
                    showNav: true,
                },
                component: () => import('@/views/Parking/OutslideCar/OutsideCar'),
            }, {
                path: 'Readme',
                name: 'Readme',
                meta: {
                    name: '说明',
                    tag: '说明',
                    leave: 2,
                    showNav: true,
                    showBottom: 'false'
                },
                component: () => import('@/views/Parking/OutslideCar/Readme'),
            }, {
                path: 'CarRegister',
                name: 'CarRegister',
                meta: {
                    name: '车辆注册',
                    tag: '车辆注册',
                    leave: 3,
                    showNav: true,
                    showBottom: 'false'
                },
                component: () => import('@/views/Parking/OutslideCar/CarRegister'),
            }, {
                path: 'Recorded',
                name: 'Recorded',
                meta: {
                    name: '车辆备案详情',
                    tag: '车辆备案详情',
                    leave: 3,
                    showNav: true,
                    showBottom: 'false'
                },
                component: () => import('@/views/Parking/OutslideCar/Recorded'),
            },
        ]
    }
]