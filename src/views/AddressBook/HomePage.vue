<template>
  <div id="addressbook_homepage">
    <List :show-title="true" title="行政服务平台" :data="allOrganization" @goRouter="go">
      <template slot-scope="organization">
        <div style="display: flex;align-items: center;color: #0F1826">
          <Icon svg-name="addressbook-qr" style="height: 44px;width: 44px;margin-right: 8px"></Icon>
          <span>{{ organization.scoped.orgname || organization.scoped.nodeName }}</span>
        </div>
        <div>
          <span style="font-size: 14px;color: #ccc">{{
              organization.scoped.subcount === 0 ? organization.scoped.num : organization.scoped.subcount
            }}</span>
          <i class="cubeic-arrow icon-arrow"></i>
        </div>
      </template>
    </List>
  </div>
</template>

<script>
import List from "@/components/List";
import ListLayout from "@/components/AddressBox/ListLayout";
import {mapActions, mapState} from 'vuex'
import {organization} from '@controller';


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
    const toast = this.$createToast({
      txt: 'Loading...',
      mask: true
    })
    toast.show()
    this.queryTreeChildNodes({
      "nodeId": `2082`
    }).then(()=>{
      toast.hide()
    })
  },

  watch: {
    allOrganization: {
      handler() {
      }
    }
  },
  methods: {
    ...mapActions('AddressBook', ['queryOrg', 'queryTreeChildNodes']),
    async go(e) {
      const toast = this.$createToast({
        txt: 'Loading...',
        mask: true
      })
      toast.show()
      if (e.subcount === 0) {
        await this.$router.push({
          name: 'Staff',
          params: {id: e.nodeId, nodeName: e.nodeName},
          query: {orglevel: e.orglevel}
        })
      } else {
        await this.queryTreeChildNodes({
          "nodeId": `${e.nodeId}`
        })
        toast.hide()
      }
    },
  },
  computed: {
    ...mapState('AddressBook', ['allOrganization']),
  }
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