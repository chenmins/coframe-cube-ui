<template>
  <div id="schedule_detail">
    <NavLayOut bgc-color="#fff">
      <LayOut class="schedule_group_1">
        <Icon svg-name="schedule-name" class-name="schedule-name"></Icon>
        <div>
          <header>
            书法比赛
          </header>
          <main>
            1月16日 周六 10:00 - 15:00
          </main>
        </div>
      </LayOut>
      <LayOut class="schedule_group_2">
        <ul>
          <li class="border-bottom-1px">
            <div class="header">组织者</div>
            <div class="content">易烊千玺</div>
          </li>
          <li class="border-bottom-1px">
            <div class="header">参与人</div>
            <div class="content">王一博</div>
          </li>
          <li class="border-bottom-1px">
            <div class="header">提醒</div>
            <div class="content">5分钟前</div>
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

    </NavLayOut>
<!--    普通-->
    <footer >
      <!--      todo 点击其他部分消失-->
      <div @click="send">
        <Icon svg-name="schedule-footer-1" class-name="schedule-footer schedule-footer-1"></Icon>
      </div>
      <div @click="">
        <Icon svg-name="schedule-footer-2" class-name="schedule-footer schedule-footer-2"></Icon>
      </div>
      <div @click="remove">
        <Icon svg-name="schedule-footer-3" class-name="schedule-footer schedule-footer-3"></Icon>
      </div>
    </footer>
<!--接收人-->
    <footer v-show="false">
      <!--      todo 点击其他部分消失-->
      <div @click="send" class="footer-func reject">
        拒绝
      </div>
      <div @click="" class="footer-func">
        待处理
      </div>
      <div @click="remove" class="footer-func">
        接受
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
      this.$createDialog({
        type: 'confirm',
        confirmBtn: {
          text: '确定',
          active: true
        },
        cancelBtn:{
          text: '取消',
          active: false,
        },
      }, (createElement) => {
        return [
          createElement('div', {
            'class': {
              'my-content': true
            },
            slot: 'content'
          }, [
            createElement('div', {
              'class': {
                'schedule-avatar': true
              },
            }),
            createElement('div', [
              createElement('h1', {
                'class': {
                  'schedule-h1': true
                },
              },'dasdas'),
              createElement('div', {
                'class': {
                  'schedule-content': true
                },
              },'dsadsada'),
            ])
          ])
        ]
      }).show()
    },
    remove(){
      this.$createDialog({
        type: 'confirm',
        title: '',
        content: '确定要删除当前日程？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">
#schedule_detail
  background-color $my-bgc-color
  position relative


  .schedule_group_1
    text-align left
    padding 20px
    margin-bottom 20px
    display flex
    align-items center
    background: linear-gradient(90deg, #DDFCE7 0%, #FFFFFF 100%);
    .schedule-name
      height 44px
      width 44px
      margin-right 18px

    header
      font-size 18px
      display flex
      align-items center

    main
      margin-top 8px
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
  .schedule_group_2
    text-align left
    padding 10px 22px
    li
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      color: #000000;
      line-height: 20px;
      margin-bottom 10px
      .header
        font-weight: 500;
        margin-bottom 7px
      .content
        font-weight: 400;
        font-family: PingFangSC-Regular, PingFang SC;
        padding-bottom 9px
  footer
    z-index 20
    display flex
    align-items center
    justify-content space-around
    position absolute
    bottom 0
    width 100%
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);

  .footer-func
    font-size 14px
    font-family: PingFangSC-Regular, PingFang SC;
    color #0099FF
    border 1px solid #0099FF
    border-radius 20px
    padding 10px 30px
  .reject
    color #ED2C54
    border 1px solid #ED2C54
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