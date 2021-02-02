<template>
  <div id="create_card">
    <Preview v-show="preview"></Preview>
    <img width="90%" class="bgc_img" style="margin-top: 10px"
         src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8c1e971a5e62603a7be89dc0ad3cbca.svg"
         alt="">
    <div class="message ">
      <div class="avatar">
        <img v-if="$route.meta.tag ==='confirm'" class="modify" height="20px"
             src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__bdb48036d8838fc6f9cbbf7ceadd6033.svg"
             alt="">
      </div>
      <div class="name">
        <div>王小二</div>
        <div>
          <p>国家管道局</p>
          <p>新能技术部</p>
        </div>
      </div>
      <div class="logo">
        <img height="50px"
             src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__2ba195f9f1609503b87840a70ee68856.svg"
             alt="">
        <div>国家管道局</div>
      </div>
    </div>
    <div class="select">
      <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectFloor">{{ '选择楼层权限' }}</cube-button>
      <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectItem1">{{ '选项一' }}</cube-button>
      <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectItem2">{{ '选项二' }}</cube-button>
    </div>
    <footer>
      <span style="border-right:1px solid #f5f5f5" @click="$router.push({name:'addCard'})">信息有误</span>
      <span @click="preview = !preview">预览确认</span>
    </footer>
  </div>
</template>

<script>
import Preview from "@/components/EmployeeCard/Preview";
const column1 = [
  {text: '行政楼A座-一层-南门', value: '剧毒'},
  {text: '行政楼B座-七层-南门', value: '蚂蚁'},
  {text: '综合楼-七层-东门', value: '幽鬼'}
]
const column2 = [
  {text: '输出', value: '输出'},
  {text: '控制', value: '控制'},
  {text: '核心', value: '核心'},
  {text: '爆发', value: '爆发'}
]
const column3 = [
  {text: '梅肯', value: '梅肯'},
  {text: '秘法鞋', value: '秘法鞋'},
  {text: '假腿', value: '假腿'},
  {text: '飞鞋', value: '飞鞋'}
]

export default {
  name: "CreateCard",
  components:{
    Preview
  },
  data(){
   return {
     preview:false
   }
  },
  methods: {
    selectItem2() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column3],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectItem1() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column2],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectFloor() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">
#create_card
  position relative
  background-color $my-bgc-color
  height $custom-bgc-height

  .modify
    position absolute
    bottom 20px
    right 20px

  .select
    display flex
    padding 0 10px

    button
      transform scale(.8)

  .message
    padding-top 40px
    position absolute
    top 0
    display flex
    flex-direction column
    align-items center
    width 100%

    .avatar
      width 200px
      height 200px
      background-color #fff
      border 1px solid $custom-border-color
      border-radius 50%
      position relative

    .name
      line-height 20px
      display flex
      flex-direction column
      align-self flex-start
      font-size 12px
      margin-left 50px
      margin-top 50px
      margin-bottom 50px

      div:nth-child(1)
        font-size 26px
        margin-bottom 18px

    .logo
      align-self flex-end
      font-size 12px
      margin 50px

  .select
    height 60px

  footer
    position fixed
    bottom 0
    height 50px
    background-color: #fff;
    width 100%
    line-height 50px
    display flex
    justify-content space-around

    span
      flex 1
</style>