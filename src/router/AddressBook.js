export default [
    {
        path: '/addressbook',
        redirect: 'addressbook/',
        name: '通讯录',
        meta: {
            name: '通讯录',
            tag: '通讯录',
            tabBarshow: false,
            leave: 2,
            showNav: true
        },
        component: () => import('@/views/AddressBook/index.vue'),

        children: [
            {
                path: '/',
                name: 'homepage',
                meta: {
                    name: '通讯录',
                    tag: 'AddressBook-MainMenu',
                    tabBarshow: false,
                    leave: 2,
                    showNav: true

                },
                component: () => import('@/views/AddressBook/HomePage.vue')
            },
            {
                path: 'staff/:id',
                name: 'Staff',

                meta: {
                    name: '部门人员',
                    tag: 'AddressBook-Staff',
                    tabBarshow: false,
                    leave: 3,
                    backRouter: 'homepage',
                    showNav: true

                },
                component: () => import('@/views/AddressBook/Staff.vue')
            },
            {
                path: 'information/:id',
                name: 'Information',
                meta: {
                    name: '个人信息',
                    tag: 'AddressBook-Information',
                    notShowInRouterView: true,
                    tabBarshow: false,
                    leave: 3,
                    backRouter: 'Staff',
                    showNav: true

                },
                component: () => import('@/views/AddressBook/Information.vue')
            },
        ]
    }
]