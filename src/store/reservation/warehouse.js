import {BarberControllerImpl} from "@controller";

const warehouse = {
    namespaced: true,
    state: {
        warehouse: [],
        public: {},//所有查询预约结果
        selfApply: [],
        allDayData: {}
    },
    mutations: {
        setPublic(state, payload) {
            state.public[`${payload.key}`] = payload.value
        },
        setState(state, payload) {
            state[`${payload.key}`] = payload.value
        }
    },
    actions: {
        async queryByTypeAndDateForStoreHouse({ commit,state }, payload) {
            let response
            response = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDateForStoreHouse, {
                type: payload.type,
                date: payload.date
            })
            if (!response.error) {
                
                commit('setState', {
                    key: 'warehouse',
                    value: response.data.body
                })
            }
        },
        async addStoreHouse(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addStoreHouse, payload)
            if (!resp.error) {
                return resp
            }
        },
        async addStoreHouseUser(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addStoreHouseUser, {
                storeHouseId: payload.id
            })
            if (!resp.error) {
                return resp
            }
        },
        async queryByStateForStoreHouse({ commit }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForStoreHouse, {
                state: payload.state
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'selfApply',
                    value: resp.data.body
                })
            }
        },
        async queryByMonthForStoreHouse({ commit }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForStoreHouse, {
                month: payload.month
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'allDayData',
                    value: resp.data.body[0]
                })
            }
        },
        async updateStoreHouse(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateStoreHouse, payload)
            if (!resp.error) {
                return resp
            }
        },
        async updateCancelForStoreHouse({ dispatch }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateCancelForStoreHouse, payload)
            if (!resp.error) {
                await dispatch('queryByStateForClinic', { state: '预约成功' })
            }
        },
        async updateSignForStoreHouse(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateSignForZeroRestaurant, payload)
            if (!resp.error) {
                return resp
            }
        },
    }
}

export default warehouse