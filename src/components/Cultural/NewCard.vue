<template>
  <div id="New_card" @click="read">
    <img
        height="60"
        :src="data.src"
        alt="">
    <div class="box">
      <div class="title">
        <img
            class="hot"
            height="20"
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__44f88a086fab713b5d7f2c58e53833ed.png"
            alt="">
        <span>{{data.title}}%</span>
      </div>
      <div class="footer">
        <div class="from"><span>来源：</span>{{data.from}}</div>
        <div class="date">{{data.time}}<span> > </span></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCard",
  props:[
      'data'
  ],
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