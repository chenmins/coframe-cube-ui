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
import {WorkCartControllerImpl} from "@controller";

export default {
  name: "ApplyRecord",
  components:{
    Loss,
    Patch,
    Application,
  },
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.list = this.$route.params.list
    this.getCardRecord()
  },
  methods:{
    //todo 卡片处理类型
    async getCardRecord(){
      let resp

      resp = await this.dispatch(WorkCartControllerImpl.queryWorkCardRecord)
      if(!resp.error){
        console.log(resp)
      }
    }
  },
  mounted() {
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