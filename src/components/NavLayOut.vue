<template>

  <div id="nav_layout"
  >
    <div >
      <div v-if="$route.meta.showNav" style="height: 60px;background-color:transparent;">
        <Nav
            style="font-size: 1em"
            :background-color="bgcColor"
            :color="color"
            :show-back="$route.meta.leave!==1"
            :title="$route.meta.name"
            v-if="$route.meta.showNav"
            v-show="toggle"
        >
          <div slot="right"  >
            <slot name="right"></slot>
          </div>
        </Nav>
      </div>
      <div v-if="$route.meta.showNav" :style="'background-color:'+ bgcColor">
        <slot name="fixed"></slot>
      </div>
    </div>
    <div
        :class="$route.meta.showNav?'scroll-list-wrap nav_height':'scroll-list-wrap'"
    >
      <cube-scroll
          ref="scroll"
          @scroll="scroll"
          :scrollEvents="['scroll']"
          :key="randomKey"
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
      toggle:true,
      randomKey:0
    }
  },
  methods:{
    scroll(e){
      if(this.$route.meta.name === '行政服务工作台'
          // this.$route.meta.name ==='审批列表' ||
          // this.$route.meta.name ==='我的审批'
      ){
        if(e.y < -60){
          this.toggle = false
        }
        if(e.y > -60){
          this.toggle = true
        }
      }
    }
  },
  mounted() {
    this.randomKey = Math.random()
  }
}
</script>

<style scoped lang="stylus">
#nav_layout
  height 100vh
  overflow: hidden;
.nav_height
  height calc(100vh - 60px)
.cube-scroll-wrapper
  height calc(100vh - 80px)

</style>