<template>
  <div class="send" @click="$emit('Send')" v-if="$route.fullPath.includes('/Communication')">
    <Icon svg-name="edit" style="height: 24px;width: 24px"></Icon>
  </div>
</template>

<script>
export default {
name: "Send"
}
</script>

<style scoped lang="stylus">
.send
  border-radius 50%
  padding 10px
  color $custom-active-color
  font-size 16px
  position fixed
  z-index 20
  bottom 60px
  right 20px
  background-color #fff
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
  .iconfont
    color $custom-active-color

</style>