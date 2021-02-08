<template>
  <div id="employee_card">
    <NavLayOut>
      <div class="status_box">
        <img :class="!loss?'':'close'" width="100%" src="../../../assets/icons/card_ui.webp" alt="">
        <div class="right_top content">
          <div :class="!loss?'dot':'close dot'"></div>
          <span v-if="!loss">启用</span>
          <span v-else>挂失</span>
        </div>
        <div class="center content">
          <div>{{title}}</div>
          <span> <span v-if="money">￥</span> <span class="money">100.05</span> <span v-if="time">次</span> </span>
        </div>
      </div>
      <slot></slot>
    </NavLayOut>
  </div>
</template>

<script>
export default {
  name: "CardPanel",
  props:[
      'title',
      'money',
      'time',
      'loss'

  ],
}
</script>

<style scoped lang="stylus">
.close
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);
  color #666666
>>>.cube-scroll-list-wrapper
  overflow: visible;
#employee_card
  background-color #fff
  height 100vh
  overflow: hidden;
  .status_box
    width 100vw
    position relative
    margin-top 37px
    .content
      position absolute
      color #fff
    .right_top
      top 10px
      right 30px
      display flex
      align-items center
      font-size: 12px;
      .dot
        margin-right 5px
        width: 6px;
        height: 6px;
        background: #37FF8D;
        border-radius 50%
    .center
      top 40%
      left 50%
      transform translate(-50%, -50%)
      div
        font-size: 14px;
        margin-bottom: 20px;
      .money
        font-size: 36px;



</style>