import {VueUtil} from '@/libs'
// import {Demo} from "@/actions/pipe/Demo";

export default {
    data() {
        return {
            firstLoading: true,
            userInfo: JSON.parse(localStorage.getItem('userInfo')),
            isAdmin: JSON.parse(localStorage.getItem('admin')) || false
        }
    },
    methods: {
        async dispatch(action, data, fn) {
            return await VueUtil(this).dispatchAsync(action, data, fn || null)
        },
        mounted() {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
            this.isAdmin = JSON.parse(localStorage.getItem('admin'))
        }
        // changeHandle(newV) {
        //     if (newV === '全部' && this.$route.fullPath.includes('/Cultural/News/')) {
        //         this.$router.push({name: `企业新闻`})
        //         return
        //     }
        //     this.$router.push({name: `${newV}`})
        // },
    },


}
