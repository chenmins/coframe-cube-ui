<template>
  <FloorSelect @confirm="submit" :showAdd="true" :showClose="true" confirmText="提交修改" cancelText="取消">
    <div slot="right" class="right_btn" @click="removeCard">注销</div>
    <LayOut class="item-container">
      <section class="item">
        <div class="title">办理类型</div>
        <div class="content">{{ cardInfo.type }}</div>
      </section>
      <section class="item">
        <div class="title">申请人姓名</div>
        <div class="content">{{cardInfo.userName}}</div>
      </section>
      <section class="item">
        <div class="title">所在部门</div>
        <div class="content">{{cardInfo.section}}</div>
      </section>
      <section class="item">
        <div class="title">申请日期</div>
        <div class="content">{{$dayjs(cardInfo.handleTime).format('YYYY/MM/DD')}}</div>
      </section>
    </LayOut>
  </FloorSelect>
</template>

<script>
import FloorSelect from "@/views/EmployeeCard/components/FloorSelect";
import LayOut from "@/components/LayOut";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "Card",
  components: {LayOut, FloorSelect},
  created() {
    let cardInfo = this.$route.params.cardInfo
    this.setCardInfo(cardInfo)
    this.setFloorModel(JSON.parse(cardInfo.floorAuthority))

  },
  methods:{
    ...mapMutations('EmployeeCard', ['setCardInfo', 'setFloorModel', 'setFirstModel']),
    ...mapActions('EmployeeCard',['updateWorkCard']),
    submit(){
      this.updateWorkCard({
        floorAuthority:JSON.stringify(this.$store.state.EmployeeCard.groupModel.floorModel)
      })
    },
    removeCard() {
      this.$createDialog({
        type: 'confirm',
        title: '确定注销该员工卡吗？',
        maskClosable: true,
        onConfirm: (e) => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: `点击了确认`
          }).show()
        }
      }).show()
    },
  },
  computed:{
    ...mapState('EmployeeCard',['cardInfo'])
  }
}
</script>

<style scoped lang="stylus">
.right_btn
  position absolute
  right 0
  top -10px
  width 100px
.item-container
  margin-top 10px
  padding-bottom 12px
  .item
    text-align left
    margin 12px
    padding 10px
    .title
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #999999;
      line-height: 20px;

    .content
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 20px;
      letter-spacing: 1px;
      border-bottom 1px solid rgba(#000000,.1)
      padding 7px
</style>