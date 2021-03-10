<template>
  <div id="title_nav">
    <div>
      <div v-if="$route.meta.showNav" style="height: 60px;background-color:transparent;">
        <Nav
            style="font-size: 1em"
            :background-color="bgcColor"
            :color="color"
            :show-back="$route.meta.leave!==1"
            :title="$route.meta.name"
            v-if="$route.meta.showNav"
            v-show="toggle"
            @back="$emit('back')"
        >
          <div slot="right">
            <slot name="right"></slot>
          </div>
        </Nav>
      </div>
      <div v-if="$route.meta.showNav" :style="'background-color:'+ bgcColor">
        <slot name="fixed"></slot>
      </div>
    </div>
    <div
        class="scroll-list-wrap"
    >
      <cube-scroll
          ref="scroll"
          class="scroll-height-set"
          @scroll="scroll"
          :scrollEvents="['scroll']"
      >
        <slot></slot>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleNav",
  props: [
    'bgcColor',
    'color',
    'bottom'
  ],
  data() {
    return {
      toggle: true,
      randomKey: 0
    }
  },
  methods: {
    scroll(e) {
      if (this.$route.meta.name === '行政服务工作台'
          // this.$route.meta.name ==='审批列表' ||
          // this.$route.meta.name ==='我的审批'
      ) {
        // if (e.y < -60) {
        //   this.toggle = false
        // }
        // if (e.y > -60) {
        //   this.toggle = true
        // }
      }
    }
  },
}
</script>

<style scoped lang="stylus">
.scroll-list-wrap
  overflow: hidden

</style>