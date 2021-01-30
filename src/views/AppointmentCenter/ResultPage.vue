<template>
   <div id="Result_page">
     <div class="success_icon">
       <div class="icon"></div>
       <div>理发室签到成功</div>
     </div>
     <LayOut class="main_message">
       <p>理发室-护理</p>
       <p>姓名：陈优优</p>
       <p>部门：技术部</p>
       <p>时间：今天 12:00-13:00</p>
     </LayOut>
     <cube-button>好的</cube-button>
  </div>
</template>

<script>
export default {
  name: "ResultPage"
}
</script>

<style scoped lang="stylus">
#Result_page
  background-color $my-bgc-color
  height $viewpoint-height
  border: 1px solid transparent;
  .icon
    width 70px
    height 70px
    background-color $custom-active-color
    margin 0 auto
    margin-bottom 20px
    border-radius 50%
  .success_icon
    text-align center
    margin 20px
  .main_message
    padding 10px
    text-align left
    margin 20px
    border-radius 20px
    p
      margin 20px
    p:nth-child(1)
      padding-bottom 10px
      border-bottom 1px solid $custom-border-color
  button
    position: absolute;
    bottom 30px
    width 50%
    left 50%
    transform translate(-50%,-50%)
    background-color rgba($custom-border-color,.1)
    color $custom-active-color
    border-radius 10px
</style>