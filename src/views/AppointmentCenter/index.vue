<template>
  <div>
    <router-view></router-view>
    <div class="footer">
      <div @click="$router.push({name:'YuYueCenter'})">
        <Icon v-if="$route.meta.name==='预约中心'" svg-name="reserve-center-light" class-name="footer_svg"></Icon>
        <Icon v-else svg-name="reserve-center" class-name="footer_svg"></Icon>
        <div class="footer_text">预约中心</div>
      </div>
      <div @click="$router.push({name:'MyYuYue'})">
        <Icon v-if="$route.meta.name==='我的预约'" svg-name="reserve-myreserve-light" class-name="footer_svg"></Icon>
        <Icon v-else svg-name="reserve-myreserve" class-name="footer_svg"></Icon>
        <div class="footer_text">我的预约</div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'index',


}

</script>

<style scoped lang="stylus">

.footer
  position fixed
  bottom 0
  width 100%
  height 60px
  background-color #fff
  z-index 10
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
  display flex
  align-items center
  justify-content: space-evenly;

  .footer_svg
    height 24px
    width 24px

  .footer_text
    font-size: 20px;
    -webkit-transform-origin-x: 50%;
    -webkit-transform: scale(0.5833333333333334);
    font-weight: 500;
    line-height: 14px;
</style>