<template>

  <div class="communication_app">
    <div style="background-color:#fff;" >
      <img
          src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__e1d1defe0c2a8e31ed04fe4311a2d63c.svg"
          alt="">
      <div class="topics">
        <div class="topic" v-for="topic in topics">#{{ topic.topicTitle }}#</div>
        <div class="topic more" @click="$router.push({name:'话题列表'})">更多话题 ></div>
        <div class="mid"></div>
      </div>
      <!--    <SlideNav class="demo" :selected-label="selectedLabel" :tabs="tabs"></SlideNav>-->
    </div>
    <SlideNav @changeHandle="changeHandle" headerClass='com_header' :center="true" show-slider
              :selected-label="selectedLabel" :tabs="tabs">
      <div class="scroll-list-wrap">
        <cube-scroll
            ref="scroll">
          <Card  :is-like="true" v-for="comment in comments" @checkComments="checkComments" @goComment="goComment"
                style="margin: 10px 10px 0;border-radius: 8px" >
            <template v-slot:username>{{ comment.username }}</template>
            <template v-slot:card_topic>{{ comment.belongToTopic }}</template>
            <template v-slot:content>{{ comment.content }}</template>
          </Card>
        </cube-scroll>
      </div>


    </SlideNav>


  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/Cultural/Card";

export default {
  name: "index",
  components: {
    SlideNav, Card
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
  },
  methods: {
    goComment(e){
      if(e.target.classList[0]==='card_topic') return
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
.scroll-list-wrap
  height calc(100vh - 264px)
  margin-bottom 20px
>>>.cube-scroll-list-wrapper
  padding-bottom 20px
.communication_app
  background-color $my-bgc-color
.topics
  display flex
  flex-direction column
  max-height 80px
  flex-wrap wrap
  position relative
  padding-bottom 10px
  margin 0 20px
  border-bottom 1px solid $custom-border-color
  text-align center

  .topic
    padding 5px 10px
    font-size 13px

  .more
    font-size 14px

  .mid
    position absolute
    height 80%
    background-color $custom-border-color
    width 1px
    top 50%
    left 50%
    transform translate(-50%, -50%)

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