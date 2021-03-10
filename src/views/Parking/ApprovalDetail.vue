<template>
  <div id="approval_detail">
     <TitleNav bgc-color="#fff">
       <LayOut  class="item">
         <div class="header">
           <div>
             <h1>技术部-王小二</h1>
             <span>申请人</span>
           </div>
         </div>
         <div class="body">
           <div><span>车牌号：</span> 京A BL192s</div>
           <div><span>姓名：</span> 京A BL192</div>
           <div><span>入院日期：</span> 2020-12-20 15:00</div>
         </div>
       </LayOut>

       <Reserve
           class="box_2"
           :status="status"
           :text-value="model.textareaValue"
       >
       </Reserve>
     </TitleNav>
    <footer>
      <button class="rej" @click="$router.push({name:'RejectConfirm'})">拒绝</button>
      <button class="pass">通过</button>
    </footer>
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
.item
  font-size 12px
  position relative
  margin 12px
  border-radius 10px

  .header
    border-bottom 1px solid $custom-border-color
    padding 18px
    text-align left
    display flex
    align-items center
    &:before
      content:''
      display block
      height 3px
      width 3px
      border 2px solid #0099FF
      border-radius 50%
      margin-right 7px
    h1
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
    span
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    span:nth-child(1)
      margin-right 40px

  .body
    padding 20px
    text-align left
    display flex
    flex-direction column
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    span
      margin 5px
      display inline-block
      color #999
  .complete_svg
    height 80px
    width 80px
    position: absolute;
    bottom 10px
    right 10px
    transform rotate(-45deg) scale(.8)
  .tag
    position absolute
    top 16px
    right 20px
    border-radius 20px
footer
  position fixed
  background-color #fff
  bottom 0
  width 100%
  display flex
  z-index 11

  button
    height 40px
    width 100%
    margin 12px 24px
    border-radius 20px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    border 1px solid #0099FF
    background-color #fff
    color #0099FF

    &:nth-child(2)
      background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
      color #fff
      border none

#approval_detail
  font-size 12px
  height $custom-bgc-height
  >>>.cube-form-item
  >>>.cube-btn
    font-size 12px
  .box_2
    border-radius 10px
    margin 8px 12px 20px

  .box
    border-radius 10px
    display flex
    margin 8px 12px 20px
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