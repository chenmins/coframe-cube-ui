<template>
  <div id="Recorded">
    <TitleNav bgc-color="#fff">
      <LayOut @clicked="$router.push({name:'Parking-ApprovalDetail',params:{id:1}})" class="item_header">
        <div class="header">
          <div>
            <h1>技术部-王小二</h1>
            <span>申请人</span>
          </div>
        </div>
        <div class="body">
          <div><span>车牌号：</span> 京A BL192s</div>
          <div><span>姓名：</span> 京A BL192</div>
          <div><span>入院日期：</span> 2020-12-20 15:00</div>
        </div>
      </LayOut>
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

    </TitleNav>

  </div>
</template>

<script>
export default {
  name: "Recorded"
}
</script>

<style scoped lang="stylus">

#Recorded
  .item_header
    font-size 12px
    position relative
    margin 8px
    border-radius 10px

    .header
      border-bottom 1px solid $custom-border-color
      padding 18px
      text-align left
      display flex
      align-items center
      &:before
        content:''
        display block
        height 3px
        width 3px
        border 2px solid #0099FF
        border-radius 50%
        margin-right 7px
      h1
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 22px;
      span
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
      span:nth-child(1)
        margin-right 40px

    .body
      padding 20px
      text-align left
      display flex
      flex-direction column
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 20px;
      span
        margin 5px
        display inline-block
        color #999
    .complete_svg
      height 80px
      width 80px
      position: absolute;
      bottom 10px
      right 10px
      transform rotate(-45deg) scale(.8)
    .tag
      position absolute
      top 16px
      right 20px
      border-radius 20px
  .flow
    padding 15px
    border-radius 6px
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