<template>
  <div id="main_menu">
    <div class="loading_cover" v-if="firstLoading">
      <cube-loading class="loading" :size="40"></cube-loading>
    </div>
    <img width="100%" class="bgc_img" src="../../assets/icons/Main.webp" alt="">
    <TitleNav color="#fff">
      <MyTools :Tools="Tools" @SeeAll="$router.push({name:'AllTools'})"></MyTools>
      <MyTodos @SeeAll="$router.push({name:'MyAppointment'})"></MyTodos>
      <MyApply></MyApply>
      <cube-button class="exit-login" @click="exitLogin({dispatch:dispatch})">退出登录</cube-button>
    </TitleNav>
  </div>
</template>

<script>
import MyTools from "@/components/MainMenu/MyTools";
import MyTodos from "@/components/MainMenu/MyTodo";
import MyApply from "@/components/MainMenu/MyApply";
import {AuthApiController} from '@controller'
import {BaseVue} from '@lib'
import {removeToken} from "@/utils/auth";
import {mapActions, mapMutations, mapState} from "vuex";


export default {
  name: "index",
  mixins: [BaseVue],
  components: {
    MyTools,
    MyTodos,
    MyApply,
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem('ToolsManager')) {
    } else {
      // 初始化工具列表
      localStorage.setItem('ToolsManager', JSON.stringify([
        {icon: 'HelpCenter', text: '帮助中心', isCommonly: false},
        {icon: 'CulrturalBuild', text: '文化建设', isCommonly: false},
        {icon: 'DianShang', text: '电商采购', isCommonly: false},
        {icon: 'Guest', text: '访客预约', isCommonly: false},
        {icon: 'AddressBook', text: '通讯录', isCommonly: false},
        {icon: 'Report', text: '员工信息报备', isCommonly: false},
        {icon: 'YuYue', text: '预约中心', isCommonly: false},
        {icon: 'EmployeeCard', text: '员工卡申请', isCommonly: false},
        {icon: 'Food', text: '去哪吃', isCommonly: false},
        {icon: 'DaoHang', text: '园区导航', isCommonly: false},
        {icon: 'Parking', text: '智能停车场', isCommonly: false},
        {icon: 'BianLiDian', text: '便利店', isCommonly: false},
        {icon: 'XieTong', text: '日程协同', isCommonly: false},
        {icon: 'WuYe', text: '物业', isCommonly: false},
        {icon: 'QR', text: '我的二维码', isCommonly: false},
        {icon: 'Data', text: '数据统计', isCommonly: false},
      ]))
    }
    next()
  },
  async created() {
    this.setStateVar({
      key: 'AllTools',
      value: JSON.parse(localStorage.getItem('ToolsManager'))
    })
    let res
    try {
      await this.storeUserInfo({dispatch: this.dispatch})
      res = await this.hasInitValue()
    } catch (error) {
      await this.updateUserInfo({dispatch: this.dispatch, hasInitValue: error.hasInitValue})
    }
    this.firstLoading = false
  },
  methods: {
    ...mapMutations('MainMenu', ['setStateVar']),
    ...mapActions('MainMenu', ['storeUserInfo', 'hasInitValue', 'updateUserInfo','exitLogin']),
  },
  computed: {
    ...mapState('MainMenu', ['Tools'])
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

>>>.scroll-height-set
  height calc(100vh - 60px)
.exit-login
  position absolute
  bottom 0

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