<template>
  <div id="cultural_app">
    <div class="bgc"></div>
    <SlideNav
        :customer="true"
        class="slide_nav"
        :center="true"
        :show-slider="true"
        :show-back-icon="true"
        :selected-label="selectedLabel" :tabs="tabs" :showBackIcon="true"
        @changeHandle="changeHandle"
        @back="$router.push({name:'MainMenu'})"
    >
      <router-view></router-view>
    </SlideNav>
    <div class="send" @click="Send" v-if="$route.fullPath.includes('/Communication')">
      <Icon svg-name="edit" style="height: 24px;width: 24px"></Icon>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  components: {
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
  methods: {
    Send() {
      this.$router.push({name: '发帖子'})
    },
  }
}
</script>
<style lang="stylus" scoped>
#cultural_app
  height 100%
  padding-top -100px
  .bgc
    position: absolute;
    top 0
    width: 100%;
    height: 154px;
    background: linear-gradient(119deg, #19D4FF 0%, #0F97FB 100%);
  >>>.cube-tab-bar-slider
    margin-left 35px
    max-width: 20px;
    height: 4px;
    background: #FFFFFF;
    border-radius: 2px;
  >>>.cube-tab
    min-width 70px
    font-size: 14px;
    color #fff
    font-weight: 500;
    line-height: 22px;
  >>>.cube-tab_active
    font-size 16px
.slide_nav
  background-color: #fff;
.send
  border-radius 50%
  padding 10px
  color $custom-active-color
  font-size 16px
  position fixed
  z-index 20
  bottom 60px
  right 20px
  background-color #fff
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  .iconfont
    color $custom-active-color
</style>