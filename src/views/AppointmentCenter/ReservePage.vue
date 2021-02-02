<template>
  <div id="ReservePage">
      <SlideNav
          :selected-label="selectedLabel"
          :tabs="tabs"
          :center="true"
      >
      <LayOut>
        <cube-checkbox v-model="checked" class="box">
          <div class="content">
            <div class="content_1">
              <p>护理</p>
              <p>2021-01-10  11:00-13:00</p>
              <p>A座五层理发室</p>
            </div>
          </div>
          <div class="content_2">剩余名额 <span>10</span>人</div>
          <div class="content_2 restaurant">已经预约</div>
        </cube-checkbox>
      </LayOut>

      </SlideNav>
    <cube-button class="submit">立即预约</cube-button>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "ReservePage",
  components:{
    SlideNav
  },
  data(){
    return{
      checked:false,
      selectedLabel:'预约',
      tabs:[
        {
          label:'预约'
        },
        {
          label:'业务介绍'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.box
  font-size 12px
  position: relative;
  border-bottom 1px solid $custom-border-color
  .restaurant
      color $custom-border-color
  .content_2
    position absolute
    right 20px
    top 20px
    span
      color orangered
#ReservePage
  height $custom-bgc-height
  .content
    display flex
    justify-content: space-between;
  .submit
    background-color $custom-active-color
    color #fff
    transform scale(.8)
    border-radius 10px
    position absolute
    bottom 30px
</style>