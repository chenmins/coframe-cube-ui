<template>
  <div id="my_qr">
    <TitleNav >
      <div class="container">
        <img class="my_qr" src="../../assets/icons/myQR.png" alt="">
        <div class="content_box">
          <img class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__aa81ab1ffd5971bbf498f6e2d7b59e7e.svg" alt="">
          <div class="name">一打没得撒</div>
          <div class="position">sdada</div>
          <img class="qr" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__0c8b0b447be11e09539c7a6be11c3a1d.svg" alt="">
        </div>
      </div>

    </TitleNav>
    <div class="download">
      <div class="download_bgc">
        <Icon svg-name="download" class-name="download_svg" height="24px" width="24px" ></Icon>
      </div>
      <div class="text">保存</div>
    </div>
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
  position relative
  padding 0 20px
  .container
    position relative
    height 70vh
    margin-top 63px

  .my_qr
    width 100%
    height 100%
    position absolute
    left 0
    z-index -1
  .content_box
    width 80%
    height 60vh
    background-color #fff
    border-radius 17px
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    display flex
    flex-direction column
    align-items center
    .avatar
      width 48px
      height 48px
      flex 0
      position absolute
      top -24px
      border-radius 50%
    .name
      margin-top 30px
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #0F1826;
      line-height: 22px;
    .position
      margin-top 6px
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 17px;
    .qr
      height 230px
      width 230px
      margin-top 10px
.download
    position absolute
    bottom 12px
    left 50%
    transform translateX(-50%)
    z-index 20

    .download_bgc
        position relative
        background-color #ffffff
        width 42px
        height 42px
        border-radius 50%
        box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.09);
        .download_svg
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
    .text
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 22px;

</style>