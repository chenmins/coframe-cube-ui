<template>
  <div id="schedule">
    <NavLayOut color="#fff">
      <div slot="fixed" style="margin: 0 12px">
        <h1 @click="showFormatPicker"><span>{{ time.month }}月</span>/{{ time.year }}</h1>
        <mySchedule @getDate="getDate" :selected-date="selectedDate"></mySchedule>
      </div>

      <div slot="right" @click="$router.push({name:'addSchedule'})">
        <img src="../../assets/icons/addBlack.webp" alt="">
      </div>
      <ul class="list">
        <li class="title">
          <span style="font-size: 12px;color:#999999">{{ date }}</span>
        </li>
        <div class="scroll_container">
          <cube-scroll ref="scroll">
            <li class="item" data-type="item" data-id="1" v-for="meeting in meetings" :key="meeting.id"
                @click="scheduleDetail(meeting)">
              <div class="left">
                <div v-if="meeting.agree!=='同意' " class="dot"></div>
                <div v-else class="did-dot"></div>
              </div>
              <div class="right">
                <div class="right_header" style="margin:19px 29px">{{ meeting.title }}</div>
                <div class="right_bottom" style="display: flex">
                  <div>
                    <div>
                      <Icon svg-name="Schedule-date" class-name="schedule-date schedule"></Icon>
                      <span>{{ $dayjs(meeting.startDate).format('MM月') }}</span>
                    </div>
                    <div class="row_2">{{ $dayjs(meeting.startDate).format('DD日') }}</div>
                  </div>
                  <div>
                    <div>
                      <Icon svg-name="Schedule-time" class-name="schedule-time schedule"></Icon>
                      <span>{{ $dayjs(meeting.startDate).format('HH:ss') }}-{{
                          $dayjs(meeting.endDate).format('HH:ss')
                        }}</span>
                    </div>
                    <div class="row_2">PM</div>
                  </div>
                </div>
              </div>
            </li>
          </cube-scroll>
        </div>
      </ul>
    </NavLayOut>
  </div>
</template>

<script>
import mySchedule from '@/components/myCalendar'
import {ScheduleControllerImpl} from '@controller'
import {BaseVue} from '@lib'

export default {
  name: "index",
  components: {
    mySchedule
  },
  mixins: [BaseVue],
  data() {
    return {
      selectedDate: '',
      date: '',
      allMonthSchedule: {},
      meetings: [],
      time: {
        year: this.$dayjs().format('YYYY'),
        month: parseInt(this.$dayjs().format('MM')),
        day: this.$dayjs().format('DD'),
      },
    }
  },
  created() {
    this.init(this.$dayjs().format('YYYY-M')).then(res => {
      this.allMonthSchedule = res
      this.meetings = res[this.$dayjs().format('YYYY-M-D')] === undefined ? '' : res[this.$dayjs().format('YYYY-M-D')]

    })

  },
  methods: {
    async init(date) {
      let res = await this.dispatch(ScheduleControllerImpl.queryScheduleByMM, {month: date || this.$dayjs().format('YYYY-M')})
      return res.data.body[0]
    },
    showFormatPicker() {
      if (!this.formatPicker) {
        this.formatPicker = this.$createDatePicker({
          title: 'Use format',
          min: new Date(),
          max: new Date(2099, 1, 1),
          columnCount: 2,
          value: new Date(),
          format: {
            year: 'YYYY年',
            month: 'MM月',
            date: "DD"
          },
          onSelect: (e, e2) => {
            this.time = {
              year: e2[0],
              month: e2[1] - 1
            }
            this.selectedDate = new Date(this.time.year, this.time.month)
            this.init(this.$dayjs(this.selectedDate).format('YYYY-MM')).then(res => {
              this.meetings = []
              this.allMonthSchedule = res
              if (this.$dayjs(this.selectedDate).format('MM') === this.$dayjs().format('MM')) {
                this.meetings = this.allMonthSchedule[this.$dayjs().format('YYYY-M-D')]
              }
            })
            this.time.month = e2[1]
          },
          onCancel: this.cancelHandle
        })
      }

      this.formatPicker.show()
    },
    scheduleDetail(e) {
      this.$router.push({name: 'ScheduleDetail', params: {id: e.id, data: e}}).catch(err => {
        console.log(err)
      })
    },
    addSchedule() {
      this.$router.push({name: 'addSchedule'})
    },
    getDate(e) {
      let weekMap = [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
      ]
      this.date = " " + e + " " + weekMap[this.$dayjs(e).day()]
      this.meetings = this.allMonthSchedule[this.$dayjs(e).format('YYYY-M-D')]
    }
  }
}
</script>

<style scoped lang="stylus">
>>> .cube-scroll-content
  padding-bottom 40px

>>> .datepicker-dateRange-item-active
  background: #FF3285 !important
  box-shadow: 0 2px 4px 0 rgba(255, 50, 133, 0.34);

>>> .datepicker-dateRange-item-active .event
  color #fff !important

>>> .datepicker-body span
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 23px;

>>> .cube-scroll-list-wrapper
  padding 0 12px

>>> .datepicker-body
  p
    display none

>>> .datepicker-ctrl
  display none

>>> .datepicker-popup
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  box-shadow: 0 6px 13px 0 rgba(167, 167, 167, 0.18), 0px -6px 13px 0px rgba(0, 0, 0, 0.03);
  border-radius: 27px;
  opacity: 0.92;

>>> .func
  top 50px
  right 20px

.schedule
  height 12px
  width 12px

#schedule
  overflow: hidden;
  background-image url("../../assets/icons/Main.webp")
  background-repeat no-repeat
  background-size 100%

  .scroll_container
    height: calc(100vh - 400px)
    overflow: hidden;

    .item
      display flex
      color #fff

      .right
        width 100%
        margin-left 28px
        margin-bottom: 18px;
        border-radius 0 17px 17px 17px
        background-color #2BDCA2
        overflow: hidden;

        .right_header
          background-color #2BDCA2

        .right_bottom
          height: 47px;
          color #fff
          display flex
          justify-content: space-evenly;
          align-items center
          text-align left
          font-size: 11px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 16px;
          background-color #5de3a8

          .schedule-date, .schedule-time
            height 12px
            width 12px
            margin-right 8px

          .row_2
            margin-left 20px

      .dot, .did-dot
        width: 16px;
        height: 16px;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.22);
        border: 3px solid #000000;
        border-radius 50%
        position: relative;

        &:after
          content ''
          width 2px
          height 90px
          background-color #E6E6E6
          display inline-block
          position: absolute;
          left 50%
          margin-left -1px
          top 25px

      .did-dot
        background #ffffff
        border-color: #e6e6e6

        &:before
          content ''
          width 10px
          height 10px
          position: absolute
          border-radius 50%
          left 50%
          top 50%
          transform: translate(-50%, -50%)
          background #E6E6E6
          z-index: 40
          display inline-block


h1
  text-align left
  margin 14px 28px
  color #ffffff
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 20px;

  span
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    line-height: 30px;

.list
  .title
    font-weight 500
    font-size 20px
    line-height 60px
    text-align left
    padding-left 30px
    position relative

    .add
      position absolute
      top 0
      right 0
      margin-right 20px
      display flex
      align-items center
      color $custom-gray

      span
        font-size 10px

    .cubeic-wrong:before
      transform: rotate(45deg);
      display: inline-block;
      right 0


.footer
  position fixed
  bottom 0
  width 100%
  display flex
  justify-content: space-evenly;
  font-size 12px
  background-color rgba($custom-border-color, .1)

  div
    padding 10px 14px
    position: relative;

    &.active
      color $custom-active-color

    .dot
      position absolute
      height 7px
      width 7px
      display inline-block
      background-color orangered
      border-radius 50%
      top 10px
      right 13px

  i
    display inline-block
    padding-bottom 7px
</style>