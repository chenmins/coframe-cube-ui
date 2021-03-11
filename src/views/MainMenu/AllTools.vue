<template>
  <div id="all_tools">
    <TitleNav bgc-color="#fff">
      <template v-slot:fixed>
        <header>
          <span class="title">管理常用工具</span>
          <div class="num" @click="$router.push({name:'ManageTool'})">
            <div>{{ HandledTools.filter(tool => tool.isCommonly === true).length }}</div>
            <i class="cubeic-arrow"></i>
          </div>
        </header>
      </template>
      <ul class="tools_list">
        <li v-for="(Tool,index) in HandledTools" :key="index">
          <div @click="goRouter({name:Tool.text})">
            <Icon :svg-name="'Tools-'+Tool.icon" class-name="svg"></Icon>
            <span>{{ Tool.text }}</span>
          </div>
          <span class="commonly tag" v-if="!Tool.isCommonly" @click="addCommonly({Tool:Tool,dispatch:dispatch})">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
      </ul>
    </TitleNav>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

let isCommonly = []

export default {
  name: "AllTools",
  computed: {
    HandledTools() {
      return this.$store.getters["MainMenu/HandledTools"]()
    },
  },
  methods: {
    ...mapActions('MainMenu', ['storeUserInfo','addCommonly']),
    goList(e) {
      console.log(e.currentTarget)
    },
    goRouter(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style scoped lang="stylus">
>>> .scroll-height-set
  height calc(100vh - 100px)

.svg
  height 44px
  width 44px
  margin-right 12px


#all_tools
  background-color $my-bgc-color

  header
    display flex
    justify-content: space-between;
    align-items center
    padding 5px 20px
    background-color: #fff;


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
    margin-top 20px

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