
<template>
  <div id="index">
    <router-view></router-view>
    <Tabbar v-show="$route.meta.showTabbar" :tabs="tabs" :tabMap="tabMap"></Tabbar>
  </div>
</template>

<script>
export default {
  name: "Guest",
  data(){
    return{
      tabMap:{
        '访客预约': 'Guest',
        '我的审批': 'Approve',
        '我的预约': 'Reserve',
      },
      tabs: [
        {
          label: '访客预约',
          icon: 'guest-',

        }, {
          label: '我的审批',
          icon: 'guest-shenpi'

        },{
          label: '我的预约',
          icon: 'guest-yuyue'

        }]
    }
  }

}
</script>

<style scoped lang="stylus">

.scroll-list-wrap
  height $custom-bgc-height
#index
  main
    .notice
      line-height 20px
      text-align left
      margin 20px
      padding-bottom 40px
      font-size 14px

      li
        list-style decimal
        margin-left 20px

  footer
    height 60px
    background-color: #fff;
    display flex
    position fixed
    width 100%
    bottom 0
    z-index 60
    a
      color black
      flex 1
      font-size 14px
      border 1px solid rgba($custom-border-color, .2)
      line-height 60px

      &.active
        color $custom-active-color




>>> .cube-form-label
  font-size 12px
  color $custom-gray

>>> .border-bottom-1px
  border-bottom 1px solid rgba($custom-border-color, .1)

.add-group
  border-bottom 1px solid rgba($custom-border-color, .1)
  & >>> .cube-form-group-legend
    height 40px
    line-height 40px
    padding 0 10px

>>> .cube-radio_selected .cube-radio-ui
  background-color $custom-active-color

>>> input
  text-align center

>>> .cube-btn
  background-color $custom-active-color
  border-radius 10px
  width 80%
  margin 20px auto
  height 40px
  line-height 10px
</style>