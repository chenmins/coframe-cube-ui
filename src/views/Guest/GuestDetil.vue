<template>
  <div id="GuestDetail">

    <NavLayOut
      bgc-color="#fff"
    >
      <div class="top">
        <div class="top_top">
          <div class="left"></div>
          <div class="right">
            <div class="title">合作方案讨论</div>
            <div class="right_bottom">
              <div class="reason">来访事由</div>
              <div class="time">2021/12/30 15:00</div>
            </div>
          </div>
        </div>
        <div class="top_bottom">
          <div class="group">
            <div class="group_top">2</div>
            <div class="group_bottom">来访人数</div>
          </div>
          <div class="group">
            <div class="group_top">技术部技术部</div>
            <div class="group_bottom">到访部门</div>
          </div>
          <div class="group">
            <div class="group_top">易烊千玺</div>
            <div class="group_bottom">接待人</div>
          </div>
        </div>
      </div>
      <DetailBox></DetailBox>
      <LayOut class="flow" style="margin:0 8px 20px">
        <div class="title">审批流程</div>
        <ul>
          <li>
            <Icon class-name="status_svg" svg-name="guest-agree" height="14px" width="14px"></Icon>
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                  alt="">
              <div class="approve" >
                <div style="display: flex;flex-direction: column;align-items: flex-start">
                  <span class="name">张明</span>
                  <span class="status agree">已同意</span>
                </div>
                <div class="time">
                  <span>12/21  16:00 </span>
                </div>
              </div>
          </li>
          <li>
            <Icon class-name="status_svg" svg-name="guest-appro" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">
            <div class="approve" >
              <div style="display: flex;flex-direction: column;align-items: flex-start">
                <span class="name">张明</span>
                <span class="status appro">审批中</span>
              </div>
              <div class="time">
                <span>12/21  16:00 </span>
              </div>
            </div>
          </li>
          <li>
            <Icon class-name="status_svg" svg-name="guest-reject-min" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">
            <div class="approve" >
              <div style="display: flex;flex-direction: column;align-items: flex-start">
                <span class="name">张明</span>
                <span class="status reject">已拒绝</span>
              </div>
              <div class="time">
                <span>12/21  16:00 </span>
              </div>
            </div>
          </li>
        </ul>
      </LayOut>
    </NavLayOut>

    <footer>
      <cube-button >
        <div v-if="agree" style="overflow:hidden;display: flex;align-items: center">
          <Icon svg-name="guest-back" height="20px" width="20px"></Icon>
          <span>撤回</span>
        </div>
        <div v-else style="overflow:hidden;display: flex;align-items: center">
          <Icon svg-name="guest-back"  class-name="for_back" height="20px" width="20px"></Icon>
          <span style="color: #999" >已撤回</span>
        </div>
      </cube-button>
    </footer>
  </div>
</template>

<script>
import LayOut from "@/components/LayOut";
import DetailBox from "@/components/Guest/DetailBox";
export default {
  name: "GuestDetail",
  components: {
    LayOut,DetailBox
  },
  data(){
    return {
      agree:false
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-scroll-list-wrapper
  padding-bottom 100px
.for_back
  filter: drop-shadow(#999 80px 0);
  transform: translateX(-80px);
#GuestDetail
  background-color: $my-bgc-color
  height $viewpoint-height
  border 1px solid transparent
  .top
    height: 138px;
    background: linear-gradient(270deg, #FFFFFF 0%, #DFE9F3 100%);
    border-radius: 1px;
    .top_top
      text-align left
      display flex
      padding 9px 20px 0 20px
      .left
        width: 12px;
        height: 38px;
        background: linear-gradient(135deg, #19D4FF 0%, #0F97FB 100%);
        border-radius: 6px;
        margin-right 6px
      .right
        width 100%
        display flex
        flex-direction column
        .title
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 22px;
        .right_bottom
          display flex
          justify-content: space-between;
          .reason
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #999999;
            line-height: 17px;
          .time
            font-size: 10px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 14px;

    .top_bottom
      display flex
      justify-content space-around
      margin-top 27px
      .group
        .group_top
          margin-bottom 9px
          font-size: 12px;
          font-weight: 400;
          color: #000000;
          line-height: 17px;
        .group_bottom
          font-size: 10px;
          font-weight: 400;
          color: #999999;
          line-height: 14px;
  .container
    height calc(100% - 50px)
  footer
    width calc(100vw - 24px)
    position fixed
    bottom 0
    z-index 21
    padding 12px
    background-color #ffffff
    box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.12);
    border-radius: 1px
    >>>.cube-btn
      background: #F5F6FA;
      border-radius: 20px;
      color #000
      display flex
      align-items center
      justify-content: center;
      height 40px


.flow
  padding 15px
  .title
    text-align left
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;
  ul
    margin 20px 10px

    li
      display flex
      align-items center
      justify-content: space-between;
      margin 15px 0
      font-size 14px
      position relative

      .status_svg
        position absolute
        top 36px
        left 36px
        margin-top -10px
        margin-left -10px
      .approve
        width 100%
        display flex
        justify-content: space-between;
        .name
          font-size: 14px;
          color: #000000;
          line-height: 20px;
        .status
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
        .agree
          color: #1FC210;
        .reject
          color: #F20404
        .appro
          color: #FFC000

      .time
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
      img
        margin-right 10px
        min-height 36px
        min-width 36px
        border-radius 50%
      div
        display flex
        align-items center
</style>