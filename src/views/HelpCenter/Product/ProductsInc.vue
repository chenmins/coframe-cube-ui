<template>
  <div id="product_inc">
<!--    <a class="share" >分享</a>-->
<!--    <div class="product_container">-->
<!--      <div class="product_inc">-->
<!--        <div class="product_inc_title">-->
<!--          <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__e803833a28ab7efea72adb2b4d6af3d0.svg" alt="" height="30" width="50">-->
<!--          <a style="line-height:50px;margin-left: 20px">APP名称</a>-->
<!--        </div>-->
<!--        <div class="product_inc version">-->
<!--          v2.0.0-->
<!--        </div>-->
<!--        <img class="product_inc_logo" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__e803833a28ab7efea72adb2b4d6af3d0.svg" alt="">-->
<!--        <span style="font-size: 12px">您的朋友也可以扫描二维码下载客户端哦~</span>-->
<!--      </div>-->
      <List :show-title="false" :data="listData"></List>
  </div>
</template>

<script>
export default {
name: "ProductsInc",
  data(){
    return{
      listData:[
        {
          id:1,
          title:'one'
        },
        {
          id:2,
          title:'two'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
#product_inc
  height calc(100% - 60px)
  background-color $my-bgc-color
  position relative
  display flex
  flex-direction column
.product_inc_title
  margin 20px
  display flex
  justify-content: center
  align-items center
.share
  position: absolute
  top 20px
  right 20px
  color #fff
.version
  color darkgray
  display block
  margin 20px
.product_inc_logo
  display block
  margin-bottom 20px
  margin-left  auto
  margin-right auto


</style>