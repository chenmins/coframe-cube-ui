<template>
  <TitleNav bgc-color="#fff">
    <div class="cover"></div>
    <div class="card">
      <div class="card_content">
        <span class="card_num">{{ cardInfo.code }}</span>
        <div class="card_avatar">
          <!--            <img src="" alt="">-->
          <div class="avatar_img"></div>
          <img
            class="avatar_edit"
            src="../../assets/icons/employee_edit.webp"
            alt=""
          />
          <span class="avatar_name">{{ cardInfo.userName }}</span>
        </div>
      </div>
      <div class="card_content_bottom">
        <div class="content_left">
          <span>{{ cardInfo.corporation }}</span>
          <span>厚德载物楼4栋303</span>
        </div>
        <div class="content_right">
          <!--            <img src="" alt="">-->
          <div class="content_img"></div>
          <span>{{ cardInfo.section }}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>信息有误</div>
      <div class="confirm" @click="confirm">确认信息</div>
    </div>
  </TitleNav>
</template>

<script>
import { WorkCartControllerImpl } from "@controller";
import {mapActions, mapState} from "vuex";

export default {
  name: "PreviewInfo",

  mounted(){
    this.$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 60}px`
  },
  methods: {
    ...mapActions('EmployeeCard',['open','replacement']),
    async confirm() {
      let resp;
      let data = {
        userId: this.cardInfo.id,
        userName: this.cardInfo.userName,
        type: this.cardInfo.type,
        corporation: this.cardInfo.corporation,
        section: this.cardInfo.section,
        floorAuthority: JSON.stringify(
          this.groupModel.floorModel
        ),
      };
      if (this.$route.params.func === "补卡") {
        resp = await this.replacement({
          "reasonsCode":this.$store.state.EmployeeCard.reasonsCode,
          "reasonsName":this.$store.state.EmployeeCard.reasonsName,
        })
      }else {
        resp = await this.open(data)
      }
      if (resp.data.body === 0) {
        this.$createToast({
          type: "normal",
          txt: `${this.$route.params.func}失败`,
          time: 1000,
        }).show();
      }

      if (!resp.error) {
        this.$createToast({
          type: "normal",
          txt: `${this.$route.params.func}成功`,
          time: 1000,
          onTimeout: () => {
            this.$router.push({ name: "员工卡申请" });
          },
        }).show();
      }
    },
  },
  computed:{
    ...mapState('EmployeeCard',['cardInfo','groupModel'])
  }
};
</script>

<style scoped lang="stylus" >
.cover {
  background-color: #000;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 160px;
    line-height: 40px;
    height: 40px;
    background: #F5F6FA;
    border-radius: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
  }

  .confirm {
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 20px;
    color: #fff;
  }
}

.card {
  box-shadow: 0px 7px 14px 0px rgba(104, 171, 255, 0.35);
  margin: 49px 27px;
  border-radius: 20px;
  overflow: hidden;

  .card_content {
    color: #fff;
    height: 350px;
    background: linear-gradient(108deg, #89F7FE 0%, #66A6FF 100%);
    position: relative;

    .card_num {
      font-size: 12px;
      text-align: right;
      display: block;
      padding: 13px 9px;
    }

    .card_avatar {
      width: 185px;
      height: 185px;
      border-radius: 50%;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);

      .avatar_img {
        width: 185px;
        height: 185px;
        background-color: #42b983;
        border-radius: 50%;
      }

      .avatar_edit {
        height: 20px;
        width: 20px;
        padding: 5px;
        position: absolute;
        background-color: #0099FF;
        border-radius: 50%;
        bottom: 10px;
        right: 10px;
      }

      .avatar_name {
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 30px;
        display: inline-block;
        margin-top: 10px;
      }
    }
  }

  .card_content_bottom {
    height: 94px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .content_left {
      text-align: left;
      display: flex;
      flex-direction: column;

      span:first-child {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 20px;
      }

      span:nth-child(2) {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #999999;
        line-height: 17px;
      }
    }

    .content_right {
      .content_img {
        height: 31px;
        width: 31px;
        background-color: #42b983;
        margin: 0 auto;
        border-radius: 3px;
      }

      span {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 17px;
      }
    }
  }
}
</style>