import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import actions from '../actions'
import AddressBook from "@/store/AddressBook";
import Cultural from "@/store/Cultural";
import HelpCenter from "@/store/HelpCenter";
import Schedule from '@/store/Schedule'
import Guest from "@/store/Guest";
import EmployeeCard from '@/store/EmployeeCard'


import ReportForm from "@/store/ReportForm";
import MainMenu from "@/store/MainMenu";
import order from "@/store/order"

import axios from "@/axios/index";
import { setToken } from "@/utils/auth";



Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        Eposition: {},
        homepage: [],
        userInfo: {},
    },
    mutations: {
        setStateVar(state,payload){
            const _this = payload.state
            console.log(_this[`${payload.key}`] )
            _this[`${payload.key}`] =  payload.value
        },
        setEposition(state, payload) {
            state.Eposition = payload
        },
        setUseInfo(state, payload) {
            state.userInfo = payload
        }
    },
    actions: {
    },
    modules: {
        ...actions,
        AddressBook,
        Cultural, HelpCenter, Schedule, Guest, EmployeeCard,
        ReportForm,
        MainMenu,
        order
    }
})

export default store