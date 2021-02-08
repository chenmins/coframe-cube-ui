//This file is automatically generated

// 常用问题

import { Demo } from '../controller';
export default {
    actions: {
        [Demo.getUser.method] : {
            summary: '当前登录人信息',
            method: 'post',
            url: (payload) => `/api/platform/demoUser/getUser`,
            parameters: [],
        },
        [Demo.insert.method] : {
            summary: '添加常用问题',
            method: 'post',
            url: (payload) => `/api/platform/commonProblem/insert/one`,
            parameters: [{'in':'body','name':'commonProblem','description':'commonProblem','required':true,'schema':{'$ref':'#/definitions/CommonProblem'}}],
        },
        [Demo.isAdmin.method] : {
            summary: '是否管理员',
            method: 'post',
            url: (payload) => `/api/platform/demoUser/isAdmin`,
            parameters: [],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
