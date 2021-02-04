<template>
  <div class="replay_box">
    <span class="replay_username">
      @管理员小张：
    </span>
    <span class="replay_content">
      你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。
    </span>
  </div>
</template>

<script>
export default {
  name: "ReplayBox"
}
</script>

<style scoped lang="stylus">
.replay_box
  background: #F7F7F7;
  padding 8px
.replay_username
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #6F78C8;
  line-height: 18px;
  letter-spacing: 1px;
  display inline-block
  margin-bottom 8px

.replay_content
  padding-bottom 10px
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333333;
  line-height: 18px;
  letter-spacing: 1px;
</style>