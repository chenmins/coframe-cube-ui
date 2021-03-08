<template>
  <MenuCard
      name="我的工具"
      :allText="true"
      justify-content="space-between"
      :shadow="true"
      @SeeAll="SeeAll">
    <div class="func clearfix clear-fix"  >
      <div class="tool_item" @click="$router.push({name:Tool.text})" v-for="Tool in Tools">
        <Icon :svg-name="'Tools-'+Tool.icon" class-name="svg"></Icon>
        <div>{{Tool.text}}</div>
      </div>
    </div>
  </MenuCard>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import mixins from '@/views/MainMenu/mixins'

export default {
  name: "MyTools",
  props:[
      'Tools'
  ],

  components: {
    MenuCard
  },
  date(){
    return {
    }
  },
  created() {
  },
  methods: {
    SeeAll() {
      this.$emit('SeeAll')
    },
    checkIn(e){
      console.log(e.currentTarget)
    }
  },
  // computed:{
  //   Tools:{
  //     get:function(){
  //       return this.$store.state.ToolsManager.allTools.filter(tool => tool.isCommonly === true)
  //     }
  //   }
  // }
}
</script>

<style scoped lang="stylus">
>>>.van-skeleton__row:not(:first-child)
  margin-top 0
>>>.van-skeleton__row


  &:nth-child(6)
    margin-left 20px
  &:nth-child(7)
    margin-left 20px
  &:nth-child(8)
    margin-left 20px

  height 58px
  float left
  font-size 13px
  display flex
  flex-direction column
  align-items center
  margin-bottom 27px

  &:nth-child(2)
    margin-left 20px
  &:nth-child(3)
    margin-left 20px
  &:nth-child(4)
    margin-left 20px


.svg
  height 44px
  width 44px
.func
  padding-top 27px
  padding-bottom 20px
  .tool_item
    height 58px
    width 25%
    float left
    font-size 13px
    display flex
    flex-direction column
    align-items center
    &:nth-child(1)
      margin-bottom 27px
    &:nth-child(2)
      margin-bottom 27px
    &:nth-child(3)
      margin-bottom 27px
    &:nth-child(4)
      margin-bottom 27px
    .svg
      margin-bottom 6px

.clearfix:after
  content ''
  display block
  clear both
</style>