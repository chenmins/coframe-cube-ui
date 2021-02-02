<template>
  <MenuCard
      src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b141aa3d288cf15d74fffee487868c6e.svg"
      name="我的申请" :noAll="true">
    <ul class="container">
      <li v-for="item in applys">
        <span>{{item.name}}</span>
        <span>待审批{{item.status}}</span>
      </li>
    </ul>
  </MenuCard>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "MyApply",
  components: {
    MenuCard
  },
  data(){
    return{
        applys:[]
    }
  },
  created() {
    let MainMenu = this.$store.state.MainMenu
    this.applys = MainMenu.applys
  }
}
</script>

<style scoped lang="stylus">
.container
  li
    display flex
    flex-direction row
    justify-content space-between
    padding 10px 20px
    font-size 14px

</style>