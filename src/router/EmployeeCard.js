export default [
    {
        path:'/EmployeeCard',
        name:'EmployeeCard',
        meta:{
            name:'EmployeeCard',
            tag:'员工卡申请',
            leave:'LeaveTwoRouter',
        },
        component:()=>import('@/views/EmployeeCard/index')
    },
    {
        path:'/CreateCard',
        name:'CreateCard',
        meta:{
            name:'新员工开卡',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/CreateCard')
    },
    {
        path:'/addCard',
        name:'addCard',
        meta:{
            name:'补卡',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/AddCard/index')
    },
    {
        path:'/confirm',
        name:'confirm',
        meta:{
            name:'确认信息',
            tag:'confirm',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/CreateCard')
    },
    {
        path:'/Apply',
        name:'Apply',
        meta:{
            name:'我的申请',
            tag:'Apply',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/Apply')
    },
    {
        path:'/ApplyRecord',
        name:'ApplyRecord',
        meta:{
            name:'申请记录',
            tag:'ApplyRecord',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/ApplyRecord')
    },
    {
        path:'/Loss',
        name:'Loss',
        meta:{
            name:'挂失',
            tag:'Loss',
            leave:"LeaveTwoRouter"
        },
        component:()=>import('@/views/EmployeeCard/Loss')
    },
    {
        path: '/ApprovalList',
        name: 'ApprovalList',
        meta: {
            name: '审批列表',
            tag: 'ApprovalList',
            leave: "LeaveTwoRouter"
        },
        component: () => import('@/views/EmployeeCard/ApprovalList/index')
    },
    {
        path: '/ApprovalDetail/:id',
        name: 'ApprovalDetail',
        meta: {
            name: '审批详情',
            tag: 'ApprovalDetail',
            leave: "LeaveTwoRouter"
        },
        component: () => import('@/views/EmployeeCard/ApprovalList/Detail')
    }
]