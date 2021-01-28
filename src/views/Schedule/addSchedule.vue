<template>
  <div id="addSchedule">

    <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item>
          <div class="picker"  @click="showDateTimePickerStart">{{model.start||fields[1].label}}</div>
        </cube-form-item>
        <cube-form-item>
          <div class="picker" @click="showDateTimePickerEnd">{{model.end||fields[2].label}}</div>
        </cube-form-item>
        <cube-form-item :field="fields[3]"></cube-form-item>
        <cube-form-item :field="fields[4]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-form-item>
          <div class="picker" @click="showPickerStyle(items.notice)">{{model.noticeTime || '选择提醒时间'}}</div>
        </cube-form-item>
        <cube-form-item>
        </cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button  type="submit">保存</cube-button>
      </cube-form-group>
    </cube-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        theme:'',
        start:'',
        end:'',
        join:'',
        where:'',
        noticeTime:''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'theme',
          label: '日程主题',
          props: {
            placeholder: '请输入日程、会议、活动主题'
          },
          rules: {
            required: true
          }
        },
        {
          modelKey: 'start',
          label: '开始',
          rules: {
            required: true
          }
        },
        {
          modelKey: 'end',
          label: '结束',
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'join',
          label: '参与人',
          props: {
            placeholder: '请输入'
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'where',
          label: 'Input',
          props: {
            placeholder: '会议室'
          },
          rules: {
            required: true
          }
        },
      ],
      items: {
        notice: [
          {
            content: '无提醒'
          },
          {
            content: '日程发生时'
          },
          {
            content: '5分钟前'
          },
          {
            content: '15分钟前'
          },
          {
            content: '30分钟前'
          },
          {
            content: '1小时前'
          }
        ],
        repeat: [
          {
            content: '不重复'
          },
          {
            content: '每天'
          },
          {
            content: '工作日'
          },
          {
            content: '每周'
          },
          {
            content: '每两周'
          },
          {
            content: '每月'
          },
          {
            content: '每年'
          },
          {
            content: '自定义'
          }
        ]
      },

    }
  },
  methods: {
    submitHandler(e,model,modelSubmit) {
      e.preventDefault()
      console.log('submit',modelSubmit)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    showDateTimePickerStart() {
      if (!this.dateTimePickerStart) {
        this.dateTimePickerStart = this.$createDatePicker({
          title: '选择开始时间',
          min: new Date(2008, 7, 8, 8, 0, 0),
          max: new Date(2020, 9, 20, 20, 59, 59),
          value: new Date(),
          columnCount: 6,
          onSelect: this.startTime,
          onCancel: this.cancelHandle
        })
      }

      this.dateTimePickerStart.show()
    },
    showDateTimePickerEnd() {
      if (!this.dateTimePickerEnd) {
        this.dateTimePickerEnd = this.$createDatePicker({
          title: '选择结束时间',
          min: new Date(2008, 7, 8, 8, 0, 0),
          max: new Date(2020, 9, 20, 20, 59, 59),
          value: new Date(),
          columnCount: 6,
          onSelect: this.endTime,
          onCancel: this.cancelHandle
        })
      }

      this.dateTimePickerEnd.show()
    },
    startTime(date, selectedVal, selectedText) {
      this.model.start = `${selectedVal[1]}-${selectedVal[2]}-${selectedVal[3]}:${selectedVal[4]}`
    },
    endTime(date, selectedVal, selectedText) {
      this.model.end = `${selectedVal[1]}-${selectedVal[2]}-${selectedVal[3]}:${selectedVal[4]}`
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'canceled',
        time: 1000
      }).show()
    },
    dateSelectHandler(selectedVal) {
      this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()
    },
    showPickerStyle(data) {
      this.$createActionSheet({
        title: '选择提醒时间',
        pickerStyle: true,
        data: data,
        onSelect:(item,index)=>{
          this.model.noticeTime = item.content
        }
      }).show()
    }
  },
}
</script>

<style scoped lang="stylus">

.cube-btn
  background-color $custom-active-color
  width 80%
  margin 0 auto
  border-radius 30px
  padding 10px 5px

>>>.cube-form-label
  font-size 12px
>>>.cube-form-item
  padding 0
.picker
  background-color $my-bgc-color
  height 100%
  padding 13px 0
  font-weight 500
</style>