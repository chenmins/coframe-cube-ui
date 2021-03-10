
import state from './state'


const Schedule = {
    namespaced:true,
    state,
    mutations:{
        setOneDaySchedule(state,payload){
            state.oneDaySchedule = payload
        },
        setAllMonthSchedule(state,payload){
            state.allMonthSchedule = payload
        }
    },
    }

export default Schedule