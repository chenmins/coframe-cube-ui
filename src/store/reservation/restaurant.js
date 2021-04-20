import {BarberControllerImpl} from "@controller";

const restaurant = {
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
        async queryByTypeAndDateForZeroRestaurant({commit},payload) {
            let response
            response = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDateForZeroRestaurant,{
                type: payload.type,
                date: payload.date
            })
            if(!response.error){
                console.log(response)
                commit('setState',{
                    key:'restaurant',
                    value: response.data.body
                })
            }
        },
        async addZeroRestaurant(context,payload) {
            console.log(payload)
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addZeroRestaurant,payload)
            if(!resp.error){
                return resp
            }
        },
        async addZeroRestaurantUser(context,payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.addZeroRestaurantUser,{
                zeroRestaurantId:payload.id
            })
            if (!resp.error) {
                return resp
            }
        },
        async queryByStateForZeroRestaurant({commit},payload){
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForZeroRestaurant,{
                state:payload.state
            })
            if(!resp.error){
                commit('setState', {
                    key: 'selfApply',
                    value: resp.data.body
                })
            }
        },
        async queryByMonthForZeroRestaurant({commit},payload){
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForZeroRestaurant, {
                month: payload.month
            })
            if(!resp.error){
                commit('setState',{
                    key:'allDayData',
                    value:resp.data.body[0]
                })
            }
        },
        async updateZeroRestaurant(context, payload){
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateZeroRestaurant,payload)
            if(!resp.error){
                return resp
            }
        },
        async updateCancelForZeroRestaurant({dispatch},payload){
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateCancelForZeroRestaurant,payload)
            if(!resp.error){
                await dispatch('queryByStateForClinic', {state:'预约成功'})
            }
        },
        async updateSignForZeroRestaurant(context, payload) {
            let resp
            resp = await window.vue.dispatch(BarberControllerImpl.updateSignForZeroRestaurant,payload)
            if(!resp.error) {
                return resp
            }
        },
    }
}

export default restaurant