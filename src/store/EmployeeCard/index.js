


const EmployeeCard = {
    namespaced: true,
    state: {

        cardInfo: {},
        cardStatus: '新增审批中',
    },
    mutations: {
        setCardInfo(state, payload) {
            state.cardInfo = payload
        }
    },

}

export default EmployeeCard