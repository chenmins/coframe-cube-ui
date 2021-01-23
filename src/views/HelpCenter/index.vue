<template>
  <div id="help_center">
    <router-view></router-view>
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
  height 100%

</style>