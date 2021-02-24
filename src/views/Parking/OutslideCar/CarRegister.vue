<template>
  <div id="car_register">
    <NavLayOut bgc-color="#fff">
      <cube-form
          :model="model"
          :schema="schema"
          :options="{
            layout:'classic'
          }"
          @validate="validateHandler"
          @submit="submitHandler"
      ></cube-form>
      <div class="title">请按照要求提供以下信息，完成车辆信息注册，感谢</div>
    </NavLayOut>
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
            label: '提交'
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
//取消input的边框
>>>.cube-input::after,>>>.cube-select::after
  border none
>>>.cube-validator .cube-input input,>>>.cube-validator
  text-align left
>>>.cube-form-group-content
  height calc(100vh - 60px)
  position relative
>>>.cube-form-item_btn
  position: absolute;
  width 90%
  bottom 0
#car_register
  .title
    position absolute
    bottom  60px
    left 50%
    width 100%
    transform translateX(-50%)
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 20px;
>>>.cube-btn
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  position absolute
  bottom 0
  left 50%
  margin-left -45%
  height 40px
  line-height 0
  width 90%
>>>.cube-input-field
  text-align center

</style>