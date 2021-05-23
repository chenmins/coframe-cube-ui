
import state from './state';
const Guest = {
    namespaced:true,
    state,
    mutations:{
        setLabel(state, payload){
            state.curLabel = payload
        }
    },
    actions:{

    }
}

export default Guest