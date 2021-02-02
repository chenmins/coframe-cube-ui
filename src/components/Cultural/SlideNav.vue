<template>
  <div >
    <div :class="'header '+ headerClass" >
      <i class="cubeic-back icon" v-if="showBackIcon" @click="$emit('back')"></i>

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
    }
  },
  methods:{
    changeHandle(e){
      // this.$emit('selectLabel',e)
      // this.$router.push({name:`${e}`})
      this.$emit('changeHandle',e)
    }
  },
  watch: {
    componentLabel (newV) {
      this.$emit('LabelChanged',newV)
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