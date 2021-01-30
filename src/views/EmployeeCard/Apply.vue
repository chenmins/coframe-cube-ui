<template>
  <div id="apply">
    <div class="status_box">
      <img width="100%" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__42737c2f9e09cc8fafbdf85120f9a56e.svg" alt="">
      <div class="status_circle ">
        <div class="message">
          <Tag background-color="#07c160">启用</Tag>
            <div>当前办卡次数</div>
            <div>2次</div>
        </div>
      </div>
    </div>
    <LayOut class="list">
      <p>申请办卡</p>
      <p>2020-01-10  09：10：10</p>
    </LayOut>
    <LayOut class="list">
      <p>申请办卡</p>
      <p>2020-01-10  09：10：10</p>
    </LayOut>
    <LayOut class="list">
      <p>申请办卡</p>
      <p>2020-01-10  09：10：10</p>
    </LayOut>
  </div>
</template>

<script>
export default {
  name: "Apply"
}
</script>

<style scoped lang="stylus">
#apply
  height $viewpoint-height
  background-color $my-bgc-color
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
        font-size 14px
        div
          margin-top 20px
        div:nth-child(3)
          font-size 18px
        p
          font-size 10px
          margin-top 50px

  .list
    padding 10px 0
    border-top 1px solid $custom-border-color
    margin 10px 0
    text-align left
    p
      margin 10px
</style>