<template>
  <div class="addressbox">
    <div class="search_box" v-show="$route.meta.name ==='information'">
      <input class="cu_input" v-model="value"></input>
      <i v-show="value.length===0" class="cubeic-search">搜索</i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "index",
  data(){
    return{
      value:'',
    }
  }
}
</script>

<style scoped lang="stylus">
.addressbox
  height $viewpoint-height
  background-color $my-bgc-color
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

</style>