<template>
  <div id='Nav_app'>
    <i @click="back" v-if="showBack" class="icon cubeic-back"></i>
    <slot>{{ title }}</slot>
  </div>
</template>

<script >

export default {
  props:{
    showBack:{
      type:Boolean,
      default:false
    },
    title:''
  },
  methods:{
    back(){
      this.$router.back()
    }
  }

}
</script>
<style scoped lang="stylus">
  #Nav_app
    height:60px
    text-align:center
    line-height:60px
    position:relative
    color $color-regular-blue
    background-color #fff
  .icon
    position:absolute
    left:0
    margin 0 20px


</style>