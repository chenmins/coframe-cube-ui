<template>
  <div id="addSchedule">
    <NavLayOut bgc-color="#fff">

      <header>
        <div>
          <h1>想添加点什么</h1>
          <div style="font-size: 12px;color: #ccc">添加日程可以提高工作效率哦</div>
        </div>
        <img src="../../assets/icons/addSchedule.webp" alt="">
      </header>

      <Card :shadow="true">
        <cube-form
            :model="model"
            :options="{
              layout: 'classic' // classic fresh
            }"
            @validate="validateHandler"
            @submit="submitHandler">
          <cube-form-group>
            <cube-form-item :field="fields[0]"></cube-form-item>
            <cube-form-item class="time-from no-margin-bottom">
              <div class="picker" @click="showDateTimePickerStart">{{ model.start || fields[1].label }}
                <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
              </div>
            </cube-form-item>
            <cube-form-item class="time-from">
              <div class="picker" @click="showDateTimePickerEnd">{{ model.end || fields[2].label }}
                <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
              </div>
            </cube-form-item>
            <cube-form-item :field="fields[3]">
            </cube-form-item>
            <cube-form-item :field="fields[4]"></cube-form-item>
            <cube-form-item :field="fields[5]"></cube-form-item>
            <cube-form-item :field="fields[6]"></cube-form-item>
          </cube-form-group>
          <cube-form-group>
            <cube-button type="submit">保存</cube-button>
          </cube-form-group>
        </cube-form>

      </Card>

    </NavLayOut>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";

export default {
  components: {Card},
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        theme: '',
        start: '',
        end: '',
        join: '',
        where: '',
        notice: '',
        repeat:''

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
          label: '开始时间',
          rules: {
            required: true
          }
        },
        {
          modelKey: 'end',
          label: '结束时间',
          rules: {
            required: true
          }
        },
        {
          type: 'select',
          modelKey: 'join',
          label: '参与人',
          title: '选择',
          props: {
            options: ['无提醒', '日程发生时', '5分钟前', '15分钟前', '30分钟前', '1小时前']
          },
          rules: {
            required: true
          }
        },
        {
          type: 'select',
          modelKey: 'where',
          label: '会议人',
          title: '选择',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
          rules: {
            required: true
          }
        },
        {
          type: 'select',
          modelKey: 'notice',
          label: '提醒',
          title: '选择',
          props: {
            options: ['无提醒', '日程发生时', '5分钟前', '15分钟前', '30分钟前', '1小时前']
          },
          rules: {
            required: true
          }
        },
        {
          type: 'select',
          modelKey: 'repeat',
          label: '重复',
          title: '选择',
          props: {
            options: ['不重复','每天', '工作日', '每周', '每两周', '每年','自定义']
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
    submitHandler(e, model, modelSubmit) {
      e.preventDefault()
      console.log('submit', modelSubmit)
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
        onSelect: (item, index) => {
          this.model.noticeTime = item.content
        }
      }).show()
    }
  },
}
</script>

<style scoped lang="stylus">
#addSchedule
  background-color #ffffff

  header
    display flex
    justify-content: space-around;
    align-items center
    text-align left
    margin-bottom: 30px;

    h1
      font-size 18px
      font-weight 500
      position: relative;
      display inline-block
      margin-bottom 13px

      &:after
        content ''
        position absolute
        bottom 0
        left 0
        display inline-block
        width 100%
        height: 5px;
        background: #0099FF;
        border-radius: 3px;
        opacity: 0.22;


  >>>.cube-form-label span
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 20px;
  >>>.cube-form-item
    margin-bottom 20px
.cube-btn
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  width 80%
  margin 0 auto
  padding 10px 5px

>>> .cube-form-label
  font-size 12px

>>> .cube-form-item
  padding 0

.picker
  background: rgb(241,249,255);
  padding 13px 0 13px 13px
  color #000
  height 100%
  font-weight 500
.no-margin-bottom
  margin-bottom 0!important
</style>