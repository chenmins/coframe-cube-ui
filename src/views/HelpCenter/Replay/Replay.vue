<template>
  <div class="send_app">
    <div class="container">
      <cube-textarea
        class="textarea"
        v-model="formData.textarea"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :autofocus="autofocus"
      ></cube-textarea>
      <cube-upload
        ref="upload"
        v-model="files"
        :multiple="true"
        @files-added="filesAdded"
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
  </div>
</template>

<script>
import HelpCenter from "../mixins/HelpCenter";

export default {
  name: "send",
  data() {
    return {
      value: "",
      placeholder: "选最棒的照片作为主图，帖子更容易被追捧~",
      maxlength: 200,
      autofocus: true,
      action: "//jsonplaceholder.typicode.com/photos/",
      files: [],
      hasNine: false,
    };
  },
  mixins: [HelpCenter],

  methods: {
    filesAdded(files) {
      let hasIgnore = false;
      let message;
      const maxSize = 1 * 1024 * 1024; // 1M
      for (let k in files) {
        const file = files[k];
        if (file.size > maxSize) {
          file.ignore = true;
          hasIgnore = true;
          message = "选择的图片不能大于1M";
        }
      }

      hasIgnore &&
        this.$createToast({
          type: "warn",
          time: 1000,
          txt: message,
        }).show();
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: "warn",
        txt: "Upload fail",
        time: 1000,
      }).show();
    },
    filesSuccess() {
      let message;
      let hasIgnore = false;
      if (this.files.length === 9) {
        this.hasNine = true;
      } else if (this.files.length > 9) {
        file.ignore = true;
        hasIgnore = true;
        message = "图片数量不能多于9张";
      }

      hasIgnore &&
        this.$createToast({
          type: "warn",
          time: 1000,
          txt: message,
        }).show();
    },
    filesRemove() {
      if (this.files.length <= 9) {
        this.hasNine = false;
      }
    },
    topic() {
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

.cube-upload .cube-upload-btn[data-v-bb286220] {
  border: none;
  background-color: #F7F7F7;
  border-radius: 6px;
}

>>>.cube-upload-file-def {
  height: 100%;
  width: 100%;
}

.send_app {
  background-color: #fff;
  height: 100%;
}

>>>.cube-textarea-wrapper::after {
  border: none;
}

.submit {
  position: absolute;
  width: 50px;
  top: 30px;
  line-height: 30px;
  border-radius: 15px;
  font-size: 14px;
  height: 30px;
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