//This file is automatically generated

// FunctionAuth

import { FunctionAuth } from '../controller';
export default {
    actions: {
        [FunctionAuth.getFunctionAuthTree.method] : {
            summary: 'getFunctionAuthTree',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.FunctionAuth.getFunctionAuthTree.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.FunctionAuth.getFunctionAuthTree_params','description':'org.gocom.components.coframe.framework.FunctionAuth.getFunctionAuthTree_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.FunctionAuth.getFunctionAuthTree_params'}}],
        },
        [FunctionAuth.saveFunctionAuths.method] : {
            summary: 'saveFunctionAuths',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.FunctionAuth.saveFunctionAuths.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.FunctionAuth.saveFunctionAuths_params','description':'org.gocom.components.coframe.framework.FunctionAuth.saveFunctionAuths_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.FunctionAuth.saveFunctionAuths_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}