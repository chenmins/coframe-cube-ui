import state from './state'
import router from '@/router'
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
        goComment(state, payload) {
            router.replace({
                name: '交流圈-评论详情',
                params: {id: payload.id, date: payload.data}
            })
        },
    },
    actions: {
        formInit(context, payload) {
            const IF_MAP = {
                1:context.state.files,
                2:context.state.sendForm.body,
                3:context.state.selectedTopic,
            }
            console.log(context.state.files,IF_MAP)
            return {
                files: IF_MAP[1] ? context.state.files : [],
                query: IF_MAP[2] ?  context.state.sendForm : {
                    body: "",
                    comments: [],
                    choice: "choice" + Math.random(),
                    picture: "",
                    title: "title" + Math.random(),
                    topicOfConversationId: "",
                    topicOfConversationName: "",
                    type: "type" + Math.random(),
                },
                topic: IF_MAP[3] ?  context.state.selectedTopic : []
            }
        },

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
            if (!resp.error ) {
                Toast.$create({
                    time: 1000,
                    txt: "删除成功",
                    type: "normal"
                }).show()
                return
            }
        },
        async getCommunicationCircleEntity(context, payload) {
            let resp
            resp = await payload.dispatch(CulturalControllerImpl.getCommunicationCircleEntity, {
                id: payload.id,
                pageSize: 10,
                pageNo: 1,
            })
            if (!resp.error) {
                return resp.data.body
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