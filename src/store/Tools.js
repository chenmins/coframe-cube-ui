import router from '@/router'

const ToolsManager = {
    namespaced: true,
    state: {
        allTools: null
    },
    mutations: {
        setAllTools(state, payload) {
            state.allTools = JSON.parse(localStorage.getItem('ToolsManager'))
        },
        removeisCommonly(state, payload) {
            payload.forEach((tool)=>{
                state.allTools.find(item => item.text === tool.text).isCommonly = false
            })
            localStorage.setItem('ToolsManager', JSON.stringify(state.allTools))
        },
        addisCommonly(state, payload) {
            state.allTools.find(item => item.text === payload.text).isCommonly = true
            localStorage.setItem('ToolsManager', JSON.stringify(state.allTools))
        }
    },
    actions: {},
    getters: {
        currentTools: (state) => {
            return state.allTools.filter(tool => tool.isCommonly === true)
        }
    }
}

export default ToolsManager