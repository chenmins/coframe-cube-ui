<template>
  <div class="login">
    <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler"
    >
    </cube-form>
    <button @click="test">test</button>
  </div>
</template>


<script>
import exit from '@/libs/exit-login'


  export default{
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
      test(){
        this.$apiInstance.health((error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log('API called successfully. Returned data: ' + data);
            console.log(data);          }
        });
      },
      submitHandler(e,model){
        e.preventDefault()
        let data={
          "username":model.inputValue,
          "password":model.passwordValue
        }
        this.$axios.post('/api/users/login',data).then(res=>{
          localStorage.setItem('userInfo',JSON.stringify(res.data))
          localStorage.setItem('Token',res.data.token)
          this.$router.push('/')
        }).catch(error=>{
          let err = JSON.parse(JSON.stringify(error))
          if(err.message.includes('401')){
            this.toast = this.$createToast({
              txt: '登陆失败，账号不存在或密码错误',
              type: 'error'
            })
          }
          if(err.message.includes('500')){
            this.toast = this.$createToast({
              txt: '接口错误',
              type: 'error'
            })
          }
          this.toast = this.$createToast({
            txt: '请求失败',
            type: 'error'
          })
          this.toast.show()

        })
      }
    }

  }
</script>

<style scoped >
.loading{

}

</style>