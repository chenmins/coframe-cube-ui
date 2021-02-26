let formData
export default {
    data() {
        return {
            tabs: [
                {
                    label: '常见问题',
                    value: 'question',
                    icon: 'helpcenter-question',

                }, {
                    label: '产品介绍',
                    value: 'productInc',
                    icon: 'helpcenter-inc'

                }, {
                    label: '需求反馈',
                    value: 'feedback',
                    icon: 'helpcenter-edit'

                }],
            questionData: [],
            productData: [],
            feedback: [],
            formData: {
                textarea: '',
                picture: ''
            },
        }
    },
    watch: {
        formData: {
            deep: true,
            handler: (e1, e2) => {
                formData = e1
            }
        }
    },
    methods: {
        submit(data) {
            this.$axios.post(`/api/platform/help/addDemandFeedback`, formData).then(res => {
                console.log(res)
                this.formData = {
                    textarea: '',
                    picture: ''
                }
            })
        },
        initQuestions() {
            this.$axios.get('/api/platform/help/commonProblem/queryByTitle').then(res => {
                this.questionData = res.data.body
            })
        },
        initProduct() {
            this.$axios.get('/api/platform/help/queryProductIntroduction').then(res => {
                this.productData = res.data.body
            })
        },
        initFeedback() {
            this.$axios.get('/api/platform/help/queryDemandFeedback').then(res => {
                this.feedback = res.data.body
            })
        },
    }
}