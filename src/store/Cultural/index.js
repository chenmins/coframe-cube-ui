
import state from './state'
import Vue from 'vue'



const Cultural = {
    namespaced:true,
    state,
    mutations:{
        //文化圈
        setSelectedTopic(state,payload){
            state.selectedTopic.push(payload)
        },
        setTopics(state,payload){
            state.sendForm.topicOfConversationId = payload
        },
        setTopicLists(state,payload){state.topicLists = payload},
        setSendForm(state,payload){
            state.sendForm = payload
        },
        clearSendForm(state,payload){
            state.sendForm = {
                body: "",
                choice: "choice",
                picture: "asd",
                title: "title",
                topicOfConversationId: '',
                type: "type",
                userId: "",
                userName: "",
            }
        },

        //all
        setAllData(state,payload){
            state.allData = payload
        }
    },
    getters:{
        // demo:(state,getters)=>{}
        notices(state,getters){
            return state.notices
        },
    }
}

export default Cultural