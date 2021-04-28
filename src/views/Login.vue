<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @submit="submitHandler" class="login-form">
    </cube-form>
  </div>
</template>

<script>
// import { AuthApiController } from "@controller";
import { setToken } from "@/utils/auth";
import axios from "axios";
import router from "@/router";
import { Toast } from "cube-ui";
import Vue from "_vue@2.6.11@vue";
import { LoginManager, AuthApiController } from "@controller";

//登录跳转路由储存s
let routerStorage;

export default {
  data() {
    return {
      model: {
        inputValue: "",
        passwordValue: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "inputValue",
            label: "账号",
            props: {
              placeholder: "请输入",
              clearable: true,
            },
            rules: {
              required: true,
            },
            // validating when blur
            trigger: "blur",
          },
          {
            type: "input",
            modelKey: "passwordValue",
            label: "密码",
            props: {
              placeholder: "请输入",
              clearable: true,
              eye: {
                open: false,
                reverse: false,
              },
              type: "password",
            },
            rules: {
              required: true,
            },
            // validating when blur
            trigger: "blur",
          },
          {
            type: "submit",
            props: {
              disabled: false,
            },
            label: "登陆",
          },
        ],
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    routerStorage = from.fullPath;

    next();
  },
  created() {
    if (localStorage.getItem("Token")) {
      this.$router.replace(routerStorage ? routerStorage : "/");
    }
  },
  methods: {
    async submitHandler(e, model) {
      this.schema.fields[2].props.disabled = true;
      let toast = this.$createToast({
        txt: "登陆中...",
        time: 0,
      });
      e.preventDefault();
      toast.show();
      let resp, coframeResp;
      resp = await this.dispatch(AuthApiController.login, {
        username: model.inputValue,
        password: model.passwordValue,
      });
      if (!resp.error) {
        this.$store.commit("setUseInfo", resp.data);
        localStorage.setItem("admin", resp.data.admin);
        localStorage.setItem("Token", resp.data.token);
        setToken(resp.data.token);
        this.$createToast({
          txt: "登陆成功，正在跳转",
          time: 500,
          onTimeout: () => {
            // this.$router.go(0)
            this.$router.replace(routerStorage ? routerStorage : "/");
            toast.hide();
          },
        }).show();
        return;
      }
      this.$createToast({
        txt: "登录超时",
        time: 500,
        onTimeout: () => {
          toast.hide();
        },
      }).show();
      this.loginStatus = false;
      this.schema.fields[2].props.disabled = false;
    },
  },
};
</script>

<style scoped lang="stylus">
.login {
  height: 100vh;
  position: relative;

  .login-form {
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
  }

  >>> .cube-btn {
    height: 20px;
    line-height: 0;
  }
}
</style>
