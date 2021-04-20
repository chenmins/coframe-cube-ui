//This file is automatically generated

// LoginManager

import { LoginManager } from '../controller';
export default {
    actions: {
        [LoginManager.authentication.method] : {
            summary: 'authentication',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.authentication.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.authentication_params','description':'org.gocom.components.coframe.auth.LoginManager.authentication_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.authentication_params'}}],
        },
        [LoginManager.getCasInfo.method] : {
            summary: 'getCasInfo',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.getCasInfo.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.getCasInfo_params','description':'org.gocom.components.coframe.auth.LoginManager.getCasInfo_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.getCasInfo_params'}}],
        },
        [LoginManager.getMenuData.method] : {
            summary: 'getMenuData',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.getMenuData.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.getMenuData_params','description':'org.gocom.components.coframe.auth.LoginManager.getMenuData_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.getMenuData_params'}}],
        },
        [LoginManager.getMenuList.method] : {
            summary: 'getMenuList',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.getMenuList.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.getMenuList_params','description':'org.gocom.components.coframe.auth.LoginManager.getMenuList_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.getMenuList_params'}}],
        },
        [LoginManager.getUserIdAndName.method] : {
            summary: 'getUserIdAndName',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.getUserIdAndName.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.getUserIdAndName_params','description':'org.gocom.components.coframe.auth.LoginManager.getUserIdAndName_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.getUserIdAndName_params'}}],
        },
        [LoginManager.getUserPool.method] : {
            summary: 'getUserPool',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.getUserPool.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.getUserPool_params','description':'org.gocom.components.coframe.auth.LoginManager.getUserPool_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.getUserPool_params'}}],
        },
        [LoginManager.isend.method] : {
            summary: 'isend',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.isend.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.isend_params','description':'org.gocom.components.coframe.auth.LoginManager.isend_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.isend_params'}}],
        },
        [LoginManager.login.method] : {
            summary: 'login',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.login.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.login_params','description':'org.gocom.components.coframe.auth.LoginManager.login_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.login_params'}}],
        },
        [LoginManager.logout.method] : {
            summary: 'logout',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.logout.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.logout_params','description':'org.gocom.components.coframe.auth.LoginManager.logout_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.logout_params'}}],
        },
        [LoginManager.syncUserInfo.method] : {
            summary: 'syncUserInfo',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.auth.LoginManager.syncUserInfo.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.auth.LoginManager.syncUserInfo_params','description':'org.gocom.components.coframe.auth.LoginManager.syncUserInfo_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.auth.LoginManager.syncUserInfo_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
