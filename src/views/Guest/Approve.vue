<template>
  <div id="todo-list">
      <SlideNav  :selected-label="selectedLabel" :tabs="tabs" :center="true" >
        <div slot-scope="item">
          <MenuCard @CardDetail="GuestDetail" class="card" name="我的申请" :noAll="true" style="padding: 15px">
            <div class="content">
              <p>到访时间：陈优优、张三丰</p>
              <p>到访部门：陈优优、赵晓晓、李思思、秦琪</p>
              <p>来访姓名：2020年12月28日  08:00</p>
            </div>
            <Tag color="#fff" class="tag" style="background-color:#42b983;">待审批</Tag>
          </MenuCard>
        </div>
      </SlideNav>
  </div>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import SlideNav from "@/components/Cultural/SlideNav";
import Search from "@/components/Search";

export default {
  components:{
    SlideNav,
    MenuCard,Search
  },
  data(){
    return {

      selectedLabel: '待审批',
      tabs: [
        {
          label: '待审批',
        }, {
          label: '已完成',
        }
      ]
    }
  },
  methods:{
    GuestDetail(){
      this.$router.push({name:'ReserveDetail',params:{id:1}})
    }
  }
}
</script>

<style scoped lang="stylus">
#todo-list
  background-color $my-bgc-color
  height 100%
  .card
    position relative
    .tag
      position absolute
      right 20px
      top 10px
.content
  margin 10px
  font-size 12px
  line-height 14px
  text-align left
  color $custom-gray
  position relative
  p
    margin-top 6px


</style>