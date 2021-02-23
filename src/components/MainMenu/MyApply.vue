<template>
  <MenuCard
      name="我的申请"
      title-color="#000"
      :all-text="true"
      allTextColor="#999"
      bgcColor="transparent"
      >
    <ul class="container">
      <li v-for="item in applys">
        <Icon svg-name="four" style="height:31px;width:31px"></Icon>
        <div class="box">
          <span>{{item.name}}</span>
          <Tag class="main_menu-tag">待审批</Tag>
        </div>
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
    height 32px
    background-color rgb(244,249,254)
    padding 16px
    margin-bottom 6px
    border-radius 6px
    font-size 14px
  .box
    margin-left 12px
    display flex
    flex-direction column
  .main_menu-tag
    padding 0
    border-radius 20px

</style>