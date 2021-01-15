<template>
  <div>
    <cube-form
        :model="form"
        :schema="schema"
        @submit="submitHandler"
    >
    </cube-form>
  </div>
</template>

<script>
import exit from '@/libs/exit-login'
export default {
  name: "changePassword",
  data(){
    return{
      form:{
        originPassword:'',
        newPassword:'',
        passwordConfirm:''
      },
      schema:{
        fields:[
          {
            type: 'input',
            modelKey: 'originPassword',
            label: '原密码',
            props: {
              placeholder: '请输入',
              type:'password',
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
            modelKey: 'newPassword',
            label: '新密码',
            props: {
              placeholder: '请输入',
              type:'password',
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
            modelKey: 'passwordConfirm',
            label: '确认密码',
            props: {
              placeholder: '请输入',
              type:'password',
              clearable:true
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '修改密码'
          },
        ]
      },
    }
  },
  methods:{
    submitHandler(e){
      let data = {
        "oldPassword":this.form.originPassword,
        "newPassword":this.form.newPassword,
        "confirmPassword":this.form.passwordConfirm
      }
      this.$axios.put('/users/cof-user-sysadmin/modify-password',data).then(res=>{
        this.toast = this.$createToast({
          txt: '密码修改成功,请重新登录',
          type: 'txt'
        })
        this.toast.show()
        setTimeout(()=>{
          exit()
          this.toast.hide()
        },1000)
      })
      .catch(error=>{

      })
      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>