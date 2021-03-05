//This file is automatically generated

// 文化建设

import { CulturalFeignImpl } from '../controller';
export default {
    actions: {
        [CulturalFeignImpl.addCommunicationCircle.method] : {
            summary: '添加一个交流圈（发帖子）',
            method: 'post',
            url: (payload) => `/api/platform/dal/cultural/addCommunicationCircle`,
            parameters: [{'in':'body','name':'communicationCircleEntity','description':'communicationCircleEntity','required':true,'schema':{'$ref':'#/definitions/交流圈'}}],
        },
        [CulturalFeignImpl.deleteCommunicationCircle.method] : {
            summary: '根据主键删除交流圈',
            method: 'delete',
            url: (payload) => `/api/platform/dal/cultural/deleteCommunicationCircle/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.fabulousCommunicationCircle.method] : {
            summary: '根据交流圈主键点赞或取消点赞',
            method: 'put',
            url: (payload) => `/api/platform/dal/cultural/fabulousCommunicationCircle/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.getCommunicationCircle.method] : {
            summary: '根据交流圈主键查询一个交流圈',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/getCommunicationCircle/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.getCommunicationCircleForComment.method] : {
            summary: '根据交流圈主键查询评论列表',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/getCommunicationCircleForComment/${payload.id}/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'id','in':'path','description':'主键','required':true,'type':'integer','format':'int32'},{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.journalismPageSreach.method] : {
            summary: '根据分页数据查询公告列表',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/journalism/pageSreach/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.noticePageSreach.method] : {
            summary: '根据分页数据查询公告列表',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/notice/pageSreach/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.queryByPageAndReleaseTimeDescAndChoice.method] : {
            summary: '交流圈连接交流圈点赞查询：分页、发布时间排序、精选',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/communicationCircle/PageAndReleaseTimeDescAndChoice/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.queryByPageAndTopTimeDescReleaseTimeDesc.method] : {
            summary: '交流圈连接交流圈点赞查询：置顶时间+发布时间排序、分页',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/communicationCircle/PageAndTopTimeDescReleaseTimeDesc/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
        [CulturalFeignImpl.queryCommunicationCircleByPageAndFabulousPlusCountSort.method] : {
            summary: '交流圈连接交流圈点赞查询：分页、热门排序',
            method: 'get',
            url: (payload) => `/api/platform/dal/cultural/communicationCircle/PageAndFabulousPlusCountSort/${payload.pageNo}/${payload.pageSize}`,
            parameters: [{'name':'pageNo','in':'path','description':'当前页码','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'path','description':'一页显示条数','required':true,'type':'integer','format':'int32'}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
