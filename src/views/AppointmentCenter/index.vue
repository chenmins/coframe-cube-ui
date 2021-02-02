<template>
  <div id="appointment_center">
    <Search placeholder="搜索" :value="value"></Search>

    <div>行政服务平台预约中心</div>
    <LayOut class="container">
      <ul>
        <li style="position:relative"
            @click="$router.push({name:'func',params:{id:'医务室预约'}})">
          <div class="name">医务室预约</div>
          <i class="cubeic-arrow"></i>
        </li>
        <li style="position:relative"
            @click="$router.push({name:'func',params:{id:'理发室预约'}})"
        >
          <div class="name">理发室预约</div>
          <i class="cubeic-arrow"></i>
        </li>
        <li style="position:relative"
            @click="$router.push({name:'func',params:{id:'零点餐厅预约'}})"
        >
          <div class="name">零点餐厅预约</div>
          <i class="cubeic-arrow"></i>
        </li>
        <li style="position:relative"
            @click="$router.push({name:'DryClean'})"
        >
          <div class="name">衣物干洗</div>
          <i class="cubeic-arrow"></i>
        </li>
      </ul>
    </LayOut>

    <div class="rules">
      <h1>预约规则说明：</h1>
      <ul>
        <li>1、每人每天可预约1次；</li>
        <li>2、预约成功不能按时到场的请提前1小时取消以便其他同事使用。</li>
        <li>3、预约成功后没有按时到场，也没有取消预约视为违约。</li>
        <li>4、每人每月违约5次后不允许使用预约功能；</li>
      </ul>
    </div>
    <footer>
      <span class="active">预约中心</span>
      <span @click="$router.push({name:'MyAppointment'})">我的预约</span>
    </footer>
    <!--    <ListLayout :ListData="list" >-->
    <!--      <template slot-scope="organization">-->
    <!--        <div class="disbox left">-->
    <!--          <div class="avatar"></div>-->
    <!--          <span class="type">{{organization.item.name}}</span>-->
    <!--        </div>-->
    <!--        <div class="disbox right">-->
    <!--          <span class="staff_number">{{organization.item.totalElements}}</span>-->
    <!--          <i class="cubeic-arrow"></i>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </ListLayout>-->
  </div>
</template>

<script>
import Search from "@/components/Search";
import ListLayout from "@/components/AddressBox/ListLayout";
import LayOut from "@/components/LayOut";

export default {
  name: "index",
  components: {Search, ListLayout, LayOut},
  data() {
    return {
      value: '',
      list: [
        {name: '123'}
      ]
    }
  }
}
</script>
<style scoped>

.name:before {
  content: '';
  height: 23px;
  width: 23px;
  background-color: #f9f9f9;
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

</style>
<style scoped lang="stylus">
footer
  display flex
  justify-content: space-around;
  position fixed
  bottom 0
  height 50px
  line-height 50px
  background-color: #fff;
  width 100%

  span
    flex-grow 1

    &.active
      color $custom-active-color

#appointment_center
  height $custom-bgc-height
  background $my-bgc-color

  div:nth-child(2)
    margin 0 20px 20px
    text-align left

  .container
    border-top 1px solid $custom-border-color
    border-bottom 1px solid $custom-border-color

    li
      text-align left
      display flex
      justify-content: space-between;
      align-items center
      padding 10px 20px 10px 50px
      margin 10px 0

.rules
  text-align left

  h1, li
    margin 20px

  li
    font-size 14px
    line-height 16px

</style>