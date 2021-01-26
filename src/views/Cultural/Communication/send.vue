<template>
  <div class="send_app">
    <cube-textarea
        class="textarea"
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :autofocus="autofocus"
    ></cube-textarea>
    <button class="submit">
      发送
    </button>
      <cube-upload
          ref="upload"
          v-model="files"
          :action="action"
          @files-added="filesAdded"
          @file-success="filesSuccess"
          @file-removed="filesRemove"
          @file-error="errHandler">
        <div class="clear-fix">
          <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
          <cube-upload-btn v-show="!hasNine">
            <div>
              <i>＋</i>
              <p>照片/视频</p>
            </div>
          </cube-upload-btn>
        </div>
      </cube-upload>
      <div class="footer">
        <div class="album" style="margin-right: 20px">
          <img  height="30" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__891aa655083eb08d3202bc3b5ae9cc5f.png" alt="">
          <div>相册</div>
        </div>
        <div class="topic_list" @click="topic" >
          <img height="30" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__9b02563e67c22e3b8cdae97b669d9bde.png" alt="">
          <div>话题</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "send",
  data() {
    return {
      value: '',
      placeholder: '请输入内容',
      maxlength: 300,
      autofocus: true,
      action: '//jsonplaceholder.typicode.com/photos/',
      files: [],
      hasNine:false
    }
  },
  methods: {
    filesAdded(files) {
      let hasIgnore = false
      let message
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
          message = '选择的图片不能大于1M'
        }
      }

      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: message
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
    filesSuccess(){
      let message
      let hasIgnore = false
      if(this.files.length ===9){
        this.hasNine = true
      }else if(this.files.length >9){
        file.ignore = true
        hasIgnore = true
        message = '图片数量不能多于9张'
      }

      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: message
      }).show()
    },
    filesRemove() {
      if (this.files.length <=9) {
        this.hasNine = false
      }
    },
    topic(){
      this.$router.push({name:'话题列表'})
    }
  }
}
</script>

<style scoped lang="stylus">
.submit
  position absolute
  top 30px
  right 0px
  transform translate(-50%,-50%)
  background-color $custom-active-color
  color #fff
  padding 3px 10px
  border none
  outline none
.textarea
  height 200px
.cube-upload
  .clear-fix
    flex-wrap wrap
  .cube-upload-file, .cube-upload-btn
    height: 80px
    width 80px
    margin 10px
    border 1px solid rgba(#333,.3)
  .cube-upload-file
    margin: 10px
    display flex
    flex-direction row
  .cube-upload-file-def
    width: 100%
    height: 100%
    .cubeic-wrong
      display: none
  .cube-upload-btn
    flex-shrink 0
    display: flex
    align-items: center
    justify-content: center
    > div
      text-align: center
      color rgba(#333,.5)
      font-size 10px
    i
      display: inline-flex
      align-items: center
      justify-content: center
      width: 35px
      height: 35px
      margin-bottom: 20px
      font-size: 32px
      line-height: 1
      font-style: normal
      background-color: rgba(#333,.3)
      color  #fff
      border-radius: 50%
.clear-fix
  display flex
.footer
  display flex
  color $custom-gray
  font-size 14px
  position absolute
  bottom 30px
  left 20px
</style>