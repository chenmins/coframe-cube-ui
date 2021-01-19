import Vue from "vue";

var XgeneCloud = require('coframe-rest-api')

// console.log(XgeneCloud) //查看ApiClient可设置参数

XgeneCloud.ApiClient.instance.basePath ='http://localhost:8081' //配置请求公共路径


Vue.prototype.$apiInstance = new XgeneCloud.CommonApi() //将api挂在到vue原型链上


