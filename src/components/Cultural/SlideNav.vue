<template>
  <div >
    <div :class="'header '+ headerClass" >
      <i class="cubeic-back icon" v-if="showBackIcon"></i>

<!--      todo 直接替换数据而不是切换路由-->
      <cube-tab-bar  v-model="componentLabel"
                     :style="center?'width: 100%':''"
                    @change="changeHandle"
                     :showSlider="showSlider"
                     class="nav_tabbar">
        <cube-tab  v-for="(item, index) in tabs" :label="item.label" :icon="item.icon" :key="item.label"></cube-tab>
      </cube-tab-bar>
    </div>

    <cube-tab-panels v-model="componentLabel">
      <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <slot :scoped="item"></slot>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  name: "SlideNav",
  props:[
      'selectedLabel',
      'tabs',
      'showBackIcon','showSlider','center','headerClass'
  ],
  data() {
    return {
      componentLabel:this.selectedLabel
  //     selectedLabel: '公告列表',
  //     tabs: [
  //       {
  //         label: 'Notice',
  //         heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
  //       }, {
  //         label: 'News',
  //         heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
  //       }, {
  //         label: 'Communication',
  //         heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
  //       }
  //     ]
    }
  },
  methods:{
    changeHandle(e){
      // this.$emit('selectLabel',e)
      // this.$router.push({name:`${e}`})
    }
  },
  watch: {
    componentLabel (newV) {
      this.componentLabel = newV
      if(newV === '全部' && this.$route.fullPath.includes('/Cultural/News/')){
        this.$router.push({name:`企业新闻`})
        return
      }
      this.$router.push({name:`${newV}`})

    }
  }

}
</script>
<style lang="stylus"  scoped>
.nav_tabbar
  text-align left
  height 40px
  font-size 14px
  display flex
  justify-content: flex-start;
.cube-tab
  min-width 70px
.cube-tab_active
  color $custom-active-color
  font-size 16px
.header
  margin 0 15px
  padding 10px 0
  display flex
  align-items center
  justify-content flex-start
.icon
  font-size 14px
  padding 0 10px
.com_header
  background-color: #fff;
  margin 0 0 10px
  padding 0
.tabs-basic-view
  .cube-tab-bar
    background-color: #fff
  .cube-tab-panels
    background-color: #fff
  .tab-panel-li
    padding: 0 16px
    height: 40px
    line-height: 40px
    border-top: 1px solid #eee
    &:last-child
      border-bottom: 1px solid #eee
</style>