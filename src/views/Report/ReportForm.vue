<template>
  <div id="report-form">
    <NavLayOut bgc-color="#fff">
      <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
        <cube-form-group v-for="(item,index) in question">
          <h1>{{index+1}}、{{ item.legend }}</h1>
          <cube-form-item :field="item.field"></cube-form-item>
        </cube-form-group>
        <cube-form-group >
          <cube-button type="submit">Submit</cube-button>
        </cube-form-group>
      </cube-form>
    </NavLayOut>
  </div>

</template>

<script>
import {provinceList, cityList, areaList} from '@/assets/DATA/area'
import {HealthApiController} from '@controller'
import { BaseVue } from '@lib'

const cityData = provinceList
cityData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})
const PCA = {
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selected: []
    }
  },

  render(createElement) {
    return createElement('div', {
      on: {
        click: this.showPicker
      }
    }, this.selected.length ? this.selected.join(' ') : '请选择工作地区')
  },
  mounted() {
    this.picker = this.$createCascadePicker({
      title: '选择城市',
      data: cityData,
      selectedIndex: this.value,
      onSelect: this.selectHandler
    })
  },
  methods: {
    showPicker() {
      this.picker.show()
    },
    selectHandler(selectedVal, selectedIndex, selectedTxt) {
      this.selected = selectedTxt
      this.$emit('input', selectedVal)
    }
  }
}
export default {
  data() {
    return {
      selected4: '1',
        options4: [
      {
        label: '1',
        value: '1',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
      },
      {
        label: '2',
        value: '2',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
      },
      {
        label: '3',
        value: '3',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',
        disabled: true
      }
  ],
      validity: {},
      valid: undefined,
      model: {
        value1:[],
        value2:'',
        value3:'',
        value4:'',
        value5:'',
        value6:'',
        value7:'',
      },
      fields: [
        {
          type: 'radio-group',
          modelKey: 'radioValue',
          props: {
            options: ['1', '2', '3']
          },
          rules: {
            required: true
          }
        },
        {
          component: PCA,
          modelKey: 'pcaValue',
          label: 'PCASelect',
          rules: {
            required: true
          },
          messages: {
            required: '请选择'
          }
        },
        {
          modelKey: 'dateValue',
          label: 'Date',
          rules: {
            required: true
          }
        }
      ],
      question: [

        {
          legend: '您的工作城市？',
          field: {
            component: PCA,
            modelKey: 'value1',
            props:{
              class:'pca'
            },
            rules: {
              required: true
            },
            messages: {
              required: '请选择'
            }
          }
        },
        {
          legend: '您或同住人是否前往过高危地区？',
          field: {
            type: 'radio-group',
            modelKey: 'value2',
            props: {
              options: ['是', '否'],
              position:'left',
              horizontal:"true",
            },
            rules: {
              required: true
            }
          }
        },
        {
          legend: '您或同住人是否已经接到社区等机构的核算检测通知，或自行预约核算检测？',
          field: {
            type: 'radio-group',
            modelKey: 'value3',
            props: {
              options: ['是', '否'],
              position:'left',
              horizontal:"true"
            },
            rules: {
              required: true
            }
          }
        },
        {
          legend: '您或同住人近14天是否接触过新冠或疑似患者？',
          field: {
            type: 'radio-group',
            modelKey: 'value4',
            props: {
              options: ['是', '否'],
              position:'left',
              horizontal:"true"
            },
            rules: {
              required: true
            }
          }
        },
        {
          legend: '您目前是否有发热、咳嗽、全身乏力等不适症状？',
          field: {
            type: 'radio-group',
            modelKey: 'value5',
            props: {
              options: ['是', '否'],
              position:'left',
              horizontal:"true"
            },
            rules: {
              required: true
            }
          }
        },
        {
          legend: '您今天的体温是多少度？',
          field: {
            type: 'input',
            modelKey: 'value6',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true,
              type:'number'
            }
          }
        },
        {
          legend: '其他备注？',
          field: {
            type: 'textarea',
            modelKey: 'value7',
            debounce: 100
          }
        },
      ]

    }
  },
  created() {
    this.getHealthInfo()
  },
  mixins: [BaseVue],

  methods: {
    async getHealthInfo(){
      let resp = await this.dispatch(HealthApiController.getHealthInfo)
      console.log(resp)
    },
    async submitHandler(e,model) {
      e.preventDefault()
      let template = model.value6+'°C'
      console.log(e,model)

      let resp = await this.dispatch(HealthApiController.updateHealthInfo,{
        "answerFive": model.value5,
        "answerFour": model.value4,
        "answerSix": model.value6,
        "answerThree": model.value3,
        "answerTwo": model.value2,
        "cityId": 20841,
        "cityName": "九明生才",
        "extendFive": "数无些约方",
        "extendFour": "转节北价今华",
        "extendOne": model.value7,
        "extendThree": "动两该图争转次",
        "extendTwo": "任公问公",
        "remarks": "年约片把果",
      })
      if(!resp.error){
        console.log(resp)
      }else{
        console.log('error')
      }
s
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
    },
    showDatePicker() {
      this.$refs.datePicker.show()
    },
    dateSelectHandler(selectedVal) {
      this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()
    }
  },

}
</script>

<style lang="stylus"  scoped>


>>>.cube-radio
  max-width: 50px
>>>.cube-radio-ui i::before
  display none
>>>.cube-radio_selected .cube-radio-ui
  background-color transparent
  background-image url("../../assets/icons/selected.png")
  background-size 100%

>>>.cube-radio-label
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  letter-spacing: 1px;
>>>.cube-radio::after
  border none
>>>.pca
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #CCCCCC;
  line-height: 20px;
  letter-spacing: 1px;
  display flex
  justify-content: space-between;
  &:after
    content '>'
    display inline-block
.form-custom
  .cube-form-item
    .cube-btn
      padding-left: 0
      padding-right: 0
      text-align: left
      color: inherit
      background: none
      border: none

.cube-form-group
  background-color: #fff;
  padding 0 10px
  border-bottom 1px solid rgba(#000000,.1)
  h1
    margin 10px 10px 0
    text-align left
.cube-form
  background-color $my-bgc-color
>>>.cube-btn
  margin-top 18px
  height: 40px;
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  line-height 0
  font-size: 14px

>>>.cube-radio_selected .cube-radio-ui
  background-color $custom-active-color
>>>.cube-validator-content
  font-size 18px
>>>.cube-form-group-content
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;
</style>
