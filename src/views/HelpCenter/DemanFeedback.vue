<template>
  <div id="DemanFeedback_app">
    <div class="DemanFeedback_app_container">
      <img width="100%" src="../../assets/icons/helpcenter-feedback.png" alt="">
      <div class="chat_wapper">
          <CommentBox v-for="list in feedback" :list-data="list" :id="list.id" >
            <template v-slot:replay>
              <ReplayBox v-for="replay in list.replys" :list-data="replay"></ReplayBox>
            </template>
          </CommentBox>
      </div>
    </div>

  </div>
</template>

<script>
import CommentBox from "@/components/HelpCenter/CommentBox";
import ReplayBox from "@/components/HelpCenter/ReplayBox";
import HelpCenter from './mixins/HelpCenter'

export default {
  name: "DemanFeedback",
  components: {CommentBox,ReplayBox},
  mixins:[HelpCenter],

  created() {
    this.initFeedback()
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
#DemanFeedback_app
  font-size 14px
  background-color rgb(249,249,249)

</style>