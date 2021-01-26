<template>
  <div>
    <cube-textarea
        class="cu_textarea"
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
    ></cube-textarea>
    <div class="replay_btn">
      <cube-upload
          action="//jsonplaceholder.typicode.com/photos/"
          :simultaneous-uploads="1"
          @files-added="filesAdded" />

      <cube-button class="submit" @click="submit">发送</cube-button>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      placeholder: '说说你的意见吧~(最多填写200汉字，支持Emoji表情)',
      maxlength: 200,
      action: '//jsonplaceholder.typicode.com/photos/',
      files: []
    }
  },
  methods: {
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: 'warn',
        txt: 'Upload fail',
        time: 1000
      }).show()
    },
    submit(){
      console.log('发送')
    }
  }
}
</script>

<style scoped lang="stylus">
.cu_textarea
  height 180px
.replay_btn
  display flex
  justify-content: space-between;
  align-items center

.upload
  display inline-block
  margin 20px
.submit
  display inline-block
  width 50px
  font-size 14px
  padding 5px 7px
  margin-right 20px
.cube-upload
  .cube-upload-file, .cube-upload-btn
    margin: 0
  .cube-upload-file
    margin: 0
    + .cube-upload-btn
      opacity: 0
  .cube-upload-file-def
    width: 100%
    height: 100%
    .cubeic-wrong
      display: none
  .cube-upload-btn
    display: flex
    align-items: center
    justify-content: center
    > div
      text-align: center
    i
      display: inline-flex
      align-items: center
      justify-content: center
      width: 50px
      height: 50px
      margin-bottom: 20px
      font-size: 32px
      line-height: 1
      font-style: normal
      color: #fff
      background-color: #333
      border-radius: 50%

</style>