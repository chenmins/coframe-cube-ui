<template>
  <div id="ReserveDetail">
    <cube-scroll
        ref="scroll"
    >
      <DetailBox></DetailBox>

      <LayOut class="flow">
        <div class="title">审批流程</div>
        <div class="box">
          <div class="left">
            <div class="icon_box">
              <span class="icon_top">
                  <img height="20"
                       src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__087f154b5a1045b4d9567f84721a8497.png"
                       alt="">
              </span>
              <span class="icon_bottom">
                  <img  height="20"
                       src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__13af3da65dbdd95a1d7724d1de38735b.png"
                       alt="">
              </span>
            </div>
            <div class="main_group">
              <div>审批人</div>
              <div class="avatar_group">
                <img  width="25" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__087f154b5a1045b4d9567f84721a8497.png" alt="">
                <span>陈敏</span>
              </div>
              <span>抄送</span>
            </div>
          </div>
          <div class="right">
            <span>审批中</span>
          </div>
        </div>
        <cube-form
            :model="model"
            :schema="schema"
            :immediate-validate="false"
            :options="options"
            @validate="validateHandler"
            @submit="submitHandler"
            @reset="resetHandler"
        ></cube-form>
      </LayOut>
    </cube-scroll>


  </div>
</template>

<script>
import DetailBox from "@/components/Guest/DetailBox";

export default {
  name: "ReserveDetail",
  components: {
    DetailBox,
  },
  data(){
    return{
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      },
      validity: {},
      valid: undefined,
      model: {
        textareaValue: '',
      },
      schema: {
        groups: [
          {
            fields: [
              {
                type: 'textarea',
                modelKey: 'textareaValue',
                label: '拒绝理由',
                props:{
                  placeholder:'填写拒绝理由'
                },
                rules: {
                  required: true
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
                type: 'submit',
                label: '通过'
              },
              {
                type: 'reset',
                label: '拒绝'
              }
            ]
          }
        ]
      },

    }
  },

  methods: {
    submitHandler(e) {
      e.preventDefault()
      console.log('submit', e)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    resetHandler(e) {
      console.log('reset', e)
    }
  }
}
</script>

<style scoped lang="stylus">
#ReserveDetail
  background-color: $my-bgc-color
  height $viewpoint-height

  .title
    text-align left

  ul
    margin 20px
    border 1px solid transparent


.flow
  padding 15px
  >>>.cube-form-group-legend
    background-color: #fff;
  >>>.cube-textarea-wrapper
    border 1px solid $custom-border-color
    width 100%
  >>>.cube-form-group-content
    display flex
    justify-content: space-around;
  >>>.cube-btn
    height 20px
    line-height 0
    border-radius  8px

  >>>.cube-btn[type='submit']
    background-color $custom-active-color
    border 1px solid $custom-border-color

  >>>.cube-btn[type='reset']
    background-color #fff
    color $custom-active-color
    border 1px solid $custom-border-color
  .box
    width 100%
    display flex
    flex-direction row
    justify-content: space-between;
    align-items center
    margin 10px 0
    .left
      display flex
      align-items center
      .icon_box
        width 20px
        display flex
        flex-direction column
        justify-content: space-between;
        align-items center
        height 100px
        margin-right 15px
        .icon_top,.icon_bottom
          position relative

        .icon_top::after {
          content ''
          background-color $custom-active-color
          position absolute
          width 2px
          height 30px
          top 19px
          left 50%
          margin-left -1px
        }
        .icon_bottom::before {
          content ''
          background-color $custom-border-color
          position absolute
          width 2px
          height 30px
          bottom 22px
          right 50%
          margin-right -1px
        }

      .main_group
        height 100px
        display flex
        flex-direction column
        justify-content: space-evenly;
        text-align left
        .avatar_group
          display flex
          align-items center
          margin 10px 0
          font-size 14px
          img
            margin-right 8px
    </style>