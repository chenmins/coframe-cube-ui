//This file is automatically generated

 //字典管理
let DictApiController = {
    __name: 'DictApiController',
    getDictEntryByDictEntryCode: {controller: 'DictApiController' , method: 'getDictEntryByDictEntryCode'}, // 根据字典项编码查询字典项目
    getDictEntryByDictEntryId: {controller: 'DictApiController' , method: 'getDictEntryByDictEntryId'}, // 根据字典项ID查询字典项目
    getDictEntryByDictEntryParentCode: {controller: 'DictApiController' , method: 'getDictEntryByDictEntryParentCode'}, // 根据字典项父编码查询字典项目
    getDictEntryByDictTypeCode: {controller: 'DictApiController' , method: 'getDictEntryByDictTypeCode'}, // 根据字典类型编码查询字典项目
    getDictTypeByCode: {controller: 'DictApiController' , method: 'getDictTypeByCode'}, // 根据编码查询字典类型
    getDictTypeByParentCode: {controller: 'DictApiController' , method: 'getDictTypeByParentCode'}, // 根据父编码查询字典类型
};
 //用户管理
let AuthApiController = {
    __name: 'AuthApiController',
    deleteAttr: {controller: 'AuthApiController' , method: 'deleteAttr'}, // 删除用户属性
    deleteAttrs: {controller: 'AuthApiController' , method: 'deleteAttrs'}, // 删除用户属性列表
    get: {controller: 'AuthApiController' , method: 'get'}, // 当前登录人信息
    getAttr: {controller: 'AuthApiController' , method: 'getAttr'}, // 获得用户具体属性
    getAttrs: {controller: 'AuthApiController' , method: 'getAttrs'}, // 获得用户属性列表
    login: {controller: 'AuthApiController' , method: 'login'}, // 登录
    logout: {controller: 'AuthApiController' , method: 'logout'}, // 退出
    updateAttr: {controller: 'AuthApiController' , method: 'updateAttr'}, // 更新用户属性
    updateAttrs: {controller: 'AuthApiController' , method: 'updateAttrs'}, // 更新用户属性列表
};
 //文化建设
let CulturalControllerImpl = {
    __name: 'CulturalControllerImpl',
    addCommunicationCircle: {controller: 'CulturalControllerImpl' , method: 'addCommunicationCircle'}, // 添加一个交流圈（发帖子）
    allPageSreach: {controller: 'CulturalControllerImpl' , method: 'allPageSreach'}, // 根据分页数据查询公告列表、企业新闻、交流圈
    deleteCommunicationCircle: {controller: 'CulturalControllerImpl' , method: 'deleteCommunicationCircle'}, // 根据主键删除交流圈
    fabulousCommunicationCircle: {controller: 'CulturalControllerImpl' , method: 'fabulousCommunicationCircle'}, // 根据交流圈主键点赞或取消点赞
    getCommunicationCircleEntity: {controller: 'CulturalControllerImpl' , method: 'getCommunicationCircleEntity'}, // 根据交流圈主键获取交流圈详细信息与评论列表信息
    noticePageSreach: {controller: 'CulturalControllerImpl' , method: 'noticePageSreach'}, // 根据分页数据查询公告列表
};
 //pipe-report-controller
let PipeReportController = {
    __name: 'PipeReportController',
    create: {controller: 'PipeReportController' , method: 'create'}, // create
    deleteById: {controller: 'PipeReportController' , method: 'deleteById'}, // deleteById
    findAll: {controller: 'PipeReportController' , method: 'findAll'}, // findAll
    findByCriteria: {controller: 'PipeReportController' , method: 'findByCriteria'}, // findByCriteria
    getById: {controller: 'PipeReportController' , method: 'getById'}, // getById
    pagingAll: {controller: 'PipeReportController' , method: 'pagingAll'}, // pagingAll
    pagingByCriteria: {controller: 'PipeReportController' , method: 'pagingByCriteria'}, // pagingByCriteria
    update: {controller: 'PipeReportController' , method: 'update'}, // update
};
 //人员健康管理
let HealthApiController = {
    __name: 'HealthApiController',
    getHealthInfo: {controller: 'HealthApiController' , method: 'getHealthInfo'}, // 获取人员健康信息
    updateHealthInfo: {controller: 'HealthApiController' , method: 'updateHealthInfo'}, // 根据人员id更新人员健康录入信息
};

export {
    DictApiController,
    AuthApiController,
    CulturalControllerImpl,
    PipeReportController,
    HealthApiController,
};
