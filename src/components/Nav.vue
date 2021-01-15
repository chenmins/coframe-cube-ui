<template>
  <div id='Nav_app'>
<!--    <i @click="back" class="icon cubeic-back"></i>-->
    <slot>{{ title }}</slot>
  </div>
</template>

<script >

export default {
  props:{
    title:''
  },
  beforeRouterEnter:((to,from,next)=>{
    console.log (to,from)
  }),
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
    color #fff
    background-color $color-regular-blue
    margin-bottom 10px
  .icon
    position:absolute
    left:0
    margin 0 20px


</style>