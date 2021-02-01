<template>
  <MenuCard
      src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b141aa3d288cf15d74fffee487868c6e.svg"
      name="我的工具" @SeeAll="SeeAll">
    <div class="func clearfix"  >
      <div class="tool_item" @click="$router.push({name:'Cultural'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>文化建设</div>
      </div>
      <div class="tool_item"  @click="$router.push({name:'常见问题'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>帮助中心</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Schedule'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>日程协同</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Guest'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>访客预约</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'homepage'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>通讯录</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'EmployeeCard'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>员工卡申请</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'AppointmentCenter'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
        <div>预约中心</div>
      </div>
      <div class="tool_item" @click="$router.push({name:'Report'})">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
            alt="">
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

.func
  margin 10px 10px 0

.tool_item
  width calc(25% - 10px)
  margin 5px
  float left
  font-size 12px

.clearfix:after
  content ''
  display block
  clear both
</style>