<template>
  <div id='Menus_app'>
<!--    <cube-sticky :pos="scrollY" :check-top="checkTop">-->
      <div class="scroll-ele" @scroll="scrollHandler">
          <h1>欢迎使用</h1>
        <Menus :menu="menu"  v-for="(menu,index) in menus" :key="index"></Menus>
        <cube-button class="exit" @click="exit">退出登录</cube-button>
        <a class="changePassword" @click="changePassword">修改密码</a>
      </div>
<!--    </cube-sticky>-->
    <button @click="getDemo">testController</button>

  </div>
</template>

<script >
import Menus from "@/components/Menus";
import exit from '@/libs/exit-login'
import { BaseVue } from '@lib'
import {UserController} from '@/actions/controller'
export default {
  components:{
    Menus
  },
  data() {
    return {
      scrollY: 0,
      checkTop: false,
      menus:[],
    }
  },
  mixins: [BaseVue],

  methods: {
    changePassword(){
      this.$router.push('/changePassword')
    },
    scrollHandler(e) {
      this.scrollY = e.currentTarget.scrollTop
    },
    exit(){
      exit()
    },
    async getDemo(){
      let resp = {}
      resp = await this.dispatch(UserController.listUserFunctions)
      console.log(resp)
      if(!resp.error){
        alert('success')
      }else{
        alert('failure')
      }
    },
  },
  mounted(){

    this.$axios.get('/api/users/menus').then(res=>{
      let menusLeaveOne = res.data.filter(item=>item.level === 1)
      let menusLeaveTwo = res.data.filter(item=>item.level === 2)
      this.menus = menusLeaveOne.map(leaveOneItem=>{
        leaveOneItem.children.push(menusLeaveTwo.filter(leaveTwoItem=>
          leaveTwoItem.groupId === leaveOneItem.groupId
        ).reverse())
        return leaveOneItem
      })
      this.menus[0].children[0].reverse()
    }).catch(error=>{
      const toast = this.$createToast({
        time: 2000,
        type: 'error',
        txt: '请登录 '
      })
      toast.show()
    })
  },

}
</script>
<style scoped  lang="stylus">
#Menus_app
  height 100vh
h1
  font-size 1.4em
  margin 20px

.exit
  margin 20px 0 3px
  background-color: $color-regular-blue

.changePassword
  display inline-block
  font-size:12px
  text-decoration-line underline
  margin-bottom 50px
  color $color-dark-grey
</style>