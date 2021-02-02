<template>
  <div id="my_qr">
      <LayOut class="box">
        <div class="title">
          <img height="50px" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">
          <div class="content">
            <span>用户名</span>
            <span>职位名称</span>
          </div>
        </div>
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__9c81290df8a66a0ba0b5a60f9ca8c7c0.svg" alt="">
      </LayOut>
  </div>
</template>

<script>
export default {
  name: "MyQR",
}
</script>

<style scoped lang="stylus">
#my_qr
  overflow: hidden;
  .box
    margin 20px
    padding 10px 10px 40px
    border-radius 10px
    display flex
    flex-direction column
    align-items center
  .title
    align-self flex-start
    display flex
    margin 25px
    .content
      margin-left 10px
      span
        display block
        text-align left
        font-size 12px
      span:first-child
        font-size 14px
        margin-bottom 10px
</style>