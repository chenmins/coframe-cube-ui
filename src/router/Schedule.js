export default [
    {
        path:'/Schedule',
        name:'日程协同',
        meta:{
            name:'日程协同',
            leave:2,
            showNav:true
        },
        component:()=>import('@/views/Schedule/index')
    },
    {
        path:'/addSchedule',
        name:'addSchedule',
        meta:{
            name:'添加日程',
            leave:3,
            showNav: true,
            backRouter:'日程协同',
        },
        component:()=>import('@/views/Schedule/addSchedule')
    },
    {
        path:'/ScheduleDetail/:id',
        name:'ScheduleDetail',
        meta:{
            name:'日程详情',
            leave:3,
            showNav: true,
            backRouter:'日程协同',
        },
        component:()=>import('@/views/Schedule/ScheduleDetail')
    },

    {
        path:'/ScheduleDoing',
        name:'ScheduleDoing',
        meta:{
            name:'接收详情',
            leave:3,
            showNav: true,
            backRouter:'日程协同',
        },
        component:()=>import('@/views/Schedule/receive')
    },

]