<template>
<div id="information">
    <div class="top">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
      <div class="dot four"></div>
      <div class="right"></div>
      <div class="avatar_group">
        <Icon class-name="bgc_svg" svg-name="addressbook-information" ></Icon>
        <img class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__8e72ac7af1d0cc1029636e2300dae3a7.png" alt="">
        <div class="information">
          <span style="font-size: 22px;font-weight: 500;line-height: 30px;">kyrene</span>
          <span style="line-height: 20px;font-size: 14px">高级ui设计师</span>
        </div>
      </div>
    </div>
  <div class="bottom">
    <img src="../../assets/icons/addressbook-bgc.png" alt="" class="bottom_bgc">
    <h1>基础资料</h1>
    <div class="content">
      <div class="item">
        <div class="item_left"></div>
        <div class="item_right">
          <div class="num">92982828@qq.com</div>
          <div class="name">邮箱</div>
        </div>
      </div>
      <div class="item">
        <div class="item_left"></div>
        <div class="item_right">
          <div class="num">92982828@qq.com</div>
          <div class="name">邮箱</div>
        </div>
      </div>
      <div class="item">
        <div class="item_left"></div>
        <div class="item_right">
          <div class="num">92982828@qq.com</div>
          <div class="name">邮箱</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ListLayout from "@/components/AddressBox/ListLayout";
import axios from "axios";
export default {
name: "Information",
  components:{
    ListLayout
  },
  data(){
    return{
      employee:{},
      orient:{
        name:'',
        company:''
      }

    }
  },
  created() {
    axios.get(`/api/coframe/employees/${this.$route.params.id}`).then(res=>{
      this.employee = res.data
    })
  },
  mounted() {
    // this.orient.name = this.$store.state.Eposition.name
    // axios.get(`/api/coframe/organizations/${this.$store.state.Eposition.id}`).then(res=>{
    //   this.orient.company  = res.data.code
    //   console.log(res.data)
    // })
  },
  methods:{
    goPosition(){
      this.$router.push({name:'Staff',params:{id:this.$store.state.Eposition.id}})
    }
  },
}
</script>

<style scoped lang="stylus">
#information
  .top
    position: relative;
    z-index -10
    .dot
      position: absolute;
      border-radius 50%
      z-index -1
    .one
      width: 18px;
      height: 18px;
      background: #0D7BFF;
      left 50%
      top 36px
      z-index 10
    .two
      width: 10px;
      height: 10px;
      left 20%
      top 88px
      background: #0D7BFF;
    .three
      width: 10px;
      height: 10px;
      left 10%
      top 75px
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

  .bottom
    position relative
    z-index -5
    height calc(100vh - 288px)
    width 100vw
    padding-top 30px
    padding-left 40px
    .bottom_bgc
      position absolute
      height 100%
      left 0
      top -30px
      width 100%
      z-index -1
    h1,.content
      z-index 10
    h1
      display block
      text-align left
      font-size 18px
      font-weight: 500;
      color: #333333;
      line-height: 25px;
    .content
      display flex
      flex-direction column
      .item
        display flex
        margin-top 27px
      .item_left
        margin-right 17px
        margin-top 4px
        height 10px
        width 10px
        background-color #ffffff
        border 3px solid #0099FF
        border-radius 50%
        position relative
        &:after
          content ''
          width 1px
          background-color rgba(#0251FE,.3)
          height 64px
          top 13px
          left 50%
          margin-left -1px
          position absolute
      .item_right
        text-align left
        .num
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 25px;
        .name
          font-family: PingFangSC-Semibold, PingFang SC;
          margin-top 6px
          color: #666666;
          line-height: 20px;
          font-size 14px
  .right
      width 213px
      height 100%
      background: linear-gradient(149deg, #E5ECFF 0%, rgba(243, 245, 251, 0) 100%);
      border-top-left-radius 70%
      border-top-right-radius 30%
      position absolute
      right 0



header
  height 60px
  display flex
  align-items center
  padding 20px 40px
  background-color: #fff;
  margin-bottom 10px
  .avatar
    margin-right: 10px;
  .right
    text-align left
    height 40px
    display flex
    flex-direction column
    justify-content: space-between;
    font-size 16px
  .position_name
    font-size 14px
    color rgb(203,203,203)
main
  background-color: #fff;
  .information_box
    height 60px
    line-height 60px
    text-align left
    padding-left 30px
    font-size 14px
    span
      display inline-block
      margin-left 10px
    .position
      height 60px
      display flex
      align-items center
      position relative
      .position_msg
        line-height 23px
        margin-left 20px
        .position_name
          font-size 16px
        .company_name
          font-size 12px
          color rgb(203,203,203)
      .cubeic-arrow
        position absolute
        right 20px
        color rgb(203,203,203)
  .border_bottom
    border-bottom 1px solid rgb(239,239,239)
</style>