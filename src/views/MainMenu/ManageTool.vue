<template>
  <div id="manage_tool">
    <NavLayOut
      bgc-color="#fff"
    >
      <a @click="$router.back()">完成</a>
      <div class="func clearfix">
        <div class="tool_item">
          <Icon svg-name="one" class-name="svg"></Icon>
          <div>文化建设</div>
          <Icon svg-name="delete" class-name="remove"></Icon>
        </div>
        <div class="tool_item">
          <Icon svg-name="two" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>
          <div>帮助中心</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="three" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>

          <div>日程协同</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="four" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>
          <div>访客预约</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="five" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>

          <div>通讯录</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="six" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>
          <div>员工卡申请</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="seven" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>

          <div>预约中心</div>
        </div>
        <div class="tool_item">
          <Icon svg-name="eight" class-name="svg"></Icon>
          <Icon svg-name="delete" class-name="remove"></Icon>
          <div>信息报备</div>
        </div>
      </div>
      <div slot="right">
        <span style="font-size: 14px">完成</span>
      </div>
    </NavLayOut>
  </div>
</template>

<script>
export default {
  name: "ManageTool",
  methods: {}
}
</script>

<style scoped lang="stylus">
.svg
  height 44px
  width 44px
  margin-bottom 6px
#manage_tool
  background-color $my-bgc-color

  a
    position: fixed;
    color rgba(orangered, .8)
    top -40px
    right 20px
    z-index 60

.func
  margin 20px 10px 0

.tool_item
  width calc(25% - 10px)
  margin 5px
  float left
  font-size 12px
  position relative
  margin-bottom 27px
  .remove
    display inline-block
    width 14px
    height 14px
    background-color orangered
    color #fff
    line-height 15px
    border-radius 50%
    padding 2px
    position absolute
    z-index 20
    top -5px
    right 10px
    font-weight bold

.clearfix:after
  content ''
  display block
  clear both
</style>