<template>
  <div id="Reserve" style="margin-bottom: 80px">
    <div class="top_fixed">
      <LayOut class="func"  >
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
    </div>
    <NavLayOut color="#fff" >
      <!--    @CardDetail-->
      <Card>
          <cube-checkbox  v-model="selected4">
            <div style="margin-left:18px">
              <div class="header">一号包间</div>
              <div class="time">2020/12/28 08:00-13:00</div>
            </div>
            <div class="tag">可预约</div>
          </cube-checkbox>
      </Card>
      <Card>
        <cube-checkbox  v-model="selected4">
          <div style="margin-left:18px">
            <div class="header">一号包间</div>
            <div class="time">2020/12/28 08:00-13:00</div>
          </div>
          <Icon svg-name="yiyuyue" class-name="yiyuyue" ></Icon>
        </cube-checkbox>
      </Card>
      <Card>
        <cube-checkbox  v-model="selected4">
          <div style="margin-left:18px">
            <div class="header">一号包间</div>
            <div class="time">2020/12/28 08:00-13:00</div>
          </div>
        </cube-checkbox>
      </Card>
      <Card>
        <cube-checkbox  v-model="selected4">
          <div style="margin-left:18px">
            <div class="header">一号包间</div>
            <div class="time">2020/12/28 08:00-13:00</div>
          </div>
        </cube-checkbox>
      </Card>
    </NavLayOut>


    <cube-button>立即预约</cube-button>

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
      selected4:'',
      reserves: [],
      status: '',
      selectedTime: '',
      options4: [
        {
          label: '1',
          value: '1',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
        },
        {
          label: '2',
          value: '2',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
        },
        {
          label: '3',
          value: '3',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',
          disabled: true
        }
      ]
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
>>> .cube-checkbox_checked .cube-checkbox-ui i
  color: transparent
  background-color transparent
  background-image url("../../../assets/icons/selected.png")
  background-size 100%
>>>.border-bottom-1px::after
  border none
.header
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 22px;
  margin-bottom 12px
.time
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
.card
  text-align center !important



  .time
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;

  .btn
    height: 30px;
    border-radius: 18px;
    border: 1px solid #000000;
    line-height 30px
    display inline-block
    padding 0 15px
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;

  >>> .cube-radio-label
    text-align center
    width 100%

  >>> .cube-radio_selected .cube-radio-ui
    background-color transparent
    background-image url("../../../assets/icons/selected.png")
    background-size 100%

  >>> .cube-radio-ui i::before
    display none

  .border-top-1px::before
    border none

  .border-top-1px::after
    border none
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

  .yiyuyue
    position absolute
    right 0
    top 0
    height 70px
    width 70px
  .tag
    position absolute
    right 0
    top 0
    display inline-block
    border-radius 20px
    color #fff
    background-color #0099FF
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
    div
      width calc((100vw - 214px) / 3)
      white-space nowrap
      text-align center
      display inline-block
      padding 9px 13px
      border-radius 18px
      margin 12px 12px
      font-size: 12px;
  button
    position absolute
    bottom  20px
    left 50%
    transform translateX(-50%)
    width 90%
    border-radius  20px
    background-color #fff
</style>