<template>
  <div id="Release">
    <Calendar
        ref="Calendar"
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :formatter="formatter"
        :min-date="minDate" :max-date="maxDate"
        color="#1989fa"
        :style=" show?'overflow:hidden;height:95px;':'height:350px;'"
    />
    <i class="cubeic-select" @click="toggle"></i>


    <LayOut class="item">
      <header>
        <div>
          <span>洗发</span>美发去屑、保湿护理
        </div>
        <i class="cubeic-edit"></i>
      </header>
      <main>
        <div class="time">2020-12-30</div>
        <div class="num_box clear-fix">
          <div class="num">9:00-10:00 1人</div>
          <div class="num">9:00-10:00 1人</div>
          <div class="num">9:00-10:00 1人</div>
          <div class="num">9:00-10:00 1人</div>
        </div>
      </main>

    </LayOut>
  </div>
</template>

<script>
import {Calendar} from 'vant';

export default {
  name: "Release",
  components: {Calendar},
  data() {
    return {
      show: true,
      minDate: new Date(2010, 0, 6),
      maxDate: new Date(2010, 0, 7),
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {

    formatter(day) {
      // day.topInfo = '劳动节';
      // day.bottomInfo = '入住';
      day.bottomInfo = '问/拿/疗';
      return day
    },
    onChange() {

    },
    toggle() {
      console.log('1')
      this.show = !this.show
    }
  }

}
</script>
<style scoped>
>>> .van-calendar__selected-day {
  background-color: transparent;
}

>>> .van-calendar__selected-day:after {
  content: '';
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .8);
  height: 3px;
  width: 3px;
  display: block;
  border-radius: 50%;
  position: absolute;
  bottom: 21px;
  z-index: 1;
}
</style>
<style scoped lang="stylus">
>>>.van-calendar__days
  overflow: auto;
  display flex
  flex-wrap nowrap
  display: -webkit-box
>>>.van-calendar__month-mark
  display none
>>> .van-calendar__header-title
  display none

>>> .van-calendar__header-subtitle
  display none

>>> .van-calendar__body
  overflow hidden

#Release
  border 1px solid transparent

  .calendar
    display flex
    flex-direction row

    .week_day
      flex-grow 1

  .item
    font-size 12px
    text-align left
    padding 20px
    margin-bottom 10px
    border-radius 10px

    header
      display flex
      justify-content space-between

      .cubeic-edit
        margin-right 10px

      span
        font-weight bold
        margin-right 20px

    main
      margin-top 20px

      .time
        margin 10px 0

      .num_box
        margin 0 auto

        .num
          float left
          width calc(50% - 32px)
          background-color rgb(247, 247, 247)
          border 1px solid $custom-border-color
          text-align center
          min-height 20px
          line-height 20px
          margin 5px
          padding 5px 10px
          border-radius 5px
</style>