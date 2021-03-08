//This file is automatically generated

// 帮助中心

import { HelpFeignImpl } from '../controller';
export default {
    actions: {
        [HelpFeignImpl.AddDemandFeedbackReply.method] : {
            summary: '新增一个需求反馈回复',
            method: 'post',
            url: (payload) => `/api/platform/dal/help/addDemandFeedbackReply`,
            parameters: [{'in':'body','name':'entity','description':'entity','required':true,'schema':{'$ref':'#/definitions/需求反馈回复'}}],
        },
        [HelpFeignImpl.addDemandFeedback.method] : {
            summary: '新增一个需求反馈',
            method: 'post',
            url: (payload) => `/api/platform/dal/help/addDemandFeedback`,
            parameters: [{'in':'body','name':'entity','description':'entity','required':true,'schema':{'$ref':'#/definitions/需求反馈'}}],
        },
        [HelpFeignImpl.getDemandFeedback.method] : {
            summary: '根据ID查询一条需求反���',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/getDemandFeedback/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [HelpFeignImpl.queryByTitle.method] : {
            summary: '根据标题模糊查询所有常见问题',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/commonProblem/queryByTitle`,
            parameters: [{'name':'title','in':'query','description':'标题','required':false,'type':'string','allowEmptyValue':false}],
        },
        [HelpFeignImpl.queryDemandFeedback.method] : {
            summary: '查询所有需求反馈',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/queryDemandFeedback`,
            parameters: [],
        },
        [HelpFeignImpl.queryDemandFeedbackReply.method] : {
            summary: '根据需求反馈ID查询需求反馈回复列表',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/queryDemandFeedbackReply/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [HelpFeignImpl.queryProductIntroduction.method] : {
            summary: '查询所有产品介绍',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/queryProductIntroduction`,
            parameters: [],
        },
        [HelpFeignImpl.queryUserDemandFeedback.method] : {
            summary: '查询当前用户的所有需求反馈',
            method: 'get',
            url: (payload) => `/api/platform/dal/help/queryUserDemandFeedback`,
            parameters: [{'in':'body','name':'entity','description':'entity','required':true,'schema':{'$ref':'#/definitions/需求反馈'}}],
        },
        [HelpFeignImpl.updateDemandFeedback.method] : {
            summary: '修改一个需求反馈',
            method: 'put',
            url: (payload) => `/api/platform/dal/help/updateDemandFeedback`,
            parameters: [{'in':'body','name':'entity','description':'entity','required':true,'schema':{'$ref':'#/definitions/需求反馈'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
