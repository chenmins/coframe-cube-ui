

export default {
  methods: {
    //文件过滤
    filterFiles(files) {
      let hasIgnore = false;
      let message;
      const maxSize = 5 * 1024 * 1024; // 1M
      let hou = files[0].name.split(".").reverse()[0];
      if (files[0].name.indexOf(".") === -1) {
        files[0].ignore = true;
        hasIgnore = true;
        message = "文件格式错误";
      }
      if (hou !== "png" && hou !== "jpeg" && hou !== "jpg") {
        files[0].ignore = true;
        hasIgnore = true;
        message = "只能上传jpg/png/jpeg文件";
      }
      if (files[0].size > maxSize) {
        files[0].ignore = true;
        hasIgnore = true;
        message = "选择的图片不能大于5M";
      }
      hasIgnore &&
        this.$createToast({
          type: "warn",
          time: 1000,
          txt: message,
        }).show();

    },

    //获得上传url
    async getRetrieveNewURL(file) {
      let bucket = 'jiaoliuquan'
      let newFileName =
        JSON.parse(localStorage.getItem("userInfo")).id +
        "/" +
        this.$dayjs().unix() +
        "." +
        file.name.split(".").reverse()[0];
      let requestUrl = `/api/minio/presignedUrl?bucket=${bucket}&name=${newFileName}`
      let url = await this.$axios.get(requestUrl)
      return url.data
    },

    //上传图片
    async imageUpload(url) {
      let resp = await this.$axios({
        headers: {
          'Content-Type': 'image/png',
          'Accept': '*/*',
        },
        method: 'put',
        url: url,
        data: this.files[0].file
      })
      
    },
  }
}