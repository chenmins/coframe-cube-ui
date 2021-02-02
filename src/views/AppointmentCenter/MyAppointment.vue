<template>
  <div id="MyAppointment">
    <SlideNav @LabelChanged="LabelChanged" :selected-label="selectedLabel" :tabs="tabs"  :center="true">
      <div v-show="show" class="record">
        <span>仅显示违约记录</span>
        <van-switch v-model="checked" size="16px" />
      </div>
      <LayOut class="item">
        <Tag class="tag"  color="rgb(23	,134	,255)">取消</Tag>
        <p>理发室</p>
        <p>2021-01-10  11:00-13:00</p>
        <p >A座五层健身房</p>
        <p>预约时间:2021-01-10 12:00</p>
      </LayOut>
      <LayOut class="item">
        <Tag class="tag"  color="rgb(23	,134	,255)">取消</Tag>
        <p>理发室</p>
        <p>2021-01-10  11:00-13:00</p>
        <p >A座五层健身房</p>
        <p>预约时间:2021-01-10 12:00</p>
      </LayOut>
      <LayOut class="item">
        <img height="70px" class="complete_img" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__170501eff3b5d8b16b36b4caba523fd9.svg" alt="">
        <p>理发室</p>
        <p>2021-01-10  11:00-13:00</p>
        <p >A座五层健身房</p>
        <p>预约时间:2021-01-10 12:00</p>
      </LayOut>
    </SlideNav>
    <footer>
      <span @click="$router.push({name:'AppointmentCenter'})">预约中心</span>
      <span class="active">我的预约</span>
    </footer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "MyAppointment",
  components:{
    SlideNav,
  },
  data(){
    return{
      checked:false,
      show:false,
      selectedLabel:'预约成功',
      tabs:[
        {
          label:'预约成功'
        },{
          label: '已完成'
        }
      ]
    }
  },
  methods:{
    LabelChanged(e){
      if(e==='已完成'){
        this.show = true
        return
      }
      this.show = false
    }
  },

}
</script>

<style scoped lang="stylus">
footer
  display flex
  justify-content: space-around;
  position fixed
  bottom 0
  height 50px
  line-height 50px
  background-color: #fff;
  width 100%
  span
    flex-grow 1
    &.active
      color $custom-active-color
#MyAppointment
  background-color $my-bgc-color
  height $custom-bgc-height
  .record
    display flex
    align-items center
    justify-content: space-between
    background-color: #fff;
    margin-bottom 10px
    padding 10px 40px
  .item
    padding 20px
    border-top 1px solid $custom-border-color
    position relative
    margin-bottom 20px
    .complete_img
      position absolute
      right 20px
    .tag
      border 1px solid $custom-active-color
      position absolute
      right 20px
    p
      font-size 12px
      text-align left
      line-height 25px
    p:nth-child(5)
      border-top 1px solid $custom-border-color
      padding-top 10px

</style>