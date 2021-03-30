<template>
  <div id="confirm">
    <TitleNav bgc-color="#fff">
      <cube-textarea placeholder="请输入审批意见" :maxlength="300" v-model="textarea"></cube-textarea>
    </TitleNav>

    <footer>
      <button @click="refuse">残忍拒绝</button>
    </footer>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "RejectConfirm",
  data(){
    return {
      textarea:''
    }
  },
  methods:{
    ...mapActions('EmployeeCard',['review']),
    refuse(){
      console.log('2333')
      this.review({pass:0,reasonsForRefusal:this.textarea}).then(()=>{
        this.$router.push({ name: "员工卡申请" });
      })
    }
  }
}
</script>

<style scoped lang="stylus">
#confirm
  height 100%
  background-color #fff
  footer
    position fixed
    bottom 0

  button
    height 40px
    font-size 14px
    border none
    border-radius 20px
    width calc(100vw - 40px)
    margin 20px
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    color #fff
>>>.cube-textarea-wrapper
  font-size: 17px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  line-height: 24px;
  height 300px
>>>.cube-textarea-wrapper::after
  border none

</style>