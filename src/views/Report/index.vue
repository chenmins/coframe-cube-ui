<template>
  <div id="report-homepage">
    <header>
      近期行程及身体情况报备
    </header>
    <main>
      <section>
        亲爱的同事们，考虑到目前全国各地区有新增疫情，为了了解大家信息，保障大家安全，我们发起员工信息报备，如果您或同住人有去过高风险地区，请尽快进行信息报备，期望大家如实填写，谢谢！
      </section>
      <section>
        注：如您的热河信息有变化，请及时在此页面再次提交！
      </section>
    </main>
    <cube-button @click="$router.push({name:'ReportFrom'})">信息更新</cube-button>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="stylus">
#report-homepage
  text-align left
  margin 0 20px
  position relative
  height calc(100% - 90px)
  header
    font-size 20px
    margin 30px 20px
    text-align left
  main
    font-size 13px
    line-height 16px
    section
      margin-bottom 30px
  >>>.cube-btn
    position absolute
    bottom 60px
    background-color $custom-active-color
    border-radius 10px
</style>