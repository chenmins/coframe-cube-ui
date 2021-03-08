export default {
    methods: {
        //文件过滤
        filterFiles(files) {
            console.log('文件过滤');
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
            console.log('获得上传url');
            // let bucket = 'jiaoliuquan'
            let bucket = this.$config.bucket
            let newFileName =
                JSON.parse(localStorage.getItem("userInfo")).id +
                "/" +
                this.$dayjs().valueOf() +
                "." +
                file.name.split(".").reverse()[0];
            let requestUrl = `/api/minio/presignedUrl?bucket=${bucket}&name=${newFileName}`
            let url = await this.$axios.get(requestUrl)
            //tx.chenmin.org:9000/jiaoliuquan/8e3f7d5b-5c82-4aec-bae6-af1fedf67013/1615167859925.jpg

            return url.data
        },

        //上传图片
        async imageUpload(url, file) {
            console.log('上传图片');
            let resp = await this.$axios({
                headers: {
                    'Content-Type': 'image/png',
                    'Accept': '*/*',
                },
                method: 'put',
                url: url,
                data: file
            })
        },

        async uploadAsync(uploadTime, files) {
            let picture = ''
            for (let i = 0; i < uploadTime; i++) {
                let url
                url = await this.getRetrieveNewURL(files[i].file)
                await this.imageUpload(url, files[i].file)


                let changedUrl = url.split('?')[0].split('/')[4]+'/'+url.split('?')[0].split('/')[5] // todo 测试
                picture = picture+ `${changedUrl},`

                // picture = picture + changedUrl.join('/') + this.$config.imgSize;
                //tx.chenmin.org:9000/  jiaoliuquan     /8e3f7d5b-5c82-4aec-bae6-af1fedf67013/1615167859925.jpg
            }
            return picture
        },

    }
}