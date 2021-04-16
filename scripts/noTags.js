var _ = require("lodash")
var Path = require("path")
var fs = require("fs")


function resolve(dir) {
    return Path.join(__dirname, '..' + dir)
}

const noTags = (moduleName,swagger,controllers,action_tpl) => {
    //成组
    let newArr = []
    _.forEach(swagger.paths,(value,key)=>{
        newArr.push(value.post.tags[0])
    })
    let noRepeat = [],tagArr = []
    newArr.map(item=>{
        if(noRepeat.indexOf(item)<0){
            noRepeat.push(item)
            tagArr.push({
                name: item,
            })
        }
    })
    _.forEach(tagArr,(tag)=>{
        let list = [], dir = '', path = '', tags = '', model = [], unionMap = new Map()
        _.forEach(swagger.paths,(value,key)=>{
            let url = key.replace(/\{/gi, '${payload.')
            _.forEach(value,(content,reqMethod)=>{
                // let action = content.operationId.split("_")[0].replace(/Using(POST|GET|DELETE|PUT|)/gi, '')
                if(key.indexOf(tag.name)!== -1){
                    let action = `${content.summary}`
                    let parameters = JSON.stringify(content.parameters)
                    if (!parameters || parameters === '') {
                        parameters = '[]';
                    }
                    let summary = content.summary;
                    let method = reqMethod;
                    model = tag.name;

                    dir = resolve(`/src/actions/${moduleName}/`)
                    tags = content.tags;
                    path = resolve(`/src/actions/${moduleName}/${model}.js`)

                    if ( unionMap.has(action)) {
                        unionMap.set(action, unionMap.get(action))
                    } else
                        unionMap.set(action, 0)

                    list.push({
                        action: unionMap.get(action) === 0 ? action : `${action}_${unionMap.get(action)}`,
                        parameters,
                        summary,
                        method,
                        tags,
                        tagName: model,
                        model,
                        url,
                        path,
                    })
                }


            })
        })
        list = _.sortBy(list, (l) => l.action)
        if (list && list.length > 0) {
            controllers.push({
                tags: tags,
                name: model,
                list: list,
                path: moduleName,
            })
            let action_result = action_tpl({
                list,
                tags,
                model,
            })
            action_result = action_result.replace(/&quot;/gi, '\'')
            fs.mkdir(dir, (error) => {
                fs.writeFileSync(path, action_result)
            })
        }
    })

}


module.exports = noTags