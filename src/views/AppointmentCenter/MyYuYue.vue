<template xmlns="">
  <div style="height: 100vh; overflow: hidden">
    <ApproveContainer
      @changeHandle="changeHandle"
      class="clear-fix"
      style="height: 154px"
      :tabs="tabs"
      :selectedLabel="selectedLabel"
    >
      <LayOut v-show="toggleBreak" class="switch_box">
        <span>仅显示违约记录</span>
        <cube-switch class="switch" v-model="switchValue"></cube-switch>
      </LayOut>
      <template slot="default">
        <div style="height: calc(100vh - 190px); overflow: hidden">
          <cube-scroll ref="scroll" style="height: calc(100vh - 250px)">
            <Card v-for="reserve in listData" @clicked="sign(reserve)">
              <div class="title">
                <div class="dot"></div>
                <span>{{ reserve.type }}</span>
              </div>
              <div class="content font-normal">
                <p>
                  <span class="titou">预约时间 </span>
                  <span>{{
                    $dayjs(reserve.startTime).format("YYYY/MM/DD HH:mm:ss") +
                    "-" +
                    $dayjs(reserve.endTime).format("HH:mm:ss")
                  }}</span>
                </p>
                <!--                <p>-->
                <!--                  <span class="titou">预约地点 </span>-->
                <!--                  <span v-for="i in reserve.where">{{ i }}，</span>-->
                <!--                </p>-->
                <p>
                  <span class="titou">提交时间 </span>
                  {{ $dayjs(reserve.appointmentTime).format("YYYY/MM/DD HH:mm:ss") }}
                </p>
              </div>
              <div class="right_bottom" v-show="!toggleBreak">
                <span v-if="reserve.state === '已取消'" @click.stop>已取消</span>
                <span v-else @click.stop="Cancel(reserve)" style="color: #333">取消</span>
              </div>
              <template v-if="reserve.state === '已签到'">
                <!--                <Tag-->
                <!--                  v-if="!reserve.approved"-->
                <!--                  color="#fff"-->
                <!--                  class="tag"-->
                <!--                  :background-color="reserve.approved ? '#42b983' : '#000'"-->
                <!--                >-->
                <!--                  待审批-->
                <!--                </Tag>-->
                <Icon svg-name="guest-complete" class-name="svg_complete"></Icon>
              </template>
              <template v-else-if="reserve.state === '已违约'">
                <Icon class-name="tag" svg-name="break" height="80px" width="80px"></Icon>
              </template>
            </Card>
          </cube-scroll>
        </div>
      </template>
    </ApproveContainer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import ApproveContainer from "@/components/UI/ApproveContainer";
import Card from "@/components/UI/Card";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "MyYuYue",
  components: {
    ApproveContainer,
    SlideNav,
    Card,
  },
  data() {
    return {
      once: true,
      toggleBreak: false,
      checked: false,
      show: false,
      selectedLabel: "预约成功",
      approves: [],
      arrived: false,
      tabs: [
        {
          label: "预约成功",
        },
        {
          label: "已完成",
        },
      ],
      switchValue: false,
      listData: this.selfApply,
    };
  },
  created() {
    this.queryByStateForGather({ state: "预约成功" });
  },
  computed: {
    ...mapState("barber", ["selfApply"]),
  },
  methods: {
    sign(reserve) {
      // 扫码签到
      // if(reserve.state === '已预约'){
      //   this.$createDialog({
      //     type: 'confirm',
      //     content: '签到',
      //     onConfirm: () => {
      //       this.updateSign({
      //         barberId:reserve.id
      //       }).then(()=>{
      //         this.$router.push({name: 'YuYueSuccess',params:{
      //             info: reserve,item:'签到'
      //           }})
      //       })
      //
      //     }
      //   }).show()
      // }
    },
    async Cancel(reserve) {
      if (this.once) {
        await this.updateCancelForBarber({ barberId: reserve.id });
        this.once = false;
        this.queryByStateForGather({ state: "预约成功" }).then(() => {
          this.once = true;
        });
      }
    },
    ...mapMutations("barber", ["setState"]),
    ...mapActions("barber", [
      "queryByStateForGather",
      "updateCancelForBarber",
      "updateSignForBarber",
    ]),

    changeHandle(e) {
      this.toggleBreak = false;
      if (e === "已完成") {
        this.queryByStateForGather({ state: "已完成" });
        this.toggleBreak = true;
      } else {
        this.queryByStateForGather({ state: "预约成功" });
      }
    },
  },
  watch: {
    selfApply: {
      immediate: true,
      handler(newV, oldV) {
        this.listData = newV;
      },
    },
    switchValue(newV, oldV) {
      if (newV) {
        this.listData = this.selfApply.filter((i) => i.state === "已违约");
        return;
      }
      this.listData = this.selfApply;
    },
  },
};
</script>

<style scoped lang="stylus">

>>> .cube-switch .cube-switch-ui
  height 20px
  width 40px

>>> .cube-switch .cube-switch-ui::after
  width 20px

>>> .cube-switch .cube-switch-ui::before
  background-color #EBEBEB

>>> .cube-switch .cube-switch-input:checked + .cube-switch-ui
  background-color #0F97FB
  border-color #0F97FB

.switch_box
  height 20px
  margin 12px
  display flex
  align-items center
  justify-content: space-between;
  border-radius 6px
  font-size 14px
  z-index 99
  position relative
  padding 10px 12px

  .switch
    height 24px

.right_bottom
  border-radius 20px
  border 1px solid #CCCCCC
  padding 5px 21px

footer
  display flex
  justify-content: space-around;
  position fixed
  bottom 0
  height 50px
  line-height 50px
  background-color: #fff;
  width 100%

  span
    flex-grow 1

    &.active
      color $custom-active-color

#MyAppointment
  background-color $my-bgc-color
  height $custom-bgc-height

  .record
    display flex
    align-items center
    justify-content: space-between
    background-color: #fff;
    margin-bottom 10px
    padding 10px 40px

  .item
    padding 20px
    border-top 1px solid $custom-border-color
    position relative
    margin-bottom 20px

    .complete_img
      position absolute
      right 20px

    .tag
      border 1px solid $custom-active-color
      position absolute
      right 20px

    p
      font-size 12px
      text-align left
      line-height 25px

    p:nth-child(5)
      border-top 1px solid $custom-border-color
      padding-top 10px


.svg_complete
  height 80px
  width 80px
  position absolute
  top 10px
  right 10px
  transform rotate(-45deg)

.right_bottom
  position absolute
  right 10px
  bottom 20px
  display flex
  align-items center

  .svg_class
    height 16px
    width 16px
    margin-right 2px

  span
    font-size: 12px;
    color: #999999;
    line-height: 17px;

>>> .cube-tab, .tab_item
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 22px;

>>> .cube-tab-bar-slider
  margin-left 25px
  max-width: 20px;
  height: 4px;
  background: #FFFFFF;
  border-radius: 2px;

>>> .cube-tab
  min-width 70px
  font-size: 14px;
  color #fff
  font-weight: 500;
  line-height: 22px;

>>> .cube-tab_active
  font-size 16px

.card
  position relative

  .tag
    position absolute
    right 10px
    top 10px

.content
  margin 10px
  font-size 12px
  line-height 14px
  text-align left
  position relative

  p
    margin-top 6px


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
  color: #999999;
  display inline-block
  margin-right 30px
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

.tag
  padding 1px 5px 2px 6px
  position absolute
  right 8px
  top 10px
  font-size: 12px;
  color: #FFFFFF;
  line-height: 17px;
  border-radius 10px
</style>
