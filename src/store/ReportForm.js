

import { HealthApiController } from '@controller';
import Vue from 'vue'
import { Toast } from 'cube-ui'
import router from "@/router";


const ReportForm = {
  namespaced: true,
  state: {
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
  },
  mutations: {
    setStateVar(state, payload) {
      state[payload.key] = payload.value
    },
  },
  actions: {
    async getHealthFormInfo(context, payload) {
      let resp
      resp = await payload.dispatch(HealthApiController.getHealthInfo)
      if (!resp.error) {
        context.commit('setStateVar', {
          key: 'city',
          value: {
            id: resp.data.body.cityId,
            name: resp.data.body.cityName
          }
        })
        context.commit('setStateVar', {
          key: 'model',
          value: {
            value1: [`${resp.data.body.cityName}`] || [],
            value2: resp.data.body.answerTwo || '',
            value3: resp.data.body.answerThree || '',
            value4: resp.data.body.answerFour || '',
            value5: resp.data.body.answerFive || '',
            value6: resp.data.body.answerSix || '',
            value7: resp.data.body.remarks || '',
          }
        })

      }

    },

    async updateForm(context, payload) {
      let e = payload.e, _this = context.state, resp
      e.preventDefault();
      let model = _this.model
      let city = _this.city
      resp = await payload.dispatch(HealthApiController.updateHealthInfo, {
        answerFive: model.value5,
        answerFour: model.value4,
        answerSix: model.value6,
        answerThree: model.value3,
        answerTwo: model.value2,
        cityId: city.id,
        cityName: city.name,
        remarks: model.value7,
      })
      if (!resp.error) {
        Toast.$create({
          txt: "信息更新成功",
          type: "success",
          time: 1000,
          onTimeout: () => {
            router.push("/");
          },
        }).show();
      } else {
        console.log("error");
      }
    }
  }
}

export default ReportForm