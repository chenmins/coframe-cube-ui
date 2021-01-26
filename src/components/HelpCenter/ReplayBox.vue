<template>
  <div class="replay_box">
              <span class="replay_username">
                @管理员小张：
              </span>
    <p class="replay_content">
      你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。
    </p>
  </div>
</template>

<script>
export default {
  name: "ReplayBox"
}
</script>

<style scoped lang="stylus">
.replay_box
  background-color #efefef
  margin 5px
  padding 8px
.replay_username
  color rgb(234,164,81)
  display inline-block
  margin-bottom 5px
.replay_content
  padding-bottom 10px
</style>