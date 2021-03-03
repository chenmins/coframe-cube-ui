<template>
  <div id="main_menu">
    <div class="loading_cover" v-if="firstLoading">
      <cube-loading class="loading" :size="40"></cube-loading>
    </div>
    <NavLayOut color="#fff">
      <img width="100%" class="bgc_img" src="../../assets/icons/Main.webp" alt="">
      <MyTools :Tools="Tools" @SeeAll="$router.push({name:'AllTools'})"></MyTools>
      <MyTodos @SeeAll="$router.push({name:'MyAppointment'})"></MyTodos>
      <MyApply></MyApply>
      <cube-button class="exit-login" @click="exitLogin">退出登录</cube-button>
    </NavLayOut>
  </div>

</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";
import {AuthApiController} from '@controller'
import {BaseVue} from '@lib'
import mixins from './mixins'
import {removeToken} from "@/utils/auth";


export default {
  name: "index",
  mixins: [BaseVue,mixins],
  components: {
    MyTools,
    MyTodos,
    MyApply,
  },
  // created(){
  //   let tools = JSON.parse(localStorage.getItem('userInfo'))
  //
  //   if (tools && tools.attrs) {
  //
  //
  //   }
  // },
  methods: {
    async exitLogin() {
      let resp = await this.dispatch(AuthApiController.logout)
      if (!resp.error) {
        localStorage.removeItem('Token')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('ToolsManager')
        removeToken()

        this.$router.replace('/login')
      } else {
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
  -webkit-transform: scale(.8)
  -webkit-transform-origin-x: 0;
  max-height 20px
  line-height 20px
  max-width 60px


</style>

<style scoped lang="stylus">


.exit-login
  position absolute
  bottom -20px

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