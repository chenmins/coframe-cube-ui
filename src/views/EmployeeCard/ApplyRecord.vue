<template>
  <div id="ApplyRecord">
    <LayOut class="record">
      <div class="border-bottom-1px">
        <p>申请办卡</p>
        <p>提交申请时间：2020-01-10  09：10：10</p>
      </div>
      <p>行政部审批中 </p>
      <p>人事部审批通过 2020-01-10  08：10：10</p>
      <p>技术部审批通过 2020-01-10  07：10：10</p>
    </LayOut>
    <LayOut class="record">
      <div class="border-bottom-1px">
        <p>申请办卡</p>
        <p>提交申请时间：2020-01-10  09：10：10</p>
      </div>
      <p>行政部审批中 </p>
      <p>人事部审批通过 2020-01-10  08：10：10</p>
      <p>技术部审批通过 2020-01-10  07：10：10</p>
    </LayOut>
  </div>
</template>

<script>
export default {
  name: "ApplyRecord"
}
</script>

<style scoped lang="stylus">
#ApplyRecord
  height $viewpoint-height
  background-color $my-bgc-color
  .record
    margin-bottom 20px
    border-top 1px solid $custom-border-color
    font-size 12px
    text-align left
    padding 20px
    div
      padding-bottom 10px
      margin-bottom 10px
    p
      margin 10px
</style>