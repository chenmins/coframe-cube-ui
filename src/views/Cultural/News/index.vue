<template>
  <div id="notice_app">
    <img width="100%" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__69978fede7bad62225395de43eb158f3.svg" alt="">
    <SlideNav @changeHandle="changeHandle"  :selected-label="selectedLabel" :tabs="tabs" showSlider >
      <NewCard  v-for="item in news" :data="item" style="margin:  20px"></NewCard>
    </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import NewCard from "@/components/Cultural/NewCard";
export default {
  name: "index",
  components:{
    NewCard,
    SlideNav
  },
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
          heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
        }, {
          label: '热点精选',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }, {
          label: '时事要闻',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }
      ],
      news:[]
    }
  },
  created() {
    this.news = this.$store.state.Cultural.news.all
  },
  methods:{
    read(){
      this.$router.push({name:'公告详情',params:{id:1}})
    },
    changeHandle(e){
      switch (e){
        case '全部':
          this.news = this.$store.state.Cultural.news.all
          break
        case '热点精选':
          this.news = this.$store.state.Cultural.news.hot
          break
        case '时事要闻':
          this.news = this.$store.state.Cultural.news.events
          break
      }
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