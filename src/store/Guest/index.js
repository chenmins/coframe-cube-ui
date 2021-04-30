
import state from './state'
const Guest = {
    namespaced:true,
    state,
    mutations:{
        setLabel(state, payload){
            state.curLabel = payload
        }
    }
}

export default Guest