<template>
  <div id="DemanFeedback_app">
    <div class="DemanFeedback_app_container">
      <img width="100%" src="../../assets/icons/helpcenter-feedback.png" alt="" />
      <div class="chat_wapper">
        <CommentBox v-for="list in FeedbacksData" :list-data="list" :id="list.id">
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
import {mapActions, mapState} from "vuex";

export default {
  name: "DemanFeedback",
  components: { CommentBox, ReplayBox },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.initData({dispatch:this.dispatch,type:'Feedbacks',controller:'queryDemandFeedback'})
  },
  beforeUpdate() {
    // document.querySelector(".cube-scroll-list-wrapper").style.paddingBottom = "100px";
  },
  methods: {
    ...mapActions('HelpCenter',['initData'])

  },
  computed:{
    ...mapState('HelpCenter',['FeedbacksData']),
  }
};
</script>

<style scoped lang="stylus">
//>>>.cube-scroll-list-wrapper {
//  padding-bottom: 100px;
//}

#DemanFeedback_app {
  font-size: 14px;
  background-color: rgb(249, 249, 249);
}
</style>
