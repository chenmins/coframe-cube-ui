<template>
  <CardPanel :money="true" title="余额" :loss="false">
    <div class="handle">
      <div class="title">我要办理</div>
      <div class="handle_container">
        <div class="box_content" @click="$router.push({name:'addCard'})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-addCard" heigth="40px" width="40px"></Icon>
            <div>办理补卡</div>
          </div>
        </div>
        <div class="box_content" @click="$router.push({name:'Loss'})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-lossCard" heigth="40px" width="40px"></Icon>
            <div>我要挂失</div>
          </div>
        </div>
        <div class="box_content" @click="$router.push({name:'Apply'})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-shenqing" heigth="40px" width="40px"></Icon>
            <div>我的申请</div>
          </div>
        </div>
      </div>
      <!--        <div class="func clear-fix">-->

      <!--          <div class="item" @click="$router.push({name:'addCard'})">申请办卡</div>-->
      <!--          <div class="item" @click="$router.push({name:'Loss'})">我要挂失</div>-->
      <!--          <div class="item" @click="$router.push({name:'Apply'})">我的申请</div>-->
      <!--        </div>-->
    </div>
    <div class="handle">
      <div class="title">我的待办</div>
      <div class="handle_container">
        <div class="box_content" @click="$router.push({name:'ApprovalList'})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-myshenpi" heigth="40px" width="40px"></Icon>
            <div>我的审批</div>
          </div>
        </div>
        <div class="box_content" @click="$router.push({name:'CreateCard'})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-createCard" heigth="40px" width="40px"></Icon>
            <div>员工开卡</div>
          </div>
        </div>
        <div class="box_content" @click="$router.push({name:'CardRecord',params:{id:1}})">
          <div class="box_content_item">
            <Icon class-name="func_icon" svg-name="EmployeeCard-manageCard" heigth="40px" width="40px"></Icon>
            <div>员工卡管理</div>
          </div>
        </div>
      </div>
      <!--        <div class="func">-->
      <!--          <div class="item" @click="$router.push({name:'ApprovalList'})">我的审批</div>-->
      <!--          <div class="item" @click="$router.push({name:'CreateCard'})">新员工开卡</div>-->
      <!--        </div>-->
    </div>
  </CardPanel>
</template>

<script>
import CardPanel from "@/views/EmployeeCard/components/CardPanel";

export default {
  name: "index",
  components: {CardPanel},
  date() {
    return {
      loss: true
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  margin 20px 0

.handle, .todo
  text-align left

.todo
  margin 20px

.handle
  margin 0 20px

  .handle_container
    display flex
    justify-content: space-around;

  .box_content
    position relative
    font-size: 12px;
    height 90px
    width 78px
    z-index 20

    &:after
      top 0
      left 0
      position absolute
      display inline-block
      content ''
      height 100%
      width 100%
      border: 1px solid #C3C3C3;
      opacity: 0.18;
      border-radius: 6px;

    .box_content_item
      position: absolute;
      top 50%
      left 50%
      transform translate(-50%, -50%)
      display flex
      flex-direction column
      font-size: 12px;
      text-align center
      align-items center
      white-space nowrap
      font-weight: 500;
      color: #333333;

    .func_icon
      margin-bottom 8px
      height 40px
      width 40px


</style>