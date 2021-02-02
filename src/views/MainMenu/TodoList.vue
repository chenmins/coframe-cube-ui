<template>
  <div id="todo-list">
    <header>
      <cube-scroll ref="scroll">
        <SlideNav  :selected-label="selectedLabel" :tabs="tabs" :center="true"  @LabelChanged="changeHandle">
          <div slot-scope="item">
            <MenuCard v-for="todoList in todoLists" class="card" name="我的申请" :noAll="true" style="padding: 15px">
                <div class="content">
                  <p>参与人：<span v-for="people in todoList.join">{{people}}，</span></p>
                  <p>提醒时间：{{todoList.noticeTime}}</p>
                </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
          </div>
        </SlideNav>
        </cube-scroll>
    </header>
    <div class="footer">
      <div @click="$router.push({name:'Schedule'})">
        <i style="font-size:20px;" class="iconfont iconrichen"></i>
        <p>日程</p>
      </div>
      <div class="active">
        <i style="font-size:20px;" class="iconfont icondaiban"></i>
        <p>待办</p>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "TodoList",
  components:{
    SlideNav,
    MenuCard
  },
  data(){
    return {
      selectedLabel: '进行中',
      tabs: [
        {
          label: '进行中',
        }, {
          label: '已完成',
        }
      ],
      todoLists:[]
    }
  },
  created() {
    this.todoLists = this.$store.state.MainMenu.todoList.filter(i =>i.complete === true)
  },
  methods:{
    changeHandle(e){
      if(e==='进行中'){
        this.todoLists = this.$store.state.MainMenu.todoList.filter(i =>i.complete === true)
      }else if(e==='已完成'){
        this.todoLists = this.$store.state.MainMenu.todoList.filter(i =>i.complete === false)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
#todo-list
  background-color $my-bgc-color
  header
    height $custom-bgc-height
  .footer
    display flex
    justify-content: space-evenly;
    font-size 12px
    margin-top 20px
    position fixed
    bottom 0
    width 100%
    z-index 50
    background-color: #fff;
    div
      background-color #fff
      padding 10px 14px
      position: relative;
      &.active
        color $custom-active-color
      .dot
        position absolute
        height 7px
        width 7px
        display inline-block
        background-color orangered
        border-radius 50%
        top 10px
        right 13px
     i
      display inline-block
      padding-bottom 7px
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
  display inline-block
  color $custom-gray
  position relative
  p
    margin-top 10px


</style>