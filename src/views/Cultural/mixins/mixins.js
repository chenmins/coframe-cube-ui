import { CulturalControllerImpl, DictApiController } from '@controller'

export default {
    data() {
        return {

            //公告列表
            notices: [],

            //新闻列表
            news: [],

            //交流圈
            comments: [],
            topicLists: [],
            topics: [],
            like: false,
            cardInfo: JSON.parse(localStorage.getItem('userInfo')) || { id: null },
        }
    },

    methods: {
        async getTopicLists() {
            let resp
            resp = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, { code: 'pip-ccocci-topic' })
            return resp
        },
        //初始化文化建设全部数据
        async initAllData() {
            let resp
            resp = await this.dispatch(CulturalControllerImpl.allPageSreach, {
                pageNo: 1,
                pageSize: 20
            })
            let topicLists = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, { code: 'pip-ccocci-topic' })
            if (!resp.error && !topicLists.error) {
                this.$store.commit('Cultural/setTopicLists', topicLists.data)
                this.$store.commit('Cultural/setAllData', resp.data.body)
            }
        },
        //  点赞
        async toggleLike(e) {
            let resp = await this.dispatch(CulturalControllerImpl.fabulousCommunicationCircle, { id: e.id })
            if (!resp.error) {
                if (e.fabulousForUser) {
                    e.fabulousPlusCount -= 1
                } else {
                    e.fabulousPlusCount += 1
                }
                this.like = !this.like
            }
        },
        changeHandle(e) {
            switch (e) {
                case '公告列表':
                    this.selectedLabel = e
                    this.$router.push({ name: `${e}` })
                    break
                case '企业新闻':
                    this.selectedLabel = e
                    this.$router.push({ name: `${e}` })
                    break
                case '交流圈':
                    this.selectedLabel = e
                    this.$router.push({ name: `${e}` })
                    break
            }
            if (this.$route.name === '公告列表') {
                switch (e) {
                    case '全部':
                        this.notices = this.$store.state.Cultural.allData.notices.reverse()
                        break
                    case '系统公告':
                        this.notices = this.$store.state.Cultural.allData.notices1.reverse()
                        break
                    case '餐厅公告':
                        this.notices = this.$store.state.Cultural.allData.notices2.reverse()
                        break
                    case '物业公告':
                        this.notices = this.$store.state.Cultural.allData.notices3.reverse()
                        break
                }
            }
            if (this.$route.name === '企业新闻') {
                switch (e) {
                    case '全部':
                        this.news = this.$store.state.Cultural.allData.journalisms.reverse()
                        break
                    case '热点精选':
                        this.news = this.$store.state.Cultural.allData.journalisms1.reverse()
                        break
                    case '时事要闻':
                        this.news = this.$store.state.Cultural.allData.journalisms2.reverse()
                        break
                }
            }
            if (this.$route.name === '交流圈') {
                switch (e) {
                    case '全部':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles?.reverse()
                        break
                    case '热门':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles1?.reverse()
                        break
                    case '精选':
                        this.comments = this.$store.state.Cultural.allData.communicationCircles2?.reverse()
                        break
                }
            }
        },
    },
    filters: {
        //时间倒序
        reverseData: function (data) {
            return data.reverse()
        },
        //点赞数超过1w小数
        fabulousCount: function (value) {
            if (value > 10000) {
                return value / 10000 + 'w'
            }
            return value
        }
    },
}