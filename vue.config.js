/*
 vue.config配置 https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
*/


module.exports = {
  pages:{
    index:{
      entry:'src/main',
      title:'demo'
    }
  },
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": { //是否使用代理标识,/api开头的才用代理
        target: "http://39.105.213.176/api",
        ws: false,// 启用websockets
        changeOrigin: true, //跨域
        pathRewrite: {
          '^/api': '' // 将/api开头的请求地址的/api替换为''
        },
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
}
