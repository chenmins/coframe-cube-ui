<template>
  <div id="notice_app">
      <SlideNav
          @changeHandle="changeHandle" :selected-label="selectedLabel" :tabs="tabs">
        <div class="scroll-list-wrap" style="height: calc(100vh - 220px)">
          <cube-scroll
              ref="scroll">
            <Card @clicked="read(notice)" class="content"  id="card" v-for="notice in news">
              <img style="margin-right: 16px;max-width: 94px;" height="94px"  src="../../../assets/icons/news.png" alt="">
              <div class="box">
                <span class="title">
                {{ notice.title }}
                </span>
                <span class="content">
                  <Icon svg-name="hot" style="height: 15px;width: 15px"></Icon>
                  {{ notice.title }}
                </span>
                <span class="footer">
                    <span class="date">
                      {{ notice.time }}
                    </span>
                    <span class="from">
                      <span>来源:</span>
                        {{ notice.from }}
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
import SlideNav from "@/components/Cultural/SlideNav";
import NewCard from "@/components/Cultural/NewCard";
import Card from "@/components/UI/Card";
import mixins from '../mixins'

export default {
  name: "index",
  components: {
    Card,
    NewCard,
    SlideNav,
  },
  mixins:[mixins],
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
        }, {
          label: '热点精选',
        }, {
          label: '时事要闻',
        }
      ],
    }
  },
  mounted() {
    this.news = this.$store.state.Cultural.allData.journalisms
  },
  methods: {
    read(notices) {
      this.$router.push({name: '企业新闻详情', params: {id: notices.id,notice:notices}})
    },

  }
}
</script>

<style scoped lang="stylus">
#card
  display flex
  padding 21px 16px
  margin 12px
  max-width 100vh
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.04), 0px -1px 12px 0px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  .box
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

>>> .cube-tab_active
  color #fff !important

#New_card
  display flex
  padding-bottom 10px
  border-bottom 1px solid rgba($custom-gray, .3)

  .logo
    flex 0

  .box
    margin 0 10px

  .title
    display flex
    align-items flex-start
    text-align left
    line-height 20px
    font-size 14px

  .footer
    margin-top 5px
    display flex
    justify-content: space-between;
    font-size 10px
    color $custom-gray


</style>