<template>
  <LayOut class="flow" style="margin:0 12px 20px">
    <div class="title">审批流程</div>
    <ul class="approve_ul">
      <li>
        <Icon class-name="status_svg" svg-name="guest-appro" height="14px" width="14px"></Icon>
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
            alt="">
        <div class="approve">
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
        <Icon class-name="status_svg" svg-name="guest-agree" height="14px" width="14px"></Icon>
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
            alt="">

        <div class="approve">
          <div style="display: flex;flex-direction: column;align-items: flex-start">
            <span class="name">张明</span>
            <span class="status " style="color: #999">审批人：易烊千玺</span>
          </div>
          <div class="time">
            <span class="agree">同意</span>
          </div>
        </div>
      </li>
      <li style="margin-bottom:-10px">
        <Icon class-name="status_svg" svg-name="guest-reject-min" height="14px" width="14px"></Icon>
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
            alt="">
        <div class="approve">
          <div style="display: flex;flex-direction: column;align-items: flex-start">
            <span class="name">张明</span>
            <span class="status " style="color: #999">审批人：易烊千玺</span>
          </div>
          <div class="time">
            <span class="reject">已拒绝</span>
          </div>
        </div>

      </li>
      <li class="avatar" style="margin-left: 18px">
        <div style="padding: 10px 14px;background-color: #F5F6FA;border-radius: 8px">
          这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦
        </div>
      </li>
      <li class="send" style="margin-top: -10px">
        <Icon class-name="status_svg" svg-name="guest-reject-min" height="14px" width="14px"></Icon>
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
            alt="">
        <div class="approve">
          <span>抄送</span>
        </div>
      </li>
    </ul>
  </LayOut>

</template>

<script>
export default {
  name: "Reserve",
  props:[
      'textValue',
    /*
         approve or agree
    */
      'status'
  ],
  data(){
    return {
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      },

      model: {
        textareaValue: this.textValue,
      },
      schema: {
        groups: [
          {
            fields: [
              {
                type: 'textarea',
                modelKey: 'textareaValue',
                label: '拒绝理由',
                props: {
                  placeholder: '填写拒绝理由'
                },
                rules: {
                  required: false
                },
                // debounce validate
                // if set to true, the default debounce time will be 200(ms)
                debounce: 100
              }
            ]
          },
          {
            fields: [
              {
                type: 'reset',
                label: '通过'
              },
              {
                type: 'submit',
                label: '拒绝',
              }
            ]
          }
        ]
      },

    }
  }
}
</script>

<style scoped lang="stylus">
.flow
  padding 15px

  .title
    text-align left
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

  .approve_ul
    .send
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
        z-index 10

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