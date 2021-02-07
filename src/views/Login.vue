<template>
  <div class="login">
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler"
    >
    </cube-form>
    <button @click="test"> test</button>
  </div>
</template>


<script>

import {setToken} from '@/utils/auth'
import axios from "axios";
import {UserController} from "@/actions/controller";
import {Demo} from "@/actions/controller";
import BaseVue from "@/libs/BaseVue";
import Vue from 'vue'

export default{
  mixins:[BaseVue],
    data(){
      return {
        model:{
          inputValue: '',
          passwordValue:''
        },
        schema:{
          fields:[
            {
              type: 'input',
              modelKey: 'inputValue',
              label: '账号',
              props: {
                placeholder: '请输入',
                clearable:true
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
                clearable:true,
                eye:{
                  open:false,
                  reverse:false
                },
                type:'password'
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
        }

      }
    },
    created() {
      if(localStorage.getItem('Token')){
        this.$axios.get('/api/users/menus').then(res=>{
          this.$router.push('/')
          return
        })
      }
    },
    methods:{
     async test(){
       // let apiInstance = new this.$XgeneCloud.CommonApi() //将api挂在到vue原型链上
       //    apiInstance.health((error, data, response) => {
       //    if (error) {
       //      console.error(error);
       //    } else {
       //      console.log('API called successfully. Returned data: ' + data);
       //      console.log(data);          }
       //  });

       let resp = {}
       resp = await this.dispatch(Demo.insert,{
         "body": "string",
         "title": "st1r1isang",
         "type": "string",
         "updateUser": 0
       })
       console.log(resp)
       if(!resp.error){
         alert('success')
       }else{
         alert('failure')
       }
      },
      submitHandler(e,model){
        e.preventDefault()

        let data={
          "username":model.inputValue,
          "password":model.passwordValue
        }
        this.$store.dispatch('login',data)
        }
    }

  }
</script>

<style scoped >
.loading{

}

</style>