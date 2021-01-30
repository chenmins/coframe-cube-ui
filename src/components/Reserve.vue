<template>
  <LayOut class="flow">
    <div class="title">审批流程</div>
    <!--        初始表单-->
    <div class="box">
      <div class="left">
        <div class="icon_box">
              <span class="icon_top">
                  <img height="20"
                       src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__087f154b5a1045b4d9567f84721a8497.png"
                       alt="">
              </span>
          <span class="icon_bottom">
                  <img height="20"
                       src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__13af3da65dbdd95a1d7724d1de38735b.png"
                       alt="">
              </span>
        </div>
        <div class="main_group">
          <div>审批人</div>
          <div class="avatar_group">
            <img width="25"
                 src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__087f154b5a1045b4d9567f84721a8497.png"
                 alt="">
            <span>陈敏</span>
          </div>
          <span>抄送</span>
        </div>
      </div>
      <div class="right">
        <span v-if="status==='agree'">同意</span>
        <span v-else-if="status==='approve'">审批中</span>
        <span v-else>拒绝</span>
      </div>
    </div>
    <!--    @validate="validateHandler"-->
    <!--    @submit="submitHandler"-->
    <!--    @reset="resetHandler"-->
    <cube-form
        v-show="status!=='agree'"
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"

    ></cube-form>
  </LayOut>
</template>

<script>
export default {
  name: "Reserve",
  props:[
      'model',
      'schema',
      'options',
      'status'
  ]
}
</script>

<style scoped lang="stylus">
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
  >>>.cube-form-item.cube-form-item_required
    font-size 10px
    width 100%
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