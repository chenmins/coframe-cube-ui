<template>
  <div id="all_tools">
    <NavLayOut
        bgc-color="#fff"
    >
      <header>
        <span class="title">管理常用工具</span>
        <div class="num" @click="$router.push({name:'ManageTool'})">
          <div>{{ this.$store.state.ToolsManager.allTools.filter(tool => tool.isCommonly === true).length }}</div>
          <i class="cubeic-arrow"></i>
        </div>
      </header>
      <ul class="tools_list">
        <li v-for="(Tool,index) in allTools" :key="index">
          <div @click="goRouter({name:Tool.text})">
            <Icon :svg-name="'Tools-'+Tool.icon" class-name="svg"></Icon>
            <span>{{ Tool.text }}</span>
          </div>
          <span class="commonly tag" v-if="!Tool.isCommonly" @click="addCommonly(Tool)">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
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
      commonly: true,
      allTools: []
    }
  },
  created() {
    this.allTools = this.$store.state.ToolsManager.allTools
  },
  methods: {
    addCommonly(Tool) {

      if (this.$store.getters["ToolsManager/currentTools"].length >= 8) {
        this.$createToast({
          txt: '最多只能添加8个常用功能',
          type: 'warn',
          time: 1000
        }).show()
        return
      }
      this.$store.commit('ToolsManager/addisCommonly', Tool)


    },
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