<template>
  <div id="Reserve" style="margin-bottom: 80px">
    <div class="top_fixed">
      <Search class="search" style="border-bottom: none;" placeholder="请搜索" :value="value"></Search>
      <LayOut class="func">
          <span @click="showDefault" :style="status?'color:#fff':''">
            {{ status || '审批状态' }}
          <i class="cubeic-select"></i>
          </span>
        <span @click="showPicker">
          {{ selectedTime || '日期' }}
          <i class="cubeic-select"></i>
          </span>
      </LayOut>
    </div>
    <TitleNav bgc-color="#3642FF" color="#fff" style="padding-top: 80px;">
      <!--    @CardDetail-->
      <div id="card" v-for="reserve in reserves" @click="$router.push({name:'GuestDetail',params:{id:1}})">
        <div class="header">
          <div class="title">
            <div class="dot"></div>
            <span>易烊千玺的访客预约</span>
          </div>
          <div class="title_little">申请人</div>
        </div>
        <div class="body">
          <div><span>车牌号：</span> 京A BL192s</div>
          <div><span>姓名：</span> 京A BL192</div>
          <div><span>入院日期：</span> 2020-12-20 15:00</div>
        </div>
        <Tag v-if="!reserve.approved" color="#fff" class="tag" background-color="#0099FF">
          待入园
        </Tag>
        <Icon v-else svg-name="guest-complete" class-name="complete_svg"></Icon>
      </div>

      <div slot="right" class="right" @click="BeiAn">
        新增备案
      </div>
    </TitleNav>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "index",
  components: {
    Search,
    MenuCard
  },
  data() {
    return {
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
    BeiAn(){
      this.$router.push({name:'Readme'})
    },
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
>
<style scoped lang="stylus">
>>> .cube-scroll-wrapper
  height calc(100vh - 220px)

>>> .scroll-list-wrap
  max-height calc(100vh - 210px)
  padding-bottom: 1px;

.complete_svg
  height 80px
  width 80px
  position: absolute;
  bottom 10px
  right 10px
  transform rotate(-45deg) scale(.8)

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
    line-height: 17px;
    border-radius 10px

  .title_little
    padding-bottom 9px
    border-bottom: 1px dashed #E0E0E0;
    margin-left 14px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 20px;

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

  .body
    text-align left
    display flex
    flex-direction column
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;

    span
      margin 5px
      display inline-block
      color #999

  .titou
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    margin-right 13px
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

.right
  margin-right 20px
  margin-top 40px
  font-size 12px

#Reserve
  //background-color #F5F6FA
  height: 231px;
  background: #3642FF;
  border-radius: 1px;

  .svg_position
    color #fff

  .search
    background-color #3642FF

  >>> .cube-input
    border-radius 14px

  >>> .func
    background-color #3642FF

    span
      color #fff

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