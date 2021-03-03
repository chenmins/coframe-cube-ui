
const EmployeeCard = {
    namespaced:true,
    state:{
        cardInfo:{

        }
    },
    mutations:{
        setCardInfo(state,payload){
            state.cardInfo = payload
        }
    },

}

export default EmployeeCard