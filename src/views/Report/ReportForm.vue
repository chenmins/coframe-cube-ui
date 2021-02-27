<template>
  <div id="report-form">
    <NavLayOut bgc-color="#fff">
      <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
        <cube-form-group v-for="(item,index) in question">
          <h1>{{ index + 1 }}、{{ item.legend }}</h1>
          <cube-form-item :field="item.field"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">信息更新</cube-button>
        </cube-form-group>
      </cube-form>
    </NavLayOut>
  </div>

</template>

<script>
import {provinceList, cityList, areaList} from '@/assets/DATA/area'
import {HealthApiController} from '@controller'
import {BaseVue} from '@lib'

let city = {
  id: 0,
  name: ''
}

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
      selected: [],

    }
  },
  render(createElement) {
    return createElement('div', {
      on: {
        click: this.showPicker
      }
    },this.selected.length ? this.selected.join(' '):city.name ? city.name :'请选择工作地区')
    // city.name ? city.name : this.selected.length ? this.selected.join(' ') : '请选择工作地区')
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
      city.id = parseInt(selectedVal[2])
      city.name = selectedTxt[0] +" "+ selectedTxt[1] +" "+ selectedTxt[2]
      this.selected = selectedTxt
      this.$emit('input', selectedVal)
    }
  }
}
export default {
  data() {
    return {
      city: {
        id: 0,
        name: ''
      },
      selected4: '1',
      validity: {},
      valid: undefined,
      model: {
        value1: [],
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
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
            props: {
              class: 'pca'
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
              position: 'left',
              horizontal: "true",
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
              'v-model': '是',
              options: ['是', '否'],
              position: 'left',
              horizontal: "true"
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
              position: 'left',
              horizontal: "true"
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
              position: 'left',
              horizontal: "true"
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
              type: 'number'
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
    async getHealthInfo() {
      let resp = await this.dispatch(HealthApiController.getHealthInfo)
      if (!resp.error) {
        city.name = resp.data.body.cityName
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
    async submitHandler(e, model) {
      e.preventDefault()
      let template = model.value6 + '°C'

      let resp = await this.dispatch(HealthApiController.updateHealthInfo, {
        "answerFive": model.value5,
        "answerFour": model.value4,
        "answerSix": model.value6,
        "answerThree": model.value3,
        "answerTwo": model.value2,
        "cityId": city.id,
        "cityName": city.name,
        "remarks": model.value7,
      })
      if (!resp.error) {
        this.$createToast({
          txt: '信息更新成功',
          type: 'success',
          time:1000,
          onTimeout:()=>{
            this.$router.push('/')
          }
        }).show()
      } else {
        console.log('error')
      }
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

<style lang="stylus" scoped>
#report-form
  background #fff

>>> .cube-radio
  max-width: 50px

>>> .cube-radio-ui i::before
  display none

>>> .cube-radio_selected .cube-radio-ui
  background-color transparent
  background-image url("../../assets/icons/selected.png")
  background-size 100%

>>> .cube-radio-label
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  letter-spacing: 1px;

>>> .cube-radio::after
  border none

>>> .pca
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #CCCCCC;
  position relative
  line-height: 20px;
  letter-spacing: 1px;
  display flex
  justify-content: space-between;
  &:after
    content ''
    position absolute
    right 0
    top 0
    z-index 30
    width 20px
    height 100%
    background-image url("../../assets/icons/employee-select.webp")
    background-repeat no-repeat
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
  border-bottom 1px solid rgba(#000000, .1)

  h1
    margin 10px 10px 0
    text-align left

.cube-form
  background-color $my-bgc-color

>>> .cube-btn
  margin-top 18px
  height: 40px;
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  line-height 0
  font-size: 14px

>>> .cube-radio_selected .cube-radio-ui
  background-color $custom-active-color

>>> .cube-validator-content
  font-size 18px

>>> .cube-form-group-content
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;
</style>
