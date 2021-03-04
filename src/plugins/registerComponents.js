const registerComponents = {}
registerComponents.install = function (Vue, options) {
    Vue.prototype.$myMethod = 'dsadasdsa'
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

}


export default registerComponents