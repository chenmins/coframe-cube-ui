<template>
  <div id="addressbook_homepage">
    <List :show-title="true" title="行政服务平台" :data="listData" @goRouter="go">
      <template slot-scope="organization">
        <div style="display: flex;align-items: center;color: #0F1826">
          <Icon svg-name="addressbook-qr" style="height: 44px;width: 44px;margin-right: 8px"></Icon>
          <span>{{ organization.scoped.title }}</span>
        </div>
        <div>
          <span style="font-size: 14px;color: #ccc">50</span>
          <i class="cubeic-arrow icon-arrow"></i>
        </div>
      </template>
    </List>
  </div>
</template>

<script>
import List from "@/components/List";
import ListLayout from "@/components/AddressBox/ListLayout";
import {BaseVue} from "@/libs";
import {OrganizationController} from "@/actions/controller";
import {mapState} from 'vuex'
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    List, ListLayout
  },
  data() {
    return {
      list: [],
      midlist: [],
      num: [],
      listData: [],
      over: true
    }
  },
  created() {
    this.listData = this.$store.state.HelpCenter.listData
    let store = this.$store
    store.dispatch('AddressBook/allOr').then((res) => {
      this.$nextTick(() => {
        this.list = res
        this.over = false
      })
    })

    //   axios.get('/api/organizations/page-search').then(res=>{
    //     this.midlist = res.data.content
    //     this.getNum()
    //   })
  },
  beforeRouteLeave(to,from,next){
    to.meta.name = to.params.name
    next()
  },
  methods: {
    go(e) {
      this.$router.push({name:'Staff',params:{id:e.id,name:e.title}})
    },
    getNum() {
      // for (let i = 0; i < this.midlist.length; i++) {
      //   axios.get(`/api/organizations/${this.midlist[i].id}/employees`).then(res => {
      //     this.midlist[i].totalElements = res.data.content.length
      //     setTimeout(() => {
      //       this.list = this.midlist
      //       this.over = false
      //     }, 500)
      //   })
      // }
    }
  },

}
</script>

<style scoped lang="stylus">
.loading
  display inline-block
  margin 0 auto

#addressbook_homepage
  background-color $my-bgc-color

  p
    text-align left
    font-size 14px
    margin-left 15px
    margin-bottom 10px

  .disbox
    display flex
    align-items center
    font-size 12px

  .avatar
    width 20px
    height 20px
    background-color rgb(203, 203, 203)
    margin-right 15px

  .cubeic-arrow
    color rgb(203, 203, 203)
    margin-left 10px
</style>