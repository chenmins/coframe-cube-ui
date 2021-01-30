<template>
  <div id="add_card">
    <h1>您当前员工卡的状态：启用</h1>
    <div @click="lossStatus('loss')">挂失员工卡</div>
    <div @click="lossStatus('removeloss')">解除挂失</div>
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
  h1
    font-size 18px
    text-align left
    margin 20px

  div
    border 1px solid $custom-border-color
    margin 20px
    height 40px
    line-height 40px
    border-radius 20px
    box-shadow 3px 3px 6px rgba($custom-gray, .5)

</style>