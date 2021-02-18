<template>
  <div class="reserve_page">
    <ApproveContainer @changeHandle="changeHandle" class="clear-fix" style="height: 154px" :tabs="tabs"
                      :selectedLabel="selectedLabel">
      <template v-if="yuyue">
        <Card class="card">
          <header>理发室</header>
          <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>
          <div class="btn">剩余名额10人</div>
        </Card>
        <Card class="card">
          <header>理发室</header>
          <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>
          <div class="btn">剩余名额10人</div>
        </Card>
        <Card class="card">
          <header>理发室</header>
          <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>
          <div class="btn">剩余名额10人</div>
        </Card>
        <Card class="card">
          <header>理发室</header>
          <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>
          <div class="btn">剩余名额10人</div>
        </Card>
      </template>
      <template v-else>
        <Card class="inc">
          <Icon svg-name="bg" class-name="inc_bg"></Icon>
          <header>理发室标题</header>
          <section>
            这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍
          </section>
        </Card cla>
      </template>
    </ApproveContainer>
    <footer>
      <cube-button>立即预约</cube-button>
    </footer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import ApproveContainer from "@/components/UI/ApproveContainer";
import Card from "@/components/UI/Card";

export default {
  name: "ReservePage",
  components: {
    Card,
    ApproveContainer,
    SlideNav
  },
  data() {
    return {
      yuyue: true,
      checked: false,
      selected: '',
      selectedLabel: '预约',
      tabs: [
        {
          label: '预约'
        },
        {
          label: '业务介绍'
        }
      ]
    }
  },
  methods: {
    changeHandle(e) {
      console.log(e)
      this.yuyue = !this.yuyue
    }
  }
}
</script>

<style scoped lang="stylus">
.reserve_page
  .inc
    position relative
    .inc_bg
      position: absolute;
      transform scale(1.5)
      width 100%
      height 100%
      top 50px
    section
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 24px;
    header
      font-size 22px
      margin 30px 0
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
  footer
    position absolute
    bottom 20px
    left 50%
    transform translateX(-50%)
    z-index 11
    width 90%

    button
      padding 11px 10px
      background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
      border-radius: 20px;
      font-size 12px

  .card
    text-align center !important

    header
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 22px;

    .time
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 20px;

    .btn
      height: 30px;
      border-radius: 18px;
      border: 1px solid #000000;
      line-height 30px
      display inline-block
      padding 0 15px
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;

    >>> .cube-radio-label
      text-align center
      width 100%

    >>> .cube-radio_selected .cube-radio-ui
      background-color transparent
      background-image url("../../assets/icons/selected.png")
      background-size 100%

    >>> .cube-radio-ui i::before
      display none

    .border-top-1px::before
      border none

    .border-top-1px::after
      border none
</style>