<template>
  <div class="comment_box">
    <div class="comment_title">
      <div class="left">
        <img height="42px" width="42px" class="comment_avatar" :src="listData.user.avatar" alt="">
        <div>
          <div class="comment_username">{{listData.user.username}}</div>
          <div class="comment_date">{{listData.createDate}}</div>
        </div>
      </div>
    </div>
    <div class="comment_content">
      <span :class="open?'close':''">
          {{listData.content}}
      </span>
      <div class="open" v-show="open" @click='toggle'>{{open?'展开':'关闭'}}</div>
      <div class="reply">
        <slot name="replay"></slot>
        <div class="comment_replay_svg"  @click="openComment">
          <Icon svg-name="comment"  height="20px" width="20px"></Icon>
          <span style="margin-left: 4px">102</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
  props:{
    showReplaySvg:{
      type:Boolean,
      default:true
    },
    listData:{
      type:Object,
      default:()=>{
        return {
          id: 1,
          user: {
            avatar: 'https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__ce77de2733d2f72b27f5abf616a7b5ac.svg',
            username: 'supperman',
          },
          content: '欢迎大家家家家家家家家在家家家家家家家家家家家在家家家家家家在家家家家家家家家家家家家家家在家家家家家家在家家家家家家家家家家家家家家在家家家家家家在家家家家家家 家家家在家家家家家家在家家家家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~',
          replay: [
            {
              user: '管理员小张',
              content: '你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。'
            }
          ],
          createDate: '2021-12-25',
        }
      }
    }
  },
  data(){
    return {
      open:false,
      show:false
    }
  },
  created() {
    if(this.listData.content.length>120){
      this.open = true
    }
  },
  methods:{
    toggle(){
      if(this.open){
        this.open = false
      }
    },
    openComment(){
      this.$router.push({name:'ReplayDetail'})
    }
  }
}
</script>

<style scoped lang="stylus">
.close
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4
  overflow: hidden;
.comment_box
  background-color #fff
  padding-bottom 30px
.comment_title
  padding 16px
  display flex
  justify-content: space-between;
  align-items center
  & .left
    display flex
    align-items center
    text-align left
    .comment_username
      margin-bottom 4px
      font-size 15px
      font-weight: 500;
      color: #000000;
      line-height: 21px;
    .comment_date
      font-size: 20px;
      -webkit-transform-origin-x: 0;
      -webkit-transform: scale(0.5833333333333334);
      font-family: PingFangSC-Regular, PingFang SC;
      color: #CCCCCC;
      line-height: 14px;
.comment_avatar
  margin-right 10px
  border-radius 50%

.comment_content
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: #333333;
  line-height: 23px;
  padding 16px
  font-size 14px
  text-align left
  position relative
  .open
    position absolute
    right 20px
    color #0099FF
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;

.reply
  margin-top 50px
  padding-top 14px
  position relative
  & .comment_replay_svg
    position absolute
    right 0
    top -25px
    display flex
    align-items center

</style>