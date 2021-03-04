<template>
  <div id="help_center">
    <NavLayOut bgc-color="#fff" color="#333">
      <div
        class="replay"
        slot="right"
        v-show="$route.meta.name === '反馈'"
        @click="addDemandFeedback"
      >
        发表
      </div>
      <div class="container">
        <router-view />
      </div>
    </NavLayOut>
    <div
      class="replay_bot"
      v-show="$route.meta.name === '需求反馈' && show === 'true'"
    >
      <cube-textarea
        class="replay_textarea"
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @keyup.enter.native="replay"
      ></cube-textarea>
      <button
        @click="submit"
        style="
          margin-right: 10px;
          border: none;
          outline: none;
          padding: 5px;
          background: linear-gradient(90deg, #19d4ff 0%, #0f97fb 100%);
          color: #fff;
          font-size: 12px;
        "
      >
        评论
      </button>
      <!--      <Icon svg-name="helpcenter-emoji" style="margin-right: 10px" height="26px" width="26px"></Icon>-->
    </div>
    <Tabbar v-show="$route.meta.showTabbar" :tabs="tabs"></Tabbar>
  </div>
</template>

<script>
import HelpCenter from "./mixins/HelpCenter";
import { HelpControllerImpl } from "@controller";

export default {
  name: "index",
  mixins: [HelpCenter],
  data() {
    return {
      value: "",
      placeholder: "回复需求",
      maxlength: 200,
      show: "",
    };
  },
  created() {
    this.show = localStorage.getItem("admin");
  },
  methods: {
    replay() {
      //TODO 发送
      this.value = "";
    },

    async submit() {
      if (this.value !== "") {
        let resp;
        resp = await this.dispatch(HelpControllerImpl.AddDemandFeedbackReply, {
          body: this.value,
          feedbackId: this.$route.params.id,
        });
        if (!resp.error) {
          let Toast = this.$createToast({
            type: "success",
            txt: "回复成功",
            time: 500,
            onTimeout: () => {
              this.value = "";
              this.$router.push({ name: "需求反馈" });
            },
          });
          Toast.show();
        }
      }
    },
  },
};
</script>

<style scoped lang="stylus">
>>> .cube-scroll-wrapper {
  height: calc(100vh - 300px);
}

.replay_bot {
  box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 52px;
  background-color: #fff;
  z-index: 11;

  .replay_textarea {
    display: inline-block;
    height: 36px;
    bottom: 0;
    flex: 1;
    padding: 0 10px;
  }

  >>> .cube-textarea {
    background-color: #F5F6FA;
    border-radius: 18px;
  }

  >>> .cube-textarea-wrapper::after {
    border: none;
  }
}

#help_center {
  height: $custom-bgc-height;
  position: relative;

  .replay {
    margin-top: 40px;
    margin-right: 15px;
    width: 50px;
    height: 30px;
    background: #0099FF;
    border-radius: 15px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 30px;
  }
}
</style>