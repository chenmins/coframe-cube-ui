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


</div>
</template>

<script>
import CommentBox from "@/components/HelpCenter/CommentBox";
import ReplayBox from "@/components/HelpCenter/ReplayBox";
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



.submit
    height 30px
    margin 0 20px
    background-color rgb(23	,134,	255)
    border-color transparent
    color #fff
    border-radius 6px
    padding 0 10px

</style>