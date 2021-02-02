import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import AddressBook from "@/store/AddressBook";
import MainMenu from "@/store/MainMenu";
import Cultural from "@/store/Cultural";
import HelpCenter from "@/store/HelpCenter";
import Schedule from '@/store/Schedule'
import Guest from "@/store/Guest";

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        Eposition: {},
        homepage: []
    },
    mutations: {
        setEposition(state, payload) {
            state.Eposition = payload
        }
    },
    modules: {
        ...actions,
        AddressBook,
        MainMenu, Cultural, HelpCenter, Schedule,Guest
    }
})

export default store