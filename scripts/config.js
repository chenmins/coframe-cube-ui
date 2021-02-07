let json =  {
  "swagger": "2.0",
  "info": {
    "title": "platform"
  },
  "host": "192.168.200.150:10001",
  "basePath": "/",
  "tags": [
    {
      "name": "交流圈",
      "description": "Pip Cco Cci Controller"
    },
    {
      "name": "图片视频上传",
      "description": "File Controller"
    },
    {
      "name": "帮助中心",
      "description": "Help Center Controller"
    },
    {
      "name": "常用问题",
      "description": "Demo"
    },
    {
      "name": "文化建设",
      "description": "Cultural Controller"
    }
  ],
  "paths": {
    "/api/platform/commonProblem/insert/one": {
      "post": {
        "tags": [
          "常用问题"
        ],
        "summary": "添加常用问题",
        "operationId": "insertUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "commonProblem",
            "description": "commonProblem",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CommonProblem"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CommonProblem"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/addJournalism/{id}": {
      "post": {
        "tags": [
          "文化建设"
        ],
        "summary": "创建新闻/编辑新闻",
        "description": "创建新闻/编辑新闻",
        "operationId": "addJournalismUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "id",
            "description": "新闻id",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Journalism"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/addNotice/{id}": {
      "post": {
        "tags": [
          "文化建设"
        ],
        "summary": "创建公告/编辑公告",
        "description": "创建公告/编辑公告",
        "operationId": "addNoticeUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "id",
            "description": "公告id",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Notice"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/deleteJournalism/{id}": {
      "delete": {
        "tags": [
          "文化建设"
        ],
        "summary": "删除新闻",
        "description": "删除新闻",
        "operationId": "deleteJournalismUsingDELETE",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "新闻id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/deleteNotice/{id}": {
      "delete": {
        "tags": [
          "文化建设"
        ],
        "summary": "删除公告",
        "description": "删除公告",
        "operationId": "deleteNoticeUsingDELETE",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "公告id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/journalismList": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "企业新闻",
        "description": "企业新闻",
        "operationId": "queryByJournalismUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "choice",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "picture",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "releaseTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "releaseTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Journalism"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/journalismList/details/{id}": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "企业新闻详情",
        "description": "企业新闻详情",
        "operationId": "queryByJournalismDetailUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "企业新闻id",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Journalism"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/journalismPageList": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "企业新闻分页",
        "description": "企业新闻分页",
        "operationId": "queryByPageJournalismUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "choice",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "number",
            "description": "第几页",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "picture",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "releaseTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "releaseTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "size",
            "description": "每一页的数量",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/noticeList": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "公告列表",
        "description": "公告列表",
        "operationId": "queryByProblemUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "releaseTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Notice"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/noticeList/details/{id}": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "公告详情",
        "description": "公告详情",
        "operationId": "queryByCulturalDetailUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "公告id",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Notice"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/cultural/noticePageList": {
      "get": {
        "tags": [
          "文化建设"
        ],
        "summary": "公告列表分页",
        "description": "公告列表分页",
        "operationId": "queryByPageCulturalUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "number",
            "description": "第几页",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "releaseTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "releaseTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "releaseTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "size",
            "description": "每一页的数量",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/demoUser/getUser": {
      "post": {
        "tags": [
          "常用问题"
        ],
        "summary": "当前登录人信息",
        "operationId": "getUserUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CofUser"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platform/demoUser/isAdmin": {
      "post": {
        "tags": [
          "常用问题"
        ],
        "summary": "是否管理员",
        "operationId": "isAdminUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "boolean"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/addComCir": {
      "post": {
        "tags": [
          "交流圈"
        ],
        "summary": "发帖子",
        "operationId": "addComCirUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "description": "正文",
            "required": false,
            "type": "string"
          },
          {
            "name": "choice",
            "in": "query",
            "description": "精选",
            "required": false,
            "type": "string"
          },
          {
            "in": "body",
            "name": "circle",
            "description": "circle",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CommunicationCircle"
            }
          },
          {
            "name": "fabulous",
            "in": "query",
            "description": "点赞数量",
            "required": false,
            "type": "ref"
          },
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "string"
          },
          {
            "name": "picture",
            "in": "query",
            "description": "小图",
            "required": false,
            "type": "string"
          },
          {
            "name": "releaseTime",
            "in": "query",
            "description": "发布时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "title",
            "in": "query",
            "description": "标题",
            "required": false,
            "type": "string"
          },
          {
            "name": "title",
            "in": "query",
            "description": "话题、主题",
            "required": false,
            "type": "string"
          },
          {
            "name": "top",
            "in": "query",
            "description": "是否置顶",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topTime",
            "in": "query",
            "description": "置顶时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topicOfConversationId",
            "in": "query",
            "description": "话题id",
            "required": false,
            "type": "ref"
          },
          {
            "name": "type",
            "in": "query",
            "description": "类型",
            "required": false,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "description": "用户id",
            "required": false,
            "type": "string"
          },
          {
            "name": "userName",
            "in": "query",
            "description": "用户姓名",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/addOrDelPra/{id}": {
      "put": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id点赞或取消点赞（交流圈下的点赞或者取消点赞）",
        "operationId": "addOrDelPraUsingPUT",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/addOrDelPraComment/{id}": {
      "put": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈评论id点赞或取消点赞（评论下的点赞或者取消点赞）",
        "operationId": "addOrDelPraCommentUsingPUT",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈评论id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/delCommentById": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈评论id删除评论",
        "operationId": "delCommentByIdUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈评论id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selAllComment": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id交流圈详情",
        "operationId": "selAllCommentUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CommunicationCircle"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selComCilList": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "交流圈列表List(type:1全部加载排序，2热度点赞评论数量排序，3精华帖排序，4按话题排序，5置顶排序)",
        "operationId": "selComCilListUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "description": "正文",
            "required": false,
            "type": "string"
          },
          {
            "name": "choice",
            "in": "query",
            "description": "精选",
            "required": false,
            "type": "string"
          },
          {
            "in": "body",
            "name": "circle",
            "description": "circle",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CommunicationCircle"
            }
          },
          {
            "name": "fabulous",
            "in": "query",
            "description": "点赞数量",
            "required": false,
            "type": "ref"
          },
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "string"
          },
          {
            "name": "picture",
            "in": "query",
            "description": "小图",
            "required": false,
            "type": "string"
          },
          {
            "name": "releaseTime",
            "in": "query",
            "description": "发布时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "title",
            "in": "query",
            "description": "标题",
            "required": false,
            "type": "string"
          },
          {
            "name": "top",
            "in": "query",
            "description": "是否置顶",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topTime",
            "in": "query",
            "description": "置顶时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topicOfConversationId",
            "in": "query",
            "description": "话题id",
            "required": false,
            "type": "ref"
          },
          {
            "name": "type",
            "in": "query",
            "description": "类型",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "description": "用户id",
            "required": false,
            "type": "string"
          },
          {
            "name": "userName",
            "in": "query",
            "description": "用户姓名",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CommunicationCircle"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selComCilPageSortList": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "交流圈列表List(按条件模糊查询。按日期倒叙排序)",
        "operationId": "selComCilPageSortListUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "description": "正文",
            "required": false,
            "type": "string"
          },
          {
            "name": "choice",
            "in": "query",
            "description": "精选",
            "required": false,
            "type": "string"
          },
          {
            "in": "body",
            "name": "dto",
            "description": "dto",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CommunicationCircleDTO"
            }
          },
          {
            "name": "fabulous",
            "in": "query",
            "description": "点赞数量",
            "required": false,
            "type": "ref"
          },
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "string"
          },
          {
            "name": "pageNum",
            "in": "query",
            "description": "页数",
            "required": true,
            "type": "ref"
          },
          {
            "name": "pageSize",
            "in": "query",
            "description": "记录数",
            "required": true,
            "type": "ref"
          },
          {
            "name": "picture",
            "in": "query",
            "description": "小图",
            "required": false,
            "type": "string"
          },
          {
            "name": "releaseTime",
            "in": "query",
            "description": "发布时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "title",
            "in": "query",
            "description": "标题",
            "required": false,
            "type": "string"
          },
          {
            "name": "title",
            "in": "query",
            "description": "话题、主题",
            "required": false,
            "type": "string"
          },
          {
            "name": "top",
            "in": "query",
            "description": "是否置顶",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topTime",
            "in": "query",
            "description": "置顶时间",
            "required": false,
            "type": "ref"
          },
          {
            "name": "topicOfConversationId",
            "in": "query",
            "description": "话题id",
            "required": false,
            "type": "ref"
          },
          {
            "name": "type",
            "in": "query",
            "description": "类型",
            "required": false,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "description": "用户id",
            "required": false,
            "type": "string"
          },
          {
            "name": "userName",
            "in": "query",
            "description": "用户姓名",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page«CommunicationCircle»"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selCommentById": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id查询关联的评论",
        "operationId": "selCommentByIdUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": true,
            "type": "ref"
          },
          {
            "name": "pageNum",
            "in": "query",
            "description": "交流圈评论id",
            "required": true,
            "type": "ref"
          },
          {
            "name": "pageSize",
            "in": "query",
            "description": "交流圈评论id",
            "required": true,
            "type": "ref"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page«CommunicationCircleComment»"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selCommentCircle": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id加载交流圈详情)",
        "operationId": "selCommentCircleUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CommunicationCircle"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/selCommentDetailsList": {
      "get": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id查看评论信息)",
        "operationId": "selCommentDetailsListUsingGET",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CommunicationCircleComment"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/topOne/{id}": {
      "delete": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈id置顶交流圈",
        "operationId": "topOneUsingDELETE",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "交流圈id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/ccocci/upCommentById": {
      "put": {
        "tags": [
          "交流圈"
        ],
        "summary": "根据交流圈评论id更新评论",
        "operationId": "upCommentByIdUsingPUT",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "description": "用户id",
            "required": false,
            "type": "string"
          },
          {
            "name": "commentTime",
            "in": "query",
            "description": "用户姓名",
            "required": false,
            "type": "ref"
          },
          {
            "name": "communicationCircleId",
            "in": "query",
            "description": "交流圈id",
            "required": false,
            "type": "ref"
          },
          {
            "in": "body",
            "name": "dto",
            "description": "dto",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CommunicationCircleComment"
            }
          },
          {
            "name": "fabulous",
            "in": "query",
            "description": "正文",
            "required": false,
            "type": "ref"
          },
          {
            "name": "id",
            "in": "query",
            "description": "交流圈评论id",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "description": "类型",
            "required": false,
            "type": "string"
          },
          {
            "name": "userName",
            "in": "query",
            "description": "标题",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/createProblem": {
      "post": {
        "tags": [
          "帮助中心"
        ],
        "summary": "后台创建问题",
        "description": "后台创建问题",
        "operationId": "createProblemUsingPOST",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "commonProblem",
            "description": "创建的问题实体",
            "required": false,
            "schema": {
              "$ref": "#/definitions/CommonProblem"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/deleteDemand/{id}": {
      "delete": {
        "tags": [
          "帮助中心"
        ],
        "summary": "删除需求反馈信息",
        "description": "删除需求反馈信息",
        "operationId": "deleteDemandUsingDELETE",
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "需求反馈信息id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/demandList": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "需求反馈列表",
        "description": "需求反馈列表",
        "operationId": "queryByDemandUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "demandFeedbackReply[0].body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "demandFeedbackReply[0].feedbackId",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "demandFeedbackReply[0].replyTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "feedbackTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "feedbackTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "picture",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "userName",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/DemandFeedback"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/feedbackDemand/{feedid}": {
      "post": {
        "tags": [
          "帮助中心"
        ],
        "summary": "管理员回复需求",
        "description": "管理员回复需求",
        "operationId": "insertDemandUsingPOST",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "demandFeedbackReply",
            "description": "回复需求实体",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DemandFeedbackReply"
            }
          },
          {
            "name": "feedid",
            "in": "path",
            "description": "需求id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/insertDemand": {
      "post": {
        "tags": [
          "帮助中心"
        ],
        "summary": "填写反馈需求",
        "description": "填写反馈需求",
        "operationId": "insertDemandUsingPOST_1",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "demandFeedback",
            "description": "反馈需求实体",
            "required": false,
            "schema": {
              "$ref": "#/definitions/DemandFeedback"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/problemList": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "常见问题列表",
        "description": "常见问题列表",
        "operationId": "queryByProblemUsingGET_1",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "updateTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "updateTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateUser",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CommonProblem"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/problemList/details/{id}": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "常见问题详情",
        "description": "常见问题详情",
        "operationId": "queryByProblemDetailUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "常见问题id",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CommonProblem"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/problemPageList": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "常见问题列表分页",
        "description": "常见问题列表分页",
        "operationId": "problemPageListUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "number",
            "description": "第几页",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "in": "body",
            "name": "size",
            "description": "每一页的数量",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "updateTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "updateTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateUser",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/productList": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "产品介绍列表",
        "description": "产品介绍列表",
        "operationId": "queryByProductUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "updateTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "updateTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateUser",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ProductIntroduction"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/productList/details/{id}": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "产品介绍详细信息",
        "description": "产品介绍详细信息",
        "operationId": "queryByProblemProductDetailUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "产品介绍id",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/ProductIntroduction"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/helpCenter/productPageList": {
      "get": {
        "tags": [
          "帮助中心"
        ],
        "summary": "产品介绍列表分页",
        "description": "产品介绍列表分页",
        "operationId": "queryByPageProductUsingGET",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "id",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "in": "body",
            "name": "number",
            "description": "第几页",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "in": "body",
            "name": "size",
            "description": "每一页的数量",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "title",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "type",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "updateTime.date",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.day",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.hours",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.minutes",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.month",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.nanos",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.seconds",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.time",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "updateTime.timezoneOffset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateTime.year",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "updateUser",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Page"
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/uploading/fileUploading": {
      "post": {
        "tags": [
          "图片视频上传"
        ],
        "summary": "文件图片上传（返回图片地址）",
        "operationId": "fileUploadingUsingPOST",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "files",
            "in": "formData",
            "description": "图片文件",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/api/platfrom/uploading/videoUploading": {
      "post": {
        "tags": [
          "图片视频上传"
        ],
        "summary": "文件视频上传（返回视频地址）",
        "operationId": "videoUploadingUsingPOST",
        "consumes": [
          "multipart/form-data"
        ],
        "produces": [
          "*/*"
        ],
        "parameters": [
          {
            "name": "application-dev.properties",
            "description": "视频",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "file",
            "in": "formData",
            "description": "file",
            "required": true,
            "type": "file"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PackVO"
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "definitions": {
    "CofFunction": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "groupId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "imported": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "tenantId": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "urls": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CofFunctionURL"
          }
        }
      },
      "title": "CofFunction"
    },
    "CofFunctionURL": {
      "type": "object",
      "properties": {
        "method": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "pathRegExp": {
          "type": "string"
        }
      },
      "title": "CofFunctionURL"
    },
    "CofRole": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "functions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CofFunction"
          }
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerId": {
          "type": "string"
        },
        "ownerType": {
          "type": "string"
        },
        "tenantId": {
          "type": "string"
        }
      },
      "title": "CofRole"
    },
    "CofUser": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "lastLogin": {
          "type": "string",
          "format": "date-time"
        },
        "name": {
          "type": "string"
        },
        "roles": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CofRole"
          }
        },
        "salt": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "tenantId": {
          "type": "string"
        },
        "token": {
          "type": "string"
        }
      },
      "title": "CofUser"
    },
    "CommonProblem": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "updateTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "updateUser": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "CommonProblem"
    },
    "CommunicationCircle": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "choice": {
          "type": "string"
        },
        "fabulous": {
          "type": "integer",
          "format": "int32"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "picture": {
          "type": "string"
        },
        "releaseTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "title": {
          "type": "string"
        },
        "top": {
          "type": "integer",
          "format": "int32"
        },
        "topTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "topicOfConversationId": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        },
        "userName": {
          "type": "string"
        }
      },
      "title": "CommunicationCircle"
    },
    "CommunicationCircleComment": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "commentTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "communicationCircleId": {
          "type": "integer",
          "format": "int32"
        },
        "fabulous": {
          "type": "integer",
          "format": "int32"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "userId": {
          "type": "string"
        },
        "userName": {
          "type": "string"
        }
      },
      "title": "CommunicationCircleComment"
    },
    "CommunicationCircleDTO": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "choice": {
          "type": "string"
        },
        "fabulous": {
          "type": "integer",
          "format": "int32"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "pageNum": {
          "type": "integer",
          "format": "int32"
        },
        "pageSize": {
          "type": "integer",
          "format": "int32"
        },
        "picture": {
          "type": "string"
        },
        "releaseTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "title": {
          "type": "string"
        },
        "top": {
          "type": "integer",
          "format": "int32"
        },
        "topTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "topicOfConversationId": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        },
        "userName": {
          "type": "string"
        }
      },
      "title": "CommunicationCircleDTO"
    },
    "DemandFeedback": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "demandFeedbackReply": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/DemandFeedbackReply"
          }
        },
        "feedbackTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "picture": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        },
        "userName": {
          "type": "string"
        }
      },
      "title": "DemandFeedback"
    },
    "DemandFeedbackReply": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "feedbackId": {
          "type": "integer",
          "format": "int32"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "replyTime": {
          "$ref": "#/definitions/Timestamp"
        }
      },
      "title": "DemandFeedbackReply"
    },
    "File": {
      "type": "object",
      "properties": {
        "absolute": {
          "type": "boolean"
        },
        "absoluteFile": {
          "$ref": "#/definitions/File"
        },
        "absolutePath": {
          "type": "string"
        },
        "canonicalFile": {
          "$ref": "#/definitions/File"
        },
        "canonicalPath": {
          "type": "string"
        },
        "directory": {
          "type": "boolean"
        },
        "executable": {
          "type": "boolean"
        },
        "file": {
          "type": "boolean"
        },
        "freeSpace": {
          "type": "integer",
          "format": "int64"
        },
        "hidden": {
          "type": "boolean"
        },
        "lastModified": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "parent": {
          "type": "string"
        },
        "parentFile": {
          "$ref": "#/definitions/File"
        },
        "path": {
          "type": "string"
        },
        "readable": {
          "type": "boolean"
        },
        "totalSpace": {
          "type": "integer",
          "format": "int64"
        },
        "usableSpace": {
          "type": "integer",
          "format": "int64"
        },
        "writable": {
          "type": "boolean"
        }
      },
      "title": "File"
    },
    "InputStream": {
      "type": "object",
      "title": "InputStream"
    },
    "Journalism": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "choice": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "picture": {
          "type": "string"
        },
        "releaseTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "title": "Journalism"
    },
    "Notice": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "releaseTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "title": "Notice"
    },
    "PackVO": {
      "type": "object",
      "properties": {
        "string": {
          "type": "string"
        }
      },
      "title": "PackVO"
    },
    "Page": {
      "type": "object",
      "properties": {
        "content": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "empty": {
          "type": "boolean"
        },
        "first": {
          "type": "boolean"
        },
        "last": {
          "type": "boolean"
        },
        "number": {
          "type": "integer",
          "format": "int32"
        },
        "numberOfElements": {
          "type": "integer",
          "format": "int32"
        },
        "pageable": {
          "$ref": "#/definitions/Pageable"
        },
        "size": {
          "type": "integer",
          "format": "int32"
        },
        "sort": {
          "$ref": "#/definitions/Sort"
        },
        "totalElements": {
          "type": "integer",
          "format": "int64"
        },
        "totalPages": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "Page"
    },
    "Pageable": {
      "type": "object",
      "properties": {
        "offset": {
          "type": "integer",
          "format": "int64"
        },
        "pageNumber": {
          "type": "integer",
          "format": "int32"
        },
        "pageSize": {
          "type": "integer",
          "format": "int32"
        },
        "paged": {
          "type": "boolean"
        },
        "sort": {
          "$ref": "#/definitions/Sort"
        },
        "unpaged": {
          "type": "boolean"
        }
      },
      "title": "Pageable"
    },
    "Page«CommunicationCircleComment»": {
      "type": "object",
      "properties": {
        "content": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommunicationCircleComment"
          }
        },
        "empty": {
          "type": "boolean"
        },
        "first": {
          "type": "boolean"
        },
        "last": {
          "type": "boolean"
        },
        "number": {
          "type": "integer",
          "format": "int32"
        },
        "numberOfElements": {
          "type": "integer",
          "format": "int32"
        },
        "pageable": {
          "$ref": "#/definitions/Pageable"
        },
        "size": {
          "type": "integer",
          "format": "int32"
        },
        "sort": {
          "$ref": "#/definitions/Sort"
        },
        "totalElements": {
          "type": "integer",
          "format": "int64"
        },
        "totalPages": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "Page«CommunicationCircleComment»"
    },
    "Page«CommunicationCircle»": {
      "type": "object",
      "properties": {
        "content": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CommunicationCircle"
          }
        },
        "empty": {
          "type": "boolean"
        },
        "first": {
          "type": "boolean"
        },
        "last": {
          "type": "boolean"
        },
        "number": {
          "type": "integer",
          "format": "int32"
        },
        "numberOfElements": {
          "type": "integer",
          "format": "int32"
        },
        "pageable": {
          "$ref": "#/definitions/Pageable"
        },
        "size": {
          "type": "integer",
          "format": "int32"
        },
        "sort": {
          "$ref": "#/definitions/Sort"
        },
        "totalElements": {
          "type": "integer",
          "format": "int64"
        },
        "totalPages": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "Page«CommunicationCircle»"
    },
    "ProductIntroduction": {
      "type": "object",
      "properties": {
        "body": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int32"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "updateTime": {
          "$ref": "#/definitions/Timestamp"
        },
        "updateUser": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "ProductIntroduction"
    },
    "Resource": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "file": {
          "$ref": "#/definitions/File"
        },
        "filename": {
          "type": "string"
        },
        "inputStream": {
          "$ref": "#/definitions/InputStream"
        },
        "open": {
          "type": "boolean"
        },
        "readable": {
          "type": "boolean"
        },
        "uri": {
          "$ref": "#/definitions/URI"
        },
        "url": {
          "$ref": "#/definitions/URL"
        }
      },
      "title": "Resource"
    },
    "Sort": {
      "type": "object",
      "properties": {
        "empty": {
          "type": "boolean"
        },
        "sorted": {
          "type": "boolean"
        },
        "unsorted": {
          "type": "boolean"
        }
      },
      "title": "Sort"
    },
    "Timestamp": {
      "type": "object",
      "properties": {
        "date": {
          "type": "integer",
          "format": "int32"
        },
        "day": {
          "type": "integer",
          "format": "int32"
        },
        "hours": {
          "type": "integer",
          "format": "int32"
        },
        "minutes": {
          "type": "integer",
          "format": "int32"
        },
        "month": {
          "type": "integer",
          "format": "int32"
        },
        "nanos": {
          "type": "integer",
          "format": "int32"
        },
        "seconds": {
          "type": "integer",
          "format": "int32"
        },
        "time": {
          "type": "integer",
          "format": "int64"
        },
        "timezoneOffset": {
          "type": "integer",
          "format": "int32"
        },
        "year": {
          "type": "integer",
          "format": "int32"
        }
      },
      "title": "Timestamp"
    },
    "URI": {
      "type": "object",
      "properties": {
        "absolute": {
          "type": "boolean"
        },
        "authority": {
          "type": "string"
        },
        "fragment": {
          "type": "string"
        },
        "host": {
          "type": "string"
        },
        "opaque": {
          "type": "boolean"
        },
        "path": {
          "type": "string"
        },
        "port": {
          "type": "integer",
          "format": "int32"
        },
        "query": {
          "type": "string"
        },
        "rawAuthority": {
          "type": "string"
        },
        "rawFragment": {
          "type": "string"
        },
        "rawPath": {
          "type": "string"
        },
        "rawQuery": {
          "type": "string"
        },
        "rawSchemeSpecificPart": {
          "type": "string"
        },
        "rawUserInfo": {
          "type": "string"
        },
        "scheme": {
          "type": "string"
        },
        "schemeSpecificPart": {
          "type": "string"
        },
        "userInfo": {
          "type": "string"
        }
      },
      "title": "URI"
    },
    "URL": {
      "type": "object",
      "properties": {
        "authority": {
          "type": "string"
        },
        "content": {
          "type": "object"
        },
        "defaultPort": {
          "type": "integer",
          "format": "int32"
        },
        "deserializedFields": {
          "$ref": "#/definitions/URLStreamHandler"
        },
        "file": {
          "type": "string"
        },
        "host": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "port": {
          "type": "integer",
          "format": "int32"
        },
        "protocol": {
          "type": "string"
        },
        "query": {
          "type": "string"
        },
        "ref": {
          "type": "string"
        },
        "serializedHashCode": {
          "type": "integer",
          "format": "int32"
        },
        "userInfo": {
          "type": "string"
        }
      },
      "title": "URL"
    },
    "URLStreamHandler": {
      "type": "object",
      "title": "URLStreamHandler"
    }
  }
}
module.exports = {
  modules: [
  //   {
  //   name: 'coframe',
  //   swaggerUrl: 'http://39.105.213.176/v2/api-docs',
  // },
    {
      name: 'pipe',
      // swaggerUrl: 'http://192.168.200.155:8080/v2/api-docs',
      swaggerUrl: json
    },
  ]
}
