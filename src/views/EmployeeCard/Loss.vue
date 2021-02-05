<template>
  <div id="add_card">
  <NavLayOut bgc-color="#fff">
    <LayOut class="card" style="background-color: #fff;margin: 20px" >
      <div class="header">
        <h1 >启用</h1>
        <span>
        您当前员工卡的状态
      </span>
      </div>
      <div class="func_arae">
        <div class="func loss" @click="lossStatus('loss')">
          <div>
            <div>挂失</div>
            <div>员工卡</div>
          </div>
        </div>
        <div class="func dismiss"  @click="lossStatus('removeloss')">
            <div>
              <div>解除</div>
              <div>员工卡</div>
            </div>
        </div>
      </div>
      <footer>
        注：挂失后员工卡为冻结状态且不可使用，如已找到可以解除挂失，回复启用状态。否则可以申请补卡。
      </footer>
    </LayOut>
  </NavLayOut>
  </div>
</template>

<script>
import {Dialog} from 'vant'

export default {
  name: "Loss",
  methods: {
    lossStatus(type) {
      Dialog.confirm({
        title: '',
        message: type === 'loss' ? '确定要挂失当前的员工卡吗？' : '确定要解除挂失当前的员工卡吗？',
      })
          .then(() => {
            Dialog.alert({
              message: type === 'loss' ? '挂失成功' : '解除挂失成功',
            })
          })
          .catch(() => {
            // on cancel
          });
    },
  }
}
</script>

<style scoped lang="stylus">
#add_card
  height 100vh
  background-color #fff
  .card
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
      .func
        width: 130px;
        height: 130px;
        border-radius: 12px;
      .loss
        background: linear-gradient(180deg, #FFFBF7 0%, #FEEFDF 100%);

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