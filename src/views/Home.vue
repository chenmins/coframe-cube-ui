<template>
  <div id='Menus_app'>
      <div class="scroll-ele" @scroll="scrollHandler">
        <Menus :menu="menu"  v-for="(menu,index) in menus" :key="index"></Menus>
        <cube-button class="exit" @click="exit">退出登录</cube-button>
        <a class="changePassword" @click="changePassword">修改密码</a>
      </div>
    </div>
</template>

<script >
import Menus from "@/components/Menus";
import exit from '@/libs/exit-login'
import { BaseVue } from '@lib'
import {UserController} from '@/actions/controller'

export default {
  components:{
    Menus,
  },
  data() {
    return {
      scrollY: 0,
      checkTop: false,
      menus:[],

    }
  },
  mixins: [BaseVue],
  created() {
  },
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

    this.$axios.get('/api/coframe/users/menus').then(res=>{
      let menusLeaveOne = res.data.filter(item=>item.level === 1)
      let menusLeaveTwo = res.data.filter(item=>item.level === 2)
      this.menus = menusLeaveOne.map(leaveOneItem=>{
        leaveOneItem.children.push(menusLeaveTwo.filter(leaveTwoItem=>
          leaveTwoItem.groupId === leaveOneItem.groupId
        ).reverse())
        return leaveOneItem
      })
      this.menus[0].children[0].reverse()
    })
  },

}
</script>

<style scoped>


</style>

<style scoped  lang="stylus">




#Menus_app
  background-color $my-bgc-color
  height calc(100% - 80px)
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

.search
  flex-grow 2
  height 30px
  margin 0 5px 0 10px
  outline none
  border 1px solid transparent
  position relative
.header>a
  display block
  margin-right 20px
  color rgb(60,122,246)
  z-index 20
  font-weight 500
.cubeic-search
  position absolute
  z-index 10
  top 50%
  left 20px
  transform translateY(-50%)
</style>