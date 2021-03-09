<template>
  <div id="ApplyRecord">
    <TitleNav bgc-color="#fff">
      <Application></Application>
      <Patch></Patch>
      <Loss></Loss>
    </TitleNav>
  </div>
</template>

<script>
import Application from "@/views/EmployeeCard/components/Application";
import Patch from "@/views/EmployeeCard/components/Patch";
import Loss from "@/views/EmployeeCard/components/Loss";
export default {
  name: "ApplyRecord",
  components:{
    Loss,
    Patch,
    Application,
  },
  mounted() {
    console.log(this)
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 60}px`
  }
}
</script>

<style scoped lang="stylus">
#ApplyRecord
  height $viewpoint-height
  background-color $my-bgc-color
  .record
    margin-bottom 20px
    border-top 1px solid $custom-border-color
    font-size 12px
    text-align left
    padding 20px
    div
      padding-bottom 10px
      margin-bottom 10px
    p
      margin 10px
</style>