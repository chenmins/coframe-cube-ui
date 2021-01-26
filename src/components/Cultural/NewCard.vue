<template>
  <div id="New_card" @click="read">
    <img
        height="60"
        src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__5e9d0febbb4b6d4c69ea2a2bbb6f911f.svg"
        alt="">
    <div class="box">
      <div class="title">
        <img
            class="hot"
            height="20"
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__44f88a086fab713b5d7f2c58e53833ed.png"
            alt="">
        <span>信息技术中心研发出新的功能，办公效率提升200%</span>
      </div>
      <div class="footer">
        <div class="from"><span>来源：</span>百度新闻</div>
        <div class="date">2020-02-15        <span> > </span></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCard",
  methods: {
    read() {
      this.$emit('read')
    }
  }
}
</script>

<style scoped lang="stylus">
#New_card
  display flex
  padding-bottom 10px
  border-bottom 1px solid rgba($custom-gray,.3)
.logo
  flex 0
.box
  margin 0 10px
.title
  display flex
  align-items flex-start
  text-align left
  line-height 20px
  font-size 14px
.footer
  margin-top 5px
  display flex
  justify-content: space-between;
  font-size 10px
  color $custom-gray


</style>