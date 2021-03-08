<template>
  <div id="TopicList">
    <div class="search">
      <cube-input
        type="text"
        :clearable="true"
        placeholder="# 话题、电影、书、歌曲、地点、股票"
      ></cube-input>
      <span @click="$router.back()">取消</span>
      <div class="search_icon">
        <div class="one"></div>
        <div class="two"></div>
      </div>
    </div>
    <div class="left-panel">
      <!--            <cube-scroll>-->
      <!--          @change="changeHandler"-->
      <cube-tab-bar
        style="display: block"
        v-model="selectedLabel"
        :data="tabs"
      ></cube-tab-bar>
      <!--            </cube-scroll>-->
    </div>
    <div class="right-panel">
      <cube-scroll ref="scroll">
        <ul>
          <li v-for="(item, index) in scrollData" @click="selectTopic(item)">
            <img :src="item.avatar" alt="" />
            <div class="topic_item">
              <div class="topic_name">#{{ item.name }}</div>
              <div class="topic_num"><span>讨论：</span>12321</div>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import * as DATAS from "@/assets/data";
import axios from "axios";
import { DictApiController } from "@controller";

export default {
  data() {
    return {
      selectedLabel: "全部",
      scrollData: [],
      tabs: [],
      topicItems: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let resp;
      resp = await this.dispatch(DictApiController.getDictEntryByDictTypeCode, {
        code: "pip-ccocci-topic",
      });
      if (!resp.error) {
        this.tabs = resp.data.map((item) => {
          return {
            label: item.name,
            id: item.id,
            name: item.name,
            code: item.code,
          };
        });
        if (this.$route.params.index) {
          this.selectedLabel = this.tabs[this.$route.params.index].label;
        } else {
          this.selectedLabel = this.tabs[0].label;
        }
      }
    },

    selectTopic(item) {
      this.$store.commit("Cultural/setSelectedTopic", item);
      this.$store.commit("Cultural/setTopics", {
        topicOfConversationId: item.id,
        topicOfConversationName: item.name,
      });
      this.$router.push({ name: "发帖子" });
    },

    async getItem(id) {
      let resp;
      resp = await this.dispatch(DictApiController.getDictEntryByDictEntryId, {
        id: id,
      });
      if (!resp.error) {
        this.scrollData = resp.data.children.map((item) => {
          return {
            label: item.name,
            id: item.id,
            name: item.name,
            code: item.code,
          };
        });
      }
    },
  },
  watch: {
    selectedLabel(newV) {
      let id = this.tabs.filter((tab) => tab.name === newV)[0].id;
      this.getItem(id);
    },
  },
};
</script>

<style scoped lang="stylus">
>>> .cube-tab_active {
  background-color: #fff;
  color: #0099ff;
  padding: 12px 42px 12px 17px;
  line-height: 44px;
  position: relative;
}

>>> .cube-tab {
  padding: 12px 42px 12px 17px;
  line-height: 44px;
  position: relative;
}
</style>

<style lang="stylus" scoped>
#TopicList {
  height: 100vh;
  background: #fff;
}

.scroll-tab-view {
  .cube-tab-bar {
    .cube-tab {
      width: 100%;
      flex-basis: unset;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #db8931;
      transition: all 0.3s ease-in;
    }
  }

  &.cube-tab_active {
    color: #fff;
    font-size: 16px;
    background-color: #a74b00;
  }
}

.left-panel {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 0;
  width: 115px;
  background-color: #F5F6FA;
}

.right-panel {
  position: absolute;
  top: 44px;
  left: 80px;
  right: 0;
  bottom: 0;
  background-color: #fff;
  margin-left: 10px;

  li {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid rgba($custom-border-color, 0.2);
  }

  img {
    width: 33px;
    margin: 0 7px;
    // border: 1px solid #ff9f38
    border-radius: 3px;
  }

  span {
    // color: #db8931
  }
}

.search {
  display: flex;
  padding: 5px 12px;
  font-size: 14px;
  z-index: 70;
  position: relative;
  background-color: #fff;

  .search_icon {
    position: absolute;
    transform: rotate(-45deg) translateY(-70%);
    top: 50%;
    left: 28px;

    .one {
      height: 10px;
      width: 10px;
      border: 1px solid #333;
      border-radius: 50%;
    }

    .two {
      height: 5px;
      width: 1px;
      background-color: #333;
      position: absolute;
      transform: translateX(5px);
    }
  }
}

span {
  line-height: 30px;
}

>>>.cube-input {
  height: 30px;
  flex-grow: 1;
  margin-right: 10px;
  outline: none;
  border: none;

  &::after {
    border: none;
  }

  input {
    padding-left: 30px;
    background-color: #F2F2F2;
    border-radius: 15px;
    height: 28px;
  }

  input::-webkit-input-placeholder {
    font-size: 10px;
  }
}

.tabbar {
  colo: red;
}

.topic_item {
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 33px;

  .topic_name {
    font-size: 13px;
  }

  .topic_num {
    font-size: 20px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.5);
    color: $custom-border-color;
  }
}
</style>
