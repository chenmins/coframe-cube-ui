<template>
  <div class="reserve_page">
    <ApproveContainer
      @changeHandle="changeHandle"
      class="clear-fix"
      style="height: 154px"
      :tabs="tabs"
      :selectedLabel="selectedLabel"
    >
      <template v-if="yuyue">
        <div style="height: calc(100vh - 190px)">
          <cube-scroll ref="scroll">
            <cube-radio-group style="background-color: transparent">
              <cube-radio
                v-for="(item, index) in listData"
                :key="index"
                :option="{
                  label: item.type,
                  value: item.id,
                  disabled: item.quota <= 0 || !$dayjs().isBefore($dayjs(item.endTime)),
                }"
                v-model="selected4"
              >
                <Card
                  :class="
                    item.quota > 0 && $dayjs().isBefore($dayjs(item.endTime))
                      ? 'card'
                      : 'card over'
                  "
                >
                  <header>{{ item.type }}</header>
                  <div style="height: 40px; line-height: 40px" class="time">
                    {{
                      $dayjs(item.startTime).format("YYYY/MM/D HH:mm:ss") +
                      "-" +
                      $dayjs(item.endTime).format("HH:mm:ss")
                    }}
                  </div>
                  <!--                  <cube-radio-group class="time" v-model="selected[index]"  :options="['2020/12/18 08:00-13:00']"/>-->
                  <div class="btn">剩余名额{{ item.quota }}人</div>
                </Card>
              </cube-radio>
            </cube-radio-group>
            <!--            <Card class="card">-->
            <!--              <header>理发室</header>-->
            <!--              <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>-->
            <!--              <div class="btn">剩余名额10人</div>-->
            <!--            </Card>-->
            <!--            <Card class="card">-->
            <!--              <header>理发室</header>-->
            <!--              <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>-->
            <!--              <div class="btn">剩余名额10人</div>-->
            <!--            </Card>-->
            <!--            <Card class="card over">-->
            <!--              <header>理发室</header>-->
            <!--              <cube-radio-group class="time" v-model="selected" :options="['2020/12/18 08:00-13:00']"/>-->
            <!--              <div class="btn">剩余名额2人</div>-->
            <!--            </Card>-->
          </cube-scroll>
        </div>
      </template>
      <template v-else>
        <Card class="inc">
          <Icon svg-name="bg" class-name="inc_bg"></Icon>
          <header>理发室标题</header>
          <section>
            这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍这是相关的介绍
          </section>
        </Card>
      </template>
    </ApproveContainer>
    <footer>
      <cube-button @click="submit(selected4)">立即预约</cube-button>
    </footer>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import ApproveContainer from "@/components/UI/ApproveContainer";
import Card from "@/components/UI/Card";
import { mapActions, mapState } from "vuex";

export default {
  name: "ReservePage",
  components: {
    Card,
    ApproveContainer,
    SlideNav,
  },

  data() {
    return {
      selected4: 0,
      yuyue: true,
      checked: false,
      selected: "",
      selectedLabel: "预约",
      tabs: [
        {
          label: "预约",
        },
        {
          label: "业务介绍",
        },
      ],
      listData: [],
    };
  },
  created() {
    let type = this.$route.params.type;
    if (type === "lifashi") {
      this.listData = this.public;
    } else if (type === "yiwushi") {
      this.listData = this.infirmary;
    } else if (type === "priting") {
      this.listData = this.printing;
    } else if (type === "warehouse") {
      this.listData = this.warehouse;
    }
  },
  methods: {
    ...mapActions("barber", ["addBarberUser"]),
    ...mapActions("Infirmary", ["addClinicUser"]),
    changeHandle(e) {
      this.yuyue = !this.yuyue;
    },
    submit(selected4) {
      this.$createToast({
        txt: "Loading...",
        mask: true,
      }).show();
      this.judgmentType(selected4)
        .then(() => {
          this.$createToast({
            txt: "预约成功",
            type: "correct",
            time: 1500,
            onTimeout: () => {
              this.$router.push({
                name: "YuYueSuccess",
                params: {
                  info: this.listData.find((i) => i.id === selected4),
                  item: this.$route.params.item,
                },
              });
            },
          }).show();
        })
        .catch(() => {
          this.$createToast({
            txt: "预约失败",
            type: "error",
            time: 1500,
          }).show();
        });
    },
    judgmentType(id) {
      let type = this.$route.params.type;
      return new Promise((resolve, reject) => {
        if (type === "lifashi") {
          this.addBarberUser({ id: id }).then((resp) => {
            if (resp.data.body === 1) {
              resolve();
            } else {
              reject();
            }
          });
        } else if (type === "yiwushi") {
          this.addClinicUser({ id: id }).then((resp) => {
            if (resp.data.body === 1) {
              resolve();
            } else {
              reject();
            }
          });
        } else if (type === "wenyingshi") {
          console.log("选择了文印室");
        } else if (type === "kufang") {
          console.log("选择了库房");
        }
      });
    },
  },
  computed: {
    ...mapState("barber", ["public"]),
    ...mapState("Infirmary", ["infirmary"]),
    ...mapState("printing", ["printing"]),
    ...mapState("warehouse", ["warehouse"]),
  },
};
</script>

<style scoped lang="stylus">
>>> .border-top-1px::before {
  display: none;
}

>>> .cube-radio_selected .cube-radio-ui {
  background-color: transparent;
  background-image: url('../../assets/icons/selected.png');
  background-size: 100%;
}

>>> .cube-radio-ui i::before {
  display: none;
}

>>> .cube-radio-ui, .cubeic-round-border {
  position: absolute;
  z-index: 99;
  left: 40px;
}

>>> .card {
  width: 100%;
  margin: 0 !important;

  .time {
    font-family: PingFangSC-Regular, PingFang SC;
    color: #000000;
  }
}

.reserve_page {
  .inc {
    position: relative;

    .inc_bg {
      position: absolute;
      transform: scale(1.5);
      width: 100%;
      height: 100%;
      top: 50px;
    }

    section {
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 24px;
    }

    header {
      font-size: 22px;
      margin: 30px 0;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
    }
  }

  footer {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
    width: 90%;

    button {
      padding: 11px 10px;
      background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
      border-radius: 20px;
      font-size: 12px;
    }
  }

  .over {
    header, >>> .cube-radio-wrap, .btn {
      color: #CCCCCC !important;
      border-color: #CCCCCC !important;
    }

    .time {
      color: #CCCCCC !important;
    }
  }

  .card {
    text-align: center !important;

    header {
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
    }

    .time {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 20px;
    }

    .btn {
      height: 30px;
      border-radius: 18px;
      border: 1px solid #000000;
      line-height: 30px;
      display: inline-block;
      padding: 0 15px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
    }

    >>> .cube-radio-label {
      text-align: center;
      width: 100%;
    }

    .border-top-1px::before {
      border: none;
    }

    .border-top-1px::after {
      border: none;
    }
  }
}
</style>
