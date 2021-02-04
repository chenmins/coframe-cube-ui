<template>
  <div id="card"
  >
    <div @click="goComment" class="title">
      <img
          src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__a63db0a228d80c34501a34fa50d27746.svg"
          alt="">
      <span class="username">
          <span>
             <slot name="username">username</slot>
          </span>
          <span class="time">
             <slot name="time">2020-02-22</slot>
          </span>
        </span>
    </div>
    <div @click="goComment" class="content_box">
      <div>
          <span class="content">
            <Icon svg-name="great" style="height: 20px;width: 20px;margin-right: 4px"></Icon>
            <slot name="content">
              欢迎大家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~
            </slot>
        </span>
      </div>
      <span class="card_topic" v-if="!isComment">
              <slot name="card_topic">
              </slot>
        </span>

    </div>

    <div class="footer">
      <div class="remove">
        <Icon svg-name="delete@2" style="height: 20px;width: 20px"></Icon>
      </div>
      <div class="func">
        <div class="like">
          <Icon svg-name="liked" style="height: 20px;width: 20px"></Icon>
          <span>21312</span>
        </div>
        <div class="comment"
             @click="$router.push({name: '交流圈-评论详情', params: {id: 1}})">
          <Icon svg-name="comment" style="height: 20px;width: 20px"></Icon>
          <span>11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    'isComment', 'isLike'
  ],
  methods: {
    seeComments() {
      this.$emit('checkComments')
    },
    goComment(e) {

      this.$emit('goComment', e)
    }
  }
}
</script>

<style scoped lang="stylus">
#card
  display flex
  flex-direction column
  background-color: #fff;
  padding 24px
  border-bottom 1px solid rgba(#000000, .2)

  .title
    align-self flex-start
    height 40px
    display flex
    align-items center
    justify-content: center;

    img
      height 31px
      width 31px
      border-radius 50%

    .username
      display flex
      flex-direction column
      margin-left 5px
      text-align left
      font-size 15px
      font-weight: 500;
      color: #000000;
      line-height: 21px;

    .time
      font-size 20px
      -webkit-transform scale(.5)
      -webkit-transform-origin-x: 0;
      font-weight: 400;
      color: #CCCCCC;
      line-height: 14px;

  .content_box
    margin 17px 0
    text-align left

  .content
    display flex
    align-items center
    font-size 16px
    font-weight 300
    color: #333333;
    line-height: 22px;
    letter-spacing: 1px;

  .card_topic
    display inline-block
    margin 12px 0 0
    border-radius: 11px;
    border: 1px solid #EDEDEA;
    color: #000000;
    line-height: 17px;
    padding 0 6px
    font-size 12px

  .footer
    margin-top 17px
    display flex
    justify-content: space-between;

    .func
      display flex

      span
        font-size 12px
        margin-left 2px

      .like, .comment
        display flex
        align-items center

      .like
        margin-right 18px

.comment_topic
  background-color $my-bgc-color
  text-align left
  padding 4px 8px
  border-radius 20px
  margin-top 10px
  display inline-block
</style>