<template>
  <div id="product_inc">
    <List :show-title="false" :data="ProductsData" @goRouter="go">
      <template slot-scope="scoped">
        <div style="display: flex;align-items: center;color: #0F1826;height: 48px;">
          <span>{{ scoped.scoped.title }}</span>
        </div>
        <div>
          <i class="cubeic-arrow icon-arrow"></i>
        </div>
      </template>
    </List>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: "ProductsInc",
  beforeRouteLeave(to, from, next) {
    if (to.fullPath.includes('ProductInc')) {
      to.meta.name = from.meta.name
    }
    next()
  },
  created() {
    this.initData({dispatch:this.dispatch,type:'Products',controller:'queryProductIntroduction'})
  },
  methods: {
    go(e) {
      this.$router.push({name: 'ProductInc', params: {id: e.id,data:e}})
    },
    ...mapActions('HelpCenter',['initData'])

  },
  computed:{
    ...mapState('HelpCenter',['ProductsData']),

  }
}
</script>

<style scoped lang="stylus">

#product_inc
  height calc(100% - 60px)
  background-color $my-bgc-color
  position relative
  display flex
  flex-direction column

.product_inc_title
  margin 20px
  display flex
  justify-content: center
  align-items center

.share
  position: absolute
  top 20px
  right 20px
  color #fff

.version
  color darkgray
  display block
  margin 20px

.product_inc_logo
  display block
  margin-bottom 20px
  margin-left auto
  margin-right auto


</style>