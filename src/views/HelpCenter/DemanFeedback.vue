<template>
  <div id="DemanFeedback_app">
    <div class="DemanFeedback_app_container">
      <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__8565fe3f579cb9afe41eaae61dd71f36.svg" alt="">
        <div class="chat_wapper">
          <CommentBox v-for="list in listData" :list-data="list" :id="list.id">
            <template v-slot:replay>
              <ReplayBox v-for="replay in list.replay"></ReplayBox>
            </template>
          </CommentBox>
          <CommentBox >
          </CommentBox>
      </div>
    </div>
    <div class="write" @click="Replay">
      写
    </div>
  </div>
</template>

<script>
import CommentBox from "@/components/HelpCenter/CommentBox";
import ReplayBox from "@/components/HelpCenter/ReplayBox";

export default {
  name: "DemanFeedback",
  components: {CommentBox,ReplayBox},
  data(){
    return{
      listData:[
        {
          id:1,
          user:{
            avatar:'https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__ce77de2733d2f72b27f5abf616a7b5ac.svg',
            username:'supperman',
          },
          content:'欢迎大家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~',
          replay:[
            {
              user:'管理员小张',
              content:'你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。'
            },
            {
              user:'管理员小张',
              content:'你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。'
            },
            {
              user:'管理员小张',
              content:'你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。'
            }
          ],
          createDate:'2021-12-25',
        }
      ]
    }
  },
  methods:{
    Replay(){
      this.$router.push({name:'Replay'})
    },

  }
}
</script>

<style scoped lang="stylus">
#DemanFeedback_app
  font-size 14px
  padding-top 10px
  padding-bottom 130px
  background-color rgb(249,249,249)
.write
  height 40px
  width 40px
  position fixed
  z-index 10
  background-color #fff
  border-radius 50%
  border 1px solid black
  bottom 90px
  right 40px
  font-size 14px
  line-height 42px
  text-align center
  box-shadow 4px 4px 8px rgba(0,0,0,.6)
</style>