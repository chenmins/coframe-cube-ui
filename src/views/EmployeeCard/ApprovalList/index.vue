<template>
  <ApproveContainer
      :tabs="tabs"
      :selectedLabel="selectedLabel"
      @changeHandle="changeHandle"
  >
    <Card
        v-for="approve in approveLists"
        @clicked="
        approve.state !== '审批中'
          ? ''
          : $router.push({
              name: 'ApprovalDetail',
              params: { id: approve.code, info: approve },
            })
      "
    >
      <div class="title">
        <div class="dot"></div>
        <span>{{ approve.type }}</span>
      </div>
      <div class="content font-normal">
        <p>
          <span class="titou">申请人姓名 </span>
          <span>{{ approve.userName }}</span>
        </p>
        <p>
          <span class="titou">所在部门 </span>
          <span>{{ approve.section }}</span>
        </p>
        <p>
          <span class="titou">申请日期 </span>
          {{ $dayjs(approve.handleTime).format("YYYY-MM-DD") }}
        </p>
      </div>
      <div class="right_bottom">
        <template v-if="type === '卡申请'">
          <Icon svg-name="EmployeeCard_apply" class-name="svg_class"></Icon>
          <span>{{ type }}</span>
        </template>
        <template v-else-if="type === '补办'">
          <Icon svg-name="EmployeeCard_apply2" class-name="svg_class"></Icon>
          <span>{{ type }}</span>
        </template>
        <template v-else>
          <Icon svg-name="EmployeeCard_apply1" class-name="svg_class"></Icon>
          <span>{{ type }}</span>
        </template>
      </div>
      <template v-if="arrived">
        <Tag
            v-if="approve.state === '审批中'"
            color="#fff"
            class="tag"
            :background-color="approve.state === '审批中' ? '#F5BA39' : '#42b983'"
        >
          {{ approve.state }}
        </Tag>
        <Icon v-else svg-name="guest-complete" class-name="svg_complete"></Icon>
      </template>
      <template v-else>
        <Icon class-name="tag" svg-name="guest-arrived" height="80px" width="80px"></Icon>
      </template>
    </Card>
  </ApproveContainer>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import SlideNav from "@/components/Cultural/SlideNav";
import Search from "@/components/Search";
import Card from "@/components/UI/Card";
import ApproveContainer from "@/components/UI/ApproveContainer";

import { WorkCartControllerImpl } from "@controller";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    ApproveContainer,
    Card,
    SlideNav,
    MenuCard,
    Search,
  },
  data() {
    return {
      type: "挂失",
      selectedLabel: "待审批",
      tabs: [
        {
          label: "待审批",
        },
        {
          label: "已完成",
        },
      ],
      approves: [],
      arrived: true,
    };
  },
  created() {
    this.getReviewList({ pass: 0 });
    console.log(this.approveLists);
    // this.approves = this.$store.state.Guest.approves.filter(
    //     (i) => i.approved === false
    // );
    // this.getList()
  },
  methods: {
    ...mapActions("EmployeeCard", ["getReviewList"]),
    async getList() {
      let resp;
      resp = await this.dispatch(WorkCartControllerImpl.getReviewList);
      if (!resp.body) {
        this.approves = resp.data.body;
        console.log(resp.data.body);
      }
    },
    GuestDetail() {
      this.$router.push({ name: "ReserveDetail", params: { id: 1 } });
    },
    changeHandle(e) {
      switch (e) {
        case "待审批":
          this.getReviewList({ pass: 0 });
          // this.approves = this.$store.state.Guest.approves.filter(
          //     (i) => i.approved === false
          // );
          break;
        case "已完成":
          this.getReviewList({ pass: 1 });
          // this.approves = this.$store.state.Guest.approves.filter(
          //     (i) => i.approved === true
          // );
      }
    },
  },
  computed: {
    ...mapState("EmployeeCard", ["approveLists"]),
  },
};
</script>

<style scoped lang="stylus">
.svg_complete {
  height: 80px;
  width: 80px;
  position: absolute;
  top: 10px;
  right: 10px;
  transform: rotate(-45deg);
}

.right_bottom {
  position: absolute;
  right: 10px;
  bottom: 20px;
  display: flex;
  align-items: center;

  .svg_class {
    height: 16px;
    width: 16px;
    margin-right: 2px;
  }

  span {
    font-size: 12px;
    color: #999999;
    line-height: 17px;
  }
}

>>> .cube-tab, .tab_item {
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 22px;
}

>>> .cube-tab-bar-slider {
  margin-left: 25px;
  max-width: 20px;
  height: 4px;
  background: #FFFFFF;
  border-radius: 2px;
}

>>> .cube-tab {
  min-width: 70px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  line-height: 22px;
}

>>> .cube-tab_active {
  font-size: 16px;
}

.card {
  position: relative;

  .tag {
    position: absolute;
    right: 20px;
    top: 10px;
  }
}

.content {
  margin: 10px;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  position: relative;

  p {
    margin-top: 6px;
  }
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  line-height: 22px;

  .dot {
    height: 3px;
    width: 3px;
    border: 2px solid #0099FF;
    border-radius: 50%;
    margin-right: 7px;
  }
}

.content {
  font-size: 14px;
}

.titou {
  color: #999999;
  display: inline-block;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.tag {
  padding: 1px 5px 2px 6px;
  position: absolute;
  right: 8px;
  top: 20px;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 17px;
  border-radius: 10px;
}
</style>
