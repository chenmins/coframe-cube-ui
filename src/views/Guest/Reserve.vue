<template>
  <div id="Reserve" style="margin-bottom: 80px">
    <div class="top_fixed">
      <Search class="search" style="border-bottom: none;" placeholder="搜索访客姓名" :value="value"></Search>
      <LayOut class="func">
          <span @click="showDefault" :style="status?'color:#0251FE':''">
            {{ status || '审批状态' }}
          <i class="cubeic-select"></i>
          </span>
        <span @click="showPicker">到访日期
          <i class="cubeic-select"></i>
          </span>
      </LayOut>
    </div>
    <NavLayOut bgc-color="#fff" style="padding-top: 80px;">
      <!--    @CardDetail-->
      <div id="card" v-for="reserve in reserves" @click="$router.push({name:'GuestDetail',params:{id:1}})">
        <div class="title">
          <div class="dot"></div>
          <span>易烊千玺的访客预约</span>
        </div>
        <div class="content">
          <p><span class="titou">到访时间 </span> <span v-for="i in reserve.name">{{ i }}，</span></p>
          <p><span class="titou">到访部门 </span> <span v-for="i in reserve.where">{{ i }}，</span></p>
          <p><span class="titou">来访姓名 </span> {{ reserve.time }}</p>
        </div>
        <Tag color="#fff" class="tag" :background-color="reserve.approved?'#42b983':'#000'">
          {{ !reserve.approved ? '待审批' : '已完成' }}
        </Tag>
      </div>

      <div slot="right" class="right">
        <Icon svg-name="guest-qr" height="20px" width="20px" class-name="svg_position"></Icon>
      </div>
    </NavLayOut>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "Reserve",
  components: {
    Search,
    MenuCard
  },
  data() {
    return {
      value: '',
      pickerData: '',
      reserves: [],
      status: ''
    }
  },
  created() {
    this.reserves = this.$store.state.Guest.reserves
    this.pickerData = [
      {text: '近30天', value: '近30天'},
      {text: '近7天', value: '近7天'},
      {text: '全部', value: '全部'},
      {text: '自定义时间', value: '自定义时间'},
    ]
  },
  methods: {
    ThisReserve() {
      this.$router.push({name: 'GuestDetail', params: {id: 1}})
    },
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '',
          data: [this.pickerData],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      if (selectedIndex[0] === 3) {
        this.showTimePicker()
      }
    },
    showDefault() {
      this.$createActionSheet({
        title: '',
        pickerStyle: true,
        data: [
          {
            content: '待入园',
          },
          {
            content: '安保核验通过',
          },
          {
            content: '安保核验拒绝',
          },
          {
            content: '行政审核中',
          },
          {
            content: '已到访',
          },
          {
            content: '行政审核拒绝',
          },
          {
            content: '审批中  ',
          }
        ],
        onSelect: (item, index) => {
          this.status = item.content
        },
      }).show()
    },
    showTimePicker() {
      const timePicker = this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 15,
        day: {
          len: 30,
          filter: ['今天', '明天', '后天'],
          format: 'M月D日'
        },
        onSelect: (selectedTime, selectedText, formatedTime) => {

        },
      })
      // timePicker.setTime(time)
      timePicker.show()
    },
  }
}
</script>
>
<style scoped lang="stylus">

>>> .scroll-list-wrap
  max-height calc(100vh - 210px)
  padding-bottom: 1px;

#card
  text-align left
  padding 20px
  background-color #fff
  margin 12px
  border-radius 10px
  position relative

  .tag
    padding 1px 5px 2px 6px
    position absolute
    right 8px
    top 20px
    font-size: 12px;
    color: #FFFFFF;
    line-height: 17px;
    border-radius 10px

  .title
    display flex
    align-items center
    margin-bottom 14px
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

    .dot
      height 3px
      width 3px
      border 2px solid #0099FF
      border-radius 50%
      margin-right 7px

  .content
    font-size: 14px;

  .titou
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    margin-right 13px
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
.right
  margin-right 60px
  margin-top 15px

#Reserve
  background-color #F5F6FA

  .top_fixed
    position fixed
    width 100%
    top 60px
    z-index 20

  >>> input
    background-color #F5F6FA
    text-align left !important

  .func
    height 40px
    line-height: 40px;
    display flex
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;

    span
      flex-grow 1
      border 1px solid rgba($custom-border-color, .1)


</style>