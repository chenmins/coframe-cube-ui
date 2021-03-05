<template>
  <CardPanel
    :count="true"
    :num="$store.state.EmployeeCard.cardInfo.count"
    title="当前办卡次数"
    :loss="$store.state.EmployeeCard.cardInfo.state"
  >
    <ul>
      <li @click="$router.push({ name: 'ApplyRecord' })">
        <Icon svg-name="EmployeeCard_apply" class-name="svg_name"></Icon>
        <div class="li_item">
          <div>
            <div class="title">申请办卡</div>
            <div class="time">2021/01/22 15:10:10</div>
          </div>
          <i class="cubeic-arrow"></i>
        </div>
      </li>
      <li>
        <Icon svg-name="EmployeeCard_apply1" class-name="svg_name"></Icon>
        <div class="li_item">
          <div>
            <div class="title">挂失</div>
            <div class="time">2021/01/22 15:10:10</div>
          </div>
          <i class="cubeic-arrow"></i>
        </div>
      </li>
      <li>
        <Icon svg-name="EmployeeCard_apply2" class-name="svg_name"></Icon>
        <div class="li_item">
          <div>
            <div class="title">补卡</div>
            <div class="time">2021/01/22 15:10:10</div>
          </div>
          <i class="cubeic-arrow"></i>
        </div>
      </li>
    </ul>
  </CardPanel>
</template>

<script>
import CardPanel from "@/views/EmployeeCard/components/CardPanel";
export default {
  name: "Apply",
  components: { CardPanel },
};
</script>

<style scoped lang="stylus">
li {
  display: flex;
  align-items: center;
  margin: 0 17px;

  .li_item {
    flex: 1;
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(#000000, 0.1);
    padding: 16px 0;

    .title {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      line-height: 20px;
    }

    .time {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
  }

  .svg_name {
    height: 36px;
    width: 36px;
    margin-right: 14px;
  }
}
</style>