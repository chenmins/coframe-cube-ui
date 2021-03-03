import {HealthApiController} from '@controller'


export default {
    data() {
        return {
            city: {
                id: 0,
                name: ''
            },
            model: {
                value1: [],
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
            },
        }
    },
    created() {
        this.getHealthInfo()
    },
    methods: {
        async getHealthInfo() {
            let resp = await this.dispatch(HealthApiController.getHealthInfo)
            if (!resp.error) {
                this.city.name = resp.data.body.cityName
                this.model = {
                    value1: [`${resp.data.body.cityName}`] || [],
                    value2: resp.data.body.answerTwo || '',
                    value3: resp.data.body.answerThree || '',
                    value4: resp.data.body.answerFour || '',
                    value5: resp.data.body.answerFive || '',
                    value6: resp.data.body.answerSix || '',
                    value7: resp.data.body.remarks || '',
                }
            }
        },
    }
}