import Vuex from 'vuex'
import axios from "axios";




const AddressBook = {
    namespaced:true,
    state:{
        homepageData:[],
        allOrganization:[]
    },
    mutations:{
        init(state,payload){
            state.homepageData = payload
        },
        setEposition(state,payload){
            console.log('serEposition')
            state.Eposition = payload
        },
        setOrganization(state,payload){
            state.allOrganization = payload
        }
    },
    actions:{
        async init(context,payload){
            let res = await axios.get('/api/organizations/page-search')
            context.commit('init',res.data.content)
        },
        //总岗位
        allOr(context){
            let  data
            return new Promise((resolve => {
                axios.get('/api/organizations/page-search').then(res=>{
                    data = res.data.content
                })
                .then(()=>{
                        data.forEach(item=>{
                            axios.get(`/api/organizations/${item.id}/employees`).then(res=>{
                                item.totalElements = res.data.totalElements
                            })
                        })
                    })
                .then(()=>{
                        setTimeout(()=>{
                            context.commit('setOrganization',data)
                            resolve(data)
                        },500)
                    })
            }))

        }
    },
    getters:{
        res:()=>{
            return '2333'
        },
        getNum:(state,getters)=>{
            let data = state.allOrganization
            data.forEach(item=>{
                axios.get(`/api/organizations/${item.id}/employees`).then(res=>{
                    item.totalElements = res.data.totalElements
                })
            })
            return data
        },

    }
}

export default AddressBook