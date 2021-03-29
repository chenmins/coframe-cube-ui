<template>
  <div id="card_record">
    <TitleNav bgc-color="#fff">
      <div slot="fixed" class="top_fixed">
        <Search
          class="search"
          style="border-bottom: none"
          @search="search"
          placeholder="搜索访客姓名"
          :value="value"
        ></Search>
        <LayOut class="func">
          <span @click="setSection" :style="section ? 'color:#0251FE' : ''">
            {{ section || "部门" }}
            <i class="cubeic-select"></i>
          </span>
          <span @click="setState" :style="state ? 'color:#0251FE' : ''"
            >{{ state || "员工卡状态" }}
            <i class="cubeic-select"></i>
          </span>
          <span @click="setHandleDate" :style="handleDate ? 'color:#0251FE' : ''"
            >{{ handleDate || "办理日期" }}
            <i class="cubeic-select"></i>
          </span>
        </LayOut>
      </div>
      <Card
        v-for="reserve in cardManageLists"
        @clicked="
          $router.push({ name: 'Card', params: { id: reserve.code, cardInfo: reserve } })
        "
      >
        <div class="card_item">
          <div class="title">
            <div class="dot"></div>
            <span>{{ reserve.userName }}</span>
          </div>
          <div class="content">
            <p>
              <span class="titou">办理时间 </span> <span>{{ reserve.type }}</span>
            </p>
            <p>
              <span class="titou">办理时间 </span>
              <span>{{ $dayjs(reserve.handleTime).format("YYYY/MM/DD HH:mm:ss") }}</span>
            </p>
            <p>
              <span class="titou">办理人部门 </span> <span>{{ reserve.section }}</span>
            </p>
          </div>
          <div class="footer">修改</div>
          <Tag
            color="#fff"
            class="tag"
            :background-color="TYPE_MAP[reserve.state]"
            :color="reserve.state === '注销' ? '#666666' : ''"
          >
            {{ reserve.state }}
          </Tag>
        </div>
      </Card>
    </TitleNav>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Card from "@/components/UI/Card";
import { WorkCartControllerImpl } from "@controller";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "CardRecord",
  components: {
    Card,
    Search,
  },
  data() {
    return {
      TYPE_MAP: {
        启用: "#40AD6E",
        待入园: "#0099FF",
        冻结: "#F20404",
        审批中: "#F5BA39",
        注销: "#EDEDED",
      },
      value: "",
      reserves: [],
      pickerData: [],
    };
  },
  created() {
    this.queryWorkCardAll({});
    // this.reserves = this.$store.state.Guest.reserves
    this.pickerData = [
      { text: "近30天", value: "近30天" },
      { text: "近7天", value: "近7天" },
      { text: "全部", value: "全部" },
      { text: "自定义时间", value: "自定义时间" },
    ];
    // this.getCardList()
  },
  methods: {
    ...mapActions("EmployeeCard", ["queryWorkCardAll"]),
    ...mapMutations("EmployeeCard", ["setCardManageLists"]),
    async getCardList() {
      let resp;
      resp = await this.dispatch(WorkCartControllerImpl.queryWorkCardAll, {
        state: "启用",
      });
      console.log(resp);
    },
    search(e) {
      this.userName = e;
      this.selectHandle();
    },
    setHandleDate() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "",
          data: [this.pickerData],
          onSelect: (item, index) => {
            let test;
            if (item[0] === "自定义时间") {
              if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                  title: "Date Picker",
                  min: new Date(2000, 7, 8),
                  max: new Date(2099, 12, 31),
                  value: new Date(),
                  onSelect: (date, selectedVal, selectedText) => {
                    this.handleDate = this.$dayjs(date).format("YYYY-MM-DD");
                    this.selectHandle();
                  },
                }).show();
              }
              this.datePicker.show()
              // this.handleDate = item[0]
              return
            }
            this.queryWorkCardAll({}).then(() => {
              if (item[0].includes("30")) {
                test = this.cardManageLists.filter((i) => {
                  return this.$dayjs(i.handleTime).isBetween(
                    this.$dayjs().format("YYYY-MM-DD"),
                    this.$dayjs().subtract(1, "month").format("YYYY-MM-DD")
                  );
                });
                this.handleDate = item[0];
                this.setCardManageLists(test);
              } else if (item[0].includes("7")) {
                test = this.cardManageLists.filter((i) => {
                  return this.$dayjs(i.handleTime).isBetween(
                    this.$dayjs().format("YYYY-MM-DD"),
                    this.$dayjs().subtract(7, "day").format("YYYY-MM-DD")
                  );
                });
                this.handleDate = item[0];
                this.setCardManageLists(test);
              } else if (item[0] === "全部") {
                this.handleDate = item[0];
                this.queryWorkCardAll({});
              }
            });
          },
        });
      }
      this.picker.show();
    },
    setSection() {
      this.$createActionSheet({
        title: "",
        pickerStyle: true,
        data: [
          {
            content: "部门1",
          },
          {
            content: "部门2",
          },
          {
            content: "部门3",
          },
          {
            content: "部门4",
          },
          {
            content: "部门5",
          },
          {
            content: "部门6",
          },
          {
            content: "部门7",
          },
        ],
        onSelect: (item, index) => {
          this.section = item.content;
          this.selectHandle();
        },
      }).show();
    },
    setState() {
      this.$createActionSheet({
        title: "",
        pickerStyle: true,
        data: [
          {
            content: "启用",
          },
          {
            content: "待入园",
          },
          {
            content: "冻结",
          },
          {
            content: "审批中",
          },
          {
            content: "注销",
          },
        ],
        onSelect: (item, index) => {
          this.state = item.content;
          this.selectHandle();
        },
      }).show();
    },
    selectHandle() {
      // 2021-03-17T15:32:10.000+0800
      this.queryWorkCardAll({
        state: this.state,
        section: this.section,
        handleDate: this.handleDate,
        userName: this.userName
      }).then(()=>{
        let list
        if(this.handleDate){
          list = this.cardManageLists.filter(i=> this.$dayjs(i.handleTime).format('YYYY-MM-DD') ===  this.handleDate)
          this.setCardManageLists(list);
        }
      })

    },
  },
  computed: {
    ...mapState("EmployeeCard", ["cardManageLists"]),
  },
};
</script>

<style scoped lang="stylus">
>>> .cube-scroll-wrapper
  height calc(100vh - 160px)

>>> #card
  padding 0


.card_item
  .tag
    padding 1px 5px 2px 6px
    position absolute
    right 8px
    top 20px
    font-size: 12px;
    color: #FFFFFF;
    line-height: 17px;
    border-radius 10px

  .title
    margin 0 10px
    display flex
    align-items center
    padding 14px
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

    .dot
      height 3px
      width 3px
      border 2px solid #0099FF
      border-radius 50%
      margin-right 7px

  .content
    font-size: 14px;
    padding 0 14px 14px
    margin 0 10px 10px

    p
      margin-bottom 10px
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 20px;

  .footer
    text-align center
    border-top 1px solid rgba(#000, .09)
    padding 12px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #000000;
    line-height: 20px;

  .titou
    margin-right 13px
    text-align center
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #333333;
    line-height: 17px;


#card_record
  background: #F5F6FA;
  height 100vh
  overflow: hidden;

  .top_fixed
    position: relative;
    z-index: 11;

    .func
      height 40px
      line-height: 40px;
      display flex
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;

      span
        flex-grow 1
        border 1px solid rgba($custom-border-color, .1)


  .search
    background-color #ffffff

    >>> .cu_input
      background-color #F5F6FA

    >>> .cubeic-search
      left 80px
</style>
