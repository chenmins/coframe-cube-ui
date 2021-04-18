<template>
  <div id="page">
    <TitleNav bgc-color="#fff">
      <!--      <TimePart>-->
      <cube-form :model="model"
                 :options="{layout:'classic'}"
                 class="form-control"
                 @validate="validateHandler"
      >
        <!--        @submit="submitHandler"-->
        <!--        @validate="validateHandler"-->
        <cube-form-item :field="schema.groups.fields[0]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectType">{{ model.type || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[1]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectStartTime">{{ model.startTime || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[2]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectEndTime">{{ model.endTime || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <!--        <cube-form-item :field="schema.groups.fields[3]">-->
        <!--          <cube-input class="time-show"></cube-input>-->
        <!--        </cube-form-item>-->
      </cube-form>
      <section class="time_part" v-for="(item,index) in timePart">
        <div class="title">时间段</div>
        <div class="content">{{ item.startTime }}-{{ item.endTime }}
          <span style="color: #0099FF">{{ item.quota }}人</span>
        </div>
        <Icon svg-name="employee-close" class-name="close" @iconToggle="close(index)"></Icon>
      </section>
      <div class="add" @click="add">
        <i class="cubeic-close add_svg"></i>
        <span>添加</span>
      </div>
      <!--      </TimePart>-->
    </TitleNav>

    <button @click="submitHandler">提交</button>
  </div>
</template>

<script>
import TimePart from "@/views/AppointmentCenter/components/TimePart";
import {mapActions} from "vuex";

const time = new Date().valueOf() + 1 * 60 * 60 * 1000
const week = [
  '周日',
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
]


export default {
  name: "addRelease",
  components: {TimePart},
  data() {
    return {
      timeFrom: [],
      closeTypeArr: [
        {
          text: '理发', value: {
            name: '理发',
            type: 'barber'
          }
        },
        {
          text: '护理', value: {
            name: '护理',
            type: 'barber'
          }
        },
        {
          text: '洗发', value: {
            name: '洗发',
            type: 'barber'
          }
        },
        {
          text: '问诊', value: {
            name: '问诊',
            type: 'infirmary'
          }
        },
        {
          text: '理疗', value: {
            name: '理疗',
            type: 'infirmary'
          }
        },
        {
          text: '拿药', value: {
            name: '拿药',
            type: 'infirmary'
          }
        }
      ],
      date: this.$dayjs().format('MM月DD日'),
      valid: false,
      model: {
        type: '',
        startTime: '',
        endTime: '',
        num: ''
      },
      nextStartTime: '',
      schema: {
        groups: {
          legend: `访客1信息`,
          fields: [
            {
              type: 'select',
              modelKey: 'type',
              label: '类型',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'startTime',
              label: '开始日期',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'endTime',
              label: '结束日期',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'input',
              modelKey: 'num',
              label: '人数',
              props: {
                placeholder: '请输入'
              },
              rules: {
                required: true
              }
            },
          ]
        }
      },
      timePart: [],
      nexTime: [],
      dateSegmentData: [
        {
          is: 'cube-date-picker',
          title: '开始时间',
          startColumn: 'hour',
          min: [0, 0, 0],
          max: [23, 59, 59],
        },
        {
          is: 'cube-date-picker',
          title: '结束时间',
          startColumn: 'hour',
          min: this.nexTime,
          max: [23, 59, 59],
        }
      ],
      releaseType: '',
    }
  },
  created() {
    this.timeFrom = [
      {
        text: '今天' + ' ' + this.$dayjs().format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
      {
        text: week[this.$dayjs().add(1, 'day').day()] + ' ' + this.$dayjs().add(1, 'day').format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
      {
        text: week[this.$dayjs().add(2, 'day').day()] + ' ' + this.$dayjs().add(2, 'day').format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
    ]
  },
  mounted() {
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 120}px`
  },
  methods: {
    ...mapActions('barber', ['addBarber']),
    ...mapActions('Infirmary',['addClinic']),
    validateHandler() {
      this.valid = arguments[0].valid
    },
    add() {
      let dateSegmentPicker = this.$createSegmentPicker({
        data: this.dateSegmentData,
        onSelect: (selectedDates, selectedVals, selectedTexts) => {
          this.$createDialog({
            type: 'prompt',
            title: '',
            prompt: {
              value: null,
              placeholder: '请输入人数'
            },
            onConfirm: (e, promptValue) => {
              let value = parseInt(promptValue)
              if (!isNaN(value)) {
                this.timePart.push({
                  startTime: this.$dayjs(selectedDates[0]).format('HH:mm'),
                  quota: value,
                  endTime: this.$dayjs(selectedDates[1]).format('HH:mm')
                })
              } else {
                this.$createToast({
                  type: 'warning',
                  txt: '请填入数字',
                  time: 1000
                }).show()
              }

            }
          }).show()

        },
        onNext: (i, selectedDate, selectedValue, selectedText) => {
          this.nexTime = selectedValue
          this.dateSegmentData[1].min = selectedDate
          if (i === 0) {
            dateSegmentPicker.$updateProps({
              data: this.dateSegmentData
            })
          }
        }
      })
      dateSegmentPicker.show()
    },
    close(index) {
      this.timePart.splice(index, 1)
    },
    selectStartTime() {
      if (!this.StartTimePicker) {
        this.StartTimePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: this.$dayjs().toDate(),
          max: this.$dayjs().add(2, 'month').toDate(),
          value: this.$dayjs().toDate(),
          onSelect: (date, selectedVal, selectedText) => {
            this.nextStartTime = date
            this.model.startTime = this.$dayjs(date).format('YYYY/MM/DD')
          },
        })
      }
      this.StartTimePicker.show()
    },
    selectEndTime() {
      if (!this.EndTimePicker) {
        this.EndTimePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: this.nextStartTime,
          max: this.$dayjs(this.nextStartTime).add(2, 'month').toDate(),
          value: this.nextStartTime,
          onSelect: (date, selectedVal, selectedText) => {
            this.model.endTime = this.$dayjs(date).format('YYYY/MM/DD')
          }
        })
      }

      this.EndTimePicker.show()
    },
    selectType() {
      if (!this.TypePicker) {
        this.TypePicker = this.$createPicker({
          title: '',
          data: [this.closeTypeArr],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.model.type = selectedVal[0].name
            this.releaseType = selectedVal[0].type
          }
        })
      }
      this.TypePicker.show()
    },
    async submitHandler() {
      if (this.valid) {
        let data = {
          type: this.model.type,
          startDate: this.$dayjs(this.model.startTime).format('YYYY-MM-DD'),
          endDate: this.$dayjs(this.model.endTime).format('YYYY-MM-DD'),
          timePartVos: this.timePart
        }
        this.selectedType(data).then(res=>{
          this.$router.push({name: 'AppointmentAdminRelease'})
        })
        // this.addBarber(data).then(() => {
        //   this.$router.push({name: 'AppointmentAdminRelease'})
        // })
      } else {
        this.$createToast({
          type: 'warning',
          txt: '请完整填写表单',
          time: 1000
        }).show()
      }

      // this.$router.push({name: 'ReservePage', params: {id: val.clothesType}})
    },
    async selectedType(data){
      switch (this.releaseType) {
        case "barber":
          return await this.addBarber(data);
        case "infirmary":
          return await this.addClinic(data);
        default:
          break

      }
    }
  }
}
</script>

<style scoped lang="stylus">
button
  height: 40px;
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  line-height 0
  font-size: 14px;
  outline none
  border none
  width 80%
  color #fff
  position absolute
  bottom 0
  left 50%
  transform translateX(-50%)
  margin 10px 0

>>> .cube-validator-content
  text-align left
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  line-height: 20px;
  letter-spacing: 1px;

>>> .cube-form-label
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;

#page
  height $viewpoint-height
  overflow: hidden;
  background-color $my-bgc-color

  .time_part
    width: 80%;
    height: 71px;
    background: rgb(241, 249, 255)
    border-radius: 6px;
    margin 10px auto
    display flex
    flex-direction column
    align-items flex-start
    justify-content: space-evenly;
    padding-left 20px
    position relative

    .title
      font-size 14px
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight 600

    .content
      font-size 14px
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight 300

    .close
      height 14px
      width 14px
      position absolute
      right -7px
      top -5px

.add
  width: 117px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #000000;
  margin 20px auto 0
  display flex
  align-items center
  justify-content: center;

  .add_svg
    transform rotate(45deg)
    height 14px
    width 14px

.inquire
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius 25px


.container
  margin 20px
  padding 10px
  border-radius 10px

.selected
  display flex
  justify-content space-between
  padding 20px

  div
    display flex
    align-items center

  span
    font-size 12px
</style>