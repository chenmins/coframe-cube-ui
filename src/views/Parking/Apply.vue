<template>
  <div id="Apply">
    <ApproveContainer :selected-label="selectedLabel"
                      :tabs="tabs">
      <LayOut class="item">
        <div class="left">
          <div style="display: flex;align-items: center">
            <Icon svg-name="parking-p" class-name="parking-svg"></Icon>
            <div>
              <p>A0192</p>
              <p>车位编号</p>
            </div>
          </div>
          <div :class="isUsed?'func_btn shifang':'func_btn'" @click="getParking">
            <span v-if="!isUsed">预约</span>
            <span v-else >释放</span>
          </div>
        </div>
        <div class="date">日期：2020-12-20 至 2020-12-30</div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <div style="display: flex;align-items: center">
            <Icon svg-name="parking-p" class-name="parking-svg"></Icon>
            <div>
              <p>A0192</p>
              <p>车位编号</p>
            </div>
          </div>
          <div :class="isUsed?'func_btn shifang':'func_btn'">
            <span v-if="!isUsed">预约</span>
            <span v-else >释放</span>
          </div>
        </div>
        <div class="date">日期：2020-12-20 至 2020-12-30</div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <div style="display: flex;align-items: center">
            <Icon svg-name="parking-p" class-name="parking-svg"></Icon>
            <div>
              <p>A0192</p>
              <p>车位编号</p>
            </div>
          </div>
          <div :class="isUsed?'func_btn shifang':'func_btn'">
            <span v-if="!isUsed">预约</span>
            <span v-else >释放</span>
          </div>
        </div>
        <div class="date">日期：2020-12-20 至 2020-12-30</div>
      </LayOut>
    </ApproveContainer>
    <Calendar v-model="show"  type="range" @confirm="onConfirm"  :min-date="minDate" :max-date="maxDate" />
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import NavLayOut from "@/components/NavLayOut";
import ApproveContainer from "@/components/UI/ApproveContainer";
import { Calendar } from 'vant';


export default {
  name: "Apply",
  components: {
    ApproveContainer,
    SlideNav, NavLayOut,Calendar
  },
  data() {
    return {
      show:false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 31),
      date:'',
      selectedLabel: 'B2层',
      tabs: [
        {
          label: 'B2层'
        }, {
          label: 'B3层'
        }, {
          label: 'B4层'
        }
      ],
      isUsed: true,

    }
  },
  methods:{
    getParking(e){
      if(!this.isUsed){
        this.$createDialog({
          type: 'confirm',
          title: '申请车位编号：A1902',
          content: '日期：2021/01/23-2021/02/23',
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击确认按钮'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击取消按钮'
            }).show()
          }
        }).show()
      }else{

        this.show = true
      }
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
  }
}
</script>

<style scoped lang="stylus">
>>>.van-calendar__day--start,>>>.van-calendar__day--end
  background-color #0051FF
>>>.van-calendar__day--middle
  background-color rgba(#0051FF,.06)
  color #000
  &:after
    background-color rgba(#0051FF,.06)
>>>.van-button--danger
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border none
#Apply
  $custom-bgc-height
.item
  border-radius 10px
  display flex
  flex-direction column
  justify-content: space-between;
  font-size 14px
  text-align left
  margin 12px
  padding 20px
  .date
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
  .left
    width 100%
    display flex
    align-items center
    justify-content: space-between;
    margin-bottom: 22px;
    padding-bottom 18px
    border-bottom 1px solid rgba(#000,.1)
    p:first-child
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 25px;
    p
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    .parking-svg
      height 34px
      width 34px
      margin-right 6px
  .func_btn
    border 1px solid #0099FF
    color #0099FF
    padding 5px 22px
    height 100%
    font-size 10px
    border-radius 10px
    margin 20px
  .shifang
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    color #fff
    border none
</style>