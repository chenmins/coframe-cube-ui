<template>
  <div>
    <img width="100%" src="../../assets/icons/question.png" alt="">
    <div style="position: relative;padding-top: 47px">
      <div class="header">
        <Search :value="value"></Search>
      </div>
      <Card class="list_item" style="margin:0;border-radius:0;padding:15px" v-for="item in listData" :key="item.id"
            :data-id="item.id"
            @clicked="$router.push({name: 'ProductInc', params: {id: item.id}}).catch(()=>{})"
      >
        <span style="display: flex;align-items: center;color: #0F1826;height: 48px;">{{ item.title }}</span>
        <i class="cubeic-arrow icon-arrow"></i>
      </Card>
      <Card class="list_item" style="margin:0;border-radius:0;padding:15px" v-for="item in listData" :key="item.id"
            :data-id="item.id"
            @clicked="$router.push({name: 'ProductInc', params: {id: item.id}}).catch(()=>{})"
      >
        <span style="display: flex;align-items: center;color: #0F1826;height: 48px;">{{ item.title }}</span>
        <i class="cubeic-arrow icon-arrow"></i>
      </Card>
      <Card class="list_item" style="margin:0;border-radius:0;padding:15px" v-for="item in listData" :key="item.id"
            :data-id="item.id"
            @clicked="$router.push({name: 'ProductInc', params: {id: item.id}}).catch(()=>{})"
      >
        <span style="display: flex;align-items: center;color: #0F1826;height: 48px;">{{ item.title }}</span>
        <i class="cubeic-arrow icon-arrow"></i>
      </Card>
    </div>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import Card from "@/components/UI/Card";

export default {
  name: "Question",
  components: {
    Card,
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
  beforeMount() {
    this.listData = this.$store.state.HelpCenter.listData
  },
  methods: {
    search() {
      console.log(this.value)
    },
    goRouter(e) {
      console.log(e)

    }
  }
}
</script>

<style scoped lang="stylus">
.list_item
  display flex
  align-items center
  justify-content: space-between;
  padding 8px 16px 8px 12px
  position: relative;
  background-color #fff

  &:after
    content ''
    border-bottom 1px solid rgba(#ccc, .4)
    position absolute
    bottom 0
    left 64px
    display block
    width 100%

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