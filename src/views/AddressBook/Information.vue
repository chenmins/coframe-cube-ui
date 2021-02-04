<template>
<div id="information">
  <div class="top">
    <div class="right"></div>
  </div>
<!--  <header>-->
<!--    <img height="60" class="avatar" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b8db0dfecbb9de7a7edcb0266985f8ba.png" alt="">-->
<!--    <div class="right">-->
<!--      <div class="username">-->
<!--        {{employee.name}}-->
<!--        <img v-if="employee.gender==='WOMAN'" height="15" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__3878049306178281c4442c3b97d12385.svg" alt="">-->
<!--        <img v-else height="15" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__e3a41fac9df1e712cb26ac17050231fc.svg" alt="">-->
<!--      </div>-->
<!--      <div class="position_name">{{employee.code}}</div>-->
<!--    </div>-->
<!--  </header>-->
<!--  <main>-->
<!--    <div class="information_box border_bottom">-->
<!--       <div>邮箱  <span style="color: rgb(173 ,173,173)">{{employee.pEmail || "暂无"}}</span></div>-->
<!--    </div>-->
<!--    <div class="information_box border_bottom">-->
<!--       <div>手机号 <span style="color: rgb(173 ,173,173)">{{employee.pEmail || "暂无"}}</span></div>-->
<!--    </div>-->
<!--    <div class="information_box">-->
<!--      <div></div>-->
<!--       <div class="position"  @click="goPosition">部门-->
<!--            <div class="position_msg">-->
<!--&lt;!&ndash;              // todo 字段显示&ndash;&gt;-->
<!--              <div class="position_name">{{ orient.name }} </div>-->
<!--              <div class="company_name">{{ orient.company }}</div>-->
<!--            </div>-->
<!--           <i class="cubeic-arrow"></i>-->
<!--       </div>-->
<!--    </div>-->
<!--  </main>-->
</div>
</template>

<script>
import ListLayout from "@/components/AddressBox/ListLayout";
import axios from "axios";
export default {
name: "Information",
  components:{
    ListLayout
  },
  data(){
    return{
      employee:{},
      orient:{
        name:'',
        company:''
      }

    }
  },
  created() {
    // axios.get(`/api/employees/${this.$route.params.id}`).then(res=>{
    //   this.employee = res.data
    // })
  },
  mounted() {
    // this.orient.name = this.$store.state.Eposition.name
    // axios.get(`/api/organizations/${this.$store.state.Eposition.id}`).then(res=>{
    //   this.orient.company  = res.data.code
    // })
  },
  methods:{
    goPosition(){
      this.$router.push({name:'Staff',params:{id:this.$store.state.Eposition.id}})
    }
  },
}
</script>

<style scoped lang="stylus">
#information
  .top
    height 235px
    .right
      width 213px
      height 100%
      background: linear-gradient(149deg, #E5ECFF 0%, rgba(243, 245, 251, 0) 100%);
      border-radius: 40%;
header
  height 60px
  display flex
  align-items center
  padding 20px 40px
  background-color: #fff;
  margin-bottom 10px
  .avatar
    margin-right: 10px;
  .right
    text-align left
    height 40px
    display flex
    flex-direction column
    justify-content: space-between;
    font-size 16px
  .position_name
    font-size 14px
    color rgb(203,203,203)
main
  background-color: #fff;
  .information_box
    height 60px
    line-height 60px
    text-align left
    padding-left 30px
    font-size 14px
    span
      display inline-block
      margin-left 10px
    .position
      height 60px
      display flex
      align-items center
      position relative
      .position_msg
        line-height 23px
        margin-left 20px
        .position_name
          font-size 16px
        .company_name
          font-size 12px
          color rgb(203,203,203)
      .cubeic-arrow
        position absolute
        right 20px
        color rgb(203,203,203)
  .border_bottom
    border-bottom 1px solid rgb(239,239,239)
</style>