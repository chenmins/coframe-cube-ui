<template>
  <MenuCard
      name="我的工具"
      :allText="true"
      justify-content="space-between"
      :shadow="true"
      @SeeAll="SeeAll">
    <div class="func clearfix clear-fix"  >
      <div class="tool_item" @click="$router.push({name:'Cultural'})">
        <Icon svg-name="Tools-CulrturalBuild" class-name="svg"></Icon>
        <div>文化建设</div>
      </div>
      <div class="tool_item"  @click="$router.push({name:'常见问题'})">
        <Icon svg-name="Tools-HelpCenter" class-name="svg"></Icon>

        <div>帮助中心</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Schedule'})">
        <Icon svg-name="Tools-XieTong" class-name="svg"></Icon>

        <div>日程协同</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Guest'})">
        <Icon svg-name="Tools-Guest" class-name="svg"></Icon>
        <div>访客预约</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'homepage'})">
        <Icon svg-name="Tools-AddressBook" class-name="svg"></Icon>

        <div>通讯录</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'EmployeeCard'})">
        <Icon svg-name="Tools-EmployeeCard" class-name="svg"></Icon>
        <div>员工卡申请</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'YuYueCenter'})">
        <Icon svg-name="Tools-YuYue" class-name="svg"></Icon>

        <div>预约中心</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Report'})">
        <Icon svg-name="Tools-Report" class-name="svg"></Icon>
        <div>信息报备</div>
      </div>
    </div>
  </MenuCard>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "MyTools",
  components: {
    MenuCard
  },
  methods: {
    SeeAll() {
      this.$emit('SeeAll')
    },
    checkIn(e){
      console.log(e.currentTarget)
    }
  }
}
</script>

<style scoped lang="stylus">
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