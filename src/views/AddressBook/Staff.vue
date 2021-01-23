<template>
<div id="staff">
    <ListLayout :height="80" :list-data="employees">
      <template slot-scope="employees">
        <div class="staff_container">
          <img height="50" class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">
          <div class="right">
            <div class="username">{{employees.item.name}}</div>
            <div class="position_name">{{employees.item.code}}</div>
          </div>
        </div>

      </template>
  </ListLayout>

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
      employees:[]
    }
  },
  created() {
    axios.get(`/api/organizations/${this.$route.params.id}/employees`).then(res=>{
      this.employees = res.data.content
    })
  }


}
</script>

<style scoped lang="stylus">

.staff_container
  display flex
  justify-content flex-start
  align-items center
  height 40px
  .avatar
    margin-right 10px
  .right
    height 100%
    text-align left
    display flex
    flex-direction column
    justify-content space-between
    .position_name
      font-size 14px
      color rgb(203,203,203)
footer
  color rgb(203,203,203)
  margin 50px
  padding-bottom 50px
  display block
</style>