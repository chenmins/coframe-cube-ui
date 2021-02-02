<template>
  <div id="my_approval">
    <SlideNav
        :selected-label="selectLabel"
        :tabs="tabs"
        :center="true"
    >
      <LayOut class="item" @clicked="$router.push({name:'Parking-ApprovalDetail',params:{id:1}})">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item" @clicked="$router.push({name:'Parking-ApprovalDetail',params:{id:1}})">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
      <LayOut class="item">
        <div class="header">
          <span>申请人</span>
          <span>技术部-王小二</span>
        </div>
        <div class="body">
          <span>车牌号：京A BL192s</span>
          <span>姓名：京A BL192</span>
          <span>入园日期：2020-12-20 15:00</span>
        </div>
        <Tag class="tag" color="#fff" background-color="rgb(23,134,255)">
          待审批
        </Tag>
      </LayOut>
    </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "MyApproval",
  components: {SlideNav},
  data() {
    return {
      selectLabel: '待审批',
      tabs: [
        {
          label: '待审批'
        }, {
          label: '已完成'
        }
      ]
    }
  },
  methods:{}
}
</script>

<style scoped lang="stylus">
#my_approval
  .item
    font-size 12px
    position relative
    margin-bottom 12px
    .header
        border-bottom 1px solid $custom-border-color
        padding 18px
        text-align left
        span:nth-child(1)
          margin-right 40px
      .body
        padding 20px
        text-align left
        display flex
        flex-direction column
        span
          margin 10px
    .tag
      position absolute
      top 16px
      right 20px
</style>