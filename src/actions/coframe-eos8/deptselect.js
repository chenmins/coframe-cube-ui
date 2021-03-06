//This file is automatically generated

// deptselect

import { deptselect } from '../controller';
export default {
    actions: {
        [deptselect.deptChildList.method] : {
            summary: 'deptChildList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.deptselect.deptChildList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.deptselect.deptChildList_params','description':'org.gocom.components.coframe.participantselect.deptselect.deptChildList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.deptselect.deptChildList_params'}}],
        },
        [deptselect.deptList.method] : {
            summary: 'deptList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.deptselect.deptList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.deptselect.deptList_params','description':'org.gocom.components.coframe.participantselect.deptselect.deptList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.deptselect.deptList_params'}}],
        },
        [deptselect.queryOrgsByEmpId.method] : {
            summary: 'queryOrgsByEmpId',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.deptselect.queryOrgsByEmpId.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.deptselect.queryOrgsByEmpId_params','description':'org.gocom.components.coframe.participantselect.deptselect.queryOrgsByEmpId_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.deptselect.queryOrgsByEmpId_params'}}],
        },
        [deptselect.queryOrgsByName.method] : {
            summary: 'queryOrgsByName',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.deptselect.queryOrgsByName.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.deptselect.queryOrgsByName_params','description':'org.gocom.components.coframe.participantselect.deptselect.queryOrgsByName_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.deptselect.queryOrgsByName_params'}}],
        },
        [deptselect.recentDeptList.method] : {
            summary: 'recentDeptList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.participantselect.deptselect.recentDeptList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.participantselect.deptselect.recentDeptList_params','description':'org.gocom.components.coframe.participantselect.deptselect.recentDeptList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.participantselect.deptselect.recentDeptList_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
