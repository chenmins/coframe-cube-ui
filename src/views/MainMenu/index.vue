<template>
  <div id="main_menu">
    <NavLayOut color="#fff" >
      <img width="100%" class="bgc_img" src="../../assets/icons/Main.webp" alt="">
      <MyTools @SeeAll="$router.push({name:'AllTools'})"></MyTools>
      <MyTodos @SeeAll="$router.push({name:'TodoLists'})"></MyTodos>
      <MyApply ></MyApply>
    </NavLayOut>
    <button @click="exitLogin">退出登录</button>
  </div>

</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";
import Vue from 'vue'
import {AuthApiController} from '@controller'
import { BaseVue } from '@lib'


export default {
  name: "index",
  mixins: [BaseVue],

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
  created() {
    this.getUserInfo()

  },
  methods:{
    async exitLogin(){
      let resp = await this.dispatch(AuthApiController.logout)
      if(!resp.error){
        console.log(resp)
      }else {
        console.log('error')
      }

    },
    async getUserInfo(){
      let userInfo = await this.dispatch(AuthApiController.get)
      if(!userInfo.error){
      }else {
        console.log('error')
      }
    },
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