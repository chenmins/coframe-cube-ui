//This file is automatically generated

// ApplicationManager

import { ApplicationManager } from '../controller';
export default {
    actions: {
        [ApplicationManager.deleteApplication.method] : {
            summary: 'deleteApplication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.deleteApplication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplication_params','description':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.deleteApplication_params'}}],
        },
        [ApplicationManager.deleteApplicationNodes.method] : {
            summary: 'deleteApplicationNodes',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.deleteApplicationNodes.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplicationNodes_params','description':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplicationNodes_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.deleteApplicationNodes_params'}}],
        },
        [ApplicationManager.deleteApplications.method] : {
            summary: 'deleteApplications',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.deleteApplications.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplications_params','description':'org.gocom.components.coframe.framework.ApplicationManager.deleteApplications_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.deleteApplications_params'}}],
        },
        [ApplicationManager.getApplication.method] : {
            summary: 'getApplication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.getApplication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.getApplication_params','description':'org.gocom.components.coframe.framework.ApplicationManager.getApplication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.getApplication_params'}}],
        },
        [ApplicationManager.queryApplication.method] : {
            summary: 'queryApplication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.queryApplication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.queryApplication_params','description':'org.gocom.components.coframe.framework.ApplicationManager.queryApplication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.queryApplication_params'}}],
        },
        [ApplicationManager.queryApplicationTree.method] : {
            summary: 'queryApplicationTree',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTree.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTree_params','description':'org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTree_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTree_params'}}],
        },
        [ApplicationManager.queryApplicationTreeNode.method] : {
            summary: 'queryApplicationTreeNode',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTreeNode.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTreeNode_params','description':'org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTreeNode_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.queryApplicationTreeNode_params'}}],
        },
        [ApplicationManager.saveApplication.method] : {
            summary: 'saveApplication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.saveApplication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.saveApplication_params','description':'org.gocom.components.coframe.framework.ApplicationManager.saveApplication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.saveApplication_params'}}],
        },
        [ApplicationManager.test.method] : {
            summary: 'test',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.test.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.test_params','description':'org.gocom.components.coframe.framework.ApplicationManager.test_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.test_params'}}],
        },
        [ApplicationManager.updateApplication.method] : {
            summary: 'updateApplication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.framework.ApplicationManager.updateApplication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.framework.ApplicationManager.updateApplication_params','description':'org.gocom.components.coframe.framework.ApplicationManager.updateApplication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.framework.ApplicationManager.updateApplication_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
