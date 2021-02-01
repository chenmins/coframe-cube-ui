<template>
  <cube-form
      :model="model"
  >

    <cube-form-item :field="schema.fields[0]"></cube-form-item>
    <cube-form-item :field="schema.fields[1]">
      <div @click="startTime1Picker">{{ model.startTime1 || schema.fields[1].label }}</div>
    </cube-form-item>
    <cube-form-item :field="schema.fields[2]">
      <div @click="startTime2Picker">{{ model.startTime2 || schema.fields[2].label }}</div>
    </cube-form-item>
    <cube-form-item :field="schema.fields[3]">
      <div @click="showDateSegmentPicker">{{ schema.fields[3].label }}</div>
    </cube-form-item>
    <cube-form-item :field="schema.fields[4]"></cube-form-item>
    <cube-form-item :field="schema.fields[5]"></cube-form-item>

  </cube-form>
</template>

<script>
const dateSegmentData = [
  {
    is: 'cube-date-picker',
    title: '入学时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: 'cube-date-picker',
    title: '毕业时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
]
export default {
  name: "ReleaseEdit",
  data() {
    return {
      model: {
        name: '',
        startTime1: '',
        startTime2: '',
        period: '',
        restNum: 0,
        bit: ''
      },
      schema: {
        fields: [
          {
            type: 'select',
            modelKey: 'name',
            label: '餐厅名称',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'select',
            modelKey: 'startTime1',
            label: '开始日期',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'select',
            modelKey: 'startTime2',
            label: '开始日期',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'select',
            modelKey: 'selectValue',
            label: 'Select',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: 'restNum',
            label: '餐厅数量',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: 'blur'
          }, {
            type: 'submit',
            label: '提交'
          }
        ]
      }
    }
  },
  mounted() {
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Items: <br/> - 入学时间: ${selectedTexts[0].join('')} <br/> - 毕业时间: ${selectedTexts[1].join('')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    })
  },
  methods: {
    showDateSegmentPicker() {
      this.dateSegmentPicker.show()
    },
    startTime1Picker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.setStart1,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
    startTime2Picker() {
      if (!this.datePicker1) {
        this.datePicker1 = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.setStart2,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker1.show()
    },
    setStart1(date, selectedVal, selectedText) {
      this.model.startTime1 = `${selectedVal[0]}-${selectedVal[1]}-${selectedVal[2]}`
    },
    setStart2(date, selectedVal, selectedText) {
      this.model.startTime2 = `${selectedVal[0]}-${selectedVal[1]}-${selectedVal[2]}`
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>

<style scoped>

</style>