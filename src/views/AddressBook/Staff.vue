<template>
<div id="staff">
  <List :show-title="false"  :data="allOrganization" @goRouter="go">
    <template slot-scope="employees">
      <div class="staff_container">
        <img class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">
          <div class="username">{{employees.scoped.nodeName}}</div>
      </div>
    </template>
  </List>
  <footer>
    共{{allOrganization.length}}人
  </footer>
</div>
</template>

<script>
import ListLayout from "@/components/AddressBox/ListLayout";
import axios from "axios";
import {mapActions, mapState} from "_vuex@3.6.2@vuex";
export default {
name: "Staff",
  components:{
    ListLayout
  },
  data(){
    return{
      employees:[
        // {
        //   name:'32131',
        //   code:1
        // },
        // {
        //   name:'32131',
        //   code:1
        // },
        // {
        //   name:'32131',
        //   code:1
        // },
      ]
    }
  },
  beforeRouteEnter(to,from,next) {
    to.meta.name = to.params.nodeName;
    next()
  },
  created() {
    const toast = this.$createToast({
      txt: 'Loading...',
      mask: true
    })
    toast.show()
    this.queryTreeChildNodes({
      "nodeId": this.$route.params.id,
    }).then(()=>{
      toast.hide()
    })
  },
  methods:{
    ...mapActions('AddressBook',['queryTreeChildNodes']),
    go(e){
      this.$router.push({name:'Information',params:{id:e.nodeId,info:e}})
    }
  },
  computed:{
    ...mapState('AddressBook',['allOrganization'])
  }

}
</script>

<style scoped lang="stylus" >

.staff_container
  display flex
  justify-content flex-start
  align-items center
  height 40px
  padding 12px 4px
  .avatar
    height 44px
    width 44px
    border-radius 50%
  .username
    color: #0F1826;
    margin-left 20px
  .right
    margin-left 14px
    height 100%
    text-align left
    display flex
    flex-direction column
    justify-content space-between
    .username
      color: #0F1826;
footer
  position absolute
  top 0
  right -40px
  font-size 10px
  color: #A9AFB8;
  line-height: 14px;
  margin 50px
  padding-bottom 50px
  display block
  z-index 50
</style>