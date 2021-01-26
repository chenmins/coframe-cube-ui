<template>
  <div class="">
    <LayOut>
      <div class="header">
        <div class="title">
          关于信息技术中心研发出新的功能，办公效率提升200%
        </div>
        <div class="from"><span class="gray">来源：</span>行政服务平台</div>
        <div class="date gray">2020-12-25</div>
      </div>
      <div class="content">
        新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，大幅度发到付
        新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，新闻正文部分，大幅度发到付
      </div>
    </LayOut>
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
  border-bottom 1px solid $custom-gray
  padding 0 20px 10px
  text-align left
.title
  font-weight bold
  margin-bottom 20px
.from
  font-size 14px
  margin-bottom 10px
.gray
  font-size 12px
  color $custom-gray
.content
  margin-top 20px
  padding 0 20px 10px
  font-size 14px
  line-height 18px
  text-align left
.date
  color $custom-gray

</style>