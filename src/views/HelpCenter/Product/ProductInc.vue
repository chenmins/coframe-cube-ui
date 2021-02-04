<template>
  <div >
      <div class="header">
        <div class="title">
          关于信息技术中心研发出新的功能，办公效率提升200%
        </div>
        <div class="from_box">
          <div class="from">来源：行政服务平台</div>
          <div class="date ">2020-12-25</div>
        </div>

      </div>
      <div class="content">
        新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，大幅度发到付
        新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，大幅度发到付
      </div>
  </div>
</template>

<script>
import LayOut from "@/components/LayOut";
export default {
  name: "Detail",
  components:{
    LayOut,
  }
}
</script>

<style scoped lang="stylus">

.header
  padding 20px 36px
  text-align left
.title
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  line-height: 26px;
  margin-bottom 12px
.from_box
  display flex
  align-items center
  font-size 10px
.from
  font-weight: 400;
  color: #999999;
  line-height: 14px;
  margin-bottom 20px
  margin-right 20px
.date
  line-height: 14px;
  margin-bottom 20px
.gray
  font-size 12px
  color $custom-gray
.content
  padding 0 36px
  font-size 14px
  font-weight: 400;
  color: #333333;
  line-height: 25px;
  letter-spacing: 1px;
  text-align left
.date
  color $custom-gray

</style>