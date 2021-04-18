import {BarberControllerImpl} from '@controller';

const Infirmary = {
    namespaced: true,
    state: {
        infirmary: {},
        selfApply: [],
        allDayData: {}
    },
    mutations: {
        setState(state, payload) {
            state[payload.key] = payload.value;
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
                    key: 'infirmary',
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
        async addClinicUser({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addClinicUser, {
                clinicId: payload.id
            })
            if (!resp.error) {
                return resp
            }
        },
        async queryByStateForClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForBarber, {
                state: payload.state
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'selfApply',
                    value: resp.data.body
                })
            }
        },
        async queryByMonthForClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForClinic, {
                month: payload.month
            })
            if(!resp.error){
                commit('setState',{
                    key:'allDayData',
                    value:resp.data.body[0]
                })
            }
        },
        async updateClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateClinic,payload)
            if(!resp.error){
                return resp
            }
        },
        async updateCancelForClinic({dispatch}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateCancelForClinic,payload)
            if(!resp.error){
                await dispatch('queryByStateForClinic', {state:'预约成功'})
            }
        },
        async updateSignForClinic({commit}, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateSignForClinic,payload)
            if(!resp.error) {
                return resp
            }
        },
    }
}

export default Infirmary