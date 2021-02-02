export default [
    {
        path:'/Report',
        name:'Report',
        meta:{
            name:'员工信息报备',
            leave:2,
            showNav: true
        },
        component:()=>import('@/views/Report/index')
    },
    {
        path:'/ReportFrom',
        name:'ReportFrom',
        meta:{
            name:'报备详情',
            leave:3,
            showNav: true
        },
        component:()=>import('@/views/Report/ReportForm')
    }
]