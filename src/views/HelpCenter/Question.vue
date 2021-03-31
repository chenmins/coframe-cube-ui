<template>
  <div>
    <img width="100%" src="../../assets/icons/question.png" alt=""/>
    <div style="position: relative; padding-top: 47px">
      <div class="header">
        <Search :value="keywords" @search="search" @reflash="reFlash"></Search>
      </div>
      <Card
          class="list_item"
          style="margin: 0; border-radius: 0; padding: 15px"
          v-for="item in QuestionsData"
          :key="item.id"
          :data-id="item.id"
          @clicked="
          $router
            .push({
              name: 'QuestionDetail',
              params: { id: item.id, data: item },
            })
            .catch(() => {})
        "
      >
        <span
            style="
            display: flex;
            align-items: center;
            color: #0f1826;
            height: 48px;
          "
        >{{ item.title }}</span
        >
        <i class="cubeic-arrow icon-arrow"></i>
      </Card>
    </div>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import Card from "@/components/UI/Card";
import {mapActions, mapState} from "vuex";

export default {
  name: "Question",
  components: {
    Card,
    Search,
  },
  data() {
    return {
      keywords: "",
    };
  },
  computed: {
    ...mapState('HelpCenter', ['QuestionsData'])

  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath.includes("ProductInc")) {
      to.meta.name = from.meta.name;
    }
    next();
  },
  created() {
    this.initData({dispatch: this.dispatch, type: 'Questions', controller: 'queryByTitle'})
  },
  beforeMount() {
    this.listData = this.$store.state.HelpCenter.listData;
  },
  methods: {
    ...mapActions('HelpCenter', ['searchSubmit','initData']),
    search(e) {
      this.keywords = e
      this.searchSubmit({
        dispatch: this.dispatch,
        keywords: e
      })
    },
    reFlash(e) {
      this.keywords = ''
      this.initData({dispatch: this.dispatch, type: 'Questions', controller: 'queryByTitle'})
    },
  },
};
</script>

<style scoped lang="stylus">
.list_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 12px;
  position: relative;
  background-color: #fff;

  &:after {
    content: '';
    border-bottom: 1px solid rgba(#ccc, 0.4);
    position: absolute;
    bottom: 0;
    left: 64px;
    display: block;
    width: 100%;
  }
}

.header {
  position: absolute;
  top: -30px;
  margin: 0 12px;
  width: calc(100% - 24px);
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.07);
  border-radius: 34px;
  overflow: hidden;

  >>> .search {
    border: none;
    margin: 10px auto;
  }
}
</style>