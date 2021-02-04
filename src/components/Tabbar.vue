<template>
  <cube-tab-bar
      class="tabbar"
      v-model="selectedLabelDefault"
      @click="clickHandler"
      @change="changeHandler">
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <Icon :svg-name="item.icon" class-name="svg_icon"  slot="icon"  height="24px" width="24px" ></Icon>
      <div style="margin-top: 5px;font-size: 10px;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;line-height: 14px;">
        {{item.label}}
      </div>
    </cube-tab>
  </cube-tab-bar>
</template>

<script>
export default {
  name: "Tabbar",
  data () {
    return {
      selectedLabelDefault: 'Question',
      tabs: [{
        label: '常见问题',
        value:'question',
        icon: 'helpcenter-question',

      }, {
        label: '产品介绍',
        value: 'productInc',
        icon: 'helpcenter-inc'

      },{
        label: '需求反馈',
        value: 'feedback',
        icon: 'helpcenter-edit'

      }]
    }
  },
  mounted() {
    let tag = this.$route.meta.name
    if(tag){
      this.selectedLabelDefault = this.$route.meta.name
    }else {
      localStorage.setItem('label','常见问题')
      this.selectedLabelDefault = localStorage.getItem('label')
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label)
      localStorage.setItem('label',label)
      if(label ==='公告列表'){
        this.$router.push({name:`全部`})
        return
      }
      this.$router.push({name:`${label}`})
    }
  }
}
</script>

<style scoped lang="stylus">
.tabbar
  position fixed
  width 100%
  bottom 0
  background-color #fff
  height 70px
  z-index 50

.svg_icon
  filter: drop-shadow(#333 80px 0);
  transform: translateX(-80px);
.cube-tab
  overflow:hidden;
.cube-tab_active
  color $custom-active-color
  .svg_icon
    filter: drop-shadow($custom-active-color 80px 0);
    transform: translateX(-80px);

</style>