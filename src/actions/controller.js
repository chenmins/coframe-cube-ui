//This file is automatically generated

 //交流圈
let PipCcoCciController = {
    __name: 'PipCcoCciController',
    addComCir: {controller: 'PipCcoCciController' , method: 'addComCir'}, // 发帖子
    addComment: {controller: 'PipCcoCciController' , method: 'addComment'}, // 添加评论
    addOrDelPra: {controller: 'PipCcoCciController' , method: 'addOrDelPra'}, // 根据交流圈id点赞或取消点赞（交流圈下的点赞或者取消点赞）
    addOrDelPraComment: {controller: 'PipCcoCciController' , method: 'addOrDelPraComment'}, // 根据交流圈评论id点赞或取消点赞（评论下的点赞或者取消点赞）
    delCircleById: {controller: 'PipCcoCciController' , method: 'delCircleById'}, // 根据交流圈id删除交流圈
    delCommentById: {controller: 'PipCcoCciController' , method: 'delCommentById'}, // 根据交流圈评论id删除评论
    selAllComment: {controller: 'PipCcoCciController' , method: 'selAllComment'}, // 根据交流圈id交流圈详情
    selComCilList: {controller: 'PipCcoCciController' , method: 'selComCilList'}, // 交流圈列表List(type:1全部加载排序，2热度点赞评论数量排序，3精华帖排序，4按话题排序，5置顶排序)
    selComCilPageSortList: {controller: 'PipCcoCciController' , method: 'selComCilPageSortList'}, // 交流圈列表List(按条件模糊查询。按日期倒叙排序) 分页
    selCommentById: {controller: 'PipCcoCciController' , method: 'selCommentById'}, // 根据交流圈id查询关联的评论(分页)
    selCommentCircle: {controller: 'PipCcoCciController' , method: 'selCommentCircle'}, // 根据交流圈id加载交流圈详情)
    selCommentDetailsList: {controller: 'PipCcoCciController' , method: 'selCommentDetailsList'}, // 根据交流圈id查看评论信息)
    topOne: {controller: 'PipCcoCciController' , method: 'topOne'}, // 根据交流圈id置顶交流圈
    upCommentById: {controller: 'PipCcoCciController' , method: 'upCommentById'}, // 根据交流圈评论id更新评论
};
 //图片视频上传
let FileController = {
    __name: 'FileController',
    delFile: {controller: 'FileController' , method: 'delFile'}, // 根据url删除文件
    fileUploading: {controller: 'FileController' , method: 'fileUploading'}, // 文件图片上传（返回��片地址）
    videoUploading: {controller: 'FileController' , method: 'videoUploading'}, // 文件视频上传（返回视频地址）
};
 //帮助中心
let HelpCenterController = {
    __name: 'HelpCenterController',
    createProblem: {controller: 'HelpCenterController' , method: 'createProblem'}, // 后台创建问题
    deleteDemand: {controller: 'HelpCenterController' , method: 'deleteDemand'}, // 删除需求反馈信息
    insertDemand: {controller: 'HelpCenterController' , method: 'insertDemand'}, // 填写反馈需求
    insertFeedbackDemand: {controller: 'HelpCenterController' , method: 'insertFeedbackDemand'}, // 管理员回复需求
    problemPageList: {controller: 'HelpCenterController' , method: 'problemPageList'}, // 常见问题列表分页
    queryByDemand: {controller: 'HelpCenterController' , method: 'queryByDemand'}, // 需求反馈列表
    queryByPageProduct: {controller: 'HelpCenterController' , method: 'queryByPageProduct'}, // 产品介绍列表分页
    queryByProblem: {controller: 'HelpCenterController' , method: 'queryByProblem'}, // 常见问题列表
    queryByProblemDetail: {controller: 'HelpCenterController' , method: 'queryByProblemDetail'}, // 常见问题详情
    queryByProblemProductDetail: {controller: 'HelpCenterController' , method: 'queryByProblemProductDetail'}, // 产品介绍详细信息
    queryByProduct: {controller: 'HelpCenterController' , method: 'queryByProduct'}, // 产品介绍列表
};
 //常用问题
let Demo = {
    __name: 'Demo',
    getUser: {controller: 'Demo' , method: 'getUser'}, // 当前登录人信息
    insert: {controller: 'Demo' , method: 'insert'}, // 添加常用问题123
    isAdmin: {controller: 'Demo' , method: 'isAdmin'}, // 是否管理员
};
 //文化建设
let CulturalController = {
    __name: 'CulturalController',
    addJournalism: {controller: 'CulturalController' , method: 'addJournalism'}, // 创建新闻/编辑新闻
    addNotice: {controller: 'CulturalController' , method: 'addNotice'}, // 创建公告/编辑公告
    deleteJournalism: {controller: 'CulturalController' , method: 'deleteJournalism'}, // 删除新闻
    deleteNotice: {controller: 'CulturalController' , method: 'deleteNotice'}, // 删除公告
    queryByCulturalDetail: {controller: 'CulturalController' , method: 'queryByCulturalDetail'}, // 公告详情
    queryByJournalism: {controller: 'CulturalController' , method: 'queryByJournalism'}, // 企业新闻
    queryByJournalismDetail: {controller: 'CulturalController' , method: 'queryByJournalismDetail'}, // 企业新闻详情
    queryByPageCultural: {controller: 'CulturalController' , method: 'queryByPageCultural'}, // 公告列表分页
    queryByPageJournalism: {controller: 'CulturalController' , method: 'queryByPageJournalism'}, // 企业新闻分页
    queryByProblem: {controller: 'CulturalController' , method: 'queryByProblem'}, // 公告列表
};
 //auth-tpl-controller
let AuthTplController = {
    __name: 'AuthTplController',
    addRootResourceGroups: {controller: 'AuthTplController' , method: 'addRootResourceGroups'}, // 为权限模板添加根资源组
    create: {controller: 'AuthTplController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'AuthTplController' , method: 'deleteByIds'}, // 按主键集合删除
    findById: {controller: 'AuthTplController' , method: 'findById'}, // 按主键查询
    queryALLAuthTpls: {controller: 'AuthTplController' , method: 'queryALLAuthTpls'}, // 列出所有的权限模板
    queryResGroups: {controller: 'AuthTplController' , method: 'queryResGroups'}, // 查询某个权限模板下的根资源组
    querySubRoleTemplates: {controller: 'AuthTplController' , method: 'querySubRoleTemplates'}, // 查询权限模板下的角色模板
    removeRootResourceGroups: {controller: 'AuthTplController' , method: 'removeRootResourceGroups'}, // 从权限模板中移除根资源组
    update: {controller: 'AuthTplController' , method: 'update'}, // 更新
};
 //dict-entry-controller
let DictEntryController = {
    __name: 'DictEntryController',
    create: {controller: 'DictEntryController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'DictEntryController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findByCriteria: {controller: 'DictEntryController' , method: 'findByCriteria'}, // 分页查询字典项
    findById: {controller: 'DictEntryController' , method: 'findById'}, // 按主键查询
    update: {controller: 'DictEntryController' , method: 'update'}, // 更新
};
 //dict-type-controller
let DictTypeController = {
    __name: 'DictTypeController',
    create: {controller: 'DictTypeController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'DictTypeController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    downloadDictTemplate: {controller: 'DictTypeController' , method: 'downloadDictTemplate'}, // 下载导入模板
    exportExcelAll: {controller: 'DictTypeController' , method: 'exportExcelAll'}, // 导出所有数据字典
    exportExcelByCodes: {controller: 'DictTypeController' , method: 'exportExcelByCodes'}, // 按给定的 code 批量导出数据字典
    exportExcelById: {controller: 'DictTypeController' , method: 'exportExcelById'}, // 导出父类以及子类的数据字典
    exportExcelByIds: {controller: 'DictTypeController' , method: 'exportExcelByIds'}, // 按给定的 id 批量导出数据字典
    findByCriteria: {controller: 'DictTypeController' , method: 'findByCriteria'}, // 分页查询字典类型
    findById: {controller: 'DictTypeController' , method: 'findById'}, // 按主键查询
    importExcel: {controller: 'DictTypeController' , method: 'importExcel'}, // 导入字典
    querySubDictEntries: {controller: 'DictTypeController' , method: 'querySubDictEntries'}, // 查询类型下的字典项
    update: {controller: 'DictTypeController' , method: 'update'}, // 更新
};
 //dimension-controller
let DimensionController = {
    __name: 'DimensionController',
    create: {controller: 'DimensionController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'DimensionController' , method: 'deleteByIds'}, // 按主键��合删除
    findById: {controller: 'DimensionController' , method: 'findById'}, // 按主键查询
    queryByCriteria: {controller: 'DimensionController' , method: 'queryByCriteria'}, // 按条件查询维度
    update: {controller: 'DimensionController' , method: 'update'}, // 更新
};
 //employee-controller
let EmployeeController = {
    __name: 'EmployeeController',
    create: {controller: 'EmployeeController' , method: 'create'}, // 新增员工，如提供用户信息，可选同步创建用户, 或与已有用户进行绑定
    deleteByIds: {controller: 'EmployeeController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findById: {controller: 'EmployeeController' , method: 'findById'}, // 按主键查询
    pagingByCriteria: {controller: 'EmployeeController' , method: 'pagingByCriteria'}, // 分页查询所有员工
    update: {controller: 'EmployeeController' , method: 'update'}, // 更新
};
 //function-controller
let FunctionController = {
    __name: 'FunctionController',
    create: {controller: 'FunctionController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'FunctionController' , method: 'deleteByIds'}, // 按主键集合删除
    findById: {controller: 'FunctionController' , method: 'findById'}, // 按主键查询
    importFunctions: {controller: 'FunctionController' , method: 'importFunctions'}, // 批量导入
    update: {controller: 'FunctionController' , method: 'update'}, // 更新
};
 //member-controller
let MemberController = {
    __name: 'MemberController',
    addMembers: {controller: 'MemberController' , method: 'addMembers'}, // 添加成员
    deleteMembers: {controller: 'MemberController' , method: 'deleteMembers'}, // 删除成员
    pagingMembers: {controller: 'MemberController' , method: 'pagingMembers'}, // 分页查询所有成员
};
 //menu-controller
let MenuController = {
    __name: 'MenuController',
    create: {controller: 'MenuController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'MenuController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findById: {controller: 'MenuController' , method: 'findById'}, // 按主键查询
    pagingByCriteria: {controller: 'MenuController' , method: 'pagingByCriteria'}, // 分页查询
    update: {controller: 'MenuController' , method: 'update'}, // 更��
};
 //operation-log-controller
let OperationLogController = {
    __name: 'OperationLogController',
    getOperationLogDetail: {controller: 'OperationLogController' , method: 'getOperationLogDetail'}, // 获取操作日志详细
    pagingOperationLogs: {controller: 'OperationLogController' , method: 'pagingOperationLogs'}, // 分页查询操作日志
};
 //organization-controller
let OrganizationController = {
    __name: 'OrganizationController',
    addOrgEmployees: {controller: 'OrganizationController' , method: 'addOrgEmployees'}, // 往机构下批量添加员工
    create: {controller: 'OrganizationController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'OrganizationController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findById: {controller: 'OrganizationController' , method: 'findById'}, // 按主键查询
    pagingByCriteria: {controller: 'OrganizationController' , method: 'pagingByCriteria'}, // 分页查询
    querySubEmployees: {controller: 'OrganizationController' , method: 'querySubEmployees'}, // 查询机构下的员工
    querySubPositions: {controller: 'OrganizationController' , method: 'querySubPositions'}, // 查询机构下的岗位
    querySubWorkgroups: {controller: 'OrganizationController' , method: 'querySubWorkgroups'}, // 查询机构下的工作组
    removeOrgEmployees: {controller: 'OrganizationController' , method: 'removeOrgEmployees'}, // 从机构下批量移除员工
    update: {controller: 'OrganizationController' , method: 'update'}, // 更新
};
 //position-controller
let PositionController = {
    __name: 'PositionController',
    addPositionEmployees: {controller: 'PositionController' , method: 'addPositionEmployees'}, // 往岗位下添加员工
    create: {controller: 'PositionController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'PositionController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findById: {controller: 'PositionController' , method: 'findById'}, // 按主键查询
    pagingByCriteria: {controller: 'PositionController' , method: 'pagingByCriteria'}, // 分页查询
    querySubEmployees: {controller: 'PositionController' , method: 'querySubEmployees'}, // 列出此岗位的员工
    removePositionEmployees: {controller: 'PositionController' , method: 'removePositionEmployees'}, // 从岗位下移除员工
    update: {controller: 'PositionController' , method: 'update'}, // 更新
};
 //res-group-controller
let ResGroupController = {
    __name: 'ResGroupController',
    create: {controller: 'ResGroupController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'ResGroupController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findByCriteria: {controller: 'ResGroupController' , method: 'findByCriteria'}, // 按条件查询
    findById: {controller: 'ResGroupController' , method: 'findById'}, // 按主键查询
    findSubFunctionByCriteria: {controller: 'ResGroupController' , method: 'findSubFunctionByCriteria'}, // 查询某资源组下的功能
    findSubMenuByCriteria: {controller: 'ResGroupController' , method: 'findSubMenuByCriteria'}, // 查询某资源组下的菜单
    pagingByCriteria: {controller: 'ResGroupController' , method: 'pagingByCriteria'}, // 分页查询
    update: {controller: 'ResGroupController' , method: 'update'}, // 更新
};
 //role-controller
let RoleController = {
    __name: 'RoleController',
    bindRoleToUsers: {controller: 'RoleController' , method: 'bindRoleToUsers'}, // 将角色绑定至用户(用户id以&#x27;,&#x27;分割)
    create: {controller: 'RoleController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'RoleController' , method: 'deleteByIds'}, // 按主键集合删除
    findById: {controller: 'RoleController' , method: 'findById'}, // 按主键查询
    getUsersByRoleId: {controller: 'RoleController' , method: 'getUsersByRoleId'}, // 分页查询拥有某角色的用户
    handleRoleTplResource: {controller: 'RoleController' , method: 'handleRoleTplResource'}, // 修改角色资源
    loadWholeResources: {controller: 'RoleController' , method: 'loadWholeResources'}, // 查询角色对应的全部资源
    pagingByCriteria: {controller: 'RoleController' , method: 'pagingByCriteria'}, // 分页查询所有角色
    unbindRoleToUsers: {controller: 'RoleController' , method: 'unbindRoleToUsers'}, // 将角色绑定的用户解绑(用户id以&#x27;,&#x27;分割)
    update: {controller: 'RoleController' , method: 'update'}, // 更新
};
 //role-tpl-controller
let RoleTplController = {
    __name: 'RoleTplController',
    create: {controller: 'RoleTplController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'RoleTplController' , method: 'deleteByIds'}, // 按主键集合删除
    findByCriteria: {controller: 'RoleTplController' , method: 'findByCriteria'}, // 按条件查询
    findById: {controller: 'RoleTplController' , method: 'findById'}, // 按主键查询
    handleRoleTplResource: {controller: 'RoleTplController' , method: 'handleRoleTplResource'}, // 修改角色模板资源
    loadWholeResources: {controller: 'RoleTplController' , method: 'loadWholeResources'}, // 查询角色模板对应的资源树
    pageRoleByTemplateId: {controller: 'RoleTplController' , method: 'pageRoleByTemplateId'}, // 查询使用此模板创建的角色
    update: {controller: 'RoleTplController' , method: 'update'}, // 更新
};
 //role-tpl-group-controller
let RoleTplGroupController = {
    __name: 'RoleTplGroupController',
    create: {controller: 'RoleTplGroupController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'RoleTplGroupController' , method: 'deleteByIds'}, // 按主键集合删除
    findByCriteria: {controller: 'RoleTplGroupController' , method: 'findByCriteria'}, // 按条件查询
    findById: {controller: 'RoleTplGroupController' , method: 'findById'}, // 按主键查询
    newRoleInstances: {controller: 'RoleTplGroupController' , method: 'newRoleInstances'}, // 按条件查询
    update: {controller: 'RoleTplGroupController' , method: 'update'}, // 更新
};
 //tools-controller
let ToolsController = {
    __name: 'ToolsController',
    scanFunctions: {controller: 'ToolsController' , method: 'scanFunctions'}, // 通过代码扫描, 获取应用的功能定义
};
 //user-controller
let UserController = {
    __name: 'UserController',
    create: {controller: 'UserController' , method: 'create'}, // 新增用户, 可同时绑定员工。一个员工最多只能绑定一个用户
    deleteByIds: {controller: 'UserController' , method: 'deleteByIds'}, // 删除用户, 只删用户, 不删对应的人员
    disableUser: {controller: 'UserController' , method: 'disableUser'}, // 禁用用户
    enableUser: {controller: 'UserController' , method: 'enableUser'}, // 启用用户
    findById: {controller: 'UserController' , method: 'findById'}, // 按主键查询
    getAuthToken: {controller: 'UserController' , method: 'getAuthToken'}, // 获取认证token
    getSsoUser: {controller: 'UserController' , method: 'getSsoUser'}, // 获取当前登录用户
    listRoles: {controller: 'UserController' , method: 'listRoles'}, // 获取某个用户的角色
    listUserFunctionCodes: {controller: 'UserController' , method: 'listUserFunctionCodes'}, // 获取用户的所有可用的功能编码
    listUserFunctions: {controller: 'UserController' , method: 'listUserFunctions'}, // 获取用户的所有可用的功能
    listUserMenus: {controller: 'UserController' , method: 'listUserMenus'}, // 获取用户的所有菜单
    modifyPassword: {controller: 'UserController' , method: 'modifyPassword'}, // 修改用户密码
    pagingByCriteria: {controller: 'UserController' , method: 'pagingByCriteria'}, // 分页查询所有用户
    resetPassword: {controller: 'UserController' , method: 'resetPassword'}, // 重置用户密码
};
 //workgroup-controller
let WorkgroupController = {
    __name: 'WorkgroupController',
    addWorkgroupEmployees: {controller: 'WorkgroupController' , method: 'addWorkgroupEmployees'}, // 往工作组下添加员工
    create: {controller: 'WorkgroupController' , method: 'create'}, // 新增
    deleteByIds: {controller: 'WorkgroupController' , method: 'deleteByIds'}, // 按主键集合(以&#x27;,&#x27;分割)删除
    findById: {controller: 'WorkgroupController' , method: 'findById'}, // 按主键查询
    pagingByCriteria: {controller: 'WorkgroupController' , method: 'pagingByCriteria'}, // 分页查询
    querySubEmployees: {controller: 'WorkgroupController' , method: 'querySubEmployees'}, // 查询工作组下的员工
    removeWorkgroupEmployees: {controller: 'WorkgroupController' , method: 'removeWorkgroupEmployees'}, // 从工作组下移除员工
    update: {controller: 'WorkgroupController' , method: 'update'}, // 更新
};

export {
    PipCcoCciController,
    FileController,
    HelpCenterController,
    Demo,
    CulturalController,
    AuthTplController,
    DictEntryController,
    DictTypeController,
    DimensionController,
    EmployeeController,
    FunctionController,
    MemberController,
    MenuController,
    OperationLogController,
    OrganizationController,
    PositionController,
    ResGroupController,
    RoleController,
    RoleTplController,
    RoleTplGroupController,
    ToolsController,
    UserController,
    WorkgroupController,
};
