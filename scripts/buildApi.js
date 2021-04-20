/**
 * Created by binwang on 18/1/26.
 * 通过解析 swagger.json 自动生成 action 文件
 */


var Config = require("./config.js")
var fs = require("fs")
var http = require("http")
var Path = require("path")
let Handlebars = require('handlebars')
const hasTags = require('./hasTags')
const noTags = require('./noTags')

let controllers = [];

function resolve(dir) {
  return Path.join(__dirname, '..' + dir)
}

function mapAction(moduleName, swagger) {
  const action_tpl = Handlebars.compile(fs.readFileSync(resolve('/scripts/tpl/action.tpl'), 'utf-8'))
  if (!fs.existsSync(resolve(`/src/actions/${moduleName}`)))
    fs.mkdirSync(resolve(`/src/actions/${moduleName}`))
  if (swagger.tags) {
    hasTags(moduleName,swagger,controllers,action_tpl)
    return
  }
  noTags(moduleName,swagger,controllers,action_tpl)
}
function createIndex() {
  const index_tpl = Handlebars.compile(fs.readFileSync(resolve('/scripts/tpl/index.tpl'), 'utf-8'))
  let index_result = index_tpl({
    list: controllers.map(c => {
      return {
        name: c.name,
        path: `${c.path}`,
      }
    }),
  })
  fs.writeFileSync(resolve(`/src/actions/index.js`), index_result)
}
function createController() {
  const controller_tpl = Handlebars.compile(fs.readFileSync(resolve('/scripts/tpl/controller.tpl'), 'utf-8'))
  let result = controller_tpl({
    controllers,
  })
  console.log(`创建action 成功, 共:${controllers.length}个`)
  fs.writeFileSync(resolve(`/src/actions/controller.js`), result)
}
function execute(url) {
  return new Promise(function (resolve, reject) {
    var json = '';
    http.get(url, function (res) {
      res.on("data", function (data) {
        json += data;
      }).on("end", function () {
        resolve(JSON.parse(json))
      })
    })
  })

}
(function () {
  // 直接读取 在线 swagger
  let all = []
  Config.modules.forEach(({ name, swaggerUrl }) => {
    execute(swaggerUrl).then((data) => {
       console.log(`read ${name} : ${swaggerUrl} ...`)
      mapAction(name, data)
    }).then(() => {
      console.log('create controller')
      createController()
      createIndex()
    })
  })
  // Promise.all(all).then(()=>{
  //   console.log('create controller')
  //   createController()
  // })

  // var url1 = "http://10.15.15.136:8080/swagger/swagger.json";
  // // var url1 = "http://192.168.8.194:8080/swagger/swagger.json";
  //
  // execute(url1).then((data) => {
  //   console.log(`read ${url1} ...`)
  //   mapAction(data)
  // }).then(() => {
  //   console.log('create controller')
  //   createController()
  // })

})()


