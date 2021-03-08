<template>
  <div class="comments_app">
    <NavLayOut bgc-color="#fff" style="margin-bottom: 100px">
      <Card :is-comment="false">
        <div slot="username">{{ userTableData.userName }}</div>
        <div slot="time">
          {{ $dayjs(userTableData.releaseTime).format("YYYY-MM-DD") }}
        </div>
        <template v-slot:image>
          <div style="width: 100%" class="clear-fix">
            <img
              class="cul_img"
              width="30%"
              v-for="i in userTableData.picture.split(',')"
              :src="i"
              alt=""
            />
          </div>
        </template>
        <div slot="likeName">{{ userTableData.fabulousPlusCount }}</div>
        <template v-slot:content>
          {{ userTableData.picture }}

          {{ userTableData.body }}</template
        >
        <template v-slot:card_topic
          >话题id#{{ userTableData.topicOfConversationId }}</template
        >
      </Card>
      <div style="margin-top: 20px">
        <div
          style="
            background-color: #fff;
            color: #999;
            font-size: 15px;
            text-align: right;
            padding: 8px 20px;
          "
        >
          {{ userTableData.comments.length }}条评论
        </div>
        <Card
          class="card"
          :isComment="true"
          v-for="comment in userTableData.comments"
          :key="userTableData.id"
        >
          {{ comment.picture }}
          <div slot="content" class="content">
            {{ comment.body }}
          </div>
        </Card>
      </div>
    </NavLayOut>
    <div class="go_comment">
      <form style="width: 100%" class="comment_submit" @submit="submitHandler">
        <cube-textarea
          v-model="value"
          class="inputarea"
          :placeholder="placeholder"
          :maxlength="maxlength"
        >
        </cube-textarea>
        <button type="submit">发送</button>
      </form>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Cultural/Card";
import axios from "axios";
import urls from "@/utils/mock/url"; // 引入实现准备好的接口请求相关配置

import { PipCcoCciController } from "@controller";
import { CulturalControllerImpl } from "@controller";

export default {
  name: "Comments",
  components: {
    Card,
  },
  data() {
    return {
      value: "",
      placeholder: "请输入评论",
      maxlength: 200,
      userTableData: [], // 定义需要的数据
    };
  },
  created() {
    this.init();
    this.userTableData = this.$route.params.data;
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      // let resp = await this.dispatch(PipCcoCciController.)
    },
    async init() {
      //todo 交流圈详情
      let resp = await this.dispatch(
        CulturalControllerImpl.getCommunicationCircleEntity,
        {
          id: this.$route.params.id,
          pageSize: 10,
          pageNo: 1,
        }
      );
      if (!resp.error) {
        console.log(resp);
        this.userTableData = resp.data.body;
      }
    },
    async submit() {
      let resp = await this.dispatch(PipCcoCciController.upCommentById, {});

      console.log(resp);
    },
  },
};
</script>

<style scoped lang="stylus">
.cul_img {
  float: left;
}

.comment_submit {
  display: flex;
  align-items: center;
  padding-left: 10px;

  button {
    border: none;
    outline: none;
    margin-right: 10px;
    font-size: 12px;
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    color: #fff;
    height: 20px;
  }
}

.comments_app {
  background-color: $my-bgc-color;
  position: relative;
  height: 100vh;
}

.card {
  border-bottom: 1px solid rgba($my-bgc-color, 1);
}

.go_comment {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 65;
  background: #FFFFFF;
  padding: 15px 0 13px 0;
  box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.12);
}

.inputarea {
  flex-grow: 1;
  margin-right: 30px;
  height: 32px;
  background: #F5F6FA;
  border-radius: 32px;

  >>>textarea {
    display: inline-block;
    background: #F5F6FA;
    line-height: 15px;
    border-radius: 32px;
  }
}

.cube-textarea-wrapper::after {
  border: none;
}

.btn {
  width: 70px;
  height: 30px;
  margin: 0 10px;
  line-height: 2px;
  background-color: $custom-active-color;
}
</style>