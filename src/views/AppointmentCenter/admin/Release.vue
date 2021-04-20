<template>
  <TitleNav id="Release" color="#fff" bgc-color="#3642FF">
    <template v-slot:fixed>
      <h1 @click="selectMonth">
        <span>{{ date.month }}月</span>/{{ date.year }}
      </h1>
      <Calendar
        @select="setDate"
        ref="Calendar"
        title="日历"
        :default-date="defaultDate"
        :poppable="false"
        :show-confirm="false"
        :formatter="formatter"
        :min-date="minDate"
        :max-date="maxDate"
        color="#fff"
        :style="show ? 'overflow:hidden;height:95px;' : 'height:420px;'"
      />
      <i class="cubeic-select" @click="toggle"></i>
      <div class="content">
        <FuncBtn @clicked="$router.push({ name: 'AdminRelease' })">发布</FuncBtn>
        <div class="scroll-list-wrap">
          <cube-scroll ref="scroll" style="height: calc(100% - 80px)">
            <LayOut class="item" v-for="(item, key, index) in dayData">
              <header>
                <div style="width: 100%">
                  <div class="type">{{ key }}</div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <span>美发去屑、保湿护理</span>
                    <p class="time">{{ $dayjs(selectedDate).format("YYYY-MM-DD") }}</p>
                  </div>
                </div>
                <i class="cubeic-edit" @click="releaseEdit(key)"></i>
              </header>
              <main>
                <div class="num_box clear-fix">
                  <div v-for="time in item" class="num">
                    {{
                      $dayjs(time.startTime).format("HH:mm") +
                      "-" +
                      $dayjs(time.endTime).format("HH:mm")
                    }}<span>{{ time.quota }}人</span>
                  </div>
                </div>
              </main>
            </LayOut>
          </cube-scroll>
        </div>
      </div>
    </template>
  </TitleNav>
</template>

<script>
import { Calendar } from "vant";
import FuncBtn from "@/views/AppointmentCenter/components/funcBtn";
import { mapActions, mapState } from "vuex";

const WEEK_MAP = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export default {
  name: "Release",
  components: { FuncBtn, Calendar },
  data() {
    return {
      date: {
        year: this.$dayjs().format("YYYY"),
        month: this.$dayjs().format("MM"),
        day: this.$dayjs().format("DD"),
      },
      show: true,
      minDate: this.$dayjs().toDate(),
      maxDate: this.$dayjs().add(1, "month").toDate(),
      defaultDate: new Date(),
      selectedDate: new Date(),
      dayData: null,
    };
  },
  created() {
    this.queryByMonthForBarber({
      month: this.$dayjs().format("YYYY-MM-DD"),
    }).then(() => {
      for (let i in this.allDayData) {
        this.dayData = this.allDayData[this.$dayjs().format("YYYY-M-D")];
      }
    });
    // van-calendar__days
  },
  mounted() {
    this.setScroll();
  },
  computed: {
    ...mapState("barber", ["allDayData"]),
  },
  methods: {
    ...mapActions("barber", ["queryByMonthForBarber"]),
    selectMonth() {
      this.timePicker = this.$createDatePicker({
        title: "Time Picker",
        min: this.$dayjs().toDate(),
        max: this.$dayjs().add(3, "year").toDate(),
        value: this.$dayjs().toDate(),
        columnCount: 3,
        onSelect: (v1) => {
          this.date.year = this.$dayjs(v1).format("YYYY");
          this.date.month = this.$dayjs(v1).format("MM");
          this.date.day = this.$dayjs(v1).format("DD");
          this.minDate = this.$dayjs(this.date.year + "-" + this.date.month).toDate();
          this.maxDate = this.$dayjs(v1).add(1, "month").toDate();
          this.$refs.Calendar.reset(this.$dayjs(v1).toDate());
          this.setScroll(v1);
        },
      }).show();
    },
    setScroll(day) {
      if (this.$dayjs(day).format("D") > 3) {
        document.querySelector(".van-calendar__days").scrollLeft =
          59.13 * this.$dayjs(day).subtract(3, "day").format("D");
      } else {
        document.querySelector(".van-calendar__days").scrollLeft =
          59.13 * this.$dayjs(day).format("D");
      }
    },
    releaseEdit(item) {
      this.$router.push({
        name: "AdminReleaseEdit",
        params: {
          key: item,
          date: this.$dayjs(this.selectedDate).format("YYYY-MM-DD"),
          data: this.dayData[item],
        },
      });
    },
    setDate(day) {
      this.selectedDate = day;
      this.queryByMonthForBarber({
        month: this.$dayjs(day).format("YYYY-MM-DD"),
      });
      this.dayData = this.allDayData[this.$dayjs(day).format("YYYY-M-D")];
    },
    formatter(day) {
      day.className = "my_date";
      let bottomInfo = "";

      for (let allDayDataKey in this.allDayData) {
        if (this.$dayjs(day.date).format("YYYY-M-D") === allDayDataKey) {
          day.className = "my_date has_item";
          let secondData = this.allDayData[allDayDataKey];
          for (let key in secondData) {
            //遍历对象的所有属性，包括原型链上的所有属性
            if (secondData.hasOwnProperty(key)) {
              //判断是否是对象自身的属性，而不包含继承自原型链上的属性
              bottomInfo = bottomInfo + key.substr(0, 1) + "/";
            }
          }
        }
        day.bottomInfo = bottomInfo.substring(0, bottomInfo.length - 1);
      }
      day.topInfo = WEEK_MAP[this.$dayjs(day.date).day()];
      // day.bottomInfo = '入住';

      return day;
    },
    toggle() {
      let container = document.querySelector(".van-calendar__days");

      container.style.flexWrap === "wrap"
        ? ((container.style.flexWrap = "nowrap"), this.setScroll())
        : (container.style.flexWrap = "wrap");
      this.show = !this.show;
    },
  },
};
</script>
<style scoped lang="stylus"></style>
<style scoped lang="stylus">
>>> .has_item
  position relative

>>> .has_item:after
  content ''
  display block
  height 4px
  width 4px
  background-color #fff
  position absolute
  bottom 20px
  border-radius 50%

>>> .scroll-list-wrap
  height calc(100vh - 300px)

>>> .van-calendar__top-info, >>> .van-calendar__bottom-info {
  color: #fff;
}

>>> .van-calendar__top-info {
  top: -2px;
}

>>> .van-calendar__bottom-info {
  bottom: -2px;
}

>>> .van-calendar__selected-day {
  color: #3642FF;
  height: 23px;
  width: 23px;
  border-radius: 50%;
}

.cubeic-select {
  width: 100%;
  display: block;
  color: #fff;
  background-color: #3642FF;
}

>>> .van-calendar {
  background-color: #3642FF;
  color: #fff;
}

>>> .my_date
  margin-bottom: 20px

>>> .van-calendar__days {
  display flex
  flex-wrap nowrap
  display: -webkit-box;
  overflow-y: visible;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

>>> .van-calendar__month-mark {
  display: none;
}

>>> .van-calendar__header {
  display: none;
}

>>> .van-calendar__header-title {
  display: none;
}

>>> .van-calendar__header-subtitle {
  display: none;
}

>>> .van-calendar__body {
  overflow: hidden;
}

#Release {
  background: #3642FF;
  border-radius: 1px;
  height 100vh
  overflow: hidden;

  .bg {
    width: 153px;
    height: 138px;
    background: linear-gradient(198deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
    opacity: 0.18;
  }

  h1 {
    text-align: left;
    margin: 14px 28px;
    color: #ffffff;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 20px;

    span {
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      line-height: 30px;
    }
  }

  .calendar {
    display: flex;
    flex-direction: row;

    .week_day {
      flex-grow: 1;
    }
  }

  .content {
    padding: 20px 12px;
    background: linear-gradient(131deg, #50FEFF 0%, #CCFFA2 100%);
    border-radius: 20px 20px 0px 0px;

    .reserve {
      margin-bottom: 14px;
      height: 30px;
      border-radius: 17px;
      border: 1px solid #000000;
      display: flex;
      width: 80px;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      font-size: 14px;

      .cubeic-close {
        transform: rotate(45deg);
        display: inline-block;
      }
    }
  }

  .item {
    font-size: 12px;
    text-align: left;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;

    header {
      display: flex;
      justify-content: space-between;

      .type {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 22px;
        margin-bottom: 8px;
      }

      span {
        font-size: 12px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #999999;
        line-height: 17px;
      }

      .cubeic-edit {
        font-size: 14px;
      }

      span {
        font-weight: bold;
        margin-right: 20px;
      }
    }

    main {
      margin-top: 20px;

      .time {
        margin: 10px 0;
      }

      .num_box {
        margin: 0 auto;

        .num {
          height: 31px;
          background: #F7F7F7;
          border-radius: 16px;
          font-size: 12px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #000000;
          float: left;
          width: calc(50% - 12px);
          // background-color rgb(247, 247, 247)
          text-align: center;
          min-height: 20px;
          line-height: 31px;
          margin: 5px;
          padding: 5px 0;

          // border-radius 5px

          span {
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #0099FF;
            line-height: 17px;
            padding-left: 9px;
            border-left: 1px solid rgba(#000, 0.2);
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
