<template>
  <div class="comment_box">
    <div class="comment_title">
      <div class="left">
        <img height="42px" width="42px" class="comment_avatar" src="https://profile.csdnimg.cn/2/F/6/3_helloword182"
             alt="">
        <div>
          <div class="comment_username">{{ listData.userName }}</div>
          <div class="comment_date">
            {{ $dayjs(this.listData.feedbackTime).subtract(14, 'hour').format('YYYY-MM-DD HH:mm:ss') }}
          </div>
        </div>
      </div>
    </div>
    <div class="comment_content">
      <div>
        <img width="100%" :src="listData.picture" alt="">
      </div>
      <span :class="open?'close':''">
                {{ listData.body }}
      </span>
      <div class="open" v-show="open" @click='toggle'>{{ open ? '展开' : '关闭' }}</div>
      <div class="reply">
        <slot name="replay"></slot>
        <div class="comment_replay_svg" @click="openComment">
          <Icon svg-name="comment" height="20px" width="20px"></Icon>
          <span style="margin-left: 4px">{{ listData.replys.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
  props: {
    showReplaySvg: {
      type: Boolean,
      default: true
    },
    listData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      show: false,
      open: false
    }
  },
  created() {
    if (this.listData.body) {
      if (this.listData.body.length > 120) {
        this.open = true
      }
    }

  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false
      }
    },
    openComment() {
      if (this.$route.fullPath.includes('ReplayDetail')) return
      this.$axios.get(`/api/platform/help/demandFeedback/queryByIdJoinReply/${this.listData.id}`).then(res => {
        this.$router.push({name: 'ReplayDetail', params: {id: this.listData.id, data: res.data.body}})
      })
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