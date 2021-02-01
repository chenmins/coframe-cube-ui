<template>
  <div id="todo-list">
    <header>
      <cube-scroll ref="scroll">
        <SlideNav  :selected-label="selectedLabel" :tabs="tabs" :center="true" >
          <div slot-scope="item">
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
                <div class="content">
                  <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                  <p>提醒时间：2020年12月28日  08:00</p>
                </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
            <MenuCard class="card" name="我的申请" :noAll="true" style="padding: 15px">
              <div class="content">
                <p>参与人：陈优优、张三丰、王二小、张思、李四、王思奥、赵晓晓、李思思、秦琪</p>
                <p>提醒时间：2020年12月28日  08:00</p>
              </div>
              <Tag color="#fff" class="tag" style="background-color:orangered;">日程</Tag>
            </MenuCard>
          </div>
        </SlideNav>
        </cube-scroll>
    </header>
<!--todo 日程、待办-->
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
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
#todo-list
  background-color $my-bgc-color
  height $viewpoint-height
  header
    height calc(100%- 100px)
  .footer
    display flex
    justify-content: space-evenly;
    font-size 12px
    margin-top 20px
    div
      background-color rgba($custom-border-color,.1)
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