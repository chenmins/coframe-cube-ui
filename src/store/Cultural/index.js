import state from './state'
import Vue from 'vue'


const Cultural = {
    namespaced: true,
    state,
    mutations: {
        //文化圈
        setSelectedTopic(state, payload) {
            state.selectedTopic[0] = payload
        },
        setTopics(state, payload) {
            state.sendForm.topicOfConversationId = payload.topicOfConversationId
            state.sendForm.topicOfConversationName = payload.topicOfConversationName
        },
        setTopicLists(state, payload) {
            state.topicLists = payload
        },
        setSendForm(state, payload) {
            state.sendForm = payload
        },
        setFiles(state, payload) {
            state.files = payload
        },
        clearSendForm(state, payload) {
            state.sendForm = {}
        },

        //all
        setAllData(state, payload) {
            state.allData = payload
        }
    },
    getters: {
        // demo:(state,getters)=>{}
        notices(state, getters) {
            return state.notices
        },
        getHotTopLists(state, payload) {
            return state.topicLists.slice(0, 6)
        }
    }
}

export default Cultural