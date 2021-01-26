<template>
  <div id="report-form">
    <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
      <cube-form-group v-for="(item,index) in question">
        <h1>{{index+1}}、{{ item.legend }}</h1>
        <cube-form-item :field="item.field"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">Submit</cube-button>
      </cube-form-group>
    </cube-form>
  </div>

</template>

<script>
import {provinceList, cityList, areaList} from '@/assets/DATA/area'

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
    }, this.selected.length ? this.selected.join(' ') : '点击选择城市')
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
              position:'right'
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
              position:'right'
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
              position:'right'
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
              position:'right'
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
  methods: {
    submitHandler(e,model) {
      e.preventDefault()
      model.value6 = model.value6+'°C'
      console.log(model)

    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
  margin 10px 0
  background-color: #fff;
  padding 0 10px
  h1
    margin 10px 10px 0
    text-align left
.cube-form
  background-color $my-bgc-color
>>>.cube-btn
  bottom 60px
  background-color $custom-active-color
  border-radius 10px
</style>
