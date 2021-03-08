
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
                                        if (e === '外协' || e === '临时卡') {
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[1].label = labelGroup.cardType2.companyName
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[2].label = labelGroup.cardType2.position
                                            window.vue.$store.state.EmployeeCard.groupSchema.fristSchema.groups[0].fields[3].label = labelGroup.cardType2.name
                                        }
                                    }
                                },
                                props: {
                                    options: ['新员工卡', '外协', '临时卡']
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
                                            text: '员工2',
                                            value: {
                                                id: 'dsaa-dsa234-dsa',
                                                userName: '员工2',
                                                tel: 22222
                                            }
                                        },
                                        {
                                            text: '员工3',
                                            value: {
                                                id: 'ada-dsa234-dsa',
                                                userName: '员工3',
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
        iniModel(state,payload){
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

        }
    },

}

export default EmployeeCard