import {AuthApiController} from '@controller'
import Vue from 'vue'


export default {
    watch: {
        Tools: {
            deep: true,
            handler(newV, oldV) {
                this.Tools = newV
            }
        }
    },
    data() {
        return {
            Tools: [],
            allTools: [],
            commonlyTools: [],
        }
    },
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem('ToolsManager')) {

        } else {
            localStorage.setItem('ToolsManager', JSON.stringify([
                {icon: 'HelpCenter', text: '帮助中心', isCommonly: false},
                {icon: 'CulrturalBuild', text: '文化建设', isCommonly: false},
                {icon: 'DianShang', text: '电商采购', isCommonly: false},
                {icon: 'Guest', text: '访客预约', isCommonly: false},
                {icon: 'AddressBook', text: '通讯录', isCommonly: false},
                {icon: 'Report', text: '员工信息报备', isCommonly: false},
                {icon: 'YuYue', text: '预约中心', isCommonly: false},
                {icon: 'EmployeeCard', text: '员工卡申请', isCommonly: false},
                {icon: 'Food', text: '去哪吃', isCommonly: false},
                {icon: 'DaoHang', text: '园区导航', isCommonly: false},
                {icon: 'Parking', text: '智能停车场', isCommonly: false},
                {icon: 'BianLiDian', text: '便利店', isCommonly: false},
                {icon: 'XieTong', text: '日程协同', isCommonly: false},
                {icon: 'WuYe', text: '物业', isCommonly: false},
                {icon: 'QR', text: '我的二维码', isCommonly: false},
                {icon: 'Data', text: '数据统计', isCommonly: false},
            ]))
        }
        next()
    },


    created() {
        let tools = JSON.parse(localStorage.getItem('userInfo'))

        console.log(!tools || !tools.attrs)
        if (!tools || !tools.attrs || !tools.attrs.length) {
            console.log('没有初始值')

            this.getUserInfo().then(() => {
                this.initTools().then(() => {

                })
            })
        } else {
            // this.getUserInfo().then(()=>{
            //     this.updateTools()
            // })
            this.setCommonly(JSON.parse(JSON.parse(localStorage.getItem('userInfo')).attrs.find(i => i.attrName === 'MyTools').attrValue))

        }
    },
    methods: {
        updateTools(){
            this.setCommonly(JSON.parse(JSON.parse(localStorage.getItem('userInfo')).attrs.find(i => i.attrName === 'MyTools').attrValue))
            this.allTools = JSON.parse(localStorage.getItem('ToolsManager'))
            this.commonlyTools = this.allTools.map(i => {
                this.Tools.forEach(j => {
                    if (i.text === j.text) {
                        i.isCommonly = true
                    }
                })
                return i
            })
        },
        async initTools() {
            let tools = JSON.parse(localStorage.getItem('userInfo'))

            console.log(!tools || !tools.attrs || !tools.attrs.length)

            if (!tools || !tools.attrs || !tools.attrs.length) {
                tools = JSON.parse(localStorage.getItem('userInfo'))
                let resp
                resp = await this.dispatch(AuthApiController.updateAttrs, [
                    {
                        "attrName": "MyTools",
                        "attrValue": JSON.stringify([
                            {icon: 'HelpCenter', text: '帮助中心', isCommonly: true},
                            {icon: 'CulrturalBuild', text: '文化建设', isCommonly: true},
                            {icon: 'DianShang', text: '电商采购', isCommonly: true},
                            {icon: 'Guest', text: '访客预约', isCommonly: true},
                            {icon: 'AddressBook', text: '通讯录', isCommonly: true},
                            {icon: 'Report', text: '员工信息报备', isCommonly: true},
                            {icon: 'YuYue', text: '预约中心', isCommonly: true},
                            {icon: 'EmployeeCard', text: '员工卡申请', isCommonly: true},
                        ])
                    },
                ])
            }
            this.getUserInfo().then(() => {
                this.updateTools()
            })
        },
        async getUserInfo() {
            let userInfo = await this.dispatch(AuthApiController.get)
            if (!userInfo.error) {
                localStorage.setItem('userInfo', JSON.stringify(userInfo.data))
            } else {
                console.log('error')
            }
        },
        setCommonly(data) {
            this.Tools = data
        },
        async complete(data) {
            let resp = await this.dispatch(AuthApiController.updateAttrs, [{
                    "attrName": "MyTools",
                    "attrValue": JSON.stringify(this.Tools)
                }]
            )
            this.getUserInfo().then(() => {
                this.setCommonly()
                this.$router.push('/')

            })
        }
    }
}