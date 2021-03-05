<template>
  <div id="Preview">
    <div class="top">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
      <div class="dot four"></div>
      <div class="right"></div>
      <div class="avatar_group">
      </div>
    </div>
      <FloorSelect
          @confirm="submit" bg-color="transparent" style="position: relative;z-index: 10;">
        <div class="card">
          <div class="card_content">
            <span class="card_num">{{cardInfo.name.id}}</span>
            <div class="card_avatar">
              <!--            <img src="" alt="">-->
              <div class="avatar_img"></div>
              <img class="avatar_edit" src="../../assets/icons/employee_edit.webp" alt="">
              <span class="avatar_name">{{cardInfo.name.userName}}</span>
            </div>
          </div>
          <div class="card_content_bottom">
            <div class="content_left">
              <span>{{cardInfo.companyName}}</span>
              <span>厚德载物楼4栋303</span>
            </div>
            <div class="content_right">
              <!--            <img src="" alt="">-->
              <div class="content_img"></div>
              <span>{{cardInfo.position}}</span>
            </div>
          </div>
        </div>
      </FloorSelect>
  </div>
</template>

<script>
import {WorkCartControllerImpl} from '@controller'
import EmployeeCard from "@/libs/mixins/EmployeeCard";
import FloorSelect from "@/views/EmployeeCard/components/FloorSelect";
export default {
  name: "Preview",
  components: {FloorSelect},
  mixins:[EmployeeCard],
  data(){
    return {
      cardInfo:{},

    }
  },
  created(){
    this.cardInfo = {...this.$route.params.firstModel}
  },
  methods:{
    async submit(){

      let resp
      let data = {
        userId:this.cardInfo.name.id,
        userName:this.cardInfo.name.userName,
        type:this.cardInfo.cardType,
        reasonsName:this.cardInfo.companyName,
        reasonsCode:this.cardInfo.position,
        floorAuthority:JSON.stringify(this.$route.params.floorModel)
      }
      resp = await this.dispatch(WorkCartControllerImpl.open,data)

    }
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-validator-msg
  display none
>>>.cube-form-item_required .cube-form-label::before
  display none
>>>.bgcolor
  background-color transparent!important

#Preview
  position relative
  .top
    position: fixed;
    width 100%
    top 60px
    background-color transparent
    .right
      width 213px
      height 100%
      background: linear-gradient(149deg, #E5ECFF 0%, rgba(243, 245, 251, 0) 100%);
      border-top-left-radius 70%
      border-top-right-radius 30%
      position absolute
      right 0

    .dot
      position: absolute;
      border-radius 50%
      z-index -1

    .one
      width: 18px;
      height: 18px;
      background: #0D7BFF;
      left 70%
      top 20px
      z-index 10

    .two
      width: 10px;
      height: 10px;
      left 20%
      top 5px
      background: #0D7BFF;

    .three
      width: 10px;
      height: 10px;
      right 60%
      top 20px
      background: #A3BFFF;

    .avatar_group
      position relative
      width 288px
      height 288px
      margin 0 auto

      .bgc_svg
        height 248px
        width 288px
        margin-top 102px

      .avatar
        position absolute
        height 73px
        width 73px
        left 50%
        transform translateX(-50%)
        top 132px
        border-radius 50%

      .information
        position absolute
        top 224px
        left 50%
        transform translateX(-50%)
        display flex
        flex-direction column
        color #fff

  .card
    box-shadow: 0px 7px 14px 0px rgba(104, 171, 255, 0.35);
    margin 49px 27px
    border-radius 20px
    overflow: hidden;
    .card_content
      color #fff
      height: 270px;
      background: linear-gradient(108deg, #89F7FE 0%, #66A6FF 100%);
      position relative
      .card_num
        font-size 12px
        text-align right
        display block
        padding 13px 9px
      .card_avatar
        width: 185px;
        height: 185px;
        border-radius 50%
        position absolute
        top 45%
        left 50%
        transform translate(-50%,-50%)
        .avatar_img
          width: 185px;
          height: 185px;
          background-color #42b983
          border-radius 50%
        .avatar_edit
          height 20px
          width 20px
          padding 5px
          position absolute
          background-color #0099FF
          border-radius 50%
          bottom  10px
          right 10px
        .avatar_name
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 30px;
          display inline-block
          margin-top 10px
    .card_content_bottom
      height 94px
      background-color #fff
      display flex
      align-items center
      justify-content: space-around;
      .content_left
        text-align left
        display flex
        flex-direction column
        span:first-child
          font-size 14px
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        span:nth-child(2)
          font-size 12px
          font-family: PingFangSC-Regular, PingFang SC;
          color: #999999;
          line-height: 17px;
      .content_right
        .content_img
          height 31px
          width 31px
          background-color #42b983
          margin 0 auto
          border-radius 3px
        span
          font-size 12px
          font-family: PingFangSC-Regular, PingFang SC;
          line-height: 17px;

</style>