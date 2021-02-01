<template>
  <div id="appointment_admin">
    <router-view style="padding-bottom: 80px;"></router-view>
    <footer>
      <span :class="$route.meta.name === '预约管理'?'active':''"
            @click="$route.meta.name === '预约管理'?'':$router.push({name:'AppointmentAdminList'})"
      >预约列表</span>
      <span :class="$route.meta.name === '发布管理'?'active':''"
            @click="$route.meta.name === '发布管理'?'':$router.push({name:'AppointmentAdminRelease'})"

      >发布管理</span>
    </footer>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      value: '',

    }
  },
}
</script>

<style scoped lang="stylus">
#appointment_admin
  height $viewpoint-height
  background-color $my-bgc-color

  footer
    display flex
    background-color #fff
    height 50px
    line-height 50px
    position fixed
    width 100%
    bottom 0

    span
      flex-grow 1

    .active
      color $custom-active-color
</style>