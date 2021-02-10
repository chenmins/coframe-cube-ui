<template>
  <div id="add_card">
  <NavLayOut bgc-color="#fff">
    <Card class="card" style="background-color: #fff;margin: 20px" >
      <div class="header">
        <h1 >启用</h1>
        <span>
        您当前员工卡的状态
      </span>
      </div>
      <div class="func_arae">
        <div class="func loss"  @click="showToastTime('挂失成功')">
          <div class="text">
            <div style="font-size: 18px;margin-bottom: 10px">挂失</div>
            <div style="font-size: 12px">员工卡</div>
          </div>
        </div>
        <div class="func dismiss"   @click="showToastTime('解除成功')">
            <div class="text">
              <div  style="font-size: 18px;margin-bottom: 10px">解除</div>
              <div  style="font-size: 12px">员工卡</div>
            </div>
        </div>
      </div>
      <div class="footer">
        注：挂失后员工卡为冻结状态且不可使用，如已找到可以解除挂失，回复启用状态。否则可以申请补卡。
      </div>
    </Card>
  </NavLayOut>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";

export default {
  name: "Loss",
  components: {Card},
  methods: {
    showToastTime(text) {
      const toast = this.$createToast({
        time: 1000,
        type:'txt',
        txt: text
      })
      toast.show()
    },
    showToastTime0() {
      const toast = this.$createToast({
        time: 0,
        txt: 'Toast time 0'
      })
      toast.show()
      setTimeout(() => {
        toast.hide()
      }, 2000)
    },

  }
}
</script>

<style scoped lang="stylus">
#add_card
  height 100vh
  background-color #fff
  .card
    position relative
    background: #FFFFFF;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.11);
    border-radius: 12px;
    padding 20px
    height 75vh
    .header
      text-align left
      padding 20px
      span
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;
    .func_arae
      display flex
      justify-content: space-evenly;
      .func
        width: 130px;
        height: 130px;
        border-radius: 12px;
        position relative
        .text
          position: absolute;
          top 50%
          left 50%
          transform translate(-50%,-50%)
      .loss
        color #E38117
        background: linear-gradient(180deg, #FFFBF7 0%, #FEEFDF 100%);
      .dismiss
        color #ED2C54
        background: linear-gradient(175deg, #FFFBFC 0%, #FFEAEA 100%);
    .footer
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #999999;
      line-height: 20px;
      position absolute
      bottom 20px
      text-align left
      padding 18px 20px
  h1
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #1FC210;
    line-height: 25px;
    display flex
    align-items center
    margin-bottom: 6px;
    &:before
      content ''
      display inline-block
      min-width: 6px;
      min-height: 6px;
      background: #1FC210;
      border-radius 50%


</style>