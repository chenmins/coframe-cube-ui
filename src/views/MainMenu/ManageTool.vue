<template>
  <div id="manage_tool">
    <a @click="$router.back()">完成</a>
    <div class="func clearfix">
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
        <div class="remove">—</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg" alt="">
        <div>文化建设</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageTool",
  methods:{}
}
</script>

<style scoped lang="stylus">

#manage_tool
  height $viewpoint-height
  background-color $my-bgc-color
  border-top 1px solid transparent
  a
    position: absolute;
    color rgba(orangered,.8)
    top 30px
    transform translateY(-50%)
    right 20px
.func
  margin 20px 10px 0
.tool_item
  width calc(25% - 10px)
  margin 5px
  float left
  font-size 12px
  position relative
  .remove
    display inline-block
    width 15px
    height 15px
    background-color orangered
    color #fff
    line-height 15px
    border-radius 50%
    padding 2px
    position absolute
    z-index 20
    top -10px
    right 7.5px
    font-weight bold
.clearfix:after
  content ''
  display block
  clear both
</style>