/*
 vue.config配置 https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
*/
const path = require('path')
const GenerateAssetPlugin = require('generate-asset-webpack-plugin'); //vue配置外放
const CompressionWebpackPlugin = require('compression-webpack-plugin') //js压缩
const productionGzipExtensions = ['js', 'css','webp','ttf','woff']


const config = require('./config/app-config.json');
const webpack = require("webpack");
function resolve(dir) {
  return path.join(__dirname, dir)
}
function createServerConfig(compilation){
  return JSON.stringify(
      Object.assign({
        _hash: compilation.hash
      },config)
  )
}

module.exports = {
  configureWebpack: {   //swagger 关闭amd loader,
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        },


      ],


    },
    resolve:{
      alias:{
        '@': '/src',
        '@myComponents':'/src/components',
        'vue$': 'vue/dist/vue.esm.js',
        'vue': 'vue/dist/vue.esm.js',
        '@lib': resolve('/src/libs'),
        '@util': resolve('/src/utils'),
        '@actions': resolve('/src/actions'),
        '@static': resolve('/static'),
        '@controller': resolve('/src/actions/controller.js'),
      }
    },
    plugins:[
      new GenerateAssetPlugin({
        filename: 'config/app-config.json',
        fn: (compilation, cb) => {
          cb(null, createServerConfig(compilation));
        }
      }),
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include
        .add(dir)
        .end() //只在icons目录中
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({ extract: false })
        .end()
        .use('svgo-loader')
        .loader('svgo-loader')
        .tap(options => ({ ...options, }))
        .end()

    config.plugin('svg-sprite')
        .use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])

    config.module.rule('svg')
        .exclude
        .add(dir) //其他的svg loader排除icons目录
  },
  pages:{
    index:{
      entry:'src/main',
      title:'cube'
    }
  },
  devServer: {
    port:8081,
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": { //是否使用代理标识,/api开头的才用代理
        target: "http://c94.cn:3003/api/",
        ws: false,// 启用websockets
        changeOrigin: true, //跨域
        pathRewrite: {
          '^/api': '' // 将/api开头的请求地址的/api替换为''
        },
      },
      // "/api/platform": { //是否使用代理标识,/api开头的才用代理
      //   target: "http://39.105.213.176:8080/api",
      //   ws: false,// 启用websockets
      //   changeOrigin: true, //跨域
      // },
      // "/health": { //是否使用代理标识,
      //   target: "http://localhost:8080/health",
      //   ws: false,// 启用websockets
      //   changeOrigin: true, //跨
      //   pathRewrite: {
      //     '^/health': ''
      //   },
      // },
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    },
    pwa: {
      //配置icon
      iconPaths: {
        favicon32: './favicon.ico',
        favicon16: './favicon.ico',
        appleTouchIcon: './favicon.ico',
        maskIcon: './favicon.ico',
        msTileImage: './favicon.ico'
      }
    }
  },

}
