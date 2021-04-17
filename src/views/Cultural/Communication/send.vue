<template>
  <div class="send_app">
    <TitleNav bgc-color="#fff" @back="$router.push({ name: '交流圈' })">
      <template v-slot:right>
        <button class="submit" @click="submit">发表</button>
      </template>
      <div class="container">
        <cube-textarea
          class="textarea"
          v-model="query.body"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :autofocus="autofocus"
        ></cube-textarea>
        <cube-upload
          ref="upload"
          v-model="files"
          :action="url"
          :multiple="true"
          @files-added="filterFiles"
          @file-submitted="fileSubmitted"
        >
          <div class="clear-fix row-reverse">
            <cube-upload-file
              v-for="(file, i) in files"
              :file="file"
              :key="i"
            ></cube-upload-file>
            <cube-upload-btn v-show="!hasNine">
              <div>
                <i>＋</i>
                <p>照片/视频</p>
              </div>
            </cube-upload-btn>
          </div>
        </cube-upload>
      </div>
    </TitleNav>
    <div class="footer">
      <div class="album" style="margin-right: 20px">
        <Icon
          svg-name="addComment"
          style="margin-left: 15px; height: 20px; width: 20px"
        ></Icon>
      </div>
      <div class="topic_list" @click="selectTopic" ref="topicBtn">
        <div v-if="!topic[0].name">#打标签</div>
        <div v-else>#{{ topic[0].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { CulturalControllerImpl, DictApiController } from "@controller";
import filesUpload from "@/libs/mixins/filesUpload";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "send",
  mixins: [filesUpload],
  data() {
    return {
      url: "",
      value: "",
      placeholder: "选最棒的照片作为主图，帖子更容易被追捧~",
      maxlength: 300,
      autofocus: true,
      files: [],
      hasNine: false,
      topic: [],
      query: {
        body: "",
        comments:[],
        choice: "choice" + Math.random(),
        picture: "",
        title: "title" + Math.random(),
        topicOfConversationId: "",
        topicOfConversationName: "",
        type: "type" + Math.random(),
      },
      picture: "",
    };
  },
  async created() {
    let res =await this.formInit()
    this.files = res?.files || []
    this.query = res?.query || {}
    this.topic = res?.topic || []
  },

  methods: {
    ...mapMutations('Cultural',['setStateVar']),
    ...mapActions('Cultural',['initData','formInit']),
    fileSubmitted(file) {},
    selectTopic() {
      this.setStateVar({
        key:'sendForm',
        value:this.query
      })
      this.setStateVar({
        key:'files',
        value:this.files
      })
      this.$router.push({ name: "话题列表" });
    },
    async submit(data) {
      this.setStateVar({
        key:'sendForm',
        value:this.query
      })
      if (!this.query.body.length) {
        this.$createToast({
          type: "normal",
          txt: "请填写内容",
          time: 1000,
        }).show();
        return;
      }
      let message = "发送中";
      let toast = this.$createToast({
        txt: message,
        time: 0,
      }).show();
      let files = this.files;
      let uploadTime = files.length,
        resp;
      this.query.picture = await this.uploadAsync(uploadTime, files);
      try {
        resp = await this.dispatch(CulturalControllerImpl.addCommunicationCircle, {
          ...this.$store.state.Cultural.sendForm,
        });
        if (!resp.error ) {
          message = "发送成功";
          await this.initData({
            dispatch:this.dispatch
          })
          this.$router.replace({ name: "交流圈" }).then(() => {
            this.$store.commit("Cultural/clearSendForm");
          });
          toast.hide();
        } else {
          toast.hide();
          message = "反馈失败";
          this.$createToast({
            txt: message,
            time: 500,
          }).show();
        }
      } catch (e) {
        console.log('faile')
        toast.hide();
        message = "反馈失败";
        this.$createToast({
          type: "normal",
          txt: message,
          time: 1000,
        }).show();
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.cube-upload .cube-upload-btn[data-v-570f13b8] {
  border: none;
  background-color: #F7F7F7;
  border-radius: 6px;
}

>>> .cube-upload-file-def {
  height: 100%;
  width: 100%;
}

.send_app {
  background-color: #fff;
  height: 100%;
}

>>> .cube-textarea-wrapper::after {
  border: none;
}

.submit {
  position: absolute;
  width: 50px;
  top: 30px;
  line-height: 30px;
  border-radius: 15px;
  font-size: 14px;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: $custom-active-color;
  color: #fff;
  border: none;
  outline: none;
}

.container {
  height: 100%;
}

.textarea {
  height: 200px;
}

.cube-upload {
  border-bottom: 1px solid rgba(#000000, 0.1);

  .clear-fix {
    flex-wrap: wrap;
    flex-direction: row-reserve;
  }

  .cube-upload-file, .cube-upload-btn {
    float: left;
    height: calc(100vw / 3 - 22px);
    width: calc(100vw / 3 - 22px);
    margin: 10px;
  }

  .cube-upload-file {
    margin: 10px;
    display: flex;
    flex-direction: row;
  }

  .cube-upload-file-def {
    width: 100%;
    height: 100%;

    .cubeic-wrong {
      display: none;
    }
  }

  .cube-upload-btn {
    border: 1px solid rgba(#333, 0.3);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      text-align: center;
      color: rgba(#333, 0.5);
      font-size: 10px;
    }

    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 1;
      font-style: normal;
      background-color: rgba(#333, 0.3);
      color: #fff;
      border-radius: 50%;
    }
  }
}

.clear-fix {
  display: flex;
}

.footer {
  background-color: #fff;
  border-top: 1px solid rgba(#000, 0.1);
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  color: $custom-gray;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 70;

  .topic_list {
    border: 1px solid #333;
    font-size: 12px;
    padding: 4px 9px;
    border-radius: 12.5px;
    margin: 8px 14px;
  }
}
</style>
