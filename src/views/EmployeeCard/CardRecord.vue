<template>
  <div id="card_record">
    <NavLayOut
        bgc-color="#fff"
        class="container"
    >
      <div slot="fixed" class="top_fixed">

        <Search class="search" style="border-bottom: none;" placeholder="搜索访客姓名" :value="value"></Search>
        <LayOut class="func">
          <span @click="approveStatus" :style="status?'color:#0251FE':''">
            {{ status || '审批状态' }}
          <i class="cubeic-select"></i>
          </span>
          <span @click="cardStatus">员工卡状态
          <i class="cubeic-select"></i>
          </span>
          <span @click="comeDate">到访日期
          <i class="cubeic-select"></i>
          </span>
        </LayOut>
      </div>
      <Card v-for="reserve in reserves" @clicked="$router.push({name:'Card',params:{id:1}})">
        <div  class="card_item"  >
          <div class="title">
            <div class="dot"></div>
            <span>易烊千玺的访客预约</span>
          </div>
          <div class="content">
            <p><span class="titou">到访时间 </span> <span v-for="i in reserve.name">{{ i }}，</span></p>
            <p><span class="titou">到访部门 </span> <span v-for="i in reserve.where">{{ i }}，</span></p>
            <p><span class="titou">来访姓名 </span> {{ reserve.time }}</p>
          </div>
          <div class="footer">
            修改
          </div>
          <Tag color="#fff" class="tag" :background-color="reserve.approved?'#42b983':'#000'">
            {{ !reserve.approved ? '待审批' : '已完成' }}
          </Tag>
        </div>
      </Card>


    </NavLayOut>
  </div>
</template>

<script>
import NavLayOut from "@/components/NavLayOut";
import Search from "@/components/Search";
import Card from "@/components/UI/Card";

export default {
  name: "CardRecord",
  components: {
    Card,
    Search,
    NavLayOut

  },
  data() {
    return {
      value: '',
      reserves:[],
      pickerData:[]
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
  methods:{
    approveStatus1() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '',
          data: [this.pickerData],
          onSelect: this.selectHandle,
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      if (selectedIndex[0] === 3) {
        this.showTimePicker()
      }
    },
    approveStatus() {
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
    cardStatus() {
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
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-scroll-wrapper
  height  calc(100vh - 160px)
>>>#card
  padding 0


.card_item
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
      margin 0 10px
      display flex
      align-items center
      padding 14px
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
      padding 0 14px 14px
      margin 0 10px 10px
      p
        margin-bottom 10px
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
    .footer
      text-align center
      border-top 1px solid rgba(#000 ,.09)
      padding 12px
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #000000;
      line-height: 20px;
    .titou
      margin-right 13px
      text-align center
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #333333;
      line-height: 17px;





#card_record
  background: #F5F6FA;
  >>>.nav_height
    height calc(100vh - 170px)
    overflow: hidden;
    //>>>.cube-scroll-content
    //>>>.cube-scroll-list-wrapper
  .top_fixed
    position: relative;
    z-index: 11;

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


  .search
    background-color #ffffff

    >>> .cu_input
      background-color #F5F6FA

    >>> .cubeic-search
      left 80px
</style>