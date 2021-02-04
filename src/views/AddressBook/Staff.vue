<template>
<div id="staff">
  <List  :data="employees" @goRouter="go">
    <template slot-scope="employees">
      <div class="staff_container">
        <img class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">
        <div class="right">
          <div class="username">{{employees.scoped.name}}</div>
          <div class="position_name">{{employees.scoped.code}}</div>
        </div>
      </div>

    </template>
  </List>
<!--    <ListLayout :height="80" :list-data="employees">-->
<!--      <template slot-scope="employees">-->
<!--        <div class="staff_container">-->
<!--          <img height="50" class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">-->
<!--          <div class="right">-->
<!--            <div class="username">{{employees.item.name}}</div>-->
<!--            <div class="position_name">{{employees.item.code}}</div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </template>-->
<!--  </ListLayout>-->

  <footer>
    共{{employees.length}}人
  </footer>
</div>
</template>

<script>
import ListLayout from "@/components/AddressBox/ListLayout";
import axios from "axios";
export default {
name: "Staff",
  components:{
    ListLayout
  },
  data(){
    return{
      employees:[
        {
          name:'32131',
          code:1
        },
        {
          name:'32131',
          code:1
        },
        {
          name:'32131',
          code:1
        },
      ]
    }
  },

  created() {

    // axios.get(`/api/organizations/${this.$route.params.id}/employees`).then(res=>{
    //   this.employees = res.data.content
    // })
  },
  methods:{
    go(e){
      this.$router.push({name:'Information',params:{id:e.id,name:e.name}})
    }
  }



}
</script>

<style scoped lang="stylus">

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
  .right
    margin-left 14px
    height 100%
    text-align left
    display flex
    flex-direction column
    justify-content space-between
    .username
      color: #0F1826;
    .position_name
      font-size 13px
      color #A9AFB8
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
</style>