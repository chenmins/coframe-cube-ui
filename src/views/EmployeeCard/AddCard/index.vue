<template>
  <div id="add_card">
    <NavLayOut bgc-color="#fff">

      <LayOut style="height: calc(100vh - 72px)">
        <h1>请选择补卡原因</h1>
        <div @click="selected" class="item selected">工卡丢失</div>
        <div @click="selected" class="item">以旧换新</div>
        <div v-if="disable" class="footer disable" @click="$router.push({name:'CreateCard'})">
          下一步
        </div>
        <div v-else class="footer " @click="$router.push({name:'CreateCard'})">
          下一步
        </div>
      </LayOut>
    </NavLayOut>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      disable: false
    }
  },
  methods:{
    selected(e){
      let classList= e.target.classList
      let newArr = []
      for(let i of classList){
        newArr.push(i)
      }
      console.log();
      if(newArr.findIndex(i => i === 'selected')!==-1){
        classList.remove('selected')
      }else {
        classList.add('selected')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
#add_card
  width 100vw
  background-color #F5F6FA
  height 100vh
  text-align left

  h1
    margin-top 12px
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    padding 20px

  .item
    font-weight: 600;
    padding 24px 0
    background-color #F7F7F7
    border-radius 35px
    text-align center
    margin 20px

  .selected
    background-color #EAF1FF
    color #0099FF

  .footer
    text-align center
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    margin 20px
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 20px;
    padding 15px 0
    color #fff
    position absolute
    bottom 7px
    width calc(100vw - 40px)

  .disable
    opacity: 0.3;

</style>