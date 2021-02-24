<template>
  <div id="my_approval">
    <ApproveContainer :tabs="tabs" :selected-label="selectLabel">

      <LayOut @clicked="$router.push({name:'Parking-ApprovalDetail',params:{id:1}})" class="item">
        <div class="header">
          <div>
            <h1>技术部-王小二</h1>
            <span>申请人</span>
          </div>
        </div>
        <div class="body">
          <div><span>车牌号：</span> 京A BL192s</div>
          <div><span>姓名：</span> 京A BL192</div>
          <div><span>入院日期：</span> 2020-12-20 15:00</div>
        </div>
        <Tag class="tag" :color="complete?'#666666':'#fff'" :background-color="!complete?'#F5BA39':'#EDEDED'">
          {{!complete?'待审批':'已完成'}}
        </Tag>
        <Icon v-if="complete" svg-name="guest-complete" class-name="complete_svg"></Icon>
      </LayOut>
      <LayOut @clicked="$router.push({name:'Parking-ApprovalDetail',params:{id:1}})" class="item">
        <div class="header">
          <div>
            <h1>技术部-王小二</h1>
            <span>申请人</span>
          </div>
        </div>
        <div class="body">
          <div><span>车牌号：</span> 京A BL192s</div>
          <div><span>姓名：</span> 京A BL192</div>
          <div><span>入院日期：</span> 2020-12-20 15:00</div>
        </div>
        <Tag class="tag" :color="!complete?'#666666':'#fff'" :background-color="complete?'#F5BA39':'#EDEDED'">
          {{complete?'待审批':'已完成'}}
        </Tag>
        <Icon v-if="!complete" svg-name="guest-complete" class-name="complete_svg"></Icon>
      </LayOut>

    </ApproveContainer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import ApproveContainer from "@/components/UI/ApproveContainer";

export default {
  name: "MyApproval",
  components: {ApproveContainer, SlideNav},
  data() {
    return {
      complete:true,
      selectLabel: '待审批',
      tabs: [
        {
          label: '待审批'
        }, {
          label: '已完成'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
#my_approval
  .item
    font-size 12px
    position relative
    margin 12px
    border-radius 10px

    .header
      border-bottom 1px solid $custom-border-color
      padding 18px
      text-align left
      display flex
      align-items center
      &:before
        content:''
        display block
        height 3px
        width 3px
        border 2px solid #0099FF
        border-radius 50%
        margin-right 7px
      h1
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 22px;
      span
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
      span:nth-child(1)
        margin-right 40px

    .body
      padding 20px
      text-align left
      display flex
      flex-direction column
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 20px;
      span
        margin 5px
        display inline-block
        color #999
    .complete_svg
      height 80px
      width 80px
      position: absolute;
      bottom 10px
      right 10px
      transform rotate(-45deg) scale(.8)
    .tag
      position absolute
      top 16px
      right 20px
      border-radius 20px
</style>