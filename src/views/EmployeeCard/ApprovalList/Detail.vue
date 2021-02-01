<template>
  <div id="detail">
    <LayOut class="item">
      <p>补卡</p>
      <div>
        <p>申请人姓名</p>
        <p>陈悠悠</p>
      </div>
      <div>
        <p>所在部门</p>
        <p>集团公司-技术部</p>
      </div>
      <div>
        <p>申请日期</p>
        <p>2020-12-25 15:00</p>
      </div>
      <div  class="select">
        <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectFloor">{{ '选择楼层权限' }}</cube-button>
        <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectItem1">{{ '选项一' }}</cube-button>
        <cube-button :disabled="$route.meta.tag ==='confirm'" @click="selectItem2">{{ '选项二' }}</cube-button>
      </div>
    </LayOut>
    <Reserve
        :text-value="model.textareaValue"
        :status="status"
    >
    </Reserve>
  </div>
</template>

<script>
import Reserve from "@/components/Reserve";
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
  name: "Detail",
  components: {
    Reserve
  },
  data() {
    return {
      status: 'approve',

      model: {
        textareaValue: '',
      },

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

#detail
  height 100%
  background-color $my-bgc-color

  .item
    text-align left
    padding 10px
    margin-bottom 20px

    div
      margin 10px
      font-size 12px
      display flex
      justify-content: space-between;
  .select
    display flex
    padding 0 10px

    button
      transform scale(.8)
</style>