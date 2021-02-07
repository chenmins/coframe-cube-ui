<template>
  <div class="send_app">
    <NavLayOut
      bgc-color="#fff"
      @emit="submit"
    >
      <template v-slot:right>
        <button class="submit">
          发表
        </button>
      </template>
      <div class="container">
        <cube-textarea
            class="textarea"
            v-model="value"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autofocus="autofocus"
        ></cube-textarea>
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
      </div>
    </NavLayOut>
      <div class="footer">
        <div class="album" style="margin-right: 20px">
          <Icon svg-name="addComment" style="margin-left:15px;height: 20px;width: 20px"></Icon>
        </div>
        <div class="topic_list" @click="topic" >
          <div ># 打标签</div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "send",
  data() {
    return {
      value: '',
      placeholder: '选最棒的照片作为主图，帖子更容易被追捧~',
      maxlength: 300,
      autofocus: true,
      action: '//jsonplaceholder.typicode.com/photos/',
      files: [],
      hasNine:false
    }
  },
  methods: {
    submit(){
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      let data = {
        "body": this.value,
        "choice": "string", //精选
        "fabulous": 0, //点赞数
        "picture": "string",
        "topicOfConversationId": 0, //话题id
        "top": 0, //是否置顶
        "title": "string",
        "type": "string",  //类型
        "userId": userInfo.id,
        "userName": userInfo.name,

      }
      //    "body": "222222222222",
      //     "choice": "string",
      //     "fabulous": 0,
      //     "id": 200,
      //     "picture": "string",
      //     "title": "string",
      //     "top": 0,
      //     "topicOfConversationId": 0,
      //     "type": "string",
      //     "userId": "string",
      //     "userName": "string"
      axios.post('/api/platform/ccocci/addComCir',data).then(res=>{
        console.log(res)
      })
      // axios.get('/api/platform/selAllComment?id=1').then(res=>{
      //   console.log(res)
      // })
    },
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
.send_app
  height $custom-bgc-height
  background-color #fff
>>>.cube-textarea-wrapper::after
  border none
.submit
  position absolute
  width 50px
  right 0
  top 30px
  line-height 30px
  border-radius 15px
  font-size 14px
  height 30px
  transform translate(-50%,-50%)
  background-color $custom-active-color
  color #fff
  border none
  outline none
.container
  height 100%
.textarea
  height 200px
.cube-upload
  border-bottom 1px solid rgba(#000000,.1)
  .clear-fix
    flex-wrap wrap
  .cube-upload-file, .cube-upload-btn
    float left
    height: calc(100vw / 3 - 22px)
    width calc(100vw / 3 - 22px)
    margin 10px
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
    border 1px solid rgba(#333,.3)

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
  background-color #fff
  border-top 1px solid rgba(#000,.1)
  width 100%
  display flex
  justify-content space-between
  height 40px
  align-items center
  color $custom-gray
  font-size 14px
  position absolute
  bottom 0
  left 0
  z-index 70
  .topic_list
    border 1px solid #333
    font-size 12px
    padding 4px 9px
    border-radius 12.5px
    margin 8px 14px
</style>