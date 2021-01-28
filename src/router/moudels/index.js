export default [
    {
        path: '/admin',
        name: 'org-rights',
        component:()=>import('@/views/LeaveTwo'),
        children:[
            {
                path:'org-position',
                name:'org-position',
                meta:{
                    name:'机构管理',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/admin/org-position.vue')
            },
            {
                path:'employee',
                name:'employee',
                meta:{
                    name:'人员管理',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/admin/employee')
            }
        ]
    },
    {
        path: '/authority',
        name: 'authority',
        component:()=>import('@/views/LeaveTwo'),
        children:[
            {
                path:'role',
                name:'role',
                meta:{
                    name:'成员角色',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/authority/role')
            },
            {
                path:'user',
                name:'user-index',
                meta:{
                    name:'用户管理',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/authority/user')
            }
        ]
    },
    {
        path: '/security-audit',
        name: 'security-audit',
        component:()=>import('@/views/LeaveTwo'),
        children:[
            {
                path:'operation-log',
                name:'operation-log',
                meta:{
                    name:'操作日志',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/securityAudit/operation-log')
            }
        ]
    },
    {
        path: '/system-config',
        name: 'system-config',
        component:()=>import('@/views/LeaveTwo'),
        children:[
            {
                path:'authority-template',
                name:'authority-template',
                meta:{
                    name:'角色模板',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/systemConfig/authority-template')
            },
            {
                path:'business-dict',
                name:'business-dict',
                meta:{
                    name:'资源权限',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/systemConfig/business-dict')
            },
            {
                path:'resource-authority',
                name:'resource-authority',
                meta:{
                    name:'业务字典',
                    leave:'LeaveTwoRouter'
                },
                component:()=>import('@/views/systemConfig/resource-authority')
            }
        ]
    }

]