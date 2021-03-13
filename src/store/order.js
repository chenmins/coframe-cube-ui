

import {BarberControllerImpl} from '@controller'


const order = {
  namespaced:true,
  state:{
    public:{}
  },
  mutations:{
    setPublic(state,payload){
      state.public[`${payload.key}`] = payload.value
    }
  },
  actions:{
    async queryByTypeAndDate(context,payload){
      let resp 
      resp = await window.vue.dispatch(BarberControllerImpl.queryByTypeAndDate,{
        type:payload.type,
        date:payload.date
      })
      if(!resp.error){
        context.commit('setPublic',{
          key:'barber',
          value:resp.data.body
        })
        return 
      }
     },

     async addBarberUser(context,payload){
       let resp 
       resp = await window.vue.dispatch(BarberControllerImpl.addBarberUser,{
        barberId:payload.id
       })
       if(!resp.error){
         return 
       }
     }
  }


}

export default order

