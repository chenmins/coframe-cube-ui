<template>
  <div id="card"  >
      <div @click="goComment" class="title">
        <img
            src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__a63db0a228d80c34501a34fa50d27746.svg"
            alt="">
        <span class="username">
        <slot name="username">username</slot>
      </span>
      </div>
      <div @click="goComment" class="content_box">
        <div>
      <span class="card_topic"  v-if="!$route.fullPath.includes('/Comments/')" >
        #<slot name="card_topic">
          哪个食堂的饭香
        </slot>#
      </span>
          <span class="content">
        <slot name="content">
          欢迎大家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~
        </slot>
      </span>
        </div>
        <div class="comment_topic" v-if="$route.fullPath.includes('/Comments/') && !isComment">
          #<slot name="card_topic">
          哪个食堂的饭香
        </slot>#
        </div>
      </div>

    <div class="footer">
      <div class="remove" v-if="!$route.fullPath.includes('/Comments/')">
        <i class="cubeic-delete"></i>
        删除
      </div>
      <div class="date" v-else>
        12/25  15:30
      </div>
      <div class="choice" v-if="!$route.fullPath.includes('/Comments/') && isLike">
        <i class="cubeic-vip" ></i>
        精选
      </div>
      <div class="func">
        <div class="like" v-if="isComment">
          <i class="cubeic-good"></i>
          <span>2222</span>
        </div>
        <div class="comment" @click="seeComments" v-if="!isComment" >
          <i class="cubeic-message"></i>
          <span>29778</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:[
      'isComment','isLike'
  ],
  methods:{
    seeComments(){
      this.$emit('checkComments')
    },
    goComment(e){

      this.$emit('goComment',e)
    }
  }
}
</script>

<style scoped lang="stylus">
#card
  display flex
  flex-direction column
  background-color: #fff;
  padding 10px
.title
  align-self flex-start
  height 40px
  display flex
  align-items center
  justify-content: center;
.username
  display inline-block
  margin-left 6px
  font-size 16px
.content_box
  margin 8px 30px
  font-size 15px
  line-height 20px
  text-align left
.card_topic
  color $custom-active-color
.footer
  margin 5px 10px
  font-size 13px
  display flex
  justify-content: space-between;
  .func
    display flex
    div
      padding-left 10px
    span
      font-size 10px
      margin-left 3px
.comment_topic
  background-color $my-bgc-color
  text-align left
  padding 4px 8px
  border-radius 20px
  margin-top 10px
  display inline-block
</style>