<template>
  <div id="Parking">
    <router-view></router-view>
    <footer v-show="!$route.meta.showBottom">
      <span :class="$route.name==='Parking'?'active':''"
            @click="!($route.name ==='Parking')  && $router.push({name:'Parking'})">车辆申请</span>
      <span :class="$route.name==='MyApproval'?'active':''"
            @click="!($route.name==='MyApproval') && $router.push({name:'MyApproval'})">我的审批</span>
      <span :class="$route.name==='OutsideCar'?'active':''"
            @click="!($route.name==='OutsideCar') && $router.push({name:'OutsideCar'})">外来车辆备案</span>
    </footer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "index",
  components: {
    SlideNav
  },
  data() {
    return {}
  },
  methods: {
    demo() {
      console.log(this.$route.name)
    }
  }
}
</script>

<style scoped lang="stylus">
.scroll-list-wrap
  height $custom-bgc-height

#Parking
  height 100vh
  overflow: hidden;

  footer
    background-color #ffffff
    position fixed
    bottom 0
    width 100%
    height 60px
    line-height 60px
    display flex
    justify-content space-evenly
    z-index 50

    .active
      color $custom-active-color

</style>