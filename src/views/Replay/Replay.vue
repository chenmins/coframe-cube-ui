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
          class="upload"
          ref="upload"
          v-model="files"
          :action="action"
          @files-added="addedHandler"
          @file-error="errHandler">
        <div class="clear-fix">
          <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
          <cube-upload-btn :multiple="false">
            <div>
              <img height="20" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__9e017fd811aee5c85d6b1ac31b77d43a.svg" alt="">
            </div>
          </cube-upload-btn>
        </div>
      </cube-upload>
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
    addedHandler() {
      const file = this.files[0]
      file && this.$refs.upload.removeFile(file)
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