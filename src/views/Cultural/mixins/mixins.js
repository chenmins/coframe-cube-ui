import {CulturalControllerImpl, DictApiController} from '@controller'

export default {
    data() {
        return {

            //公告列表
            notices: [],

            //新闻列表
            news: [],

            //交流圈
            comments: [],
            topics: [],
            like: false,
            cardInfo: JSON.parse(localStorage.getItem('userInfo')) || {id:null},

        }
    },
    methods: {
        //设置前6条话题
        async setTopicLists() {
            let resp
            resp = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, {code: 'pip-ccocci-topic'})
            if (!resp.error) {
                this.$store.commit('Cultural/setTopicLists', resp.data)
                this.topics = this.$store.state.Cultural.topicLists.splice(0, 6)
            }
        },
        //初始化文化建设全部数据
        async initAllData() {
            let resp
            resp = await this.dispatch(CulturalControllerImpl.allPageSreach, {
                pageNo: 1,
                pageSize: 20
            })
            if (!resp.error) {
                this.$store.commit('Cultural/setAllData', resp.data.body)
            }
        },
        //  点赞
        async toggleLike(e) {
            let resp = await this.dispatch(CulturalControllerImpl.fabulousCommunicationCircle, {id: e.id})
            if (!resp.error) {
                if (e.fabulousForUser) {
                    e.fabulousPlusCount -= 1
                } else {
                    e.fabulousPlusCount += 1
                }
                this.like = !this.like
            }
        },


        goComment(e) {
            this.$router.push({name: '交流圈-评论详情', params: {id: e.id, isLike: e.fabulousForUser}})
        },
        changeHandle(e) {
            switch (e) {
                case '公告列表':
                    this.selectedLabel = e
                    this.$router.push({name: `${e}`})
                    break
                case '企业新闻':
                    this.selectedLabel = e
                    this.$router.push({name: `${e}`})
                    break
                case '交流圈':
                    this.selectedLabel = e
                    this.$router.push({name: `${e}`})
                    break
            }
            if (this.$route.name === '公告列表') {
                switch (e) {
                    case '全部':
                        this.notices = this.$store.state.Cultural.allData.notices
                        break
                    case '系统公告':
                        this.notices = this.$store.state.Cultural.allData.notices1
                        break
                    case '餐厅公告':
                        this.notices = this.$store.state.Cultural.allData.notices2
                        break
                    case '物业公告':
                        this.notices = this.$store.state.Cultural.allData.notices3
                        break
                }
            }
            if (this.$route.name === '企业新闻') {
                switch (e) {
                    case '全部':
                        this.news = this.$store.state.Cultural.allData.journalisms
                        break
                    case '热点精选':
                        this.news = this.$store.state.Cultural.allData.journalisms1
                        break
                    case '时事要闻':
                        this.news = this.$store.state.Cultural.allData.journalisms2
                        break
                }
            }
            if (this.$route.name === '交流圈') {
                switch (e) {
                    case '全部':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles
                        break
                    case '热门':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles1
                        break
                    case '精选':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles2
                        break
                }
            }
        },
    },

    filters: {
        //点赞数超过1w小数
        fabulousCount: function (value) {
            if (value > 10000) {
                return value / 10000 + 'w'
            }
            return value
        }
    },
}