<template>
  <div class="send_app">
    <NavLayOut bgc-color="#fff" @back="$router.push({ name: '交流圈' })">
      <template v-slot:right>
        <button class="submit" @click="submit">发表</button>
      </template>
      <div class="container">
        <cube-textarea
          class="textarea"
          url=""
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
    </NavLayOut>
    <div class="footer">
      <div class="album" style="margin-right: 20px">
        <Icon
          svg-name="addComment"
          style="margin-left: 15px; height: 20px; width: 20px"
        ></Icon>
      </div>
      <div class="topic_list" @click="selectTopic" ref="topicBtn">
        <div v-if="topic.length === 0">#打标签</div>
        <div v-else>#{{ topic[0].name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { PipCcoCciController } from "@controller";
import { CulturalControllerImpl, DictApiController } from "@controller";
import { BaseVue } from "@/libs";
import filesUpload from "@/libs/mixins/filesUpload";

export default {
  name: "send",
  mixins: [BaseVue, filesUpload],
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
      query: {},
      picture: "",
    };
  },
  created() {
    this.query = this.$store.state.Cultural.sendForm;
    if (this.$store.state.Cultural.selectedTopic.length !== 0) {
      this.topic = this.$store.state.Cultural.selectedTopic;
    }
  },
  methods: {
    async submit() {
      const toast = this.$createToast({
        time: 0,
        txt: "发帖中",
      }).show();

      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        let url = await this.getRetrieveNewURL(file);
        await this.imageUpload(url);
      }

      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let resp;
      this.query.picture = this.picture;
      this.$store.commit("Cultural/setSendForm", {
        ...this.query,
        userId: userInfo.id,
        userName: userInfo.name,
      });
      let response = await this.dispatch(
        CulturalControllerImpl.addCommunicationCircle,
        this.$store.state.Cultural.sendForm
      );
      if (!response.error) {
        this.$store.commit("Cultural/clearSendForm");
        this.$createToast({
          txt: "发表成功",
          type: "correct",
          time: 1000,
        }).show();
        setTimeout(() => {
          this.query = this.$store.state.Cultural.sendForm;
          this.$router.push({ name: "交流圈" });
        }, 1000);
      } else {
        console.log("failure");
      }
    },

    async fileSubmitted(file) {
      let url = await this.getRetrieveNewURL(file.file);
      this.picture = this.picture + url.split("?")[0] + ",";
    },

    selectTopic() {
      if (this.topic.length) {
        this.$createDialog({
          type: "confirm",
          title: "确认",
          content: "确认删除此标签",
          confirmBtn: {
            text: "确定按钮",
            active: true,
            disabled: false,
            href: "javascript:;",
          },
          cancelBtn: {
            text: "取消按钮",
            active: false,
            disabled: false,
            href: "javascript:;",
          },
        });
        return;
      }
      this.$router.push({ name: "话题列表" });
    },
  },
};
</script>


<style scoped lang="stylus">
.row-reverse {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

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