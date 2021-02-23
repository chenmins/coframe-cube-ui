<template>
  <ApproveContainer :tabs="tabs" :selectedLabel="selectedLabel">
    <Card v-for="reserve in approves"
          @clicked="$router.push({name:'ReserveDetail',params:{id:1}})"
    >
      <div class="title">
        <div class="dot"></div>
        <span>{{ reserve.title }}</span>
      </div>
      <div class="content">
        <p><span class="titou">到访时间 </span> <span v-for="i in reserve.name">{{ i }}，</span></p>
        <p><span class="titou">到访部门 </span> <span v-for="i in reserve.where">{{ i }}，</span></p>
        <p><span class="titou">来访姓名 </span> {{ reserve.time }}</p>
      </div>
      <template v-if="arrived">
        <Tag color="#fff" class="tag" :background-color="reserve.approved?'#42b983':'#000'">
          {{ !reserve.approved ? '待审批' : '已完成' }}
        </Tag>
      </template>
      <template v-else>
        <Icon class-name="tag" svg-name="guest-arrived" height="80px" width="80px"></Icon>
      </template>
    </Card>
  </ApproveContainer>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import SlideNav from "@/components/Cultural/SlideNav";
import Search from "@/components/Search";
import Card from "@/components/UI/Card";
import ApproveContainer from "@/components/UI/ApproveContainer";

export default {
  components: {
    ApproveContainer,
    Card,
    SlideNav,
    MenuCard, Search
  },
  data() {
    return {
      selectedLabel: '待审批',
      tabs: [
        {
          label: '待审批',
        }, {
          label: '已完成',
        }
      ],
      approves: [],
      arrived: true
    }
  },
  created() {
    this.approves = this.$store.state.Guest.approves.filter(i => i.approved === false)
  },
  methods: {
    GuestDetail() {
      this.$router.push({name: 'ReserveDetail', params: {id: 1}})
    },
    changeHandle(e) {
      switch (e) {
        case '待审批':
          this.approves = this.$store.state.Guest.approves.filter(i => i.approved === false)
          break
        case '已完成':
          this.approves = this.$store.state.Guest.approves.filter(i => i.approved === true)
      }
    }
  },

}
</script>

<style scoped lang="stylus">
.card
  position relative

  .tag
    position absolute
    right 20px
    top 10px

.content
  margin 10px
  font-size 12px
  line-height 14px
  text-align left
  color $custom-gray
  position relative

  p
    margin-top 6px

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

</style>