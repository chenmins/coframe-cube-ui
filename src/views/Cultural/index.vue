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
      <div id="common">
        <div class="img_box">
          <img src="../../assets/icons/news.png" alt="">
        </div>
        <div style="background-color: #F5F6FA">
          <router-view></router-view>
        </div>
      </div>
    </SlideNav>
    <Send @Send="Send"></Send>
  </div>

</template>

<script type="text/ecmascript-6">

import SlideNav from "@/components/Cultural/SlideNav";
import {CulturalControllerImpl} from '@controller'
import {BaseVue} from "@/libs";
import Send from "@/views/Cultural/components/Send";

export default {
  components: {
    Send,
    SlideNav
  },
  mixins:[BaseVue],
  data() {
    return {
      selectedLabel: this.$route.meta.name,
      tabs: [
        {
          label: '公告列表',
        }, {
          label: '企业新闻',
        }, {
          label: '交流圈',
        }
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init(){
      let resp
      resp = await this.dispatch(CulturalControllerImpl.allPageSreach,{
        pageNo:1,
        pageSize:20
      })
      if(!resp.error) {
        this.$store.commit('Cultural/setAllData',resp.data.body)
      }
    },
    Send() {
      this.$router.push({name: '发帖子'})
    },
  }
}
</script>
<style lang="stylus" scoped>

.image
  flex-shrink 0
  height 94px
  width 94px
  overflow hidden
  display inline-block
  margin-right 16px
  border-radius 6px

#common
  height $custom-bgc-height
  text-align left
  .img_box
    height 120px
    margin 0 12px
    overflow hidden
    border-radius: 6px;
    box-shadow: 0px 3px 7px 0px rgba(17, 157, 252, 0.16);
    position relative

    img
      position: absolute;
      left -80px
      top -240px
      transform scale(.9)

  >>> .cube-tab
    min-width 70px
    font-weight: 500;
    font-size 14px
    line-height: 22px;
    color #000
    background-color #F6F6F6
    border-radius 15px
    margin-right 12px
    padding 5px

  >>> .cube-tab_active
    background-color #0251FE
    border-radius 15px
    font-size 14px
    color #fff
    font-weight: 500;
    position relative

    &:after
      content ''
      position absolute
      bottom 2px
      left 50%
      transform translateX(-50%)
      height 5px
      width 5px
      border-radius 50%
      background-color #fff

.content
  margin 5px 20px 10px

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
    margin-left 40px
    max-width: 20px;
    height: 4px;
    background: #FFFFFF;
    border-radius: 2px;
  >>>.cube-tab
    min-width 70px
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color #fff
  >>>.cube-tab_active
    font-size 16px
.slide_nav
  background-color: #fff;

</style>