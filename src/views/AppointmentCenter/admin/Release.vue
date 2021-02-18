<template>
  <div id="Release">
<!--    <div class="bg">-->
<!--      <div style="height: 100%;width:100%;border-radius: 50%;background-color: red"></div>-->
<!--    </div>-->
    <NavLayOut color="#fff" bgc-color="#3642FF">
      <h1><span>{{date.month}}月</span>/{{date.year}}</h1>
      <Calendar
          @click="demo"
          ref="Calendar"
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :formatter="formatter"
          :min-date="minDate" :max-date="maxDate"
          color="#1989fa"
          :style="show?'overflow:hidden;height:95px;':'height:350px;'"
      />
      <i class="cubeic-select" @click="toggle"></i>
      <div class="content">
        <FuncBtn>发布</FuncBtn>
        <LayOut class="item">
          <header>
            <div style="width: 100%">
              <div class="type">洗发</div>
              <div style="display: flex;justify-content: space-between;align-items: center">
                <span>美发去屑、保湿护理</span>
                <p class="time">2020-12-30</p>
              </div>
            </div>
            <i class="cubeic-edit" @click="releaseEdit"></i>
          </header>
          <main>
            <div class="num_box clear-fix">
              <div class="num">9:00-10:00 <span>1人</span></div>
              <div class="num">9:00-10:00 <span>1人</span></div>
              <div class="num">9:00-10:00 <span>1人</span></div>
              <div class="num">9:00-10:00 <span>1人</span></div>
            </div>
          </main>

        </LayOut>
      </div>
    </NavLayOut>
  </div>
</template>

<script>
import {Calendar} from 'vant';
import NavLayOut from "@/components/NavLayOut";
import FuncBtn from "@/views/AppointmentCenter/components/funcBtn";

export default {
  name: "Release",
  components: {FuncBtn, Calendar,NavLayOut},
  data() {
    return {
      date:{
        year:this.$dayjs().format('YYYY'),
        month:this.$dayjs().format('MM'),
        day:this.$dayjs().format('DD'),
      },
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
    releaseEdit(){
      this.$router.push({name:'AdminReleaseEdit',params:{id:1}})
    },
    demo(){
      console.log('demo')
    },
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
      console.log(this.show)
    }
  }

}
</script>
<style scoped >
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

.cubeic-select
  width 100%
  display block
  color #fff
  background-color #3642FF
>>>.van-calendar
  background-color #3642FF
  color #fff
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
  height: 231px;
  background: #3642FF;
  border-radius: 1px;
  padding-bottom 30px
  .bg
    width: 153px;
    height: 138px;
    background: linear-gradient(198deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
    opacity: 0.18;
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
  .calendar
    display flex
    flex-direction row

    .week_day
      flex-grow 1

  .content
    padding 20px 12px
    height calc(100vh - 138px)
    background: linear-gradient(131deg, #50FEFF 0%, #CCFFA2 100%);
    border-radius: 20px 20px 0px 0px;
    .reserve
      margin-bottom 14px
      height: 30px;
      border-radius: 17px;
      border: 1px solid #000000;
      display flex
      width 80px
      justify-content: center;
      align-items center
      margin-left auto
      margin-right auto
      font-size 14px
      .cubeic-close
        transform rotate(45deg)
        display inline-block
  .item
    font-size 12px
    text-align left
    padding 20px
    margin-bottom 10px
    border-radius 10px

    header
      display flex
      justify-content space-between
      .type
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 22px;
        margin-bottom 8px
      span
        font-size: 12px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #999999;
        line-height: 17px;
      .cubeic-edit
        font-size 14px
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
          height: 31px;
          background: #F7F7F7;
          border-radius: 16px;
          font-size: 12px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #000000;
          float left
          width calc(50% - 12px)
          //background-color rgb(247, 247, 247)
          text-align center
          min-height 20px
          line-height 31px
          margin 5px
          padding 5px 0
          //border-radius 5px
          span
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #0099FF;
            line-height: 17px;
            padding-left 9px
            border-left 1px solid rgba(#000,.2)
            margin-left 5px
</style>