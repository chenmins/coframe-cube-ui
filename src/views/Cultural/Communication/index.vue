<template>

  <div class="communication_app">
      <div style="background-color:#fff">
        <div class="topic_title">热门话题</div>
        <div class="topics">
          <div class="topic" v-for="(topic,index) in topics" @click="goTopic(topic,index)">
            <span>0{{ index + 1 }}</span>
            <div>{{ topic.name }}</div>
          </div>
        </div>
      </div>
      <SlideNav @changeHandle="changeHandle"
                headerClass='com_header'
                :center="true" show-slider
                :selected-label="selectedLabel" :tabs="tabs">
        <div class="scroll-list-wrap">
          <cube-scroll
              ref="scroll">
            <transition-group name="list-complete" >
            <Card class="list-complete-item" :is-comment="false" :is-like="comment.fabulousForUser" v-for="(comment,index) in comments"
                  :key="index"
                  @checkComments="checkComments(comment)"
                  @goComment="goComment(comment)"
                  @toggleLike="toggleLike(comment)"
                  @remove="remove(comment.id,index)"
            >
              <template v-slot:username>{{ comment.userName }}</template>
              <template v-slot:time>{{ $dayjs(comment.releaseTime).format('YYYY-MM-DD') }}</template>
              <template v-slot:likeName>{{ comment.fabulousPlusCount }}</template>
              <template v-slot:content>
                <div>
                  {{ comment.body }}
                  <!--                  <img  width="100%" src="../../../assets/icons/news.png" alt="">-->
                </div>
              </template>
              <template v-slot:card_topic v-if="comment.topicOfConversationId!==0">
                话题id#{{ comment.topicOfConversationId }}
              </template>
              <template v-slot:trash >
                  <Icon    svg-name="delete@2" style="height: 20px;width: 20px" v-if="cardInfo.id === comment.userId"></Icon>
              </template>
            </Card>
            </transition-group>
          </cube-scroll>
        </div>
      </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/Cultural/Card";
import axios from "axios";
import {allPageSreach} from '@controller'
import {CulturalControllerImpl, DictApiController} from '@controller'

export default {
  name: "index",
  components: {
    SlideNav, Card
  },
  data() {
    return {
      cardInfo:JSON.parse(localStorage.getItem('userInfo')),
      like: false,
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
    this.setTopicLists()
    this.comments = this.$store.state.Cultural.allData.communicationCircles
  },
  methods: {
    async setTopicLists() {
      let resp
      resp = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, {code: 'pip-ccocci-topic'})
      if (!resp.error) {
        this.$store.commit('Cultural/setTopicLists', resp.data)
        this.topics = this.$store.state.Cultural.topicLists.splice(0, 6)
      }
    },
    goTopic(topic, index) {
      this.$router.push({name: '话题列表', params: {index: index}})
    },

    async remove(e,index) {
      this.comments.splice(index,1)
        let resp = await this.dispatch(CulturalControllerImpl.deleteCommunicationCircle, {id: e}) //朋友圈id
    },
    // todo 点赞
    async toggleLike(e) {
      console.log(e)
      let resp = await this.dispatch(CulturalControllerImpl.fabulousCommunicationCircle, {id: e.id})
      // console.log(resp)
      if (!resp.error) {
        console.log(resp)
        if (e.fabulousForUser) {
          e.fabulousPlusCount -= 1
        } else {
          e.fabulousPlusCount += 1
        }
        await this.init()
        this.like = !this.like
      }

    },
    goComment(e) {
      // if (e.target.classList[0] === 'card_topic') return
      this.$router.push({name: '交流圈-评论详情', params: {id: e.id, isLike: e.fabulousForUser}})
    },
    changeHandle(e) {
      switch (e) {
        case '全部':
          this.comments = this.$store.state.Cultural.allData.communicationCircles
          break
        case '热门':
          this.comments = this.$store.state.Cultural.allData.communicationCircles1
          break
        case '精选':
          this.comments = this.$store.state.Cultural.allData.communicationCircles2
          break
      }

    },
    selectItem(e) {
      console.log(e.target.innerHTML)
    },
    checkComments(comment) {
      this.$router.push({name: '交流圈-评论详情', params: {id: comment.id}})
    },
  }
}
</script>

<style >
.list-complete-item {
  transition: all 1s ;
  display: inline-block;
}

.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  width:100%;
}
.list-complete-leave-active {
  //position: absolute;
}

</style>

<style scoped lang="stylus">

>>> .cube-tab, .tab_item
  color #000 !important

>>> .cube-tab_active
  color #fff !important

>>> .com_header
  margin-top 20px
  background-color: #fff;
  margin-bottom 0
  padding-top 10px

.communication_app
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
    text-align left
    align-items flex-start
    justify-content flex-start

    .topic
      font-size 14px
      margin 8px 0
      display flex
      flex-direction row
      align-items center
      align-self flex-start
      justify-self flex-end
      justify-content space-around

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

>>> .cube-scroll-wrapper
  height calc(100vh - 400px)

>>> .cube-scroll-list-wrapper
  padding-bottom 20px

>>> .cube-tab-bar
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