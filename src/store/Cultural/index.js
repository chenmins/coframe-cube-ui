import state from './state'
import Vue from 'vue'
import {CulturalControllerImpl, DictApiController} from '@controller'
import {Toast} from 'cube-ui'

const Cultural = {
    namespaced: true,
    state,
    mutations: {
        setStateVar(state, payload) {
            state[`${payload.key}`] = payload.value;
        },
        setTopics(state, payload) {
            state.sendForm.topicOfConversationId = payload.topicOfConversationId
            state.sendForm.topicOfConversationName = payload.topicOfConversationName
        },
        setSelectedTopic(state, payload) {
            state.selectedTopic[0] = payload
        },
        clearSendForm(state, payload) {
            state.sendForm = {
                body: "",
                choice: "",
                picture: "",
                title: "",
                topicOfConversationId: '',
                type: "",
                userId: "",
                userName: "",
            }
        },
    },
    actions: {
        async initData(context, payload) {
            let resp
            resp = await payload.dispatch(CulturalControllerImpl.allPageSreach, {
                pageNo: 1,
                pageSize: 20
            })
            if (!resp.error) {
                context.commit('setStateVar', {
                    key: 'ALL_DATA',
                    value: resp.data.body
                })
            }
        },
        async getTopic(context, payload) {
            let resp
            resp = await payload.dispatch(DictApiController.getDictEntryByDictTypeCode, {code: 'pip-ccocci-topic'})
            if (!resp.error) {
                context.commit('setStateVar', {
                    key: 'topicLists',
                    value: resp.data
                })
            }
        },
        async remove(context, payload) {
            let resp
            resp = await payload.dispatch(CulturalControllerImpl.deleteCommunicationCircle, {
                id: payload.id
            })
            if (!resp.error && resp.data.statusCodeValue === 200) {
                Toast.$create({
                    time: 1000,
                    txt: "删除成功",
                    type:"normal"
                }).show()
            }
        }
    },
    getters: {
        filterData(state, getters) {
            return (type) => state.ALL_DATA[type]
        },
        filterTopics(state, getters) {
            return (topicId, type) => state.ALL_DATA[type].filter(c => c.id === topicId)
        }
    }
}

export default Cultural