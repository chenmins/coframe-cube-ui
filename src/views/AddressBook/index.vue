<template>
  <div class="addressbox">
    <NavLayOut bgc-color="#fff">
      <Search v-show="! $route.meta.notShowInRouterView" :value="value" cancel="搜索" ></Search>
      <router-view></router-view>
    </NavLayOut>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
export default {
name: "index",
  components:{
    Search
  },
  data(){
    return{
      value:'',
    }
  }
}
</script>

<style scoped lang="stylus">
.addressbox
  background-color $my-bgc-color

</style>