<template>
  <div id="ApprovalList">
    <SlideNav :selected-label="selectedLabel" :tabs="tabs" :center="true">
      <LayOut @clicked="$router.push({name:'ApprovalDetail',params:{id:1}})"  class="item">
        <div style="font-size: 10px">
          <Tag color="#fff" background-color="rgb(23,134,255)" >待审核</Tag>
          <span>卡申请</span>
        </div>
        <div>
          <p>申请人姓名</p>
          <p>陈悠悠</p>
        </div>
        <div>
          <p>所在部门</p>
          <p>集团公司-技术部</p>
        </div>
        <div>
          <p>申请日期</p>
          <p>2020-12-25 15:00</p>
        </div>
      </LayOut>
      <LayOut class="item">
        <div style="font-size: 10px">
          <span>员工卡-申请</span>
          <Tag color="#fff" background-color="rgb(23,134,255)" >已完成</Tag>
        </div>
        <div>
          <p>申请人姓名</p>
          <p>陈悠悠</p>
        </div>
        <div>
          <p>所在部门</p>
          <p>集团公司-技术部</p>
        </div>
        <div>
          <p>申请日期</p>
          <p>2020-12-25 15:00</p>
        </div>
      </LayOut>
    </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "index",
  components: {SlideNav},
  data(){
    return {
      selectedLabel:'待审核',
      tabs:[
        {
            label:'待审核'
        },{
            label: '已完成'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
#ApprovalList
  height 100%
  background-color $my-bgc-color
  .item
    text-align left
    padding 10px
    margin 10px
    border-radius 10px
    div
      margin 10px
      font-size 12px
      display flex
      justify-content: space-between;
</style>