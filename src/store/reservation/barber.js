import { BarberControllerImpl } from '@controller'

const barber = {
  namespaced: true,
  state: {
    public: {},//所有查询预约结果
    selfApply: [],
    allDayData:{}
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
    async queryByTypeAndDateForBarber(context, payload) {
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDateForBarber, {
        type: payload.type,
        date: payload.date
      })
      if (!resp.error) {
        context.commit('setState', {
          key: 'public',
          value: resp.data.body
        })
      }
    },
    async addBarberUser(context, payload) {
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.addBarberUser, {
        barberId: payload.id
      })
      if (!resp.error) {
        return resp
      }
    },
    async queryByStateForGather(context, payload) {

      let resp
      // resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForBarber, {

      resp = await window.vue.dispatch(BarberControllerImpl.queryByStateForGather, {
        state: payload.state
      })
      if (!resp.error) {
        context.commit('setState', {
          key: 'selfApply',
          value: resp.data.body
        })
      }
    },

    async queryByMonthForBarber(context, payload) {
      let resp
      // resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForBarber, {
        
        resp = await window.vue.dispatch(BarberControllerImpl.queryByMonthForGather, {
        month: payload.month
      })
      if(!resp.error){
        context.commit('setState',{
          key:'allDayData',
          value:resp.data.body[0]
        })
      }
    },
    async addBarber(context,payload){
      let resp
      try {
        resp = await window.vue.dispatch(BarberControllerImpl.addBarber,payload)
        return resp
      }catch (e) {
        console.log(JSON.stringify(e))
        console.log(JSON.parse(e))
        console.log(e.response)
      }

    },
    async updateBarber(context,payload){
      let resp
      try{
        resp = await window.vue.dispatch(BarberControllerImpl.updateBarber,payload)
      } catch (e){

      }
      if(!resp.error){
        console.log(resp);
        return resp
      }
    },
    async updateCancelForBarber(context,payload){
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.updateCancelForBarber,payload)
      if(!resp.error){
        await context.dispatch('queryByStateForBarber', {state:'预约成功'})

      }
    },
    async updateSignForBarber(context,payload){
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.updateSignForBarber,payload)
      if(!resp.error) {
        return  resp
      }
    }

  },
  getters:{
    toggleState: (state,getter) =>{
        return state.selfApply.filter(i=>i.state==='已违约')
    }
  }
}

export default barber


