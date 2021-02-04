<template>
  <div>
    <img width="100%" src="../../assets/icons/question.png" alt="">
    <div style="position: relative;padding-top: 47px">
      <div class="header">
        <Search :value="value"></Search>
      </div>
      <List :show-title="false" :data="listData" @goRouter="go">
        <template slot-scope="scoped">
          <div style="display: flex;align-items: center;color: #0F1826;height: 48px;">
            <span>{{ scoped.scoped.title }}</span>
          </div>
          <div>
            <i class="cubeic-arrow icon-arrow"></i>
          </div>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";

export default {
  name: "Question",
  components: {
    Search
  },
  data() {
    return {
      value: '',
      listData: []
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath.includes('ProductInc')) {
      to.meta.name = from.meta.name
    }
    next()
  },
  created() {
    this.listData = this.$store.state.HelpCenter.listData
  },
  methods: {
    search() {
      console.log(this.value)
    },
    go(e) {
      this.$router.push({name: 'ProductInc', params: {id: e.id}})
    }
  }
}
</script>

<style scoped lang="stylus">
.header
  position absolute
  top -30px
  margin 0 12px
  width calc(100% - 24px)
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.07);
  border-radius: 34px;
  overflow: hidden;

  >>> .search
    border none
    margin 10px auto
</style>