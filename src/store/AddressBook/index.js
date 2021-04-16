import Vuex from 'vuex'
import axios from "axios";
import {organization} from '@controller';


const AddressBook = {
    namespaced: true,
    state: {
        Org: [],
        allOrganization: [],
        employeeInfo:{}
    },
    mutations: {
        init(state, payload) {
            state.homepageData = payload
        },
        setEmployeeInfo(state, payload){
            state.employeeInfo = payload
        },
        setEposition(state, payload) {
            state.Eposition = payload
        },
        setOrganization(state, payload) {
            state.allOrganization = payload
        }
    },
    actions: {
        async queryOrg({commit}, payload) {
            let resp
            let data = {
                "criteria": {
                    "_entity": "org.gocom.components.coframe.org.dataset.OrgOrganization",
                    "_and": [
                        {
                            "_expr": []
                        }
                    ],
                    "_orderby": []
                },
                "pageIndex": 0,
                "pageSize": 10,
                "page": {
                    "begin": 0,
                    "length": 10
                }
            }
            resp = await window.vue.dispatch(organization.queryOrg, data)
            commit('setOrganization',resp.data.treeNodes)
        },

        async queryTreeChildNodes({commit},payload) {
            console.log('请求')
            let resp
            resp = await window.vue.dispatch(organization.queryTreeChildNodes,payload)
            commit('setOrganization',resp.data.treeNodes)
        },

        async getEmployee({commit},payload) {
            let resp
            // resp = await window.vue.dispatch(organization.q)
        }
    },
    getters: {
        searchOrg(state){
            return function(keyword){
                return state.allOrganization.filter(item=>item.nodeName.includes(keyword))
            }
        }
    }
}

export default AddressBook