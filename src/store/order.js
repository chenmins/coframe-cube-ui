

import { BarberControllerImpl } from '@controller'


const order = {
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
    async queryByTypeAndDate(context, payload) {
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDate, {
        type: payload.type,
        date: payload.date
      })
      if (!resp.error) {
        context.commit('setPublic', {
          key: 'barber',
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

      }
    },
    async queryByState(context, payload) {

      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.queryByState, {
        state: payload.state
      })
      if (!resp.error) {
        context.commit('setState', {
          key: 'selfApply',
          value: resp.data.body
        })
      }
    },

    async queryByMonth(context, payload) {
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.queryByMonth, {
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
        console.log(resp);
      }catch (e) {
        console.log(JSON.stringify(e))
        console.log(JSON.parse(e))
        console.log(e.response)
      }
      // if(!resp.error){
      //   return  
      // }
    },
    async updateBarber(context,payload){
      let resp 
      resp = await window.vue.dispatch(BarberControllerImpl.updateBarber,payload)
      if(!resp.error){
        console.log(resp);

      }
    },
    async updateCancel(context,payload){
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.updateCancel,payload)
      if(!resp.error){
        await context.dispatch('queryByState', {state:'预约成功'})

      }
    },
    async updateSign(context,payload){
      let resp
      resp = await window.vue.dispatch(BarberControllerImpl.updateSign,payload)
      if(!resp.error) {
        return
      }
    }

  },
  getters:{
    toggleState: (state,getter) =>{
        return state.selfApply.filter(i=>i.state==='已违约')
    }
  }
}

export default order


