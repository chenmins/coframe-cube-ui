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
    title:'',
  },
  methods:{
    back(){
      if(this.$route.meta.leave === 2){
        this.$router.push({name:'MainMenu'})
      }
      if(this.$route.meta.leave === 3){
        this.$router.back()
      }
    }
  }

}
</script>
<style scoped lang="stylus">
  #Nav_app
    height:60px
    text-align:center
    line-height:60px
    position:fixed
    width 100%
    top 0
    color $color-regular-blue
    background-color #fff
    z-index 60
  .icon
    position:absolute
    left:0
    margin 0 20px


</style>