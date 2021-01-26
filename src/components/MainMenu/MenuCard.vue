<template>
  <div id="menu_card">
    <div class="title">
      <div style="display: flex;align-items: center">
        <img v-show="src"
            height="25px"
            width="25px"
            :src="src"
            alt="">
        <span>{{name}}</span>
      </div>
      <div style="color: darkgray;font-size: 10px" v-show="!noAll">
        <span @click="SeeAll" >查看全部</span>
        <i class="cubeic-arrow"></i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "MenuCard",
  props:[
      'name','src','noAll'
  ],
  methods:{
    SeeAll(){
      this.$emit('SeeAll')
    }
  }
}
</script>

<style scoped lang="stylus">
#menu_card
  background-color #fff
  border-radius 8px
  margin 20px
  padding 8px

  .title
    display flex
    flex-direction row
    justify-content: space-between;
    align-items center
    font-size 14px
    padding-bottom 8px
    border-bottom 1px solid rgba($custom-border-color, .2)

  img
    margin-right 5px
</style>