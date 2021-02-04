<template>
  <div id="main_menu">
    <NavLayOut color="#fff">
      <img width="100%" class="bgc_img" src="../../assets/icons/MainMenu2@2x.png" alt="">
      <MyTools @SeeAll="$router.push({name:'AllTools'})"></MyTools>
      <MyTodos @SeeAll="$router.push({name:'TodoLists'})"></MyTodos>
      <MyApply ></MyApply>
    </NavLayOut>
  </div>

</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";
import Vue from 'vue'

export default {
  name: "index",
  components: {
    MyTools,
    MyTodos,
    MyApply,
    // eleCalendar
  },
  data(){
    return{
      // datedef:[
      //   {"date":"2018-06-30","content":null,"cid":null},
      //   {"date":"2018-06-26","content":null,"cid":null},
      // ],
      // prop:'date' //对应日期字段名
    }
  },
  mounted() {
    console.log(window)
    document.title = window.g.title
  },
  methods:{
    // renderContent(h,parmas) {
    //   const loop = data => {
    //     return (
    //         data.defvalue.value ? (<div>
    //           <div>{data.defvalue.text}</div>
    //           <span>备选项</span>
    //         </div>) : <div><div>{data.defvalue.text}</div><div><div>{data.defvalue.Lunar.lDayChinese}</div></div></div>
    //     )
    //   }
    //   return (
    //       <div style="min-height:60px;">
    //         {loop(parmas)}
    //       </div>
    //   );
    // }
  }
}
</script>

<style scoped lang="stylus">

#main_menu
  background-color #fff
  position relative
  z-index 60
  .bgc_img
    position: absolute;
    top -60px
    left 0
    z-index -1

</style>