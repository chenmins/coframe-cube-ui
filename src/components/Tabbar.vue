<template>
  <cube-tab-bar
      class="tabbar"
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
  </cube-tab-bar></template>

<script>
export default {
  name: "Tabbar",
  data () {
    return {
      selectedLabelDefault: 'Question',
      tabs: [{
        label: '常见问题',
        value:'Question'
      }, {
        label: '产品介绍',
        value: 'ProductsInc'
      },{
        label: '需求反馈',
        value: 'DemanFeedback'
      }]
    }
  },
  created() {
    let tag = this.$route.meta.tag
    localStorage.setItem('label','Question')
    if(tag){
      this.selectedLabelDefault = this.$route.meta.tag
    }else {
      this.selectedLabelDefault = localStorage.getItem('label')
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      this.$router.push(`/${label}`)
      localStorage.setItem('label',label)
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
</style>