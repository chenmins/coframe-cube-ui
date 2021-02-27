
export default [
    {
        path:'/MainMenu',
        name:'MainMenu',
        meta:{
            name:'行政服务工作台',
            tag:'行政服务工作台',
            leave:1,
            showNav:true
        },
        component:()=>import('@/views/MainMenu/index')
    },
    {
        path:'/AllTools',
        name:'AllTools',
        meta:{
            name:'工具列表',
            tag:'工具列表',
            leave:2,
            showNav:true
        },
        component:()=>import('@/views/MainMenu/AllTools')
    },
    {
        path:'/ManageTool',
        name:'ManageTool',
        meta:{
            name:'工具管理',
            tag:'工具管理',
            leave:3,
            showNav: true,
            backRouter:'AllTools',
        },
        component:()=>import('@/views/MainMenu/ManageTool')
    },
    {
        path:'/TodoLists',
        name:'TodoLists',
        meta:{
            name:'审批待办',
            tag:'审批待办',
            leave:2,
            showNav: true
        },
        component:()=>import('@/views/MainMenu/TodoList')
    }
]