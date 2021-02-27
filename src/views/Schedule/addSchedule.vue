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

      <Card :shadow="true" style="padding:0">
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
              <div class="picker" @click="showDateTimePickerStart">
                <div class="cube-form-label">{{fields[1].label}}</div>
                <span class="line">{{ model.start || fields[1].label }}</span>
                <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
              </div>
            </cube-form-item>
            <cube-form-item class="time-from">
              <div class="picker" @click="showDateTimePickerEnd">
                <div class="cube-form-label">{{fields[2].label}}</div>
                <span class="top_line">{{ model.end || fields[2].label }}</span>
                <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
              </div>
            </cube-form-item>

            <cube-form-item :field="fields[3]"></cube-form-item>
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
          type: 'select',
          modelKey: 'start',
          label: '开始时间',
          rules: {
            required: true
          }
        },
        {
          type: 'select',
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
          events:{
            input:(e)=>{
              console.log(new Date(),this.$dayjs())
              if(e==='自定义'){
                if (!this.formatPicker) {
                  this.formatPicker = this.$createDatePicker({
                    title: '选择自定义时间',
                    min: new Date(),
                    max: new Date(2022, 1, 1),
                    value: new Date(),
                    format: {
                      year: 'YYYY年',
                      month: 'MM月',
                      date: '第 D 日'
                    },
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                  })
                }
                this.formatPicker.show()
              }
            }
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
>>>.cube-form-item
  margin 10px
.time-from
  margin 0
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
  margin 0 auto 10px
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
  .line:before
    content ''
    position absolute
    background-color rgba(#0099FF, .2)
    height 100px
    width 1px
    left 16px
    top 20px
  .top_line:before
    content ''
    position absolute
    background-color rgba(#0099FF, .2)
    height 20px
    width 1px
    left 16px
    top 0
  .cube-form-label
    font-size 14px
    &:before
      content ''
      margin-right 7px
      display inline-block
      height 7px
      width 7px
      border-radius 50%
      background-color #0099FF
  span
    margin-left 10px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #CCCCCC;
    line-height: 20px;
    letter-spacing: 1px;
.no-margin-bottom
  margin-bottom 0!important
</style>