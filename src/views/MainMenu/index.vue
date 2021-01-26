<template>

  <div id="main_menu">
    <MyTools @SeeAll="$router.push({name:'AllTools'})"></MyTools>
    <MyTodos @SeeAll="$router.push({name:'TodoLists'})"></MyTodos>
    <MyApply ></MyApply>
  </div>

</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";

export default {
  name: "index",
  components: {
    MyTools,
    MyTodos,
    MyApply
  },
  methods:{
  }
}
</script>

<style scoped lang="stylus">
#main_menu
  background-color $my-bgc-color
  height 100%
  border 1px solid $my-bgc-color

</style>