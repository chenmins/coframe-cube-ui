<template>
  <div class="search_box" >
    <input class="cu_input" v-model="syncValue"></input>
    <i v-show="syncValue.length ===0" class="cubeic-search">{{ placeholder||"搜索" }}</i>
    <i class="cubeic-close close_svg"></i>
  </div>
</template>

<script>
export default {
  name: "Search",
  props:[
      'placeholder',
      'value'
  ],
  data(){
    return{
      syncValue:this.value
    }
  },

}
</script>

<style scoped lang="stylus">
.search_box
  position relative
.cu_input
  margin  20px 10px
  padding 0 10px
  background-color: #fff;
  height 30px
  outline none
  border-radius 6px
  width calc(100% - 60px)
  color rgb(173,173,173)
  font-size 14px

.cubeic-search
  position absolute
  color rgb(173,173,173)
  top 50%
  left 50%
  transform translate(-50%,-50%)
  font-size 14px

.close_svg
    position absolute
    font-size 10px
    top 50%
    right 30px
    transform translateY(-50%)
    background-color #cccccc
    border-radius 50%
    color #fff
    padding 1px
    line-height 13px
</style>