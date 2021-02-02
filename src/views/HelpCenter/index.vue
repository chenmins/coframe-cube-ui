<template>
  <div id="help_center">
    <div class="container">
      <cube-scroll
          ref="scroll"
      >
        <transition name="slide-fade" >
          <router-view/>
        </transition>
      </cube-scroll>
    </div>
    <Tabbar v-show="$route.meta.showTabbar"></Tabbar>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped lang="stylus">
#help_center
  height $custom-bgc-height
  background-color $my-bgc-color
  position: relative;
  .container
    height 100%
</style>