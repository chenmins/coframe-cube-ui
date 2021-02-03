<template>
  <div id="schedule">
    <mySchedule @getDate="getDate"></mySchedule>
    <ul class="list" >
      <li class="title">
        {{ date }}
        <div class="add"  @click="$router.push({name:'addSchedule'})">
          <span>新建日程</span>
        </div>
      </li>
      <div class="scroll_container"  @click="ScheduleDetail">
        <cube-scroll  ref="scroll"  >
          <li :class="meeting.did?'item did':'item'"  data-type="item" data-id="1" v-for="meeting in meetings">
            <span class="time">{{meeting.type}}</span>
            <span class="item_name">{{meeting.time}}</span>
          </li>
        </cube-scroll>
      </div>
    </ul>
    <div class="footer">
      <div :class="$route.name === 'Schedule'?'active':''" @click="$route.name !== 'Schedule'&& $router.push({name:'Schedule'}) ">
        <i style="font-size:20px;" class="iconfont iconrichen"></i>
        <p>日程</p>
      </div>
      <div  :class="$route.name === 'TodoLists'?'active':''" @click="$route.name !== 'TodoLists'&& $router.push({name:'TodoLists'}) ">
        <i style="font-size:20px;" class="iconfont icondaiban"></i>
        <p>待办</p>
        <span class="dot"></span>
      </div>
    </div>
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
      meetings:[]
    }
  },
  created() {
    this.meetings = this.$store.state.Schedule.meeting
  },
  methods: {
    ScheduleDetail(e){
      this.$router.push({name:'ScheduleDetail',params:{id:e.target.dataset.id}})
    },
    addSchedule(){
      this.$router.push({name:'addSchedule'})
    },
    getDate(e) {
      console.log(e)
      this.date = e
    }
  }
}
</script>

<style scoped lang="stylus">

#schedule
  overflow: hidden;
  height $custom-bgc-height
  .scroll_container
    height: calc(100vh - 470px)
    overflow: hidden;
  .list
    li
      height 60px
      border-bottom 1px solid rgba($custom-border-color, .1)
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
    .item
      text-align left

      span
        display inline-block
        line-height 60px
        height 100%
        padding 0 15px

      .time
        font-size 12px
        border-right 2px solid $custom-active-color

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