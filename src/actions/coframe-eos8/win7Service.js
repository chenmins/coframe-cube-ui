//This file is automatically generated

// win7Service

import { win7Service } from '../controller';
export default {
    actions: {
        [win7Service.addUserBg.method] : {
            summary: 'addUserBg',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.addUserBg.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.addUserBg_params','description':'org.gocom.components.coframe.skins.win7.win7Service.addUserBg_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.addUserBg_params'}}],
        },
        [win7Service.delUserBg.method] : {
            summary: 'delUserBg',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.delUserBg.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.delUserBg_params','description':'org.gocom.components.coframe.skins.win7.win7Service.delUserBg_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.delUserBg_params'}}],
        },
        [win7Service.getMyConfig.method] : {
            summary: 'getMyConfig',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.getMyConfig.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.getMyConfig_params','description':'org.gocom.components.coframe.skins.win7.win7Service.getMyConfig_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.getMyConfig_params'}}],
        },
        [win7Service.getUserBg.method] : {
            summary: 'getUserBg',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.getUserBg.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.getUserBg_params','description':'org.gocom.components.coframe.skins.win7.win7Service.getUserBg_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.getUserBg_params'}}],
        },
        [win7Service.setUserBg.method] : {
            summary: 'setUserBg',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.setUserBg.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.setUserBg_params','description':'org.gocom.components.coframe.skins.win7.win7Service.setUserBg_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.setUserBg_params'}}],
        },
        [win7Service.updateAutoStartConfig.method] : {
            summary: 'updateAutoStartConfig',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.updateAutoStartConfig.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.updateAutoStartConfig_params','description':'org.gocom.components.coframe.skins.win7.win7Service.updateAutoStartConfig_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.updateAutoStartConfig_params'}}],
        },
        [win7Service.updateDesktopConfig.method] : {
            summary: 'updateDesktopConfig',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.updateDesktopConfig.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.updateDesktopConfig_params','description':'org.gocom.components.coframe.skins.win7.win7Service.updateDesktopConfig_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.updateDesktopConfig_params'}}],
        },
        [win7Service.updateIconsConfig.method] : {
            summary: 'updateIconsConfig',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.skins.win7.win7Service.updateIconsConfig.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.skins.win7.win7Service.updateIconsConfig_params','description':'org.gocom.components.coframe.skins.win7.win7Service.updateIconsConfig_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.skins.win7.win7Service.updateIconsConfig_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}