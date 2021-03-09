<template>
  <div id="all_tools">
    <TitleNav  bgc-color="#fff">
      <template v-slot:fixed>
        <header>
          <span class="title">管理常用工具</span>
          <div class="num" @click="$router.push({name:'ManageTool'})">
            <div>{{ commonlyTools.filter(tool => tool.isCommonly === true).length }}</div>
            <i class="cubeic-arrow"></i>
          </div>
        </header>
      </template>
      <ul class="tools_list">
        <li v-for="(Tool,index) in commonlyTools" :key="index">
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
    </TitleNav>
  </div>
</template>

<script>
import mixins from './mixins'
import {AuthApiController} from '@controller'

let isCommonly = []

export default {
  name: "AllTools",
  mixins: [mixins],
  data() {
    return {
      commonly: true,
      allCommonlyTools: [],
      isCommonlyTools: []
    }
  },

  created() {
    let tools = JSON.parse(localStorage.getItem('userInfo'))


    if (tools && tools.attrs) {
      this.getUserInfo().then(() => {
        this.updateTools()
      })
    }
  },
  mounted(){
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 100}px`
  },
  methods: {
    async addCommonly(Tool) {
      if (this.commonlyTools.filter(tool => tool.isCommonly === true).length >= 8) {
        this.$createToast({
          txt: '最多只能添加8个常用功能',
          type: 'warn',
          time: 350
        }).show()
        return
      }

      this.commonlyTools.find(item => {
        if (item.text === Tool.text) {
          item.isCommonly = true
        }
      })

      // this.isCommonly.find(item => item.text === Tool.text).isCommonly = true
      let data = JSON.stringify(this.commonlyTools.filter(item => item.isCommonly === true))
      let resp = await this.dispatch(AuthApiController.updateAttrs, [{
            "attrName": "MyTools",
            "attrValue": data
          }]
      )
      await this.getUserInfo()

      if (!resp.error) {
        this.$createToast({
          txt: '添加成功',
          type: 'success',
          time: 350
        }).show()
      }


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