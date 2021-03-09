  <template>
  <div id="employee_card">
    <TitleNav>
      <div class="status_box">
        <img
          :class="loss === '启用' ? '' : 'close'"
          width="100%"
          src="../../../assets/icons/card_ui.webp"
          alt=""
        />
        <div class="right_top content">
          <div :class="loss === '启用' ? 'dot' : 'close dot'"></div>
          <span>{{ loss === "员工卡办理中" ? "新增审批中" : loss }}</span>
        </div>
        <div class="center content">
          <div>{{ title }}</div>
          <span>
            <span v-if="balance">￥</span>
            <span class="money">{{ num || 0 }}</span>
            <span v-if="count">次</span>
          </span>
        </div>
      </div>
      <slot></slot>
    </TitleNav>
  </div>
</template>

<script>
export default {
  name: "CardPanel",
  props: ["title", "count", "balance", "num", "loss"],
};
</script>

<style scoped lang="stylus">
.close {
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);
  color: #666666;
}

>>>.cube-scroll-list-wrapper {
  overflow: visible;
}

#employee_card {
  background-color: #ffffff;
  height: 100vh;
  overflow: hidden;

  .status_box {
    width: 100vw;
    position: relative;
    margin-top: 37px;

    .content {
      position: absolute;
      color: #fff;
    }

    .right_top {
      top: 10px;
      right: 30px;
      display: flex;
      align-items: center;
      font-size: 12px;

      .dot {
        margin-right: 5px;
        width: 6px;
        height: 6px;
        background: #37FF8D;
        border-radius: 50%;
      }
    }

    .center {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);

      div {
        font-size: 14px;
        margin-bottom: 20px;
      }

      .money {
        font-size: 36px;
      }
    }
  }
}
</style>