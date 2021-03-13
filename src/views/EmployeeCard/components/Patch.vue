<template>
  <Card class="application" style="padding: 0;overflow:hidden;">
    <div class="title">
      <Icon svg-name="EmployeeCard_apply2" class-name="svg_class"></Icon>
      <span class="font-blod">补卡</span>
    </div>
    <ul class="box">
      <li>
        <div class="dot"></div>
        <div>
          <div class="time-title-font">提交申请时间</div>
          <div class="time-font">{{ $dayjs(list.recordTime).format('YYYY/MM/DD HH:mm:ss') }}</div>
        </div>
      </li>
      <li>
        <div class="dot"></div>
        <div>
          <div class="time-title-font">审批时间</div>
          <div class="time-font">{{ $dayjs(list.approvalTime).format('YYYY/MM/DD HH:mm:ss') }}</div>
        </div>
      </li>
      <li class="end">
        <div class="dot"></div>
        <div class="time-title-font">
          {{list.approvalContent}}
        </div>
      </li>
    </ul>
  </Card>
</template>

<script>
import Card from "@/components/UI/Card";

export default {
  name: "Patch",
  props: [
    'list',
  ],
  components: {Card}
}
</script>

<style scoped lang="stylus">

.title
  height 60px
  background: linear-gradient(90deg, #E8ECFF 0%, #FFFFFF 100%);
  padding 12px 20px
  display flex
  align-items center
  .svg_class
    margin-right 12px
    height 36px
    width 36px
.box
  padding 15px 20px
  .end
    .time-title-font
      color #F3981C
    .dot
      background-color #F3981C
    &:before
      display none

  li
    margin 14px 0
    display flex
    align-items flex-start
    position relative
    .dot
      height 7px
      width 7px
      border-radius 50%
      background-color #EEEEEE
      margin-right 16px
      margin-top 3px
    &:before
      content ''
      width 1px
      position absolute
      background-color #eee
      height calc(100% + 10px)
      left 3px
      top 7px
</style>