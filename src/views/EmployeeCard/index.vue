<template>
  <CardPanel
      :balance="true"
      :num="$store.state.EmployeeCard.cardInfo.balance"
      title="余额"
      :loss="$store.state.EmployeeCard.cardInfo.state"
  >
    <div style="background-color: #f5f6fa; height: calc(100vh - 240px); padding-top: 8px">
      <Card class="handle">
        <div class="title">我要办理</div>
        <div class="handle_container">
          <div @click="selectFunc('handle-addCard')" class="box_content">
            <div class="box_content_item">
              <Icon
                  class-name="func_icon"
                  svg-name="EmployeeCard-addCard"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>办理补卡</div>
            </div>
          </div>
          <div @click="selectFunc('handle-Loss')" class="box_content">
            <div class="box_content_item">
              <Icon
                  class-name="func_icon"
                  svg-name="EmployeeCard-lossCard"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>我要挂失</div>
            </div>
          </div>
          <div @click="selectFunc('handle-Apply')" class="box_content">
            <div class="box_content_item">
              <Icon
                  class-name="func_icon"
                  svg-name="EmployeeCard-shenqing"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>我的申请</div>
            </div>
          </div>
        </div>
      </Card>
      <Card class="handle">
        <div class="title">我的待办</div>
        <div class="handle_container">
          <div @click="selectFunc('todos-ApprovalList')" class="box_content">
            <div data-num="12" class="box_content_item my-approve">
              <Icon
                  class-name="func_icon "
                  svg-name="EmployeeCard-myshenpi"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>我的审批(8)</div>
            </div>
          </div>
          <div
              v-show="isAdmin"
              @click="selectFunc('todos-CreateCard')"
              class="box_content"
          >
            <div class="box_content_item">
              <Icon
                  class-name="func_icon"
                  svg-name="EmployeeCard-createCard"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>员工开卡</div>
            </div>
          </div>
          <div
              v-show="isAdmin"
              @click="selectFunc('todos-CardRecord')"
              class="box_content"
          >
            <div class="box_content_item">
              <Icon
                  class-name="func_icon"
                  svg-name="EmployeeCard-manageCard"
                  heigth="40px"
                  width="40px"
              ></Icon>
              <div>员工卡管理</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </CardPanel>
</template>

<script>
import CardPanel from "@/views/EmployeeCard/components/CardPanel";
import Card from "@/components/UI/Card";
import {HelpControllerImpl, WorkCartControllerImpl} from "@controller";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "index",
  components: {CardPanel, Card},
  data() {
    return {
      loss: true,
    };
  },
  async created() {
    await this.getWorkCard()
  },
  methods: {
    ...mapActions('EmployeeCard',['getWorkCard']),
    selectFunc(type) {
      let func = type.split("-")[0];
      if (
          func === "handle" &&
          this.cardInfo.state === "员工卡办理中"
      ) {
        this.$createToast({
          type: "normal",
          time: 1000,
          txt:  this.cardInfo.state,
        }).show();
        return;
      }
      this.$router.push({name: type.split("-")[1]});
    },
  },
  computed:{
    ...mapState('EmployeeCard',['cardInfo'])
  },
  };
</script>

<style scoped lang="stylus">
.my-approve {
  position: relative;
}

.my-approve:before {
  display: inline-block;
  position: absolute;
  top: -10px;
  right: 0;
  border-radius: 50%;
  content: attr(data-num);
  color: #FFFFFF;
  line-height: 20px;
  font-size: 12px;
  height: 19px;
  width: 19px;
  max-width: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid #FFFFFF;
  background-color: red;
}

.title {
  margin: 0 0 20px;
}

.handle, .todo {
  text-align: left;
}

.todo {
  margin: 20px;
}

>>> #card {
  margin-top: 8px;
  margin-bottom: 8px;
}

.handle {
  margin: 0 20px;

  .handle_container {
    display: flex;
    justify-content: space-around;
  }

  .box_content {
    position: relative;
    font-size: 12px;
    height: 90px;
    width: 78px;
    z-index: 20;

    &:after {
      top: 0;
      left: 0;
      position: absolute;
      display: inline-block;
      content: '';
      height: 100%;
      width: 100%;
      border: 1px solid #C3C3C3;
      opacity: 0.18;
      border-radius: 6px;
    }

    .box_content_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      font-size: 12px;
      text-align: center;
      align-items: center;
      white-space: nowrap;
      font-weight: 500;
      color: #333333;
    }

    .func_icon {
      margin-bottom: 8px;
      height: 40px;
      width: 40px;
    }
  }
}
</style>
