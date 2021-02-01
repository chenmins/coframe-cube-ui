<template>
  <div id="approval_detail">
     <LayOut class="box">
       <div class="header">
         技术部-张小果
       </div>
       <div class="body">
         <div>车牌号：京A BL192</div>
         <div>姓名：晓兰兰</div>
         <div>手机号：18903347000</div>
         <div>入园日期：2020-12-20 15:00</div>
       </div>
     </LayOut>
      <Reserve
          class="box_2"
          :status="status"
          :text-value="model.textareaValue"
      >
      </Reserve>
  </div>
</template>

<script>
import Reserve from "@/components/Reserve";

export default {
  name: "ApprovalDetail",
  components: {Reserve},
  data(){
    return {
      schema:'',
      status: 'approve',
      model: {
        textareaValue: '',
      },
    }
  }
}
</script>

<style scoped lang="stylus">
#approval_detail
  padding 20px
  font-size 12px
  height $viewpoint-height
  >>>.cube-form-item
  >>>.cube-btn
    font-size 12px
  .box_2
    border-radius 10px
  .box
    border-radius 10px
    display flex
    margin-bottom 20px
    padding 20px
    flex-direction column
    text-align left

    .header
      border-bottom 1px solid $custom-border-color
      padding-bottom 16px
    .body
      padding-top 16px
      div
        margin 10px
</style>