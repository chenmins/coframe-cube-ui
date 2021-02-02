<template>
  <cube-form
    :model="model"
    :schema="schema"
  >

  </cube-form>
</template>

<script>
export default {
  name: "DryClean",
  data(){
    return {
      model:{
        clothesType:'',
        name:'',
        tel:'',
        address:''
      },
      schema:{
        fields:[
          {
            type: 'select',
            modelKey: 'clothesType',
            label: '衣物类型',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
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
            modelKey: 'address',
            label: '取衣地址',
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
            type:'submit',
            label:'提交'
          }
        ]
      }
    }
  }
}
</script>



<style scoped lang="stylus">
.cube-form
  background-color $my-bgc-color
  position relative
  height $custom-bgc-height
  >>>.cube-form-item
    margin 10px 0
  >>>.cube-input-field
    border 1px solid $custom-border-color
    text-align center
  >>>.cube-form-item_btn
    position absolute
    bottom 20px
    width 200px
    left 50%
    margin-left -100px
    .cube-btn
      background-color $custom-active-color

</style>