<template>
<div id="ReplayDetail">
  <CommentBox :showReplaySvg='false'  >
    <template v-slot:replay >
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
      <ReplayBox></ReplayBox>
    </template>
  </CommentBox>
  <div class="replay">
    <cube-textarea
        class="replay_textarea"
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
    ></cube-textarea>
    <button class="submit">发送</button>
  </div>

</div>
</template>

<script>
import CommentBox from "@/components/CommentBox";
import ReplayBox from "@/components/ReplayBox";
export default {
  name: "ReplayDetail",
  components:{
    CommentBox,ReplayBox
  },
  data() {
    return {
      value: '',
      placeholder: '回复需求',
      maxlength: 200,
    }
  },

}
</script>

<style scoped lang="stylus">
#ReplayDetail
  font-size 14px
  position relative
  background-color #efefef

.replay
  display flex
  margin-top -20px
.replay
  display flex
  align-items center
  .replay_textarea
    display inline-block
    height 70px
    bottom 0
    flex 1
  .submit
    height 30px
    margin 0 20px
    background-color rgb(23	,134,	255)
    border-color transparent
    color #fff
    border-radius 6px
    padding 0 10px

</style>