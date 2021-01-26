<template>
  <div id="notice_app">
    <img width="100%" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__69978fede7bad62225395de43eb158f3.svg" alt="">
    <SlideNav @changeHandle="changeHandle"  :selected-label="selectedLabel" :tabs="tabs" showSlider >
      <router-view style="margin:0 20px" ></router-view>
    </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
export default {
  name: "index",
  components:{
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
      ]
    }
  }
}
</script>

<style scoped>

</style>