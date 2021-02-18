<template>
  <div id="readme">
    <NavLayOut>
      <LayOut class="content">
        <h2>Hi，欢迎！</h2>
        <ul>
          <li>1、所有车辆需按规定进行车辆注册并将车贴粘贴于车辆前挡风剥离区域。</li>
          <li>2、不得伪造车贴，车贴仅限于申请人本人本车使用，严禁外借。</li>
          <li>3、停车资源有限，进入自建职场停车场的车辆，连续停车时长不得超过48小时。</li>
          <li>4、车辆应停放于正规停车位内，禁止乱停乱放，不得阻挡消防设备、占用消防通道。</li>
          <li>5、停车场无车位后，将禁止车辆进入停车场。所有员工均须服从现场人员指引，不得发生闯岗、堵门、冲撞等违规行为。</li>
          <li>6、严禁无证驾驶、酒后驾驶等违法驾驶行为。</li>
          <li>7、驾驶员应严格按照交通指示标行驶，减速慢行、避让行人，注意安全。</li>
        </ul>
      </LayOut>
    </NavLayOut>
    <cube-button  @click="$router.push({name:'CarRegister'})">注册车辆</cube-button>
  </div>
</template>

<script>
export default {
  name: "Readme",
  methods:{
  }
}
</script>

<style scoped lang="stylus">

#readme
  height 100vh
  background-color #fff
  background-image url("../../../assets/icons/bg.webp")
  background-size 100%
  background-repeat no-repeat
  background-position center 0

  button
    position absolute
    z-index 20
    bottom 20px
    width 80%
    left 50%
    margin-left -40%
    border-radius 30px
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);

  .content
    margin 36px
    text-align left
    background-color transparent

    h2
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 30px;

    li
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 24px;
</style>