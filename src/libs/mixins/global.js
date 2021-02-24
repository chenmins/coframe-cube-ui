import {VueUtil} from '@/libs'
// import {Demo} from "@/actions/pipe/Demo";

export default {
    methods: {
        async dispatch(action, data, fn) {
            return await VueUtil(this).dispatchAsync(action, data, fn || null)
        },

        changeHandle(newV) {
            if (newV === '全部' && this.$route.fullPath.includes('/Cultural/News/')) {
                this.$router.push({name: `企业新闻`})
                return
            }
            this.$router.push({name: `${newV}`})
        },
    },


}
