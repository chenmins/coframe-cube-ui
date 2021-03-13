
import { WorkCartControllerImpl } from '@controller'

const labelGroup = {
    cardType1: {
        companyName: '所属公司',
        position: '所属部门',
        name: '员工姓名',
    },
    cardType2: {
        companyName: '持卡人公司',
        position: '申请人部门',
        name: '申请人',
    },
}

import store from 'vuex'
const EmployeeCard = {
    namespaced: true,
    state: {
        cardInfo: {},
        reasonsCode: null,
        reasonsName: null,
        applyList:[],
        approveLists:[],
        cardManageLists:[],

        groupModel: {
            firstModel: {
                cardType: "",
                companyName: '',
                position: "",
                name: "",
                tel: "",
                remind: ""
            },
            floorModel: [
                {
                    which: "",
                    floor: "",
                    num: ""
                }
            ]
        },
        groupSchema: {
            fristSchema: {
                groups: [
                    {
                        legend: '选择新员工',
                        fields: [
                            {
                                type: 'select',
                                modelKey: 'cardType',
                                label: '卡片类型',
                                events: {
                                    input: (e) => {
                                        if (e === '新员工卡') {
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[1].label = labelGroup.cardType1.companyName
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[2].label = labelGroup.cardType1.position
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[3].label = labelGroup.cardType1.name
                                        }
                                        if (e === '外协/临时卡') {
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[1].label = labelGroup.cardType2.companyName
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[2].label = labelGroup.cardType2.position
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[3].label = labelGroup.cardType2.name
                                        }
                                    }
                                },
                                props: {
                                    options: ['新员工卡', '外协/临时卡']
                                },
                                rules: {
                                    required: true
                                }
                            },
                            {
                                type: 'select',
                                modelKey: 'companyName',
                                label: labelGroup.cardType1.companyName,
                                props: {
                                    options: ['公司1', '公司2', '公司3', '公司4', '公司5', '公司6']
                                },
                                rules: {
                                    required: true
                                }
                            },
                            {
                                type: 'select',
                                modelKey: 'position',
                                label: labelGroup.cardType1.position,
                                props: {
                                    options: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6']
                                },
                                rules: {
                                    required: true
                                }
                            },
                            {
                                type: 'select',
                                modelKey: 'name',
                                label: labelGroup.cardType1.name,
                                props: {
                                    options: [
                                        {
                                            text: 'liuwb',
                                            value: {
                                                id: '8e3f7d5b-5c82-4aec-bae6-af1fedf67013',
                                                userName: 'liuwb',
                                                tel: 11111
                                            }
                                        },
                                        {
                                            text: 'sysadmin',
                                            value: {
                                                id: 'cof-user-sysadmin',
                                                userName: 'sysadmin',
                                                tel: 11111
                                            }
                                        },
                                        {
                                            text: 'test',
                                            value: {
                                                id: 'd8b36c50-17e2-46cb-8f3d-2c6f51dd62c8',
                                                userName: 'test',
                                                tel: 33333
                                            }
                                        }
                                    ]
                                },
                                events: {
                                    input: (e) => {
                                        window.vue.$store.state.EmployeeCard.groupModel.firstModel.tel = e.tel
                                    }
                                },
                                rules: {
                                    required: true
                                }
                            },
                            {
                                type: 'input',
                                modelKey: 'tel',
                                label: '员工手机号',
                                props: {
                                    placeholder: '请输入'
                                },
                                rules: {
                                    required: false
                                }
                            },
                            {
                                type: 'textarea',
                                modelKey: 'remind',
                                label: '备注',
                                props: {
                                    placeholder: '请输入'
                                },
                            },
                        ]
                    },
                ]
            },
            floorSchema: [
                {
                    fields: [
                        {
                            type: 'select',
                            modelKey: 'which',
                            label: '楼栋',
                            props: {
                                options: ['楼栋1', '楼栋2', '楼栋3', '楼栋4', '楼栋5', '楼栋6']
                            },
                            rules: {
                                required: true
                            }
                        },
                        {
                            type: 'select',
                            modelKey: 'floor',
                            label: '楼层',
                            props: {
                                options: ['楼层1', '楼层2', '楼层3', '楼层4', '楼层5']
                            },
                            rules: {
                                required: true
                            }
                        },
                        {
                            type: 'select',
                            modelKey: 'num',
                            label: '楼门',
                            props: {
                                options: ['楼门1', '楼门2', '楼门3', '楼门4', '楼门5']
                            },
                            rules: {
                                required: true
                            }
                        },
                    ]
                }
            ]
        },
    },
    mutations: {
        setFloorModel(state, payload) {
            state.groupModel.floorModel = payload
        },

        setCardInfo(state, payload) {
            state.cardInfo = payload
        },
        addFormItem(state, payload) {
            state.groupModel.floorModel.push(payload.modelTemplate)
            state.groupSchema.floorSchema.push(payload.schemaTemplate)
        },
        setFormModel(state, payload) {
            state.groupModel.firstModel = payload.firstModel
            state.groupModel.floorModel = payload.floorAuthority
        },
        iniModel(state, payload) {
            state.groupModel = {
                firstModel: {
                    cardType: "",
                    companyName: '',
                    position: "",
                    name: "",
                    tel: "",
                    remind: ""
                },
                floorModel: [
                    {
                        which: "",
                        floor: "",
                        num: ""
                    }
                ]
            }

        },


    },
    actions: {
        async getWorkCard(context) {
            // commit: ƒ (_type, _payload, _options)
            // dispatch: ƒ (_type, _payload, _options)
            // getters: {}
            // rootGetters: {}
            // rootState: {…}
            // state: {__ob__: Observer}
            const { rootState, state, commit } = context
            let resp
            const that = window.vue
            resp = await that.dispatch(WorkCartControllerImpl.getWorkCard)
            if (!resp.error) {
                commit('setStateVar', {
                    state: state,
                    key: 'cardInfo',
                    value: resp.data.body
                }, { root: true })
            }
        },
        async open(context, payload) {
            let resp
            const that = window.vue

            resp = await that.dispatch(WorkCartControllerImpl.open, payload)
            if (!resp.error) {
                return resp
            }
        },
        async replacement(context, payload) {
            let resp
            const that = window.vue
            resp = await that.dispatch(WorkCartControllerImpl.replacement,{
                "reasonsCode":payload.reasonsCode,
                "reasonsName":payload.reasonsName
            })
            if (!resp.error) {
                return resp
            }
        },
        async getReviewList(context,payload){
            let resp
            const { rootState, state, commit } = context
            resp = await window.vue.dispatch(WorkCartControllerImpl.getReviewList,{
                pass:payload.pass
            })
            if(!resp.error){
                commit('setStateVar', {
                    state: state,
                    key: 'approveLists',
                    value: resp.data.body
                }, { root: true })
            }
        },
        async queryWorkCardApplyRecord(context,payload){
            let resp
            const { rootState, state, commit } = context
            resp = await window.vue.dispatch(WorkCartControllerImpl.queryWorkCardApplyRecord,{
                content:payload
            })
            if(!resp.error){
                commit('setStateVar', {
                    state: state,
                    key: 'applyList',
                    value: resp.data.body
                }, { root: true })
            }
        },
        async queryWorkCardAll(context){
            let resp
            const { rootState, state, commit } = context
            resp = await window.vue.dispatch(WorkCartControllerImpl.queryWorkCardAll, {
                "userName": "liuwb"
            })
            if(!resp.error){
                console.log(resp);
                commit('setStateVar', {
                    state: state,
                    key: 'cardManageLists',
                    value: resp.data.body
                }, { root: true })
            }
        }


    }

}

export default EmployeeCard