<template>
  <div id="ReplayDetail">
    <CommentBox :showReplaySvg="false" :list-data="listData" :id="listData.id">
      <template v-slot:replay>
        <ReplayBox v-for="replay in listData.replys" :list-data="replay"></ReplayBox>
      </template>
    </CommentBox>
  </div>
</template>

<script>
import CommentBox from "@/components/HelpCenter/CommentBox";
import ReplayBox from "@/components/HelpCenter/ReplayBox";

export default {
  name: "ReplayDetail",
  components: {
    CommentBox,
    ReplayBox,
  },
  data() {
    return {
      value: "",
      placeholder: "回复需求",
      maxlength: 200,
      listData: {
        id: 1,
        user: {
          avatar:
            "https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__ce77de2733d2f72b27f5abf616a7b5ac.svg",
          username: "supperman",
        },
        body: "欢迎大家家家家家家家家家在家家家家中出来哟，帮助我们更好的改进产品~~~",
        replay: [
          {
            user: "管理员小张",
            body: "你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。",
          },
        ],
        createDate: "2021-12-25",
      },
    };
  },
  created() {
    this.listData = this.$route.params.data;
  },
};
</script>

<style scoped lang="stylus">
#ReplayDetail {
  font-size: 14px;
  position: relative;
  background-color: #fff;
}

.submit {
  height: 30px;
  margin: 0 20px;
  background-color: rgb(23, 134, 255);
  border-color: transparent;
  color: #fff;
  border-radius: 6px;
  padding: 0 10px;
}
</style>
