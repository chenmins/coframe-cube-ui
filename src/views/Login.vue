<template>
  <div class="login">
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler"
    >
    </cube-form>
<!--    <button @click="test"> test</button>-->
  </div>
</template>


<script>

import {AuthApiController} from '@controller'
import {setToken} from "@/utils/auth";
import router from "@/router";
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
  created() {

  },
  beforeRouteEnter(to,from,next){
    console.log(to,from)
    routerStorage = from.fullPath
    next()
  },
  methods: {
    async submitHandler(e, model) {
      e.preventDefault()

      let data = {
        "username": model.inputValue,
        "password": model.passwordValue
      }
      let resp = await this.dispatch(AuthApiController.login, data)
      if (!resp.error) {
        this.$store.commit('setUseInfo',resp.data)
        localStorage.setItem('admin',resp.data.admin)
        localStorage.setItem('userInfo', JSON.stringify(resp.data))
        localStorage.setItem('Token', resp.data.token)
        setToken(resp.data.token)
        this.$router.push(routerStorage?routerStorage:'/')
      } else {
        console.log('error')
      }

    }

  }

}
</script>

<style scoped>
.loading {

}

</style>