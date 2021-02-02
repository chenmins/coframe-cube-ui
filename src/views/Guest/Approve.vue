<template>
  <div id="todo-list">
      <SlideNav @LabelChanged="changeHandle"  :selected-label="selectedLabel" :tabs="tabs" :center="true" >
        <div slot-scope="item">
          <MenuCard v-for="approve in approves" @CardDetail="GuestDetail" class="card" name="我的申请" :noAll="true" style="padding: 15px">
            <div class="content">
              <p>到访时间：<span v-for="i in approve.come">{{i}}，</span></p>
              <p>到访部门：<span v-for="i in approve.where">{{i}}，</span></p>
              <p>来访姓名：{{approve.time}}</p>
            </div>
            <Tag color="#fff" class="tag" :background-color="approve.approved?'#42b983':'#000'">{{ !approve.approved?'待审批':'已完成' }}</Tag>
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
      ],
      approves:[]
    }
  },
  created() {
    this.approves = this.$store.state.Guest.approves.filter(i=>i.approved===false)
  },
  methods:{
    GuestDetail(){
      this.$router.push({name:'ReserveDetail',params:{id:1}})
    },
    changeHandle(e){
      switch (e){
        case '待审批':
          this.approves = this.$store.state.Guest.approves.filter(i=>i.approved===false)
        break
        case '已完成':
          this.approves = this.$store.state.Guest.approves.filter(i=>i.approved===true)
      }
    }
  },

}
</script>

<style scoped lang="stylus">
#todo-list
  background-color $my-bgc-color
  height 100vh
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