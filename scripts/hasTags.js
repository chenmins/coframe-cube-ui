var _ = require("lodash")
var Path = require("path")
var fs = require("fs")


function resolve(dir) {
    return Path.join(__dirname, '..' + dir)
}

const hasTag = (moduleName,swagger,controllers,action_tpl) => {
    swagger.tags = swagger.tags.filter(tag => {
        tag.description = tag.description.replace(/ /gi, '')
        return /^[A-Za-z\-]+$/.test(tag.description)
    })
    _.forEach(swagger.tags, (tag) => {
        let list = [], dir = '', path = '', tags = '', model = [], unionMap = new Map()
        _.forEach(swagger.paths, (value, key) => {
            let url = key.replace(/\{/gi, '${payload.')
            _.forEach(value, function (v1, k1) {
                if (_.includes(v1.tags, tag.name)) {
                    let action = v1.operationId.split("_")[0].replace(/Using(POST|GET|DELETE|PUT|)/gi, '')
                    let parameters = JSON.stringify(v1.parameters)
                    if (!parameters || parameters === '') {
                        parameters = '[]';
                    }
                    let summary = v1.summary;
                    let method = k1;
                    model = tag.description;

                    dir = resolve(`/src/actions/${moduleName}/`)
                    tags = v1.tags;
                    path = resolve(`/src/actions/${moduleName}/${model}.js`)

                    if (unionMap.has(action)) {
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


module.exports = hasTag