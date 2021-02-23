<template>
  <div id="Reserve" style="margin-bottom: 80px">
    <div class="top_fixed">
      <LayOut class="func">
          <span @click="showDefault" :style="status?'color:#fff':''">
            {{ status || '审批状态' }}
          <i class="cubeic-select"></i>
          </span>
        <span @click="showPicker">
          {{ selectedTime || '员工卡状态' }}
          <i class="cubeic-select"></i>
          </span>
        <span @click="showPicker">
          {{ selectedTime || '日期' }}
          <i class="cubeic-select"></i>
          </span>
      </LayOut>
      <LayOut class="switch_box">
        <span>仅显示违约记录</span>
        <cube-switch class="switch" v-model="switchValue">
        </cube-switch>
      </LayOut>
    </div>
    <NavLayOut color="#fff" style="padding-top: 80px;">
      <!--    @CardDetail-->
      <Card>
        <header>
            <span>易烊千玺的访客预约</span>
            <div style="display: flex;padding: 12px 0">
              <Tag class="tag">5F</Tag>
              <Tag class="tag">10人</Tag>
              <Tag class="tag">普通会议室</Tag>
              <Tag class="tag">可多选</Tag>
            </div>
        </header>
        <main>
          <div class="time_containner">
            <div class="active">9:00-10:00</div>
            <div>12:00-13:00</div>
            <div>12:00-13:00</div>
            <div>12:00-13:00</div>
            <div>12:00-13:00</div>
            <div>12:00-13:00</div>
            <div>9:00-10:00</div>
            <div>9:00-10:00</div>
            <div>9:00-10:00</div>
          </div>
          <button>预约</button>
        </main>
      </Card>

    </NavLayOut>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import MenuCard from "@/components/MainMenu/MenuCard";
import Card from "@/components/UI/Card";

export default {
  name: "addMeeting",
  components: {
    Card,
    Search,
    MenuCard
  },
  data() {
    return {
      switchValue:false,
      value: '',
      pickerData: '',
      reserves: [],
      status: '',
      selectedTime: ''
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
      } else {
        this.selectedTime = selectedVal[0]

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
<style scoped lang="stylus">
>>>#Nav_app
  background: linear-gradient(119deg, #19D4FF 0%, #0F97FB 100%);

>>>.nav_height
  margin-top 20px
>>> .cube-scroll-wrapper
  height calc(100vh - 220px)

>>> .scroll-list-wrap
  max-height calc(100vh - 210px)
  padding-bottom: 1px;

>>>.cube-switch .cube-switch-ui
  height 20px
  width 40px
>>>.cube-switch .cube-switch-ui::after
  width 20px
>>>.cube-switch .cube-switch-ui::before
  background-color #EBEBEB
>>>.cube-switch .cube-switch-input:checked + .cube-switch-ui
  background-color #0F97FB
  border-color #0F97FB

#Reserve
  //background-color #F5F6FA
  height: 231px;
  background: linear-gradient(119deg, #19D4FF 0%, #0F97FB 100%);
  border-radius: 1px;

  >>> .cube-input
    border-radius 14px

    span
      color #fff

  .top_fixed
    position fixed
    width 100%
    top 60px
    z-index 20
    background: linear-gradient(119deg, #19D4FF 0%, #0F97FB 100%);
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
    background: #FFFFFF;
    border-radius: 6px;
    margin 0 12px

    span
      flex-grow 1
      border 1px solid rgba($custom-border-color, .1)
      color #000

  .switch_box
    height 20px
    margin 12px
    display flex
    align-items center
    justify-content: space-between;
    padding 10px
    border-radius 6px
    font-size 14px
    .switch
      height 24px

  .tag
    color #0099FF
    font-size: 11px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    border 1px solid #0099FF
    padding 2px 6px
    margin 0 4px
  .active
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    color #fff
  .time_containner
    float left
    div
      width calc((100vw - 214px) / 3)
      white-space nowrap
      text-align center
      display inline-block
      padding 9px 13px
      background-color #F7F7F7
      border-radius 18px
      margin 12px 12px
      font-size: 12px;
  button
    width 100%
    margin  20px 0
    height 30px
    border-radius  20px
    border 1px solid #000000
    background-color #fff
</style>