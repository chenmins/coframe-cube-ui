<template>
  <div id="employee_card">
    <div class="status_box">
      <img width="100%" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__42737c2f9e09cc8fafbdf85120f9a56e.svg" alt="">
      <div class="status_circle ">
        <div class="message">
          <Tag background-color="#07c160">启用</Tag>
          <p>余额:862</p>
        </div>
      </div>
    </div>
    <div class="handle">
      <div class="title">我要办理</div>
      <div class="func clear-fix">
        <div class="item">申请办卡</div>
        <div class="item">我要挂失</div>
        <div class="item">我的申请</div>
      </div>
    </div>
    <div class="todo">
      <div class="title">我的待办</div>
      <div class="func">
        <div class="item">我的审批</div>
        <div class="item">新员工开卡</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="stylus">

#employee_card
  background-color $my-bgc-color
  height 100%
  .title
    margin 20px
  .handle,.todo
    text-align left
  .func
    display flex
    align-items center
    justify-content: space-around;
    .item
      height calc(100vw / 4)
      background-color: #fff;
      border 1px solid $custom-border-color
      width calc(100vw / 4)
      margin 10px
      border-radius 30%
      line-height calc(100vw / 4)
      text-align center
      font-size 12px
  .status_box
    width 100vw
    position relative
    .status_circle
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      height 180px
      width 180px
      background-color: #fff;
      border-radius 50%
      border 1px solid $custom-border-color
      .message
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        p
          font-size 10px
          margin-top 50px

</style>