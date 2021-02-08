<template>
  <ApproveContainer style="height: 154px" :tabs="tabs" :selectedLabel="selectedLabel">
    <Card :reserve="approve" v-for="reserve in approves"
          @clicked="$router.push({name:'ApprovalDetail',params:{id:1}})"
    >
      <div class="title">
        <div class="dot"></div>
        <span>{{ reserve.title }}</span>
      </div>
      <div class="content font-normal">
        <p><span class="titou">预约时间 </span> <span v-for="i in reserve.name">{{ i }}，</span></p>
        <p><span class="titou">预约地点 </span> <span v-for="i in reserve.where">{{ i }}，</span></p>
        <p><span class="titou">提交时间 </span> {{ reserve.time }}</p>
      </div>
      <div class="right_bottom">
        <span>取消</span>
      </div>
      <template v-if="arrived">
        <Tag v-if="!reserve.approved" color="#fff" class="tag" :background-color="reserve.approved?'#42b983':'#000'">
          待审批
        </Tag>
        <Icon v-else svg-name="guest-complete" class-name="svg_complete"></Icon>
      </template>
      <template v-else>
        <Icon class-name="tag" svg-name="guest-arrived" height="80px" width="80px"></Icon>
      </template>
    </Card>

  </ApproveContainer>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import ApproveContainer from "@/components/UI/ApproveContainer";
import Card from "@/components/UI/Card";

export default {
  name: "MyYuYue",
  components: {
    ApproveContainer,
    SlideNav,Card
  },
  data() {
    return {
      checked: false,
      show: false,
      selectedLabel: '预约成功',
      approves: [],
      arrived:false,
      tabs: [
        {
          label: '预约成功'
        }, {
          label: '已完成'
        }
      ]
    }
  },
  created() {
    this.approves = this.$store.state.Guest.approves.filter(i => i.approved === false)

  },
  methods: {
    LabelChanged(e) {
      if (e === '已完成') {
        this.show = true
        return
      }
      this.show = false
    }
  },

}
</script>

<style scoped lang="stylus">
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