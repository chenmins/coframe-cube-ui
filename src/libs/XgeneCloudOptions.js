import Vue from "vue";

var XgeneCloud = require('coframe-rest-api')

// console.log(XgeneCloud) //查看ApiClient可设置参数

let NODE_ENV = process.env.NODE_ENV
if(NODE_ENV === 'development'){
    //开发环境
    XgeneCloud.ApiClient.instance.basePath ='http://localhost:8081' //初始地址
}
if(NODE_ENV === 'production'){
    //生产环境
    XgeneCloud.ApiClient.instance.basePath ='' //初始地址
}

Vue.prototype.$XgeneCloud = XgeneCloud



