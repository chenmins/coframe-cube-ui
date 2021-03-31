<template>
  <div id="yuyue_success">
    <header>
      <img class="success_icon" src="../../assets/icons/yuyue-success.png" alt="">
      <div>{{$route.params.item }}成功</div>
    </header>
    <div class="container">
      <div class="border_bold"></div>
      <div class="box">
        <h1>{{ $route.params.item }}-{{ $route.params.info.type }}</h1>
        <div class="box_content">
          <div>姓名：<span>{{userInfo.name}}</span></div>
          <div>部门：<span>{{$route.params.info.action}}</span></div>
          <div>时间：<span>{{$dayjs($route.params.info.startTime).format('HH:mm')+ '-' + $dayjs($route.params.info.endTime).format('HH:mm')}}</span></div>
        </div>
      </div>
    </div>
    <div class="footer" @click="done">
      好的
    </div>
  </div>
</template>

<script>
export default {
  name: "YuYueSuccess",
  methods:{
    done(){
      this.$router.push({name:'YuYueCenter'})
    }
  },
}
</script>

<style scoped lang="stylus">
#yuyue_success
  .footer
    width: 150px;
    height: 40px;
    background: rgba(#fff,.7);
    border-radius: 20px;
    line-height 40px
    position absolute
    bottom 30px
    left 50%
    font-size 14px
    transform translateX(-50%)
  header
    height: 234px;
    background: linear-gradient(119deg, #19D4FF 0%, #0F97FB 100%);
    color #fff
    .success_icon
      margin 71px auto 19px
      width: 56px;
      height: 56px;
  .container
    margin-top -40px
    margin-left 7px
    margin-right 7px
    .border_bold
      height: 9px;
      background: #1C98EA;
      border-radius: 5px;
    .box
      margin -4px 10px 0
      height: 252px;
      background: #FFFFFF;
      box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.09);
      text-align left
      padding 0 28px
      h1
        padding 28px 0
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 28px;
        border-bottom 1px dashed #EBEBEB
      .box_content
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 20px;
        margin-top 28px
        div
          margin 16px 0
          color #999999
        span
          color #000
</style>