
<template>
<!--  todo 切换nav使切换数据，路由上加 ?参数，而不是直接切换路由-->
  <div id="cultural_app" >
    <SlideNav class="slide_nav" :selected-label="selectedLabel" :tabs="tabs" :showBackIcon="true" >
      <router-view></router-view>
    </SlideNav>
    <div class="send" @click="Send" v-if="$route.fullPath.includes('/Communication/')">
      <i style="font-size:20px;"  class="'iconfont iconfeedback' "></i>
      <span>发帖子</span>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import SlideNav from "@/components/Cultural/SlideNav";
export default {
  components:{
    SlideNav
  },
  data() {
    return {
      selectedLabel: '公告列表',
      tabs: [
          {
        label: '公告列表',
        heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
      }, {
        label: '企业新闻',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
      }, {
          label: '交流圈',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }
      ]
    }
  },
  methods:{
    Send(){
      this.$router.push({name:'发帖子'})
    }
  }
}
</script>
<style lang="stylus"  scoped>
#cultural_app
  height 100%
.slide_nav
  background-color: #fff;
.send
  border 1px solid $custom-active-color
  padding 8px 20px
  border-radius 20px
  color $custom-active-color
  font-size 16px
  position fixed
  z-index 20
  bottom 60px
  right 20px
  background-color $my-bgc-color
  .iconfont
    color $custom-active-color
</style>