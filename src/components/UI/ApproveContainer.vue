<template>
  <div id="todo-list">
    <TitleNav bgc-color="transparent" color="#fff">
      <template>
        <SlideNav
            @LabelChanged="changeHandle"
            show-slider
            :selected-label="selectedLabel"
            :tabs="tabs"
        >


              <slot></slot>
        </SlideNav>
      </template>
    </TitleNav>
  </div>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";
import SlideNav from "@/components/Cultural/SlideNav";
import Search from "@/components/Search";
import Card from "@/components/UI/Card";

export default {
  name: "ApproveContainer",
  props: ["tabs", "selectedLabel"],
  components: {
    Card,
    SlideNav,
    MenuCard,
    Search,
  },
  data() {
    return {
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
    this.approves = this.$store.state.Guest.approves.filter(
        (i) => i.approved === false
    );
  },

  methods: {
    GuestDetail() {
      this.$router.push({name: "ReserveDetail", params: {id: 1}});
    },
    changeHandle(e) {
      this.$emit("changeHandle", e);
      this.selectedLabel = e
      switch (e) {
        case "待审批":
          this.approves = this.$store.state.Guest.approves.filter(
              (i) => i.approved === false
          );
          break;
        case "已完成":
          this.approves = this.$store.state.Guest.approves.filter(
              (i) => i.approved === true
          );
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.switch_box
  height 20px
  margin 12px
  display flex
  align-items center
  justify-content: space-between;
  padding 10px
  border-radius 6px
  font-size 14px
  z-index 99
  position relative
  .switch
    height 24px
.warp {
  height: calc(100vh - 120px);
}

#todo-list {
  height: 200px;
  background: linear-gradient(119deg, #19D8FF 0%, #0F97FB 100%);
  position: relative;

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
}
</style>