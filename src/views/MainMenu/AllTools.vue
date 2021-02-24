<template>
  <div id="all_tools">
    <NavLayOut
        bgc-color="#fff"
    >
      <header>
        <span class="title">管理常用工具</span>
        <div class="num" @click="$router.push({name:'ManageTool'})">
          <div>8</div>
          <i class="cubeic-arrow"></i>
        </div>
      </header>

      <ul class="tools_list"  >
        <li>
          <div @click="goRouter({name:'常见问题'})">
            <Icon svg-name="Tools-HelpCenter" class-name="svg"></Icon>
            <span>帮助中心</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'Cultural'})">
            <Icon svg-name="Tools-CulrturalBuild" class-name="svg"></Icon>
            <span>文化建设</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'电商采购'})">
            <Icon svg-name="Tools-DianShang" class-name="svg"></Icon>
            <span>电商采购</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'Guest'})">
            <Icon svg-name="Tools-Guest" class-name="svg"></Icon>
            <span>访客预约</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'homepage'})">
            <Icon svg-name="Tools-AddressBook" class-name="svg"></Icon>
            <span>通讯录</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'Report'})">
            <Icon svg-name="Tools-Report" class-name="svg"></Icon>
            <span>员工信息报备</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'YuYueItem'})">
            <Icon svg-name="Tools-YuYue" class-name="svg"></Icon>
            <span>预约中心</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'EmployeeCard'})">
            <Icon svg-name="Tools-EmployeeCard" class-name="svg"></Icon>
            <span>员工卡申请</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'去哪吃'})">
            <Icon svg-name="Tools-Food" class-name="svg"></Icon>
            <span>去哪吃</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'园区导航'})">
            <Icon svg-name="Tools-DaoHang" class-name="svg"></Icon>
            <span>园区导航</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'便利店'})">
            <Icon svg-name="Tools-BianLiDian" class-name="svg"></Icon>
            <span>便利店</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'Schedule'})">
            <Icon svg-name="Tools-XieTong" class-name="svg"></Icon>
            <span>日程协同</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'我的二维码'})">
            <Icon svg-name="Tools-QR" class-name="svg"></Icon>
            <span>我的二维码</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'物业'})">
            <Icon svg-name="Tools-WuYe" class-name="svg"></Icon>
            <span>物业</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'Parking'})">
            <Icon svg-name="Tools-Parking" class-name="svg"></Icon>
            <span>智能停车场</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div @click="goRouter({name:'发布'})">
            <Icon svg-name="Tools-Data" class-name="svg"></Icon>
            <span>数据统计</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
      </ul>

    </NavLayOut>

  </div>
</template>

<script>
export default {
  name: "AllTools",
  data() {
    return {
      commonly: true
    }
  },
  methods:{
    goList(e){
      console.log(e.currentTarget)
    },
    goRouter(e){
      this.$router.push(e)
    }
  }
}
</script>

<style scoped lang="stylus">
.svg
  height 44px
  width 44px
  margin-right 12px

.scroll-list-wrap
  height calc(100% - 52px)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden

#all_tools
  background-color $my-bgc-color

  header
    display flex
    justify-content: space-between;
    align-items center
    padding 5px 20px
    background-color: #fff;
    margin-bottom 20px

    span
      height 30px
      line-height: 30px;
      font-size 16px
      font-weight 600

    .title
      font-size 14px

    .num
      display flex
      align-items center

      div
        flex 0
        min-width 16px
        height 16px
        border-radius 50%
        line-height 16px
        font-size 12px
        background-color #0099FF
        color #fff

      i
        color $custom-gray

  .tools_list
    background-color: #fff;

    li
      padding 10px 20px
      border-bottom 1px solid rgba($custom-border-color, .4)
      display flex
      justify-content: space-between;
      align-items center

      div
        display flex
        align-items center
        font-size 14px

        span
          font-size 14px

      .tag
        font-size 12px
        color #fff
        display flex
        align-items center
        height 28px
        border-radius 28px
        padding 0 12px

        &.commonly
          //background-color $custom-active-color
          color #0099FF
          border 1px solid #0099FF

          padding
          .add
            margin-right 7px

        &.is-commonly
          color #CCCCCC
          color $custom-gray
</style>