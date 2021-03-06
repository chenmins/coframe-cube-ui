//This file is automatically generated

// userselect

import { userselect } from '../controller';
export default {
    actions: {
        [userselect.deptUserList.method] : {
            summary: 'deptUserList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.deptUserList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.deptUserList_params','description':'org.gocom.components.coframe.participantselect.userselect.deptUserList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.deptUserList_params'}}],
        },
        [userselect.groupUserList.method] : {
            summary: 'groupUserList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.groupUserList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.groupUserList_params','description':'org.gocom.components.coframe.participantselect.userselect.groupUserList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.groupUserList_params'}}],
        },
        [userselect.onlineUserList.method] : {
            summary: 'onlineUserList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.onlineUserList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.onlineUserList_params','description':'org.gocom.components.coframe.participantselect.userselect.onlineUserList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.onlineUserList_params'}}],
        },
        [userselect.queryUserListByName.method] : {
            summary: 'queryUserListByName',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.queryUserListByName.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.queryUserListByName_params','description':'org.gocom.components.coframe.participantselect.userselect.queryUserListByName_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.queryUserListByName_params'}}],
        },
        [userselect.recentUserList.method] : {
            summary: 'recentUserList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.recentUserList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.recentUserList_params','description':'org.gocom.components.coframe.participantselect.userselect.recentUserList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.recentUserList_params'}}],
        },
        [userselect.roleUserList.method] : {
            summary: 'roleUserList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.userselect.roleUserList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.userselect.roleUserList_params','description':'org.gocom.components.coframe.participantselect.userselect.roleUserList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.userselect.roleUserList_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
