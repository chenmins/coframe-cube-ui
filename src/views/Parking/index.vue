<template>
  <div id="Parking">
    <router-view></router-view>
    <Tabbar v-show="$route.meta.showTabbar" :tabs="tabs" :tabMap="tabMap"></Tabbar>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "index",
  components: {
    SlideNav,
  },
  data() {
    return {
      tabMap: {
        车辆申请: "Parking",
        我的审批: "MyApproval",
        外来车辆备案: "OutsideCar",
      },
      tabs: [
        {
          label: "车辆申请",
          icon: "Parking-home",
        },
        {
          label: "我的审批",
          icon: "Parking-shuazi",
        },
        {
          label: "外来车辆备案",
          icon: "Parking-dui",
        },
      ],
    };
  },
  methods: {
    demo() {
      console.log(this.$route.name);
    },
  },
};
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
