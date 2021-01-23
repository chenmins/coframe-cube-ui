import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import AddressBook from "@/store/AddressBook";

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        Eposition:{},
        homepage:[]
    },
    mutations:{
        setEposition(state,payload){
            state.Eposition = payload
        }
    },
    modules:{
        ...actions,
        AddressBook
    }
})

export default store