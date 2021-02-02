<template>
  <div id="schedule_detail">
    <LayOut class="schedule_group_1">
      <header>
        书法比赛
      </header>
      <main>
        1月16日 周六 10:00 - 15:00
      </main>
    </LayOut>

    <LayOut class="schedule_group_2">
      <ul>
        <li class="border-bottom-1px">
          <span>组织者</span>
        </li>
        <li class="border-bottom-1px">
          <span>参与人</span>
        </li>
        <li class="border-bottom-1px">
          <span>提醒</span>
        </li>
      </ul>
    </LayOut>
    <div class="dialog"  v-if="dialogShow">
      <div class="title">发送给</div>
      <div class="body">
        <div class="body_group">
          <img height="40" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__7352baff1a03901c510da4b5e68a5e14.svg" alt="">
          <span>陈优优</span>
        </div>
        <p style="margin-top: 10px">
          <span>【日程】</span>拔河比赛
        </p>
      </div>

      <div class="button_group">
        <span style="border-right: 1px solid black">取消</span>
        <span>发送</span>
      </div>
    </div>

    <footer >
<!--      todo 点击其他部分消失-->
      <div @click="send">
        发送
      </div>
      <div @click="">
        修改
      </div>
      <div @click="remove">
        删除
      </div>
    </footer>
  </div>
</template>

<script>
import { Dialog } from 'vant';

export default {
  name: "ScheduleDetail",
  data(){
    return{
      dialogShow:false
    }
  },
  methods:{
    send(){
      Dialog({ message: '提示' });

      this.dialogShow = true
    },
    remove(){
      Dialog.confirm({
        title: '',
        message: '确认删除此日程',
        confirmButtonColor:'rgb(23,134,255)'
      })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
          });
    }
  }
}
</script>

<style scoped lang="stylus">
#schedule_detail
  background-color $my-bgc-color
  height $custom-bgc-height
  .schedule_group_1
    text-align left
    padding 20px
    margin-bottom 20px
    header
      font-size 20px
    main
      font-size 14px
      margin-top 8px
  .schedule_group_2
    li
      height 40px
      line-height 40px
      font-size 14px
      text-align left
      margin-left 20px
  footer
    display flex
    justify-content: space-evenly;
    position absolute
    bottom 50px
    width 100%
  .dialog
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    width 260px
    padding 10px
    border-radius 10px
    background-color rgba($custom-border-color,.2)
    font-size 14px
    display flex
    flex-direction column
    .body
      padding-bottom 5px
      border-bottom 1px solid black
    .title,.body
      text-align left
      margin 5px
    .body_group
      display flex
      align-items center
      img
        margin-right 10px
  .button_group
    display flex
    justify-content space-evenly
    span
      height 22px
      line-height 22px
      flex-grow 1
.receive
  display flex
  justify-content: space-around;
  background-color: #fff;
  height 40px
  line-height 40px
  div:nth-child(2)
    min-width: 100px;
</style>