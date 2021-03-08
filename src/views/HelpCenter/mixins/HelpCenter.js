import { HelpControllerImpl } from '@controller'
import filesUpload from "@/libs/mixins/filesUpload";

let formData, files = []
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
        // async uploadAsync(uploadTime, files) {
        //     let picture = ''
        //     for (let i = 0; i < uploadTime; i++) {
        //         let url
        //         url = await this.getRetrieveNewURL(files[i].file)
        //         await this.imageUpload(url, files[i].file)
        //         console.log(url.split("?")[0].split('/'))
        //         let changedUrl = url.split("?")[0].split('/')
        //         changedUrl[2] = this.$config.pictureUrl
        //         picture = picture + changedUrl.join('/') + "_480x480,";
        //         //tx.chenmin.org:9000/jiaoliuquan/8e3f7d5b-5c82-4aec-bae6-af1fedf67013/1615167859925.jpg
        //     }
        //     return picture
        // },
        async addDemandFeedback(data) {
            let message = '发送中'
            let toast = this.$createToast({
                txt: message,
                time: 0
            }).show()
            let uploadTime = files.length, resp
            try {
                formData.picture = await this.uploadAsync(uploadTime, files)
                resp = await this.dispatch(HelpControllerImpl.addDemandFeedback, {
                    body: formData.textarea,
                    picture: formData.picture
                })
            } catch (e) {
                toast.hide()
                message = '反馈失败'
                this.$createToast({
                    type: 'normal',
                    txt: message,
                    time: 1000
                }).show()
            }
            if (!resp.error && resp.data.body === 1) {
                message = '发送成功'
                formData = {
                    textarea: '',
                    picture: ''
                }
                this.formData = {
                    textarea: '',
                    picture: ''
                }
                await this.$router.replace({ name: '需求反馈' })
                toast.hide()
            } else {
                toast.hide()
                message = '反馈失败'
                this.$createToast({
                    txt: message,
                    time: 500
                }).show()

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