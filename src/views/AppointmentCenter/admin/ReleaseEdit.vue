<template>
  <div id="floor_select" :style="'background-color' + bgColor">
    <TitleNav bgc-color="#fff">
      <LayOut class="bgcolor">
        <LayOut style="margin-top: 12px; padding: 12px 20px">
          <div class="title">选择新员工</div>
          <!--        @submit="submitHandler"-->
          <!--        @validate="validateHandler"-->
          <cube-form
            :model="groupModel.firstModel"
            :schema="groupSchema.fristSchema"
            :options="{ layout: 'classic' }"
            class="form-control new-employee"
          >
            <cube-form-item :field="groupSchema.fristSchema.groups[0].fields[0]">
            </cube-form-item>
            <cube-form-item :field="groupSchema.fristSchema.groups[0].fields[1]">
              <div class="time-show" @click="selectedTime">
                {{ groupModel.firstModel.date || "请选择" }}
                <i class="cubeic-arrow" style="float: right; margin-right: 16px"></i>
              </div>
            </cube-form-item>
          </cube-form>
        </LayOut>
      </LayOut>
      <section class="time_part" v-for="(item, index) in groupModel.floorModel">
        <div class="title">时间段</div>
        <div class="content">
          {{ item.startTime }}-{{ item.endTime }}
          <span style="color: #0099ff">{{ item.quota }}人</span>
        </div>
        <Icon
          svg-name="employee-close"
          class-name="close"
          @iconToggle="close(index)"
        ></Icon>
      </section>
      <func-btn @clicked="add"> 添加 </func-btn>
    </TitleNav>
    <div class="footer two">
      <cube-button type="submit" class="confirm" @click="confirm">提交</cube-button>
    </div>
  </div>
</template>

<script>
import Preview from "@/components/EmployeeCard/Preview";
import FuncBtn from "@/views/AppointmentCenter/components/funcBtn";
import { mapActions, mapState } from "vuex";

export default {
  name: "FloorSelect",
  props: ["Detail"],
  components: {
    FuncBtn,
    Preview,
  },
  created() {
    this.groupModel.firstModel = {
      type: this.$route.params.key,
      date: this.$route.params.date,
    };

    this.groupModel.floorModel = this.$route.params.data.map((i) => {
      return {
        startTime: this.$dayjs(i.startTime).format("HH:mm"),
        quota: i.quota,
        endTime: this.$dayjs(i.endTime).format("HH:mm"),
      };
    });
  },
  data() {
    return {
      dateSegmentData: [
        {
          is: "cube-date-picker",
          title: "开始时间",
          startColumn: "hour",
          min: [this.$dayjs().hour(), this.$dayjs().minute(), this.$dayjs().second()],
          max: [23, 59, 59],
        },
        {
          is: "cube-date-picker",
          title: "结束时间",
          startColumn: "hour",
          min: this.nexTime,
          max: [23, 59, 59],
        },
      ],
      closeTypeArr: [
        { text: "理发", value: "理发" },
        { text: "护理", value: "护理" },
        { text: "洗发", value: "洗发" },
      ],
      preview: false,
      groupModel: {
        firstModel: {
          type: "",
          date: "",
          // endTime: "",
          // peopleNum: ""
        },
        floorModel: [],
      },
      groupSchema: {
        fristSchema: {
          groups: [
            {
              legend: "",
              fields: [
                {
                  type: "select",
                  modelKey: "type",
                  label: "类型",
                  props: {
                    options: ["理发", "护发", "洗发"],
                  },
                  rules: {
                    required: true,
                  },
                },
                {
                  type: "select",
                  modelKey: "date",
                  label: "日期",
                  rules: {
                    required: true,
                  },
                },
                // {
                //   type: 'input',
                //   modelKey: 'endTime',
                //   label: '结束日期',
                //   props: {
                //     disabled: true
                //   },
                //   rules: {
                //     required: true
                //   }
                // },
                // {
                //   type: 'input',
                //   modelKey: 'peopleNum',
                //   label: '人数',
                //   props: {
                //     disabled: true
                //   },
                //   rules: {
                //     required: true
                //   }
                // },
              ],
            },
          ],
        },
        floorSchema: [
          {
            fields: [
              {
                type: "select",
                modelKey: "which",
                label: "楼栋",
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020],
                },
                rules: {
                  required: true,
                },
              },
              {
                type: "select",
                modelKey: "floor",
                label: "楼层",
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020],
                },
                rules: {
                  required: true,
                },
              },
              {
                type: "select",
                modelKey: "num",
                label: "楼门",
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020],
                },
                rules: {
                  required: true,
                },
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("barber", ["updateBarber"]),
    selectedTime() {
      this.datePicker = this.$createDatePicker({
        title: "Date Picker",
        min: new Date(),
        max: new Date(2099, 12, 31),
        value: new Date(),
        onSelect: (v1, v2, v3) => {
          this.groupModel.firstModel.date = this.$dayjs(v1).format("YYYY-MM-DD");
        },
      }).show();
    },
    cancel() {
      this.$createDialog({
        type: "confirm",
        title: "确定注销该员工卡吗？",
        maskClosable: true,
        onConfirm: (e) => {
          this.$router.push({ name: "RejectConfirm", params: { id: 1 } });
        },
      }).show();
    },
    confirm() {
      console.log(this.$route);
      //TODO
      const typeMap = [""];
      return;
      if (typeMap.find((item) => this.$route.params.key.includes(item))) {
      }
      let idList = this.$route.params.data.map((i) => i.id);
      let form = {
        idList: idList,
        type: this.groupModel.firstModel.type,
        date: this.groupModel.firstModel.date,
        timePartVos: this.groupModel.floorModel,
      };
      this.updateBarber(form).then((resp) => {
        if (resp.data.body) {
          this.$router.push({ name: "AppointmentAdminRelease" });
        } else {
          this.$createToast({
            txt: "修改错误",
            type: "error",
            time: 1500,
          }).show();
        }
      });
      // this.$router.push({name: 'Preview', params: {id: 1}})
    },
    add() {
      let dateSegmentPicker = this.$createSegmentPicker({
        data: this.dateSegmentData,
        onSelect: (selectedDates, selectedVals, selectedTexts) => {
          this.$createDialog({
            type: "prompt",
            title: "",
            prompt: {
              value: null,
              placeholder: "请输入人数",
            },
            onConfirm: (e, promptValue) => {
              let value = parseInt(promptValue);
              if (!isNaN(value)) {
                this.compareTimePart({
                  startTime: this.$dayjs(selectedDates[0]).format("HH:mm"),
                  quota: value,
                  endTime: this.$dayjs(selectedDates[1]).format("HH:mm"),
                });
                this.groupModel.floorModel.push({
                  startTime: this.$dayjs(selectedDates[0]).format("HH:mm"),
                  quota: value,
                  endTime: this.$dayjs(selectedDates[1]).format("HH:mm"),
                });
              } else {
                this.$createToast({
                  type: "warning",
                  txt: "请填入数字",
                  time: 1000,
                }).show();
              }
            },
          }).show();
        },
        onNext: (i, selectedDate, selectedValue, selectedText) => {
          this.nexTime = selectedValue;
          this.dateSegmentData[1].min = selectedDate;
          if (i === 0) {
            dateSegmentPicker.$updateProps({
              data: this.dateSegmentData,
            });
          }
        },
      });
      dateSegmentPicker.show();
    },
    close(index) {
      this.groupModel.floorModel.splice(index, 1);
    },
    showTimePicker() {
      const timePicker = this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 15,
        day: {
          len: 30,
          filter: ["今天", "明天", "后天"],
          format: "M月D日",
        },
        onSelect: (selectedTime, selectedText, formatedTime) => {
          this.model.time = formatedTime;
        },
      });
      // timePicker.setTime(time)
      timePicker.show();
    },
    selectItem2() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [column3],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.picker.show();
    },
    selectItem1() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [column2],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.picker.show();
    },
    selectFloor() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.picker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(", ")} <br/> - text: ${selectedText.join(
          " "
        )}`,
        icon: "cubeic-alert",
      }).show();
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000,
      }).show();
    },

    compareTimePart(timePart) {
      this.groupModel.floorModel.findIndex((i) => {
        let dayjs = this.$dayjs;

        console.log(
          this.$dayjs(
            `${this.$dayjs().format("YYYY-MM-DD") + " " + timePart.endTime}`
          ).isBetween(
            this.$dayjs().format("YYYY-MM-DD") + " " + i.startTime,
            this.$dayjs().format("YYYY-MM-DD") + " " + i.endTime
          )
        );
        console.log(
          this.$dayjs(timePart.startTime).isBetween(i.startTime, i.endTime, "minute")
        );
      });
    },
  },
  mounted() {
    this.$children[0].$refs.scroll.$el.style.height = `${
      this.workspaceRealHeightNum - 120
    }px`;
  },
  computed: {
    ...mapState("barber", ["dayData"]),
  },
};
</script>

<style scoped lang="stylus">

>>> .cube-form-group-legend, >>> .cube-select::after
  display none

>>> .cube-select
  text-align left

>>> .cube-select-placeholder
  display flex
  align-items center
  justify-content space-between

>>> .cube-select-icon
  display none

>>> .cube-select-placeholder:after
  content ''
  background-image url("../../../assets/icons/employee-select.webp")
  background-size 100%
  background-position 0 0
  height 14px
  width 14px
  display inline-block

>>> .cube-form_classic .cube-form-item
  padding 9px 0 0 0

>>> .cube-input-field
  padding 10px
  height 10px
  text-align left

>>> .cube-form-label
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;

>>> .cube-input::after
  border none


>>> .border-bottom-1px
  border-bottom 1px solid rgba($custom-border-color, .1)

.add-group
  border-bottom 1px solid rgba($custom-border-color, .1)
  margin-top 12px
  border-radius 6px
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.04);

  >>> .cube-form-label
    padding-bottom 10px

  >>> .cube-form-item
    padding 5px 10px

  & >>> .cube-form-group-legend
    text-align left
    padding 20px
    background-color #fff
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 25px;

>>> .cube-radio_selected .cube-radio-ui
  background-color $custom-active-color

>>> .cube-form_classic .cube-form-item .cube-validator-msg
  position: relative;
  text-align left

>>> .cube-btn
  background-color $custom-active-color
  border-radius 10px
  width 80%
  margin 20px auto
  height 40px
  line-height 10px

>>> .cube-select
  background-color transparent


>>> .cube-scroll-wrapper
  height calc(100vh - 180px)

>>> .cube-select-text
  color #CCCCCC
</style>

<style scoped lang="stylus">
.time-show
  text-align left
  font-size 14px
  color #CCCCCC
  padding-left 10px

.flow
  padding 15px
  border-radius 10px

  .title
    text-align left
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

  .approve_ul
    .send
    li
      display flex
      align-items center
      justify-content: space-between;
      margin 15px 0
      font-size 14px
      position relative

      .status_svg
        position absolute
        top 36px
        left 36px
        margin-top -10px
        margin-left -10px
        z-index 10

      .approve
        width 100%
        display flex
        justify-content: space-between;

        .name
          font-size: 14px;
          color: #000000;
          line-height: 20px;

        .status
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;

        .agree
          color: #1FC210;

        .reject
          color: #F20404

        .appro
          color: #FFC000

      .time
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;

      img
        margin-right 10px
        min-height 36px
        min-width 36px
        border-radius 50%

      div
        display flex
        align-items center

#floor_select
  position relative
  height 100vh

  background-color #fff
    //.bgcolor
    //background-color: #F5F6FA

    .add
      width: 117px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid #000000;
      margin 20px auto 0
      display flex
      align-items center
      justify-content: center;

      .add_svg
        transform rotate(45deg)
        height 14px
        width 14px

.title
  font-size: 18px;
  font-weight: 600;
  color: #0099FF;
  line-height: 25px;
  text-align left

.time_part
  width: 80%;
  height: 71px;
  background: rgb(241, 249, 255)
  border-radius: 6px;
  margin 10px auto
  display flex
  flex-direction column
  align-items flex-start
  justify-content: space-evenly;
  padding-left 20px
  position relative

  .title
    font-size 14px
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight 600

  .content
    font-size 14px
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight 300

  .close
    height 14px
    width 14px
    position absolute
    right -7px
    top -5px

.item
  position: relative;


.floor-root
  text-align left
  border-radius 6px
  background-color rgba(#0099FF, .05)
  position relative
  padding 10px 20px
  margin 10px 0

  h1
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 20px;
    margin-bottom: 9px;

  div
    font-size 14px

.close
  height 14px
  width 14px
  position absolute
  right -7px
  top -7px

.two
  display flex
  justify-content: center;

  .cube-btn
    width 40%

.footer
  background-color #fff
  position fixed
  bottom 0
  width 100%
  z-index 11

  .cancel
    background #F5F6FA !important
    color #000

  .cube-btn
    height: 40px;
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 20px;
    margin 12px 20px
    width 100%
</style>
