<template>
  <div>
    <Search :value="value" placeholder="搜索访客姓名"></Search>
    <div class="box">
      <div>审批状态</div>
      <div @click="showDefault">{{selected || '点击选择时间'}}</div>
    </div>
    <LayOut class="item">
      <header>理发室-洗发</header>
      <main>
        <div>预约时间:2021-01-10 11:00-13:00</div>
        <div>行政部-陈小花</div>
        <div>提交时间:2021-01-10 12:00</div>
      </main>
      <Tag class="tag"></Tag>
    </LayOut>
    <LayOut class="item">
      <header>理发室-洗发</header>
      <main>
        <div>预约时间:2021-01-10 11:00-13:00</div>
        <div>行政部-陈小花</div>
        <div>提交时间:2021-01-10 12:00</div>
      </main>
      <Tag class="tag"></Tag>
    </LayOut>
    <LayOut class="item">
      <header>理发室-洗发</header>
      <main>
        <div>预约时间:2021-01-10 11:00-13:00</div>
        <div>行政部-陈小花</div>
        <div>提交时间:2021-01-10 12:00</div>
      </main>
      <Tag class="tag"></Tag>
    </LayOut>
    <LayOut class="item">
      <header>理发室-洗发</header>
      <main>
        <div>预约时间:2021-01-10 11:00-13:00</div>
        <div>行政部-陈小花</div>
        <div>提交时间:2021-01-10 12:00</div>
      </main>
      <Tag class="tag"></Tag>
    </LayOut>
    <LayOut class="item">
      <header>理发室-洗发</header>
      <main>
        <div>预约时间:2021-01-10 11:00-13:00</div>
        <div>行政部-陈小花</div>
        <div>提交时间:2021-01-10 12:00</div>
      </main>
      <Tag class="tag"></Tag>
    </LayOut>
  </div>
</template>

<script>
import Search from "@/components/Search";
import SlideNav from "@/components/Cultural/SlideNav";
const dateSegmentData = [
  {
    is: 'cube-date-picker',
    title: '开始时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: 'cube-date-picker',
    title: '结束时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
]
export default {
  name: "List",
  components: {SlideNav, Search},
  data(){
    return{
      value:'',
      selected:''
    }
  },
  mounted () {
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Items: <br/> - 开始时间: ${selectedTexts[0].join('')} <br/> - 结束时间: ${selectedTexts[1].join('')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    })
  },
  methods: {
    showDateSegmentPicker() {
      this.dateSegmentPicker.show()
    },
    showDefault() {
      this.$createActionSheet({
        title: '我是标题~~~',
        data: [
          {
            content: '近七天',
            class: 'cube-foo'
          },
          {
            content: '昨天',
          },
          {
            content: '今天',
          },
          {
            content: '自定义时间',
          }
        ],
        onSelect: (item, index) => {
          if(item.content === '自定义时间'){
            this.showDateSegmentPicker()
          }
          this.selected = item.content
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    },
    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
  }
}
</script>

<style scoped lang="stylus">
.box
  display flex
  justify-content: space-evenly;
  height 40px
  line-height 40px
  margin-bottom: 10px;
  background-color #fff
  div
    flex-grow 1
  div:nth-child(1)
    border-right 1px solid $custom-border-color
.item
  font-size 12px
  text-align left
  padding 20px
  position relative
  margin-bottom 10px
  border-top 1px solid $custom-border-color

  header
    font-size 14px

  main
    div
      margin 10px 0 0

    div:nth-child(2)
      padding-bottom 10px
      border-bottom 1px solid $custom-border-color

  .tag
    background-color $custom-active-color
    position absolute
    top 15px
    right 20px

</style>