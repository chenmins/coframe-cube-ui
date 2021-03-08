const registerComponents = {}
registerComponents.install = function (Vue, options) {
    options.forEach(component => {
        Vue.component(`${component.name}`, component)
    })
    // Vue.prototype.$myMethod = 'dsadasdsa'
    // Vue.myGlobalMethod = function () {
    //     // 逻辑...
    // },
    //     Vue.mixin({
    //         created() {
    //             options.forEach(component=>{
    //                 console.log(component.name, component);
    //             })
    //         }
    //     })

}


export default registerComponents