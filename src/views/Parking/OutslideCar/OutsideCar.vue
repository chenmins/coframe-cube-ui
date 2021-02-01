<template>
  <div id="outside_car">
    <Search :value="value" placeholder="搜索访客姓名"></Search>
    <SlideNav :selected-label="selectLabel" :tabs="tabs" :center="true" header-class="test">
      <LayOut class="item">
        <div class="title">
          <span>申请人</span> 技术部-王二小
        </div>
        <div class="body">
          <div>车牌号：京A BL192</div>
          <div>姓名：京A BL192</div>
          <div>姓名：京A BL192</div>
        </div>
        <Tag class="tag">待审批</Tag>
      </LayOut>
      <LayOut class="item">
        <div class="title">
          <span>申请人</span> 技术部-王二小
        </div>
        <div class="body">
          <div>车牌号：京A BL192</div>
          <div>姓名：京A BL192</div>
          <div>姓名：京A BL192</div>
        </div>
        <Tag class="tag">待审批</Tag>
      </LayOut>
      <LayOut class="item">
        <div class="title">
          <span>申请人</span> 技术部-王二小
        </div>
        <div class="body">
          <div>车牌号：京A BL192</div>
          <div>姓名：京A BL192</div>
          <div>姓名：京A BL192</div>
        </div>
        <Tag class="tag">待审批</Tag>
      </LayOut>
    </SlideNav>
  </div>
</template>

<script>
import Search from "@/components/Search";
import SlideNav from "@/components/Cultural/SlideNav";

export default {
  name: "OutsideCar",
  components: {SlideNav, Search},
  data() {
    return {
      value: '',
      selectLabel: '审批状态',
      tabs: [
        {
          label: '审批状态',
        }, {
          label: '到访日期'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
#outside_car

  >>> .test
    background-color #fff
    margin 0
    margin-bottom 20px

  .item
    margin-bottom 10px
    padding 20px
    text-align left
    font-size 12px
    position: relative;

    .title
      padding-bottom 10px
      border-bottom 1px solid $custom-border-color

    .body
      div
        margin-top 10px

    .tag
      position: absolute;
      right 20px
      top 15px
      border 1px solid $custom-border-color
      color $custom-border-color
</style>