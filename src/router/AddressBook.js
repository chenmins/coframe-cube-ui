export default [
    {
        path:'/addressbook',
        meta:{
            name:'通讯录',
            tag:'通讯录',
            tabBarshow:false,
            leave:'LeaveTwoRouter',

        },
        component:()=>import('@/views/AddressBook/index.vue'),
        children:[
            {
                path:'/',
                name:'homepage',
                meta:{
                    name:'通讯录主页',
                    tag:'AddressBook-HomePage',
                    tabBarshow:false,
                    leave:'LeaveTwoRouter',

                },
                component:()=>import('@/views/AddressBook/HomePage.vue')
            },
            {
                path:'staff/:id',
                name:'Staff',
                meta:{
                    name:'部门人员',
                    tag:'AddressBook-Staff',
                    tabBarshow:false,
                    leave:'LeaveTwoRouter',

                },
                component:()=>import('@/views/AddressBook/Staff.vue')
            },
            {
                path:'information/:id',
                name:'Information',
                meta:{
                    name:'个人信息',
                    tag:'AddressBook-Information',
                    tabBarshow:false,
                    leave:'LeaveTwoRouter',

                },
                component:()=>import('@/views/AddressBook/Information.vue')
            },
        ]
    }
]