<template>

  <div id="nav_layout"
  >
    <div v-if="$route.meta.showNav" style="height: 60px;background-color:transparent;">
      <Nav
          style="font-size: 1em"
          :background-color="bgcColor"
          :color="color"
          :show-back="!!$route.meta.leave"
          :title="$route.meta.name"
          v-if="$route.meta.showNav"
          v-show="toggle"
      >
        <div slot="right" >
          <slot name="right"></slot>
        </div>
      </Nav>
    </div>
    <div
        :class="$route.meta.showNav?'scroll-list-wrap nav_height':'scroll-list-wrap'"
    >
      <cube-scroll
          ref="scroll"
          @scroll="scroll"
          :scrollEvents="['scroll']"
          :key="$route.meta.name"
      >
        <slot></slot>
      </cube-scroll>
    </div>
  </div>

</template>

<script>
export default {
name: "NavLayOut",
  props:[
    'bgcColor',
    'color'
  ],
  data(){
    return{
      toggle:true
    }
  },
  methods:{
    scroll(e){
      if(this.$route.meta.name === '行政服务工作台'){
        if(e.y < -62){
          this.toggle = false
        }
        if(e.y > -62){
          this.toggle = true
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.nav_height
  height calc(100vh - 60px)

</style>