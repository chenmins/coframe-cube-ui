//This file is automatically generated

// task

import { task } from '../controller';
export default {
    actions: {
        [task.confrimNotification.method] : {
            summary: 'confrimNotification',
            method: 'post',
            url: (payload) => `/org.gocom.bps.wfclient.task.business.notice.confrimNotification.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.bps.wfclient.task.business.notice.confrimNotification_params','description':'org.gocom.bps.wfclient.task.business.notice.confrimNotification_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.bps.wfclient.task.business.notice.confrimNotification_params'}}],
        },
        [task.executeWorkItem.method] : {
            summary: 'executeWorkItem',
            method: 'post',
            url: (payload) => `/org.gocom.bps.wfclient.task.business.task.executeWorkItem.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.bps.wfclient.task.business.task.executeWorkItem_params','description':'org.gocom.bps.wfclient.task.business.task.executeWorkItem_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.bps.wfclient.task.business.task.executeWorkItem_params'}}],
        },
        [task.openBizform.method] : {
            summary: 'openBizform',
            method: 'post',
            url: (payload) => `/org.gocom.bps.wfclient.task.business.task.openBizform.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.bps.wfclient.task.business.task.openBizform_params','description':'org.gocom.bps.wfclient.task.business.task.openBizform_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.bps.wfclient.task.business.task.openBizform_params'}}],
        },
        [task.queryNotificationList.method] : {
            summary: 'queryNotificationList',
            method: 'post',
            url: (payload) => `/org.gocom.bps.wfclient.task.business.notice.queryNotificationList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.bps.wfclient.task.business.notice.queryNotificationList_params','description':'org.gocom.bps.wfclient.task.business.notice.queryNotificationList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.bps.wfclient.task.business.notice.queryNotificationList_params'}}],
        },
        [task.queryTaskList.method] : {
            summary: 'queryTaskList',
            method: 'post',
            url: (payload) => `/org.gocom.bps.wfclient.task.business.task.queryTaskList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.bps.wfclient.task.business.task.queryTaskList_params','description':'org.gocom.bps.wfclient.task.business.task.queryTaskList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.bps.wfclient.task.business.task.queryTaskList_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
