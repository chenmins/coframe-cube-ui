<template>
  <div class="comment_box">
    <div class="comment_title">
      <div class="left">
        <img height="26px" class="comment_avatar" :src="listData.user.avatar" alt="">
        <span class="comment_username">{{listData.user.username}}</span>
      </div>
      <div>
        <span class="comment_date">{{listData.createDate}}</span>
      </div>
    </div>
    <div class="comment_content">
      {{listData.content}}
      <div class="reply">
        <slot name="replay"></slot>
        <img v-if="showReplaySvg" @click="ReplayDetail" class="comment_replay_svg" height="20" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__2ff52d078bede9c49f2ef29b849b2fb0.svg" alt="">
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
          content: '欢迎大家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~',
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
  methods:{
      ReplayDetail(){
      this.$router.push('/ReplayDetail')
    }
  }
}
</script>

<style scoped lang="stylus">
.comment_box
  background-color #fff
  margin 20px 0
  padding-bottom 30px
.comment_title
  padding 16px
  display flex
  justify-content: space-between;
  align-items center
  & .left
    display flex
    align-items center
.comment_avatar
  margin-right 5px
.comment_content
  padding 0 30px
  font-size 14px
  text-align left
  line-height 20px
.reply
  position relative
  & .comment_replay_svg
    position absolute
    right 0
</style>