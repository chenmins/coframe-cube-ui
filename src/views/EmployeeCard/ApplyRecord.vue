<template>
  <div id="ApplyRecord">
    <TitleNav bgc-color="#fff">
      <Application v-if="$route.params.title==='申请办卡'" v-for="i in applyList" :list="i"></Application>
      <Patch v-else-if="$route.params.title==='补卡'" v-for="i in applyList" :list="i"></Patch>
      <Loss v-else-if="$route.params.title==='挂失'" v-for="i in applyList" :list="i"></Loss>
    </TitleNav>
  </div>
</template>

<script>
import Application from "@/views/EmployeeCard/components/Application";
import Patch from "@/views/EmployeeCard/components/Patch";
import Loss from "@/views/EmployeeCard/components/Loss";
import {WorkCartControllerImpl} from "@controller";
import {mapActions, mapState} from "vuex";

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
    // this.list = this.$route.params.list
    // this.getCardRecord()
    this.queryWorkCardApplyRecord(this.$route.params.content)
    console.log(this.applyList)
  },
  methods:{
    ...mapActions('EmployeeCard',['queryWorkCardApplyRecord']),

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
  },
  computed:{
    ...mapState('EmployeeCard', ['applyList'])
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