<template>
  <div id="notice_app">
    <div class="img_box">
      <img src="../../assets/icons/news.png" alt="">
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Common",
}
</script>

<style scoped lang="stylus">
.image
  flex-shrink 0
  height 94px
  width 94px
  overflow hidden
  display inline-block
  margin-right 16px
  border-radius 6px

#notice_app
  height $custom-bgc-height
  text-align left
  .img_box
    height 120px
    margin 0 12px
    overflow hidden
    border-radius: 6px;
    box-shadow: 0px 3px 7px 0px rgba(17, 157, 252, 0.16);
    position relative

    img
      position: absolute;
      left -80px
      top -240px
      transform scale(.9)

  >>> .cube-tab
    min-width 70px
    font-weight: 500;
    font-size 14px
    line-height: 22px;
    color #000
    background-color #F6F6F6
    border-radius 15px
    margin-right 12px
    padding 5px

  >>> .cube-tab_active
    background-color #0251FE
    border-radius 15px
    font-size 14px
    color #fff
    font-weight: 500;
    position relative

    &:after
      content ''
      position absolute
      bottom 2px
      left 50%
      transform translateX(-50%)
      height 5px
      width 5px
      border-radius 50%
      background-color #fff

.content
  margin 5px 20px 10px
</style>