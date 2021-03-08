import state from './state'
import Vue from 'vue'


const Cultural = {
    namespaced: true,
    state,
    mutations: {
        //all
        setAllData(state, payload) {
            state.allData = payload
        },
        setTopicLists(state, payload) {
            state.topicLists = payload
        },
        //文化圈
        setSelectedTopic(state, payload) {
            state.selectedTopic[0] = payload
        },

        setTopics(state, payload) {
            state.sendForm.topicOfConversationId = payload.topicOfConversationId
            state.sendForm.topicOfConversationName = payload.topicOfConversationName
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

    },
    getters: {
        // demo:(state,getters)=>{}
        // notices(state, getters) {
        //     return state.notices
        // },
        getHotTopLists(state, getters) {
            return state.topicLists.slice(0, 6)
        },
        notices(state, getters) {
            return state.allData.notices;
        },
        filterNotices(state, getters) {
            return (routerName, labelName) => {
                if (routerName === '公告列表') {
                    switch (labelName) {
                        case '全部':
                            return state.allData.notices.reverse()
                            break
                        case '系统公告':
                            return state.allData.notices1.reverse()
                            break
                        case '餐厅公告':
                            return state.allData.notices2.reverse()
                            break
                        case '物业公告':
                            return state.allData.notices3.reverse()
                            break
                    }
                }
                if (routerName === '企业新闻') {
                    switch (labelName) {
                        case '全部':
                            this.news = this.$store.state.Cultural.allData.journalisms.reverse()
                            break
                        case '热点精选':
                            this.news = this.$store.state.Cultural.allData.journalisms1.reverse()
                            break
                        case '时事要闻':
                            this.news = this.$store.state.Cultural.allData.journalisms2.reverse()
                            break
                    }
                }
                if (routerName === '交流圈') {
                    switch (labelName) {
                        case '全部':
                            this.comments = this.$store.state.Cultural.allData.communicationCircles?.reverse()
                            break
                        case '热门':
                            this.comments = this.$store.state.Cultural.allData.communicationCircles1?.reverse()
                            break
                        case '精选':
                            this.comments = this.$store.state.Cultural.allData.communicationCircles2?.reverse()
                            break
                    }
                }
            }
        }
    }
}

export default Cultural