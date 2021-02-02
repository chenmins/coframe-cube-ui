<template>

  <div id="main_menu">
    <MyTools @SeeAll="$router.push({name:'AllTools'})"></MyTools>
    <MyTodos @SeeAll="$router.push({name:'TodoLists'})"></MyTodos>
    <MyApply ></MyApply>

<!--    <ele-calendar-->
<!--        :render-content="renderContent"-->
<!--        :data="datedef"-->
<!--        :prop="prop"-->
<!--        :lunarcalendar="true"-->
<!--    ></ele-calendar>-->
  </div>

</template>

<script>
// import eleCalendar from 'ele-calendar'
// import 'ele-calendar/dist/vue-calendar.css' //引入css
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";

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
  background-color $my-bgc-color
  height 100%
  border 1px solid $my-bgc-color
  position relative
  z-index 60


</style>