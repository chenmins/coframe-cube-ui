import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import actions from '../actions'
import AddressBook from "@/store/AddressBook";
import MainMenu from "@/store/MainMenu";
import Cultural from "@/store/Cultural";
import HelpCenter from "@/store/HelpCenter";
import Schedule from '@/store/Schedule'
import Guest from "@/store/Guest";
import axios from "@/axios/index";
import {setToken} from "@/utils/auth";

import {Demo} from "@/actions/pipe/Demo";


Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        Eposition: {},
        homepage: [],
        userInfo: {},
    },
    mutations: {
        setEposition(state, payload) {
            state.Eposition = payload
        },
        setUseInfo(state,payload){
            state.userInfo = payload
        }
    },
    actions: {
        async login(context, payload) {
            let resp
            try {
                resp = await axios.post(Vue.config.login, payload)
                localStorage.setItem('userInfo',JSON.stringify(resp.data))
                localStorage.setItem('Token',resp.data.token)
                setToken(resp.data.token)
                router.push('/')
            } catch (error) {
                console.log(JSON.parse(JSON.stringify(error)))
            }
        },
    },
    modules: {
        ...actions,
        AddressBook,
        MainMenu, Cultural, HelpCenter, Schedule, Guest
    }
})

export default store