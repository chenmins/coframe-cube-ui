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
  <cube-textarea
      class="replay_textarea"
      v-model="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
  ></cube-textarea>
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
.replay_textarea
  height 120px
  bottom 0
.comment_box
  margin 0

</style>