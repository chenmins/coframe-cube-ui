<template>
  <div id="add_card">
    <h1>请选择补卡原因</h1>
    <div class="selected">工卡丢失</div>
    <div>以旧换新</div>

    <footer>
      下一步
    </footer>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped lang="stylus">
#add_card
  h1
    font-size 18px
    text-align left
    margin 20px
  div
    border 1px solid $custom-border-color
    margin 20px
    height 40px
    line-height 40px
    border-radius 20px
    box-shadow 3px 3px 6px rgba($custom-gray,.5)
    &.selected
      color #fff
      background-color $custom-active-color
  footer
    border 1px solid $custom-border-color
    position fixed
    bottom 0
    height 50px
    width 100%
    line-height 50px
    margin-bottom 20px
    transform scale(.9)
</style>