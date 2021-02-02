<template>
  <div>
      <div class="header">
        <img class="header_img" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__d7f2b9f1ff45ea5fbaa6e7b3914a91d1.svg" alt="">
        <div class="search" >
          <i class="cubeic-search" v-if="value.length === 0"></i>
          <input  class="search_input" v-model="value" ></input>
          <button  class="search_btn"  @click="search">搜索</button>
        </div>
      </div>
      <List :show-title="false" :data="listData"></List>
  </div>
</template>

<script>
export default {
name: "Question",
  data(){
  return{
    value:'',
    listData:[]
  }
  },
  created() {
    this.listData = this.$store.state.HelpCenter.listData
  },
  methods:{
    search(){
      console.log(this.value)
    },
  }
}
</script>

<style scoped lang="stylus">
.header
  height 80px
  margin 20px
  display flex
  justify-content center
  align-items center
.header_img
  position absolute
h1
  font-size 1.4em
  margin 20px
.search_input
  height 30px
  margin 0 5px
  padding 0 10px
  border none
  outline none
  display block
  background-color rgb(237,237,237	)
  border-radius 8px
  font-size 12px
  width 100%
.search
  height 30px
  outline none
  position relative
  display flex
.search>.search_btn
  background-color rgb(23	,134	,255)
  height 30px
  outline none
  padding 0 15px
  border-color transparent
  border-radius 20px
  margin-left 10px
  color #fff
  z-index 20
  font-weight 500
  width 100px
.cubeic-search
  position absolute
  color rgb(23	,134	,255)
  z-index 10
  top 50%
  left 15px
  transform translateY(-50%)
</style>