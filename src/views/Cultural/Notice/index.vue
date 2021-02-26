<template>
  <div id="notice_app">
    <SlideNav
        style="background:#fff"
        @changeHandle="changeHandle" :selected-label="selectedLabel" :tabs="tabs">
      <div class="scroll-list-wrap" style="height: calc(100vh - 220px)">
        <cube-scroll
            ref="scroll">
          <Card @clicked="read(notice)" shadow class="content" id="card" v-for="notice in notices">
            <div class="box">
              <span class="title">{{ notice.title }}</span>
              <span class="content">{{ notice.body }}</span>
              <span class="footer">
                <span class="date">{{ $dayjs(notice.releaseTime).format('YYYY-MM-DD') }}</span>
              <span class="from">
                <span class="read_all">阅读全文</span>
              </span>
              </span>
            </div>
          </Card>
        </cube-scroll>
      </div>
    </SlideNav>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";
import SlideNav from "@/components/Cultural/SlideNav";
import mixins from '../mixins/mixins'

export default {
  name: "index",
  components: {
    SlideNav, Card
  },
  mixins:[mixins],
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
        }, {
          label: '系统公告',
        }, {
          label: '餐厅公告',
        }, {
          label: '物业公告',
        }
      ],
    }
  },
  created() {
    let Interval = setInterval(() => {
      if (this.$store.state.Cultural.allData.notices) {
        this.notices = this.$store.state.Cultural.allData.notices
        if (this.notices.length) {
          clearInterval(Interval)
        }
      }
    })
  },
  methods: {
    read(notice) {
      this.$router.push({name: '公告详情', params: {id: notice.id, notice: notice}})
    },
  }
}
</script>

<style scoped lang="stylus">
>>> .cube-scroll-wrapper
  height calc(100vh - 250px)

#card
  display flex
  padding 21px 16px
  margin 12px
  max-width 100vh
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.04), 0px -1px 12px 0px rgba(0, 0, 0, 0.04);
  border-radius: 6px;

  .box
    width 100%
    display flex
    flex-direction column
    justify-content: space-between;

    .read_all
      font-size 12px
      color #0099FF

    .title
      font-size 16px
      margin-bottom: 8px;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
      letter-spacing: 1px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

    .content
      margin 0 0 12px 0
      font-size 14px
      font-weight: 300;
      color: #666666;
      line-height: 22px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

    .footer
      font-size 12px
      font-weight: 300;
      color: #999999;
      line-height: 17px;
      display flex
      justify-content: space-between;

>>> .cube-tab, .tab_item
  color #000 !important

.image
  flex-shrink 0
  height 94px
  width 94px
  overflow hidden
  display inline-block
  margin-right 16px
  border-radius 6px

#notice_app
  height $custom-bgc-height

  .img_box
    height 120px
    margin 0 12px
    overflow hidden
    border-radius: 6px;
    box-shadow: 0px 3px 7px 0px rgba(17, 157, 252, 0.16);
    position relative

    img
      position: absolute;
      left -80px
      top -240px
      transform scale(.9)

  >>> .cube-tab
    min-width 70px
    font-weight: 500;
    font-size 14px
    line-height: 22px;
    color #000
    background-color #F6F6F6
    border-radius 15px
    margin-right 12px
    padding 5px

  >>> .cube-tab_active
    background-color #0251FE
    border-radius 15px
    font-size 14px
    color #fff !important
    font-weight: 500;
    position relative

    &:after
      content ''
      position absolute
      bottom 2px
      left 50%
      transform translateX(-50%)
      height 5px
      width 5px
      border-radius 50%
      background-color #fff

.content
  margin 5px 20px 10px
</style>