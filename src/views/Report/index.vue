<template>
  <div id="report-homepage">
    <Icon svg-name="bg" class-name="bg"></Icon>
    <TitleNav  bgc-color="transparent" color="#333">
      <header>
        <span style="margin-right: 86px">近期行程及身体情况报备</span>
        <img height="88px" src="../../assets/icons/66@2x.png" alt="">
      </header>
      <main>
        <section>
          亲爱的同事们，考虑到目前全国各地区有新增疫情，为了了解大家信息，保障大家安全，我们发起员工信息报备，如果您或同住人有去过高风险地区，请尽快进行信息报备，期望大家如实填写，谢谢！
        </section>
      </main>
    </TitleNav>
    <footer>
      <section>
        注：如您的热河信息有变化，请及时在此页面再次提交！
      </section>
      <cube-button @click="$router.push({name:'ReportFrom'})">信息更新</cube-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum}px`
  }
}
</script>

<style scoped lang="stylus">
#report-homepage
  text-align left
  position relative
  height $custom-bgc-height
  overflow: hidden;
  .bg
    position absolute
    top 70px
    left 0
    width 100vw
    transform scale(2)
    z-index 1
  header
    display flex
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    margin 30px 36px
    text-align left
  main
    font-size 13px
    line-height 16px
    margin 30px 16px
    section
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 24px;
  footer
    position absolute
    bottom 0
    width calc(100% - 40px)
    z-index 12
    section
      width 100%
      text-align center
      font-size: 10px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #999999;
      line-height: 14px;
  >>>.cube-btn
    margin-top 18px
    margin-left 20px
    height: 40px;
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 20px;
    line-height 0
    font-size: 14px;
</style>