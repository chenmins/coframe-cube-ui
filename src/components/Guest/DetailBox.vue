<template>
  <LayOut class="box" style="background-color: transparent">
    <ul>
<!--      <li><span>来访时间：</span><span>2020/12/20  15:00</span></li>-->
<!--      <li><span>来访人数：</span><span>20人</span></li>-->
      <template>
        <div class="card_position">
          <div class="title">访客1信息</div>
          <li>
            <ul class="two">
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访姓名</span>
                </div>
                <div class="item_content">张小果</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访电话</span>
                </div>
                <div class="item_content">18600000000</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访单位</span>
                </div>
                <div class="item_content">中国电信股份有限公司北京分公司</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">健康情况</span>
                </div>
                <div class="item_content">优</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">是否来自高危地区</span>
                </div>
                <div class="item_content">否</div>
              </li>
            </ul>
          </li>
        </div>
        <div class="card_position">
          <div class="title">访客2信息</div>
          <li>
            <ul class="two">
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访姓名</span>
                </div>
                <div class="item_content">张小果</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访电话</span>
                </div>
                <div class="item_content">18600000000</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">来访单位</span>
                </div>
                <div class="item_content">中国电信股份有限公司北京分公司</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">健康情况</span>
                </div>
                <div class="item_content">优</div>
              </li>
              <li>
                <div style="display: flex;align-items: center">
                  <span class="dot"></span>
                  <span class="item_label">是否来自高危地区</span>
                </div>
                <div class="item_content">否</div>
              </li>
            </ul>
          </li>
        </div>

      </template>

    </ul>
  </LayOut>
</template>

<script>
export default {
name: "DetailBox"
}
</script>

<style scoped lang="stylus">
.card_position
  background-color #Fff
  margin-bottom 10px
  padding 1px
.box
  margin 8px 12px
  text-align left
  padding 1px
  .title
    margin 20px
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 25px;
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
    .dot
      width: 3px;
      height: 3px;
      border: 2px solid #0099FF;
      border-radius 50%
      margin-right 5px
    .item_label
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    .item_content
      margin-top 5px
      margin-left 12px
      font-size: 14px;
      font-weight: 500;
      color: #000000;
      line-height: 20px;
  span
    color $custom-gray
    font-size 13px

</style>