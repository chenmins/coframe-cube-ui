//This file is automatically generated

// groupAuth

import { groupAuth } from '../controller';
export default {
    actions: {
        [groupAuth.getGroupAuth.method] : {
            summary: 'getGroupAuth',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.groupAuth.getGroupAuth.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.groupAuth.getGroupAuth_params','description':'org.gocom.components.coframe.org.groupAuth.getGroupAuth_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.groupAuth.getGroupAuth_params'}}],
        },
        [groupAuth.getManagedGroupByRoleId.method] : {
            summary: 'getManagedGroupByRoleId',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.groupAuth.getManagedGroupByRoleId.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.groupAuth.getManagedGroupByRoleId_params','description':'org.gocom.components.coframe.org.groupAuth.getManagedGroupByRoleId_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.groupAuth.getManagedGroupByRoleId_params'}}],
        },
        [groupAuth.saveGroupAuth.method] : {
            summary: 'saveGroupAuth',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.groupAuth.saveGroupAuth.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.groupAuth.saveGroupAuth_params','description':'org.gocom.components.coframe.org.groupAuth.saveGroupAuth_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.groupAuth.saveGroupAuth_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
