<template>
  <div class="preview">
    <div class="top">
      <div class="avatar"></div>
    </div>
    <div class="footer">
      <div class="name">
        <div>王小二</div>
        <div>
          <p>国家管道局</p>
          <p>新能技术部</p>
        </div>
      </div>
      <div>
        <img height="50px"
             src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__2ba195f9f1609503b87840a70ee68856.svg"
             alt="">
        <div>国家管道局</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview"
}
</script>

<style scoped lang="stylus">
.preview
  height 400px
  width 300px
  background-color: #fff;
  position: absolute;
  top 40%
  left 50%
  transform translate(-50%,-50%)
  z-index 10
  box-shadow 0 0 10px rgba($custom-border-color,.8)
  display flex
  flex-direction column
  border-radius 20px
  overflow: hidden;
  .top
    flex 1
    background-color rgba(250, 205, 145, 1)
    position relative
    .avatar
      height 180px
      width 180px
      background-color: #fff;
      z-index 10
      border-radius 50%
      top 50%
      left 50%
      position absolute
      transform translate(-50%,-50%)
  .footer
    min-height 120px
    display flex
    align-items center
    justify-content space-around
    font-size 10px
    .name
      div:nth-child(1)
        font-size 18px
</style>