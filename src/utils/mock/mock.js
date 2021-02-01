import Mock from 'mockjs'

let params = Mock.mock({ // 数据池
    'userTableData|10': [{ // 图表过滤所需数据
        'name': '@cname',
        'date': '@date',
        'province': '@province',
        'city': '@city',
        'address': '@county(true) @ctitle() @natural(1000,9999) 号',
        'zip': '@zip'
    }]
})

let all = Mock.mock({
    'all|20': [{ // 图表过滤所需数据
        'username': '@cname',
        'avatar': '@image(100x100)',
        'topic': '@ctitle',
        'date': '@datetime',
        'isChioce': '@boolean',
        'like': '@integer(0, 999999999)',
        'comments|0-100':[{
            'username': '@cname',
            'avatar': '@image(100x100)',
            'topic': '@ctitle',
            'date': '@datetime',
            'isChioce': '@boolean',
            'like': '@integer(0, 1000000)',
        }]
    }]
})


let slideNav = Mock.mock({
    'slideNav|10': [{ // 图表过滤所需数据
        'name': '@cname',
        'num|0-30':[{
            'name':'@cname',
            'avatar': '@image(100x100)'
        }]
    }]
})


// 设置请求时长200-600毫秒，模拟真实接口请求场景
Mock.setup({
    timeout: '200-600'
})

// 拦截urls.userTableData.url对应地址的请求，方式urls.userTableData.type，返回值为params.userTableData
 export  default Mock.mock('http://localhost:8081/test/cityInfo', 'get',slideNav);