
import state from './state'
import { HelpControllerImpl } from '@controller'
import Vue from 'vue'
import { Toast } from 'cube-ui'
import router from "@/router";


Vue.use(Toast)

const HelpCenter = {
    namespaced: true,
    state,
    mutations: {
        startData(state, payload) {
            state[`${payload.type}Data`] = payload.data
        },
        setStateVar(state, payload) {
            state[payload.key] = payload.value
        }
    },
    actions: {
        async initData(context, payload) {
            let resp, type = payload.type, controller = payload.controller
            resp = await payload.dispatch(HelpControllerImpl[controller])
            context.commit(`startData`, { type: payload.type, data: resp.data.body })
        },
        async searchSubmit(context, payload) {
            let resp, controller = payload.controller, keywords = payload.keywords
            resp = await payload.dispatch(HelpControllerImpl.queryByTitle, { title: keywords })
            context.commit('startData', { type: 'Questions', data: resp.data.body })
        },
        async addFeedBack(context, payload) {
            let _this = context.state

            const FILES = _this.files
            const UPLOAD_TIME = FILES.length

            let resp
            let message = '发送中', type = 'normal'
            let toast = Toast.$create({
                type: type,
                txt: message,
                time: 0
            }).show()
            try {
                context.commit('setStateVar', {
                    key: 'picture',
                    value: await payload.uploadAsync(UPLOAD_TIME, FILES)
                })

                resp = await payload.dispatch(HelpControllerImpl.addDemandFeedback, {
                    body: _this.textarea,
                    picture: _this.picture
                })
            } catch (error) {
                console.log(error)
                toast.remove()
                type = 'error'
                message = '反馈失败'
            }
            if (resp.data.body === 1) {
                toast.remove()
                type = 'success'
                message = '反馈成功'
            } else {
                toast.remove()
                type = 'error'
                message = '反馈失败'
            }
            Toast.$create({
                type: type,
                txt: message,
                time: 1000,
                onTimeout: () => {
                    router.replace({ name: '需求反馈' })
                }
            }).show()
        }
    }
}

export default HelpCenter


