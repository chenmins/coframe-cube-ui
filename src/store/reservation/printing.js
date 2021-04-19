import {BarberControllerImpl} from "@controller";


const printing = {
    namespaced: true,
    state: {
        printing: [],
    },
    mutations: {
        setState(state,payload) {
            state[payload.key] = payload.value
        }
    },
    actions: {
        async queryByTypeAndDateForClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDateForClinic, {
                type: payload.type,
                date: payload.date
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'printing',
                    value: resp.data.body
                })
            }
        },
        async addClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addClinic, payload)
            if (!resp.error) {
                return resp
            }
        },
    }
}

export default printing