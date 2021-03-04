import {HelpControllerImpl} from '@controller'
import filesUpload from "@/libs/mixins/filesUpload";

let formData, files
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
            files: []
        }
    },
    mixins: [filesUpload],
    watch: {
        formData: {
            deep: true,
            handler: (e1, e2) => {
                formData = e1
            }
        },
        files: {
            handler: function (v1, v2) {
                files = v1
                this.files = v1
            }
        }
    },
    methods: {
        async addDemandFeedback(data) {
            let message = '发送中'
            let toast = this.$createToast({
                txt: message,

            }).show()
            let uploadTime = files.length
            let url,resp
            for (let i = 0; i < uploadTime; i++) {
                url = await this.getRetrieveNewURL(files[i].file)
                this.formData.picture = this.formData.picture + url.split("?")[0] + ",";
            }
            resp = await this.dispatch(HelpControllerImpl.addDemandFeedback, {
                body: formData.textarea,
                picture: formData.picture
            })
            if (!resp.error) {
                if (resp.data.body === 1) {
                    message = '发送成功'
                    formData = {
                        textarea: '',
                        picture: ''
                    }
                    this.formData = {
                        textarea: '',
                        picture: ''
                    }
                    this.$router.replace({name: '需求反馈'}).then(() => {
                        toast.hide()
                    })

                }
            }
        },
        async initQuestions() {
            let resp
            resp = await this.dispatch(HelpControllerImpl.queryByTitle)
            if (!resp.error) {
                this.questionData = resp.data.body;
            }
        },
        async initProduct() {
            let resp
            resp = await this.dispatch(HelpControllerImpl.queryProductIntroduction)
            console.log(resp);
            if (!resp.error) {
                this.productData = resp.data.body;
            }
        },
        async initFeedback() {
            let resp
            resp = await this.dispatch(HelpControllerImpl.queryDemandFeedback)
            if (!resp.error) {
                this.feedback = resp.data.body;
            }
        },
    }
}