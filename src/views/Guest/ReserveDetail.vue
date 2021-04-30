<template>
  <div id="ReserveDetail">
    <TitleNav bgc-color="#fff">
      <div class="top">
        <div class="top_top">
          <!--          <div class="left"></div>-->
          <Icon
              svg-name="four"
              style="margin-right: 12px"
              height="44px"
              width="44px"
          ></Icon>
          <div class="right">
            <div class="title">合作方案讨论</div>
            <div class="right_bottom">
              <div class="reason">来访事由</div>
              <div class="time">来访时间：2021/12/30 15:00</div>
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
      <Icon
          svg-name="guest-forback"
          class-name="icon_status"
          height="95"
          width="95"
      ></Icon>
      <DetailBox></DetailBox>
      <LayOut class="flow" style="margin: 0 12px 20px">
        <div class="title">审批流程</div>
        <ul class="approve_ul">
          <li>
            <Icon
                class-name="status_svg"
                svg-name="guest-appro"
                height="14px"
                width="14px"
            ></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt=""
            />
            <div class="approve">
              <div style="display: flex; flex-direction: column; align-items: flex-start">
                <span class="name">张明</span>
                <span class="status appro">审批中</span>
              </div>
              <div class="time">
                <span>12/21 16:00 </span>
              </div>
            </div>
          </li>
          <li>
            <Icon
                class-name="status_svg"
                svg-name="guest-agree"
                height="14px"
                width="14px"
            ></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt=""
            />

            <div class="approve">
              <div style="display: flex; flex-direction: column; align-items: flex-start">
                <span class="name">张明</span>
                <span class="status" style="color: #999">审批人：易烊千玺</span>
              </div>
              <div class="time">
                <span class="agree">同意</span>
              </div>
            </div>
          </li>
          <li style="margin-bottom: -10px">
            <Icon
                class-name="status_svg"
                svg-name="guest-reject-min"
                height="14px"
                width="14px"
            ></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt=""
            />
            <div class="approve">
              <div style="display: flex; flex-direction: column; align-items: flex-start">
                <span class="name">张明</span>
                <span class="status" style="color: #999">审批人：易烊千玺</span>
              </div>
              <div class="time">
                <span class="reject">已拒绝</span>
              </div>
            </div>
          </li>
          <li class="avatar" style="margin-left: 18px">
            <div
                style="padding: 10px 14px; background-color: #f5f6fa; border-radius: 8px"
            >
              这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦
            </div>
          </li>
          <li class="send" style="margin-top: -10px">
            <Icon
                class-name="status_svg"
                svg-name="guest-reject-min"
                height="14px"
                width="14px"
            ></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt=""
            />
            <div class="approve">
              <span>抄送</span>
            </div>
          </li>
        </ul>
      </LayOut>
    </TitleNav>
    <footer>
      <button class="rej" @click="$router.push({ name: 'RejectConfirm' })">拒绝</button>
      <button class="pass" @click="$router.push({ name: 'Approve' })">通过</button>
    </footer>
  </div>
</template>

<script>
import DetailBox from "@/components/Guest/DetailBox";
import Button from "@/components/UI/Button";

export default {
  name: "ReserveDetail",
  components: {
    DetailBox,
    Button,
  },
  data() {
    return {
      status: "approve",
      options: {
        scrollToInvalidField: true,
        layout: "standard", // classic fresh
      },
      validity: {},
      valid: undefined,
      model: {
        textareaValue: "",
      },
      schema: {
        groups: [
          {
            fields: [
              {
                type: "textarea",
                modelKey: "textareaValue",
                label: "拒绝理由",
                props: {
                  placeholder: "填写拒绝理由",
                },
                rules: {
                  required: false,
                },
                // debounce validate
                // if set to true, the default debounce time will be 200(ms)
                debounce: 100,
              },
            ],
          },
          {
            fields: [
              {
                type: "reset",
                label: "通过",
              },
              {
                type: "submit",
                label: "拒绝",
              },
            ],
          },
        ],
      },
    };
  },

  methods: {
    hiddenButton() {
      this.schema.groups[1].fields = [];
    },
    submitHandler(e) {
      e.preventDefault();
      this.status = "";
      this.hiddenButton();
      console.log("submit", e);
    },
    validateHandler(result) {
      this.validity = result.validity;
      this.valid = result.valid;
    },
    resetHandler(e) {
      this.status = "agree";
      this.hiddenButton();
      console.log("reset", e);
    },
  },
};
</script>

<style scoped lang="stylus">
>>>.scroll-height-set
  height calc(100vh - 130px)
.icon_status
  position: absolute;
  right 20px
  transform rotate(-45deg)
footer
  position fixed
  background-color #fff
  bottom 0
  width 100%
  display flex
  z-index 11

  button
    height 40px
    width 100%
    margin 12px 24px
    border-radius 20px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    border 1px solid #0099FF
    background-color #fff
    color #0099FF

    &:nth-child(2)
      background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
      color #fff
      border none

.avatar
  position: relative;
  z-index 1
  border-left 1px dashed #cccccc
  padding-left 20px
  height 100%
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333333;
  line-height: 20px;
  text-align left

#ReserveDetail
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
          color: #90ABC5;
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

  .title
    text-align left


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
