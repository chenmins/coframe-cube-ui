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

  </div>
</template>

<script >
import Menus from "@/components/Menus";
import exit from '@/libs/exit-login'

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
  methods: {
    changePassword(){
      this.$router.push('/changePassword')
    },
    scrollHandler(e) {
      this.scrollY = e.currentTarget.scrollTop
    },
    exit(){
      exit()
    }
  },
  mounted(){
    this.$axios.get('/users/menus').then(res=>{
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
        time: 1000,
        type: 'error',
        txt: '登录时间过期，请重新登录'
      })
      toast.show()
      setTimeout(() => {
        exit()
      }, 1000)
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