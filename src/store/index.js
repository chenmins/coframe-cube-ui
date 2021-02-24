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

// import {Demo} from "@/actions/pipe/Demo";
import ToolsManager from "@/store/Tools";


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
        setUseInfo(state, payload) {
            state.userInfo = payload
        }
    },
    actions: {
    },
    modules: {
        ...actions,
        AddressBook,
        MainMenu, Cultural, HelpCenter, Schedule, Guest, ToolsManager
    }
})

export default store