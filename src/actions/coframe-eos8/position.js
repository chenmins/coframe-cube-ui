//This file is automatically generated

// positionAuth

import { position } from '../controller';
export default {
    actions: {
        [position.addEmpposition.method] : {
            summary: 'addEmpposition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.addEmpposition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.addEmpposition_params','description':'org.gocom.components.coframe.org.position.addEmpposition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.addEmpposition_params'}}],
        },
        [position.addPosition.method] : {
            summary: 'addPosition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.addPosition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.addPosition_params','description':'org.gocom.components.coframe.org.position.addPosition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.addPosition_params'}}],
        },
        [position.deleteEmpposition.method] : {
            summary: 'deleteEmpposition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.deleteEmpposition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.deleteEmpposition_params','description':'org.gocom.components.coframe.org.position.deleteEmpposition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.deleteEmpposition_params'}}],
        },
        [position.deletePosition.method] : {
            summary: 'deletePosition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.deletePosition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.deletePosition_params','description':'org.gocom.components.coframe.org.position.deletePosition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.deletePosition_params'}}],
        },
        [position.getPositionAuth.method] : {
            summary: 'getPositionAuth',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.positionAuth.getPositionAuth.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.positionAuth.getPositionAuth_params','description':'org.gocom.components.coframe.org.positionAuth.getPositionAuth_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.positionAuth.getPositionAuth_params'}}],
        },
        [position.getPositionWithParent.method] : {
            summary: 'getPositionWithParent',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.getPositionWithParent.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.getPositionWithParent_params','description':'org.gocom.components.coframe.org.position.getPositionWithParent_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.getPositionWithParent_params'}}],
        },
        [position.queryOrgNodes.method] : {
            summary: 'queryOrgNodes',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.queryOrgNodes.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.queryOrgNodes_params','description':'org.gocom.components.coframe.org.position.queryOrgNodes_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.queryOrgNodes_params'}}],
        },
        [position.queryPosition.method] : {
            summary: 'queryPosition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.queryPosition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.queryPosition_params','description':'org.gocom.components.coframe.org.position.queryPosition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.queryPosition_params'}}],
        },
        [position.updatePosition.method] : {
            summary: 'updatePosition',
            method: 'post',
            url: (payload) => `/org.gocom.components.coframe.org.position.updatePosition.biz.ext`,
            parameters: [{'in':'body','name':'org.gocom.components.coframe.org.position.updatePosition_params','description':'org.gocom.components.coframe.org.position.updatePosition_params','required':true,'schema':{'$ref':'#/definitions/org.gocom.components.coframe.org.position.updatePosition_params'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}