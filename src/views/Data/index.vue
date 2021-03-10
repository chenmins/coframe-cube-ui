<template>
  <div id="data">

    <TitleNav bgc-color="#fff">
      <LayOut>
        <h1>行政服务子系统线上办公数据</h1>
        <div class="header_num">
          <div><span>9785</span>次</div>
          <div class="bg"></div>
        </div>
        <SlideNav :selected-label="selectedLabel" :tabs="tabs" :center="true"
                  @LabelChanged="LabelChanged"
        >
          <div class="main-echart" style="height:400px;">
          </div>
        </SlideNav>
      </LayOut>
      <Card>
        <header>办公申请</header>
        <main>
          <div class="item">
            <div class="num">110</div>
            <div>访客预约人次</div>
          </div>
          <div class="item">
            <div class="num">0.5</div>
            <div>交流圈活跃人次</div>
          </div>
          <div class="item">
            <div class="num">220</div>
            <div>停车位释放/释放次数</div>
          </div>
        </main>
      </Card>
      <Card>
        <header>预约中心</header>
        <main>
          <div class="item">
            <div class="num">110</div>
            <div>医务室预约人数</div>
          </div>
          <div class="item">
            <div class="num">0.5</div>
            <div>理发室预约人数</div>
          </div>
          <div class="item">
            <div class="num">220</div>
            <div>衣物干洗预约人数</div>
          </div>
        </main>
        <main>
          <div class="item">
            <div class="num">110</div>
            <div>会议室预约人数</div>
          </div>
          <div class="item">
            <div class="num">0.5</div>
            <div>文印室预约人数</div>
          </div>
          <div class="item">
            <div class="num">220</div>
            <div>库房预约人数</div>
          </div>
        </main>
      </Card>
    </TitleNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/UI/Card";

let chartDom, myChart


export default {
  name: "index",
  components: {Card, SlideNav},
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
          heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
        }, {
          label: '热点精选',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }, {
          label: '时事要闻',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }
      ],
      option: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: '#66A6FF',  //背景色
          padding: [5, 15, 5, 15],   //边距
          borderColor: '#66A6FF',
          shadowColor: '#66A6FF',
          shadowBlur: 10,
          textStyle: {
            color: "#fff"
          },
          borderWidth: 1,    //边框线宽度
          formatter: '{c}',
          position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], point[1]];
          }
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show: true
        },
        xAxis: [
          {
            type: 'category',
            splitLine: {
              show: true
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true
            },
          },

        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#2CF6ED' // 0% 处的颜色
                }, {
                  offset: 1, color: '#29ACFF' // 100% 处的颜色
                }
                ],
                global: false // 缺省为 false
              },
              width: 3
            },
            showSymbol: false,
            itemStyle : {
                color: '#78CFFE', //改变折线点的颜色
            },
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#19D4FF'
              }, {
                offset: 1,
                color: 'rgba(15, 211, 251, 0)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 150, 120, 130, 140, 110, 190]
          },
        ]
      },
      whichTab:'tab0'
    }
  },
  mounted() {

    this.$nextTick(() => {
      chartDom = document.getElementsByClassName('main-echart')[0];
      chartDom.style.width = `${window.innerWidth}`
      myChart = this.$echarts.init(chartDom);
      myChart.setOption(this.option);
    })
  },
  updated(){
    console.log(document.querySelector('.cube-tab-panel'))

  },
  methods: {
    LabelChanged(e) {
      let index = this.tabs.findIndex(tab=>tab.label===e)
      if (myChart != null && myChart !== "" && myChart !== undefined){
        myChart.dispose();
      }
      this.$nextTick(() => {
        chartDom = document.getElementsByClassName('main-echart')[index];
        chartDom.style.width = `${window.innerWidth}`
        myChart = this.$echarts.init(chartDom);
        myChart.setOption(this.option);
      })

    }
  }
}
</script>

<style scoped lang="stylus">
>>>.scroll-height-set
  height calc(100vh - 60px)
#data
  header
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 22px;
    margin-bottom 27px

  main
    display flex
    flex-direction row
    justify-content space-between
    padding 12px  0
    align-items center
    .item
      font-size: 10px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 20px;
      text-align center
      min-width 115px
      .num
        font-size: 20px;
        font-family: DIN-Medium, DIN;
        font-weight: 500;
        color: #0099FF;
        line-height: 24px;

  h1
    text-align left
    margin 0 20px 20px
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

  .header_num
    margin 0 10px
    color #fff
    height: 96px;
    line-height 96px
    background: linear-gradient(90deg, #5FE8F1 0%, #66A6FF 100%);
    box-shadow: 0px 2px 11px 0px rgba(129, 216, 206, 0.41);
    border-radius: 8px;
    position relative

    .bg
      position absolute
      width: 152px;
      height: 152px;
      background: #FFFFFF;
      left 30%
      top -90px
      border-radius 50%
      opacity: 0.09;

    span
      font-size: 40px;
      font-family: DIN-Medium, DIN;

  >>> .scroll_container
    width 60% !important
    margin 20px auto
    font-size 12px
    background-color #F5F6FA
    border-radius 20px

  >>> .cube-tab_active
    font-size 12px
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 18px;

</style>