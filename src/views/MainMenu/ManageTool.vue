<template>
  <div id="manage_tool">
    <NavLayOut
        bgc-color="#fff"
    >
      <a @click="$router.back()">完成</a>
      <div class="func clearfix">
        <div class="tool_item" v-for="(Tool,index) in Tools" :key="index">
          <Icon :svg-name="'Tools-'+Tool.icon" class-name="svg"></Icon>
          <div>{{Tool.text}}</div>
          <Icon svg-name="delete" @iconToggle="remove(Tool,index)" class-name="remove"></Icon>
        </div>
      </div>
      <div slot="right" style="margin-right: 20px" @click="complete(deleteArr)">
        <span class="complete" style="font-size: 14px" >完成</span>
      </div>
    </NavLayOut>
  </div>
</template>

<script>
import mixins from './mixins'
export default {
  name: "ManageTool",
  mixins: [mixins],
  data() {
    return {
      deleteArr:[]
    }
  },
  methods: {
    remove(Tool,index){
      this.deleteArr.push(this.Tools.splice(index,1)[0])
    },

  }
}
</script>

<style scoped lang="stylus">
.complete
  display inline-block
  margin-top 35px

.svg
  height 44px
  width 44px
  margin-bottom 6px

#manage_tool
  background-color $my-bgc-color

  a
    position: fixed;
    color rgba(orangered, .8)
    top -40px
    right 20px
    z-index 60

.func
  margin 20px 10px 0

.tool_item
  width calc(25% - 10px)
  margin 5px
  float left
  font-size 12px
  position relative
  margin-bottom 27px

  .remove
    display inline-block
    width 14px
    height 14px
    background-color orangered
    color #fff
    line-height 15px
    border-radius 50%
    padding 2px
    position absolute
    z-index 40
    top -5px
    right 10px
    font-weight bold

.clearfix:after
  content ''
  display block
  clear both
</style>