<template>
  <div class="communication_app">
    <div v-show="topic_list"  style="background-color: #fff">
      <div class="topic_title">热门话题</div>
      <div class="topics">
        <div
            class="topic"
            v-for="(topic, index) in topicLists"
            @click="goTopic(topic.id,index)"
        >
          <span>0{{ index + 1 }}</span>
          <div :class="selected === index ? 'topic-selected' : ''">
            {{ topic.dicttypename }}
          </div>
        </div>
      </div>
    </div>
    <SlideNav
        style="background: #fff"
        @changeHandle="changeHandle"
        headerClass="com_header"
        :center="true"
        show-slider
        :selected-label="selectedLabel"
        :tabs="tabs"
    >
      <div style="height:calc(100vh - 435px);overflow-y: auto">
        <Card
            class="list-complete-item"
            :is-comment="false"
            :is-like="comment.fabulousForUser"
            :commentLength="comment.comments && comment.comments.length"
            v-for="(comment, index) in comments"
            :key="index"
            @checkComments="goComment({id:comment.id,data:comment})"
            @toggleLike="toggleLike(comment)"
            @remove="remove({dispatch:dispatch,id:comment.id}).then(()=>comments.splice(index, 1));"
        >
          <template v-slot:username>{{ comment.userName }}</template>
          <template v-slot:time>{{
              $dayjs(comment.releaseTime).format("YYYY-MM-DD DD:HH:ss")
            }}
          </template>
          <template v-slot:likeName>{{
              comment.fabulousPlusCount | fabulousCount
            }}
          </template>
          <template v-slot:image>
            <div>
              <!--                ${this.$config.pictureUrl}/${this.$config.bucket}/${i}_${this.$config.imgSize}-->
              <img
                  width="33.33%"
                  :src="'//'+$config.pictureUrl+'/'+$config.bucket+'/'+comment.picture.split(',')[0]+'_'+$config.imgSize"
              />
            </div>
          </template>
          <template v-slot:content>
            <Icon
                v-show="comment.choice !== '0'"
                svg-name="great"
                style="height: 20px; width: 20px; margin-right: 4px"
            ></Icon>
            <div>
              {{ comment.body }}
            </div>
          </template>
          <template v-slot:card_topic v-if="comment.topicOfConversationId !== ''">
            #{{ comment.topicOfConversationName }}
          </template>
          <template v-slot:trash>
            <Icon
                svg-name="delete@2"
                style="height: 20px; width: 20px"
                v-if="userInfo.id === comment.userId || isAdmin"
            ></Icon>
          </template>
        </Card>
      </div>
    </SlideNav>
  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/Cultural/Card";
import {CulturalControllerImpl, DictApiController} from "@controller";
import mixins from "../mixins/mixins";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";


export default {
  name: "index",
  components: {
    SlideNav,
    Card,
  },
  mixins: [mixins],
  data() {
    return {
      LABEL_MAP: {
        "全部": 'communicationCircles',
        "热门": 'communicationCircles1',
        "精选": 'communicationCircles2',
      },
      selected: null,
      topic_list: true,
      selectedLabel: "全部",
      tabs: [
        {
          label: "全部",
          comments: [
            {
              username: "demo1",
            },
          ],
        },
        {
          label: "热门",
        },
        {
          label: "精选",
        },
      ],
      comments: []
    };
  },
  mounted() {
    // this.$refs.scroll222.$el.style.height = `${this.workspaceRealHeightNum - 430}px`
    this.comments = this.listData(this.type)
  },
  watch: {
    type(newV, oldV) {
      this.comments = this.listData(newV)
      this.type = newV
    }
  },
  methods: {
    ...mapMutations('Cultural', ['setStateVar', 'goComment']),
    ...mapActions('Cultural', ['remove']),
    scroll(e) {
      // this.topic_list = true;
      // if (e.y < -250) {
      //   this.topic_list = false;
      // }
    },
    goTopic(topicId, index) {
      if (this.selected === index) {
        this.selected = null;
        this.comments = this.listData(this.type)
      } else {
        this.selected = index;
        this.comments = this.filterTopics(topicId, this.type)
      }
    },
  },
  computed: {
    ...mapState('Cultural', ['topicLists', 'ALL_DATA']),
    filterTopics() {
      return this.$store.getters["Cultural/filterTopics"]
    }
  }
};
</script>

<style></style>

<style scoped lang="stylus">


.topic-selected {
  background: #0251fe;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
}

>>> .cube-tab, .tab_item {
  color: #000 !important;
}

>>> .cube-tab_active {
  color: #fff !important;
}

>>> .com_header {
  margin-top: 20px;
  background-color: #fff;
  margin-bottom: 0;
  padding: 10px 0;
}

.communication_app {
  .topic_title {
    margin: 20px 20px 19px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;
    letter-spacing: 1px;

    &:before {
      content: '#';
      font-size: 16px;
    }
  }

  .topics {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    height: 120px;
    margin: -8px 20px 0;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;

    .topic {
      font-size: 14px;
      margin: 8px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: flex-start;
      justify-self: flex-end;
      justify-content: space-around;

      span {
        font-size: 15px;
        margin-right: 6px;
        font-family: DINEngschrift-Alternate, DINEngschrift;
        font-weight: normal;
        color: #E82336;
        line-height: 18px;
        letter-spacing: 1px;
      }
    }

    .more {
      font-size: 14px;
      text-align: center;
      display: inline-block;
    }
  }
}

.mid {
  position: absolute;
  height: 80%;
  background-color: $custom-border-color;
  width: 1px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


>>> .cube-scroll-wrapper {
  height: calc(100vh - 400px);
}

>>> .cube-scroll-list-wrapper {
  padding-bottom: 30px;
}

>>> .cube-tab-bar {
  margin-left: 10px;
  background-color: transparent;
}

.communication_nav {
  width: 100%;
  display: flex;
  justify-content: space-around;

  li {
    flex-grow: 1;
    padding: 10px;
  }

  .nav_active {
    color: $custom-active-color;
    border-bottom: 3px solid $custom-active-color;
  }
}

.send {
  border: 1px solid $custom-active-color;
  padding: 8px 20px;
  border-radius: 20px;
  color: $custom-active-color;
  font-size: 16px;
  position: fixed;
  z-index: 20;
  bottom: 60px;
  right: 20px;
  background-color: $my-bgc-color;

  .iconfont {
    color: $custom-active-color;
  }
}

.cube-tab_active {
  color: $custom-active-color;
}
</style>
