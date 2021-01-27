<template>
  <div id="Reserve">
    <Search placeholder="搜索访客姓名" :value="value"></Search>

    <LayOut class="func" >
      <span>审批状态</span>
      <span>到访日期</span>
    </LayOut>

<!--    @CardDetail-->

    <MenuCard @CardDetail="ThisReserve" class="card" name="我的申请" :noAll="true" style="padding: 15px">
      <div class="content">
        <p>到访时间：陈优优、张三丰</p>
        <p>到访部门：陈优优、赵晓晓、李思思、秦琪</p>
        <p>来访姓名：2020年12月28日  08:00</p>
      </div>
      <Tag color="#fff" class="tag" style="background-color:#42b983;">待审批</Tag>
    </MenuCard>

  </div>
</template>

<script>
import Search from "@/components/Search";
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "Reserve",
  components:{
    Search,
    MenuCard
  },
  data(){
    return{
      value:'',
    }
  },
  methods:{
    ThisReserve(){
      this.$router.push({name:'GuestDetail',params:{id:1}})
    }
  }
}
</script>

<style scoped lang="stylus">
#Reserve
  background-color $my-bgc-color
  height $viewpoint-height
  .func
    height 40px
    line-height: 40px;
    display flex
    span
      flex-grow 1
      border 1px solid rgba($custom-border-color,.1)

.content
  margin 10px
  font-size 12px
  line-height 14px
  text-align left
  color $custom-gray
  position relative
  p
    margin-top 6px
.card
  position relative
  .tag
    position absolute
    right 20px
    top 10px
</style>