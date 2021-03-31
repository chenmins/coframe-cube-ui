<template>
  <div class="reserve" @click="$emit('clicked')">
    <i class="cubeic-close"></i>
    <span>
      <slot>发布</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "funcBtn"
}
</script>

<style scoped lang="stylus">
.reserve
  margin-bottom 14px
  height: 30px;
  border-radius: 17px;
  border: 1px solid #000000;
  display flex
  width 80px
  justify-content: center;
  align-items center
  margin-left auto
  margin-right auto
  font-size 14px
  .cubeic-close
    transform rotate(45deg)
    display inline-block

</style>