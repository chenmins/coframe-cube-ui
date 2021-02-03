<template>
  <div id="notice_app">
    <Common>
      <SlideNav
          @changeHandle="changeHandle" :selected-label="selectedLabel" :tabs="tabs">
        <div class="scroll-list-wrap" style="height: calc(100vh - 220px)">
          <cube-scroll
              ref="scroll">
            <NoticeCard @read="read" class="content" v-for="notice in notices">

              <template v-slot:title>
                {{ notice.title }}
              </template>
              <template v-slot:content>
                {{ notice.content }}
              </template>
              <template v-slot:date>
                {{ notice.time }}
              </template>
              <template v-slot:readAll>
                阅读全文
              </template>
            </NoticeCard>
          </cube-scroll>
        </div>
      </SlideNav>
    </Common>

  </div>
</template>

<script>
import NoticeCard from "@/components/Cultural/NoticeCard";
import SlideNav from "@/components/Cultural/SlideNav";
import Common from "@/views/Cultural/Common";

export default {
  name: "index",
  components: {
    SlideNav, NoticeCard,Common
  },
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
        }, {
          label: '系统公告',
        }, {
          label: '系统公告',
        }, {
          label: '系统公告',
        }
      ],
      notices: []
    }
  },
  mounted() {
    // this.$router.push({name:'公告列表'})
    this.notices = this.$store.state.Cultural.noticeLists.all
  },
  methods: {
    read() {
      this.$router.push({name: '公告详情', params: {id: 1}})
    },
    changeHandle(e) {
      switch (e) {
        case '全部':
          this.notices = this.$store.state.Cultural.noticeLists.all
          break
        case '系统公告':
          this.notices = this.$store.state.Cultural.noticeLists.system
          break
        case '餐厅公告':
          this.notices = this.$store.state.Cultural.noticeLists.restaurant
          break
        case '物业公告':
          this.notices = this.$store.state.Cultural.noticeLists.property
          break
      }
    }
  }
}
</script>

<style scoped lang="stylus">
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
    color #fff
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