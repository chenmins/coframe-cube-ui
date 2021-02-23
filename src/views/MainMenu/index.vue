<template>
  <div id="main_menu">
    <NavLayOut color="#fff" >
      <img width="100%" class="bgc_img" src="../../assets/icons/Main.webp" alt="">
      <MyTools @SeeAll="$router.push({name:'AllTools'})"></MyTools>
      <MyTodos @SeeAll="$router.push({name:'MyAppointment'})"></MyTodos>
      <MyApply ></MyApply>
    </NavLayOut>
  </div>

</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";
import {AuthApiController} from '@controller'
import { BaseVue } from '@lib'


export default {
  name: "index",
  mixins: [BaseVue],
  components: {
    MyTools,
    MyTodos,
    MyApply,
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

<style lang="stylus">
.main_menu-tag
  flex-shrink 0
  border-radius 20px
  background-color #F5BA39
  font-size 18px
  -webkit-transform:scale(.8)
  -webkit-transform-origin-x: 0;
  max-height 20px
  line-height 20px
  max-width 60px


</style>

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