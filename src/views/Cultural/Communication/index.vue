<template>

  <div class="communication_app">
    <Common >
      <div style="background-color:#fff">
        <div class="topic_title">热门话题</div>
        <div class="topics">
          <div class="topic" v-for="(topic,index) in topics">
            <span>0{{ index + 1 }}</span>
            <div>{{ topic.topicTitle }}</div>
          </div>
          <div class="topic more" @click="$router.push({name:'话题列表'})">更多话题 ></div>
        </div>
      </div>
      <SlideNav @changeHandle="changeHandle"
                headerClass='com_header'
                :center="true" show-slider
                :selected-label="selectedLabel" :tabs="tabs">
<!--        <div class="scroll-list-wrap">-->
<!--          <cube-scroll-->
<!--              ref="scroll">-->
            <Card :is-like="true" v-for="comment in comments" @checkComments="checkComments" @goComment="goComment"
            >
              <template v-slot:username>{{ comment.username }}</template>
              <template v-slot:content>
                <div>
                  {{ comment.content }}
                  <img  width="100%" src="../../../assets/icons/news.png" alt="">
                </div>

              </template>
              <template v-slot:card_topic>
                #{{ comment.belongToTopic }}
              </template>
            </Card>
<!--          </cube-scroll>-->
<!--        </div>-->
      </SlideNav>
    </Common>


  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/Cultural/Card";
import Common from "@/views/Cultural/Common";
import axios from "axios";

export default {
  name: "index",
  components: {
    SlideNav, Card, Common
  },
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
          comments: [
            {
              username: 'demo1',
            }
          ]
        }, {
          label: '热门',
        }, {
          label: '精选',
        }
      ],
      topics: [],
      comments: []
    }
  },
  created() {
    this.topics = this.$store.state.Cultural.topics
    this.comments = this.$store.state.Cultural.comments

    axios.get(`/api/platform/ccocci/selComCilList?type=1`).then(res=>{
      console.log(res)
    })


  },
  methods: {
    goComment(e) {
      if (e.target.classList[0] === 'card_topic') return
      this.$router.push({name: '交流圈-评论详情', params: {id: 1}})
    },
    changeHandle(e) {
      switch (e) {
        case '全部':
          this.comments = this.$store.state.Cultural.comments
          break
        case '热门':
          this.comments = this.$store.state.Cultural.comments.filter(i => i.tag === 'hot')
          break
        case '精选':
          this.comments = this.$store.state.Cultural.comments.filter(i => i.tag === 'like')
          break
      }
    },
    selectItem(e) {
      console.log(e.target.innerHTML)
    },
    checkComments() {
      this.$router.push({name: '交流圈-评论详情', params: {id: 1}})
    },
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-tab,.tab_item
  color #000!important
>>> .cube-tab_active
  color #fff!important
>>>.com_header
  margin-top 20px
  background-color: #fff;
  margin-bottom 0
  padding-top 10px
.communication_app
  overflow: scroll;
  .topic_title
    margin 20px 20px 19px
    font-weight: 500;
    color: #000000;
    line-height: 22px;
    letter-spacing: 1px;

    &:before
      content '#'
      font-size 16px

  .topics
    display flex
    flex-direction column
    flex-wrap wrap
    position relative
    height 120px
    margin -8px 20px 0
    text-align center
    align-content space-between

    .topic
      font-size 14px
      margin 8px 0
      display flex
      flex-direction row
      align-items center

      span
        font-size: 15px;
        margin-right 6px
        font-family: DINEngschrift-Alternate, DINEngschrift;
        font-weight: normal;
        color: #E82336;
        line-height: 18px;
        letter-spacing: 1px;

    .more
      font-size 14px
      text-align center
      display inline-block

.mid
  position absolute
  height 80%
  background-color $custom-border-color
  width 1px
  top 50%
  left 50%
  transform translate(-50%, -50%)

.scroll-list-wrap
  height calc(100vh - 264px)
  margin-bottom 20px

>>> .cube-scroll-list-wrapper
  padding-bottom 20px
>>>.cube-tab-bar
  margin-left 10px
  background-color transparent
.communication_nav
  width 100%
  display flex
  justify-content space-around

  li
    flex-grow 1
    padding 10px

  .nav_active
    color $custom-active-color
    border-bottom 3px solid $custom-active-color

.send
  border 1px solid $custom-active-color
  padding 8px 20px
  border-radius 20px
  color $custom-active-color
  font-size 16px
  position fixed
  z-index 20
  bottom 60px
  right 20px
  background-color $my-bgc-color

  .iconfont
    color $custom-active-color

.cube-tab_active
  color $custom-active-color
</style>