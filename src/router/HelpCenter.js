export default [
    {
        path: '/HelpCenter',
        redirect: 'HelpCenter/',
        name: '帮助中心',
        component: () => import('@/views/HelpCenter/index'),
        children: [
            {
                path: '/',
                name: '常见问题',
                meta: {
                    name: '常见问题',
                    tag: 'Question',
                    showTabbar: true,
                    showNav: true,
                    leave: 2
                },
                component: () => import('@/views/HelpCenter/Question')
            },
            {
                path: 'ProductsInc',
                name: '产品介绍',
                meta: {
                    name: '产品介绍',
                    tag: 'ProductsInc',
                    showTabbar: true,
                    leave: 2,
                    showNav: true,

                },
                component: () => import('@/views/HelpCenter/Product/ProductsInc.vue')
            },
            {
                path: 'ProductInc/:id',
                name: 'ProductInc',
                meta: {
                    name: '产品介绍',
                    leave: 3,
                    showNav: true,
                    tag: 'ProductInc',
                    backRouter: '产品介绍',
                },
                component: () => import('@/views/HelpCenter/Product/ProductInc.vue')
            },
            {
                path: 'DemanFeedback',
                name: '需求反馈',
                meta: {
                    name: '需求反馈',
                    showTabbar: true,
                    leave: 2,
                    showNav: true,

                },
                component: () => import('@/views/HelpCenter/DemanFeedback.vue')
            },
            {
                path: 'Replay',
                name: 'Replay',
                meta: {
                    name: '回复',
                    leave: 3,
                    showTabbar: false,
                    showNav: true,
                    backRouter: '需求反馈',
                },
                component: () => import('@/views/HelpCenter/Replay/Replay.vue')
            },
            {
                path: 'ReplayDetail/:id',
                name: 'ReplayDetail',
                meta: {
                    name: 'ReplayDetail',
                    leave: 3,
                    showNav: true,
                    backRouter: '需求反馈',
                    showTabbar: false,

                },
                component: () => import('@/views/HelpCenter/Replay/ReplayDetail.vue')
            },
        ]
    }
]