import { UserManager,AuthApiController } from "@controller";
import router from '@/router'
import {removeToken} from "@/utils/auth";


const TOOLS_INIT = {
    "attrName": "MyTools",
    "attrValue": JSON.stringify([
        { icon: 'HelpCenter', text: '帮助中心', isCommonly: true },
        { icon: 'CulrturalBuild', text: '文化建设', isCommonly: true },
        { icon: 'DianShang', text: '电商采购', isCommonly: true },
        { icon: 'Guest', text: '访客预约', isCommonly: true },
        { icon: 'AddressBook', text: '通讯录', isCommonly: true },
        { icon: 'Report', text: '员工信息报备', isCommonly: true },
        { icon: 'YuYue', text: '预约中心', isCommonly: true },
        { icon: 'EmployeeCard', text: '员工卡申请', isCommonly: true },
    ])
}

const MainMenu = {
    namespaced: true,
    state: {
        Tools: [],
        AllTools: [],
        todos: [
            {
                id:1,
                name: '硕大的',
                position: '行政部',
                comeTime: '2020-12-26  15:00'
            },
            {
                id:2,
                name: '硕大的1',
                position: '行政部1',
                comeTime: '2020-12-26  15:00'
            },
            {
                id:3,
                name: '硕大的2',
                position: '行政部2',
                comeTime: '2020-12-26  15:00'
            }
        ],
        applys: [
            {
                name: '访客预约(京东商务部)',
                status: false
            },
            {
                name: '访客预约(京东商务部)',
                status: false
            },
            {
                name: '访客预约(京东商务部)',
                status: false
            },
            {
                name: '访客预约(京东商务部)',
                status: true
            },
        ],
        todoList: [
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: true
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: true
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
            {
                join: ['陈优优', '张三丰', '王二小', '张思', '李四', '王思奥', '赵晓晓', '李思思', '秦琪'],
                noticeTime: '2020年12月28日 08:00',
                complete: false
            },
        ],
    },
    mutations: {
        setStateVar(state, payload) {
            state[`${payload.key}`] = payload.value
        },
    },
    actions: {
        hasInitValue(context, payload) {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            return new Promise((resolve, reject) => {
                if (!userInfo || !userInfo.attrs || !userInfo.attrs.length) {
                    console.log('没有初始值');
                    reject({ hasInitValue: false })
                } else {
                    context.commit('setStateVar', {
                        key: 'Tools',
                        value: JSON.parse(JSON.parse(localStorage.getItem('userInfo')).attrs.find(i => i.attrName === 'MyTools').attrValue)
                    })
                    resolve({ hasInitValue: true })
                }
            })
        },
        async storeUserInfo(context, payload) {
            let resp
            resp = await payload.dispatch(AuthApiController.get)
            if (!resp.error) {
                localStorage.setItem('userInfo', JSON.stringify(resp.data))
            }
            context.commit('setStateVar', {
                key: 'Tools',
                value: JSON.parse(JSON.parse(localStorage.getItem('userInfo')).attrs.find(i => i.attrName === 'MyTools').attrValue)
            })
        },
        async updateUserInfo(context, payload) {
            // const USER_INIT_TOOLS = JSON.parse(JSON.parse(localStorage.getItem('userInfo')).attrs.find(i => i.attrName === 'MyTools').attrValue)
            // console.log(USER_INIT_TOOLS);
            let hasInitValue = payload.hasInitValue, res
            if (!hasInitValue) {
                res = await payload.dispatch(AuthApiController.updateAttrs, [
                    TOOLS_INIT
                ])
            } else {
                res = await payload.dispatch(AuthApiController.updateAttrs, [{
                    "attrName": "MyTools",
                    "attrValue": JSON.stringify(context.state.Tools)
                }])
            }
            context.dispatch('storeUserInfo', { dispatch: payload.dispatch })
            return 
        },
        async addCommonly(context, payload) {
            let HandledTools = context.getters.HandledTools()
            if (HandledTools.filter(tool => tool.isCommonly === true).length >= 8) {
                this.$createToast({
                    txt: '最多只能添加8个常用功能',
                    type: 'warn',
                    time: 350
                }).show()
                return
            }
            HandledTools.find(item => {
                if (item.text === payload.Tool.text) {
                    item.isCommonly = true
                }
            })
            context.commit('setStateVar',{
                key:'Tools',
                value:HandledTools.filter(item => item.isCommonly === true)
            })
            context.dispatch('updateUserInfo',{hasInitValue:true,dispatch:payload.dispatch})
        },
        async exitLogin(context,payload){
            localStorage.removeItem('Token')
            localStorage.removeItem('userInfo')
            localStorage.removeItem('ToolsManager')
            localStorage.removeItem('admin')
            localStorage.removeItem('admin')

            removeToken()
            router.replace('/login')
            // let resp
            //
            // resp = await payload.dispatch(AuthApiController.logout)
            // if (!resp.error) {
            //
            //
            // } else {
            //     console.log('error')
            //
            // }

        }
    },
    getters: {
        HandledTools(state, getters) {
            //getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中
            // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
            return () => {
                return state.AllTools.map(i => {
                    state.Tools.forEach(j => {
                        if (i.text === j.text) {
                            i.isCommonly = true
                        }
                    })
                    return i
                })
            }
        },

    }
}

export default MainMenu