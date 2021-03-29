<template>
  <div class="login">
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler"
        class="login-form"
    >
    </cube-form>
    <!--    <button @click="test"> test</button>-->
  </div>
</template>


<script>

import {AuthApiController} from '@controller'
import {setToken} from "@/utils/auth";
import axios from "axios";
import router from "@/router";
import {Toast} from "cube-ui";
//登录跳转路由储存s
let routerStorage

export default {
  data() {
    return {
      model: {
        inputValue: '',
        passwordValue: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'inputValue',
            label: '账号',
            props: {
              placeholder: '请输入',
              clearable: true
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: 'blur'
          },
          {
            type: 'input',
            modelKey: 'passwordValue',
            label: '密码',
            props: {
              placeholder: '请输入',
              clearable: true,
              eye: {
                open: false,
                reverse: false
              },
              type: 'password'
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '登陆'
          },
        ]
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    routerStorage = from.fullPath

    next()
  },
  created() {
    if(localStorage.getItem('Token')){
      this.$router.replace(routerStorage ? routerStorage : '/')
    }
  },
  methods: {
    async submitHandler(e, model) {
      let toast = this.$createToast({
        txt:'登陆中',
        time:0
      })
      e.preventDefault()
      toast.show()
      let data = {
        "username": model.inputValue,
        "password": model.passwordValue
      }
      let resp
      try {
        resp= await this.dispatch(AuthApiController.login, data)

      }catch (e) {
        toast.hide()
      }

      if (!resp.error) {
        this.$store.commit('setUseInfo', resp.data)
        if(resp.data.admin){
          localStorage.setItem('admin', resp.data.admin)
        }
        localStorage.setItem('Token', resp.data.token)
        setToken(resp.data.token)
        toast.hide()
        this.$createToast({
          txt: '登陆成功，正在跳转',
          time: 500,
          onTimeout:()=>{
            // this.$router.go(0)
            this.$router.replace(routerStorage ? routerStorage : '/')
          }
        }).show()
      } else {
        console.log('error')
      }
    }

  }

}
</script>

<style scoped lang="stylus">
.login
  height 100vh
  position relative

  .login-form
    border-radius 20px
    position absolute
    left 50%
    top 50%
    width 90%
    transform translate(-50%,-50%)
  >>>.cube-btn
    height 20px
    line-height 0
</style>