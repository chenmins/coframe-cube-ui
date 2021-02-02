<template>
  <div id="addressbook_homepage">
    <p>
      行政服务平台
    </p>
<!--    <List></List>-->
<!--    <cube-loading class="loading" :size="40" v-if="over"></cube-loading>-->
    <ListLayout :ListData="list" >
      <template slot-scope="organization">
        <div class="disbox left">
          <div class="avatar"></div>
          <span class="type">{{organization.item.name}}</span>
        </div>
        <div class="disbox right">
          <span class="staff_number">{{organization.item.totalElements}}</span>
          <i class="cubeic-arrow"></i>
        </div>
      </template>
    </ListLayout>
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
    List,ListLayout
  },
  data(){
    return{
        list:[],
        midlist:[],
        num:[],
      over:true
    }
  },
  created() {
  let store = this.$store
    store.dispatch('AddressBook/allOr').then((res)=> {
      this.$nextTick(()=>{
        this.list = res
        this.over = false
      })
    })

  //   axios.get('/api/organizations/page-search').then(res=>{
  //     this.midlist = res.data.content
  //     this.getNum()
  //   })
  },
  methods:{
    getNum(){
      for (let i =0;i<this.midlist.length;i++){
        axios.get(`/api/organizations/${this.midlist[i].id}/employees`).then(res=>{
          this.midlist[i].totalElements = res.data.content.length
          setTimeout(()=>{
            this.list = this.midlist
            this.over = false
          },500)
        })
      }
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
  padding-top 20px
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
    background-color rgb(203,203,203)
    margin-right 15px
  .cubeic-arrow
    color rgb(203,203,203)
      margin-left 10px
</style>