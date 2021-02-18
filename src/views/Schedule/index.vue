<template>
  <div id="schedule">
    <NavLayOut color="#fff">
      <h1><span>{{ time.month }}月</span>/{{ time.year }}</h1>
      <mySchedule @getDate="getDate"></mySchedule>
      <div slot="right">
        <Icon svg-name="Schedule-add" class-name="schedule-add"></Icon>
      </div>
      <ul class="list">
        <li class="title">
          {{ date }}
          <div class="add" @click="$router.push({name:'addSchedule'})">
            <span>新建日程</span>
          </div>
        </li>
        <div class="scroll_container" @click="ScheduleDetail">
          <cube-scroll ref="scroll">
            <li :class="meeting.did?'item did':'item'" data-type="item" data-id="1" v-for="meeting in meetings">
              <div class="left">
                <div class="dot"></div>
              </div>
              <div class="right">
                <div class="right_header" style="margin:19px 29px">运营部门会议</div>
                <div class="right_bottom" style="display: flex">
                  <div>
                    <div>
                      <Icon svg-name="Schedule-date" class-name="schedule-date schedule"></Icon>
                      <span>23日</span>
                    </div>
                    <div>2月</div>
                  </div>
                  <div>
                    <div>
                      <Icon svg-name="Schedule-time" class-name="schedule-time schedule"></Icon>
                      <span>12：00-01：00</span>
                    </div>
                    <div>PM</div>
                  </div>
                </div>
              </div>
<!--              <span class="time">{{ meeting.type }}</span>-->
<!--              <span class="item_name">{{ meeting.time }}</span>-->
            </li>
          </cube-scroll>
        </div>
      </ul>
    </NavLayOut>
  </div>
</template>

<script>
import mySchedule from '@/components/myCalendar'

export default {
  name: "index",
  components: {
    mySchedule
  },
  data() {
    return {
      date: '',
      meetings: [],
      time: {
        year: this.$dayjs().format('YYYY'),
        month: this.$dayjs().format('MM'),
        day: this.$dayjs().format('DD'),
      },
    }
  },
  created() {
    this.meetings = this.$store.state.Schedule.meeting
  },
  methods: {
    ScheduleDetail(e) {
      this.$router.push({name: 'ScheduleDetail', params: {id: e.target.dataset.id}})
    },
    addSchedule() {
      this.$router.push({name: 'addSchedule'})
    },
    getDate(e) {
      console.log(e)
      this.date = e
    }
  }
}
</script>

<style scoped lang="stylus">
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

.schedule
  height 12px
  width 12px
#schedule
    overflow: hidden;
    height $custom-bgc-height
    background-image url("../../assets/icons/Main.webp")
    background-repeat no-repeat
    background-size 100%

    .scroll_container
      height: calc(100vh - 470px)
      overflow: hidden;
      .item
        display flex
        color #fff
        .right
          width 100%
          margin-left 28px
          margin-right 28px
          margin-bottom: 18px;
          border-radius 0 17px 17px 17px
          background-color #2BDCA2
          overflow: hidden;
          .right_header
            background-color #2BDCA2
          .right_bottom
            height: 47px;
            filter:opacity(.18)
            color #fff
        .dot
          width: 19px;
          height: 19px;
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.22);
          border: 3px solid #000000;
          border-radius 50%

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
      .did
        opacity: .4;

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