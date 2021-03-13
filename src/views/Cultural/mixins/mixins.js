import { CulturalControllerImpl, DictApiController } from '@controller'
import {mapMutations, mapState} from "vuex";


export default {
    created() {
        this.selectedLabel = this.tabs.findIndex(i=>i.label === localStorage.getItem('label')) !==-1?localStorage.getItem('label'):'全部'
        this.setStateVar({
            key: 'type',
            value:this.initLabel(this.LABEL_MAP,)
        })
    },
    methods: {
        ...mapMutations('Cultural',['setStateVar']),
        changeHandle(e){
            localStorage.setItem('label',e)
            this.setStateVar({
                key: 'type',
                value:this.initLabel(this.LABEL_MAP,e)
            })
            // this.setStateVar({
            //     key:'type',
            //     value:this.LABEL_MAP[e]
            // })

        },
        async getTopicLists() {
            let resp
            resp = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, { code: 'pip-ccocci-topic' })
            return resp
        },
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
        },        //  点赞
        initLabel(LABEL_MAP,e){
            if(LABEL_MAP[localStorage.getItem('label')]){
                return LABEL_MAP[localStorage.getItem('label')]
            }else {
                return LABEL_MAP['全部']
            }
        },
    },
    computed: {
        listData(){
            return this.$store.getters["Cultural/filterData"]
        },
        ...mapState('Cultural',['type'])
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