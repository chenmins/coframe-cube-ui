<template>
  <TitleNav bgc-color="#fff">
    <h1 class="font-blod" style="font-size: 20px">行政服务平台预约中心</h1>
    <div class="container clear-fix">
      <Card class="card" v-for="(item,index) in routerMap" :key="index" @clicked="$router.push({name:'YuYueItem',params:{id:item.text,value:item.value}})">
        <div class="group">
          <Icon :svg-name="item.icon" class-name="svg_reserve "></Icon>
          <div class="font-blod" style="font-size: 14px">{{item.text}}</div>
        </div>
      </Card>


    </div>
    <div class="font-normal rules">
      <div>预约规则说明：</div>
      <div>1、每人每天可预约1次；</div>
      <div>2、预约成功不能按时到场的请提前1小时取消以便其他同事使用。</div>
      <div>3、预约成功后没有按时到场，也没有取消预约视为违约。</div>
      <div>4、每人每月违约5次后不允许使用预约功能；</div>
    </div>
  </TitleNav>

</template>

<script>
import Card from "@/components/UI/Card";

const routerMap = [
  {
    text:'医务室预约',
    value:'yiwushi',
    icon:'reserve-yiwushi'

  },
  {
    text:'理发室预约',
    value:'lifashi',
    icon:'reserve-lifashi'

  },
  {
    text:'零点餐厅预约',
    value:'lingdian',
    icon:'reserve-lingdian'

  },
  {
    text:'衣物干洗预约',
    value:'yiwuganxi',
    icon:'reserve-xiyi'

  },
  {
    text:'会议室预约',
    value:'huiyishi',
    icon:'reserve-huiyishi'

  },
  {
    text:'文印室预约',
    value:'wenyingshi',
    icon:'reserve-wenyingshi'

  },
  {
    text:'库房预约',
    value:'kufang',
    icon:'reserve-kuyue'

  },
]

export default {
  name: "YuYueCenter",
  components:{
    Card
  },
  data(){
    return {
      routerMap:routerMap
    }
  },
  mounted(){
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 130}px`
  }
}
</script>

<style scoped lang="stylus">
h1
  margin 24PX 12PX
  position relative
  text-align left
  margin-left 20px

  &:after
    content ''
    position absolute
    height 7px
    width 188px
    left 0
    bottom -3px
    background: #0099FF;
    border-radius: 3px;
    opacity: 0.2;

.container
  >>>#card
    margin 0
    margin-bottom 20px
  .card
    margin-left 20px!important
    float left
    width calc(50% - 70px)
    height: 128px;
    background: #FFFFFF;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    position: relative;

    .group
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

    .svg_reserve
      height 62px
      width 62px
      margin-bottom: 15px;

.rules
  font-size: 20px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.5833333333333334);
  color: #999999;
  text-align left
  margin 20px
  min-width 200vw

  div
    margin 10px

</style>