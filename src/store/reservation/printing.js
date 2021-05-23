import { BarberControllerImpl } from "@controller";

const printing = {
    namespaced: true,
    state: {
        printing: {},
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
        async queryByTypeAndDateForPrintingRoom({ commit }, payload) {
            let response
            response = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDateForPrintingRoom, {
                type: payload.type,
                date: payload.date
            })
            if (!response.error) {
                commit('setState', {
                    key: 'printing',
                    value: response.data.body
                })
            }
        },
        async addPrintingRoom(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addPrintingRoom, payload)
            if (!resp.error) {
                return resp
            }
        },
        async addPrintingRoomUser(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addPrintingRoomUser, {
                printingRoomId: payload.id
            })
            if (!resp.error) {
                return resp
            }
        },
        async queryByStateForPrintingRoom({ commit }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForPrintingRoom, {
                state: payload.state
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'selfApply',
                    value: resp.data.body
                })
            }
        },
        async queryByMonthForPrintingRoom({ commit }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForPrintingRoom, {
                month: payload.month
            })
            if (!resp.error) {
                commit('setState', {
                    key: 'allDayData',
                    value: resp.data.body[0]
                })
            }
        },
        async updatePrintingRoom(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updatePrintingRoom, payload)
            if (!resp.error) {
                return resp
            }
        },
        async updateCancelForPrintingRoom({ dispatch }, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateCancelForPrintingRoom, payload)
            if (!resp.error) {
                await dispatch('queryByStateForClinic', { state: '预约成功' })
            }
        },
        async updateSignForPrintingRoom(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateSignForZeroRestaurant, payload)
            if (!resp.error) {
                return resp
            }
        },
    }
}

export default printing