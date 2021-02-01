<template>
  <div id="readme">
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
    <cube-button>注册车辆</cube-button>
  </div>
</template>

<script>
export default {
  name: "Readme"
}
</script>

<style scoped lang="stylus">

#readme
  padding 20px
  button
    position absolute
    bottom 20px
    width 200px
    left 50%
    margin-left -100px
    background-color $custom-active-color
  .content
    border 1px solid $custom-border-color
    padding 10px
    text-align left
    h2
      font-width bold
      font-size 19px
      margin-bottom 10px
    li
      line-height 20px
      font-size 12px
</style>