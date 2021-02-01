<template>
  <div id="Recorded">
    <LayOut class="item">
      <header class="border_bottom" r>技术部-张小果</header>
      <main>
        <div>车牌号：京A BL192</div>
        <div>姓名：晓兰兰</div>
        <div>手机号：18903347000</div>
        <div>技术部-张小果</div>
      </main>
    </LayOut>
    <LayOut class="item">
      <header>审批流程</header>
      <main>
        <div class="line">
          <div class="left">
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__233c059c0612bf471d8d782755934664.svg"
                alt="">
            <span>行政部</span>张明
          </div>
          <div>
            已同意.12/21 16:00
          </div>
        </div>
        <div class="line">
          <div class="left">
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__233c059c0612bf471d8d782755934664.svg"
                alt="">
            <span>行政部</span>张明
          </div>
          <div>
            已同意.12/21 16:00
          </div>
        </div>
        <div class="line">
          <div class="left">
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__233c059c0612bf471d8d782755934664.svg"
                alt="">
            <span>行政部</span>张明
          </div>
          <div>
            已同意.12/21 16:00
          </div>
        </div>
        <div class="line">
          <div class="left">
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__233c059c0612bf471d8d782755934664.svg"
                alt="">
            <span>行政部</span>张明
          </div>
          <div>
            已同意.12/21 16:00
          </div>
        </div>
        <div class="line">
          <div class="left">
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__233c059c0612bf471d8d782755934664.svg"
                alt="">
            <span>行政部</span>张明
          </div>
          <div>
            已同意.12/21 16:00
          </div>
        </div>
      </main>
    </LayOut>
  </div>
</template>

<script>
export default {
  name: "Recorded"
}
</script>

<style scoped lang="stylus">

#Recorded
  padding 20px

  .item
    padding 10px
    border-radius 10px
    margin-bottom 10px
    text-align left
    font-size 12px

    header
      padding-bottom 16px
      font-size 14px

    .border_bottom
      border-bottom 1px solid $custom-border-color

    main
      padding-top 10

      div
        margin 10px

    .line
      display flex
      align-items center
      justify-content space-between
      .left
        display flex
        align-items center
        img,span
          margin-right 7px
</style>