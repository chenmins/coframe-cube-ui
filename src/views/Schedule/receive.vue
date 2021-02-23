<template>
  <div id="schedule_detail">
    <ApproveContainer :selected-label="selectedLabel" :tabs="tabs">
      <Card style="position: relative">
        <div class="title">
          <div class="dot"></div>
          <span>参观大会堂</span>
        </div>
        <div class="content">
          <p><span class="titou">参与人 </span> <span >kyrene、易烊千玺、王一博、dora、王源、肖战、陈柏霖、倪妮、黄晓明</span></p>
          <p><span class="titou">提醒时间 </span> <span >2020/12/28 08:00</span></p>
        </div>
        <Icon  class-name="tag complete" svg-name="guest-complete" height="80px" width="80px"></Icon>
        <div style="display: flex;font-size: 12px;align-items: center;justify-content: flex-end;">
          <Icon  class-name="tag" svg-name="schedule-footer-1" height="18px" width="18px"></Icon>
          <span>日程</span>
        </div>
      </Card>
    </ApproveContainer>
  </div>
</template>

<script>

import ApproveContainer from "@/components/UI/ApproveContainer";
import Card from "@/components/UI/Card";
export default {
  name: "receive",
  components: {ApproveContainer,Card},
  data(){
    return{
      selectedLabel: '进行中',
      tabs: [
        {
          label: '进行中',
        }, {
          label: '已完成',
        }
      ],
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="stylus">
#schedule_detail
  background-color $my-bgc-color
  height $custom-bgc-height
  .title
    display flex
    align-items center
    margin-bottom 14px
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;
    .dot
      height 3px
      width 3px
      border 2px solid #0099FF
      border-radius 50%
      margin-right 7px
  .content
    font-size: 14px;
    p
      margin-bottom 10px
  .titou
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    margin-right 13px
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  .complete
    position absolute
    top 10px
    right 10px
    transform rotate(-45deg)
</style>