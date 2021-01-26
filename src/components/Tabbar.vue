<template>
  <cube-tab-bar
      class="tabbar"
      v-model="selectedLabelDefault"
      @click="clickHandler"
      @change="changeHandler">
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <!-- name为icon的插槽 -->
<!--      <i slot="icon" :class="item.icon"></i>-->
      <i style="font-size:20px;" slot="icon" :class="'iconfont '+item.icon  "></i>
      <!-- 默认插槽 -->
      <div style="font-size: 13px;margin-top: 5px">
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
        icon: 'iconquestion',

      }, {
        label: '产品介绍',
        value: 'productInc',
        icon: 'iconproductInc'

      },{
        label: '需求反馈',
        value: 'feedback',
        icon: 'iconfeedback'

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
      // this.$router.push({name:`${label}`})
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
.icon
  display block
</style>