<template>
  <div id="car_register">
      <div class="title">请按照要求提供以下信息，完成车辆信息注册，感谢</div>
    <cube-form
        :model="model"
        :schema="schema"
        @validate="validateHandler"
        @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
export default {
  name: "CarRegister",
  data(){
    return {
      model:{
        name:'',
        tel:'',
        carNumber:'',
        carType:'',
        comeInTime:''
      },
      schema:{
        fields:[
          {
            type: 'input',
            modelKey: 'name',
            label: '姓名',
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
            modelKey: 'tel',
            label: '手机号',
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
            modelKey: 'carNumber',
            label: '车牌号',
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
            type: 'select',
            modelKey: 'carType',
            label: '车型',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: 'comeInTime',
            label: '入圆时间',
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
            type: 'submit',
            label: '注册'
          },
        ]
      }
    }
  },
  methods:{
    submitHandler(e,model){
      e.preventDefault()
      console.log(e,model)
    },
    validateHandler(result){
      this.validity = result.validity
      this.valid = result.valid
    }
  }
}
</script>

<style scoped lang="stylus">
#car_register
  border 1px solid transparent
  padding 20px
  .title
    margin 20px
>>>.cube-btn
  background-color  $custom-active-color
>>>.cube-input-field
  text-align center

</style>