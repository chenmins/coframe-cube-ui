<template>
  <LayOut class="box">
    <ul>
      <li><span>来访时间：</span><span>2020/12/20  15:00</span></li>
      <li><span>来访人数：</span><span>20人</span></li>
      <template>
        <div class="title">访客<i>1</i>信息</div>
        <li>
          <ul class="two">
            <li><span>来访姓名</span> <span>张小果</span></li>
            <li><span>来访电话</span> <span>18600000000</span></li>
            <li><span>来访单位</span> <span>中国电信股份有限公司北京分公司</span></li>
            <li><span>健康情况</span> <span>优</span></li>
            <li><span>是否来自高危地区</span> <span>否</span></li>
          </ul>
        </li>
        <div class="title">访客<i>1</i>信息</div>
        <li>
          <ul class="two">
            <li><span>来访姓名</span> <span>张小果</span></li>
            <li><span>来访电话</span> <span>18600000000</span></li>
            <li><span>来访单位</span> <span>中国电信股份有限公司北京分公司</span></li>
            <li><span>健康情况</span> <span>优</span></li>
            <li><span>是否来自高危地区</span> <span>否</span></li>
          </ul>
        </li>
        <div class="title">访客<i>1</i>信息</div>
        <li>
          <ul class="two">
            <li><span>来访姓名</span> <span>张小果</span></li>
            <li><span>来访电话</span> <span>18600000000</span></li>
            <li><span>来访单位</span> <span>中国电信股份有限公司北京分公司</span></li>
            <li><span>健康情况</span> <span>优</span></li>
            <li><span>是否来自高危地区</span> <span>否</span></li>
          </ul>
        </li>
        <div class="title">访客<i>1</i>信息</div>
        <li>
          <ul class="two">
            <li><span>来访姓名</span> <span>张小果</span></li>
            <li><span>来访电话</span> <span>18600000000</span></li>
            <li><span>来访单位</span> <span>中国电信股份有限公司北京分公司</span></li>
            <li><span>健康情况</span> <span>优</span></li>
            <li><span>是否来自高危地区</span> <span>否</span></li>
          </ul>
        </li>
      </template>
      <li><span>来访事由</span> <span>技术方案讨论</span></li>
      <li><span>到访部门</span> <span>技术部</span></li>
      <li><span>接待人</span> <span>王二小</span></li>
    </ul>
  </LayOut>
</template>

<script>
export default {
name: "DetailBox"
}
</script>

<style scoped lang="stylus">
.box
  margin 20px 0
  text-align left
  padding 10px
  .title
    margin-top 10px
    &+li
      margin-bottom 20px
  i
    background-color $custom-active-color
    color #ffffff
    text-align center
    padding 1px
    line-height 18px
    width 16px
    height 16px
    border-radius 50%
    display inline-block
  .two
    width 100%
  li
    margin 10px
    display flex
    justify-content: space-between;
    span:nth-child(2)
      color #000
  span
    color $custom-gray
    font-size 13px

</style>