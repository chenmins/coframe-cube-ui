<template>
  <MenuCard
      name="我的待办"
      title-color="#000"
      :allText="true"
      allTextColor="#999"
      bgcColor="transparent"
      @SeeAll="SeeAll">
    <div class="container clear-fix">
      <Icon svg-name="oval" width="100%" height="100%" class-name="bgc_img one"></Icon>
      <Icon svg-name="oval" width="100%" height="100%"  class-name="bgc_img two"></Icon>
      <Icon svg-name="oval" width="100%" height="100%"  class-name="bgc_img three"></Icon>

      <div>
        <cube-slide :auto-play="false">
          <cube-slide-item v-for="(item, index) in todos" :key="index" @click.native="clickHandler(item, index)">
            <div style="display: flex;align-items: center;margin:0 16px 16px 10px"  >
              <Icon svg-name="Tools-Guest" class-name="svg" style="margin-right: 16px" height="36px" width="36px" ></Icon>
              <span style="font-size: 16px;color: #333333;font-weight: 500">访客预约</span>
            </div>
            <div style="padding: 0 10px">
              <p class="who"><span>来访者：</span>{{ item.name }}</p>
              <p class="which"><span>到访部门：</span>{{ item.position }}</p>
              <p class="when"><span>来访时间：</span>{{ item.comeTime }}</p>
            </div>
            <Tag class="main_menu-tag" >
              待审批
            </Tag>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>

  </MenuCard>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import {mapState} from 'vuex'

export default {
  name: "MyTodo",
  components: {
    MenuCard
  },
  computed:{
    ...mapState('MainMenu',['todos'])
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
      console.log('当前轮播图序号为:' + index, item)
      this.$router.push({name: 'GuestDetail', params: {id: index}})

    },
    SeeAll(){
      this.$emit('SeeAll')
    }
  }

}
</script>

<style scoped lang="stylus">
.container
  position: relative;
  padding 12px 20px 0
  .bgc_img
    position: absolute;
    left 0
  .one
    top 0
    z-index -3
  .two
    top  -6px
    z-index -2
  .three
    top  -12px
    z-index -1
>>> .cube-slide-dots
  position absolute
  span
    left 50%
    z-index  70
    height 7px
    width 7px
    border-radius 50%
    transition all .5s ease
    margin-left: 5px;
    margin-top 5px
    background-color rgba(#0099FF,.2)
    &.active
      background-color rgba(#0099FF,1)

>>> .cube-slide
  font-size 14px
  text-align left
  padding-bottom 10px
  .cube-slide-group
    margin-bottom 25px

  .cube-slide-item
    position relative

  .type
    font-size 13px
    font-weight bold
    display inline-block
    padding 6px 12px
    margin-bottom 10px
    border-bottom 1px solid rgba($custom-border-color, .3)
    border-left 1px solid rgba($custom-border-color, .3)
    border-right 1px solid rgba($custom-border-color, .3)

  .who,.which, .when
    font-size 24px
    -webkit-transform scale(.5)
    -webkit-transform-origin-x: 0;
    color:#000
    text-align left
    span
      display inline-block
      width 120px
      font-size 20px
      color:#999
      text-align left

  .main_menu-tag
    font-size 16.8px
    -webkit-transform:scale(.5)
    -webkit-transform-origin-x: 0;
    height 20px
    line-height 20px
    border-radius 20px
    min-width 34px
    position absolute
    right -30px
    top 7px
    padding 5px 15px
</style>