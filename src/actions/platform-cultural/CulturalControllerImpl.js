//This file is automatically generated

// 文化建设

import { CulturalControllerImpl } from '../controller';
export default {
    actions: {
        [CulturalControllerImpl.addCommunicationCircle.method] : {
            summary: '添加一个交流圈（发帖子）',
            method: 'post',
            url: (payload) => `/api/platform/cultural/addCommunicationCircle`,
            parameters: [{'in':'body','name':'vo','description':'vo','required':true,'schema':{'$ref':'#/definitions/CommunicationCircleVO'}}],
        },
        [CulturalControllerImpl.allPageSreach.method] : {
            summary: '根据分页数据查询公告列表、企业新闻、交流圈',
            method: 'get',
            url: (payload) => `/api/platform/cultural/all/pageSreach/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','default':1,'format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','default':10,'format':'int32'}],
        },
        [CulturalControllerImpl.deleteCommunicationCircle.method] : {
            summary: '根据主键删除交流圈',
            method: 'delete',
            url: (payload) => `/api/platform/cultural/deleteCommunicationCircle/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalControllerImpl.fabulousCommunicationCircle.method] : {
            summary: '根据交流圈主键点赞或取消点赞',
            method: 'put',
            url: (payload) => `/api/platform/cultural/fabulousCommunicationCircle/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalControllerImpl.getCommunicationCircleEntity.method] : {
            summary: '根据交流圈主键获取交流圈详细信息与评论列表信息',
            method: 'get',
            url: (payload) => `/api/platform/cultural/getCommunicationCircleEntity/${payload.id}/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'},{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalControllerImpl.getNotice.method] : {
            summary: '根据主键查询公告',
            method: 'get',
            url: (payload) => `/api/platform/cultural/getNotice/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalControllerImpl.noticePageSreach.method] : {
            summary: '根据分页数据查询公告列表',
            method: 'get',
            url: (payload) => `/api/platform/cultural/notice/pageSreach/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
