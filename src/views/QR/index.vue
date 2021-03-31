<template>
  <div id="container">
    <TitleNav>
      <Card :shadow="true" class="card">
        <h1>访客预约</h1>
        <div class="notice">请出示给安保人员进行安检</div>
<!--        <img src="" alt="">-->
        <div style="width: 212px;height: 230px;background-color: red;margin-bottom: 35px"></div>
      </Card>
    </TitleNav>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";
export default {
  name: "index",
  components: {Card}
}
</script>

<style scoped lang="stylus">
#container
  background  url("../../assets/icons/bg.webp") no-repeat
  background-size 100%
  height 100vh
  .card
    display flex
    flex-direction column
    justify-content: center;
    align-items center
    margin 50px
    h1
      margin 12px
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 25px;
    .notice
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
      margin-bottom 20px
</style>