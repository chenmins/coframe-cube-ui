<template>
  <div class="login">


    <cube-form
        :model="model"
        :schema="schema"

        @submit="submitHandler"
    >

    </cube-form>


  </div>
</template>


<script>
  export default{
    data(){
      return {

        model:{
          inputValue: '',
          passwordValue:''
        },
        form:{
          username:'',
          password:''
        },
        schema:{
          fields:[
            {
              type: 'input',
              modelKey: 'inputValue',
              label: '账号',
              props: {
                placeholder: '请输入'
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
    methods:{

      submitHandler(e,model){
        e.preventDefault()
        console.log (model)
        this.$axios.post('/users/login',{"username":model.inputValue,"password":model.passwordValue}).then(res=>{
          this.$router.push('/')
        }).catch(error=>{
          let err = JSON.parse(JSON.stringify(error))
          this.toast = this.$createToast({
            txt: err.message,
            type: 'txt'
          })
          this.toast.show()
        })


      },
      submit(){
        this.$router.push('/')
      },
    }

  }
</script>

<style scoped >


</style>