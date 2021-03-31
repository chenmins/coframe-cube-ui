<template>
  <div style="background-color: #fff;height: 100vh">
    <TitleNav bgc-color="#fff">
      <div class="header">
        <div class="title">
          {{notice.title}}
        </div>
        <div class="from"><span class="gray">来源：</span>行政服务平台</div>
        <div class="date gray">{{$dayjs(notice.releaseTime).format('YYYY-MM-DD')}}</div>
      </div>
      <div class="content">
        {{notice.body}}
      </div>
    </TitleNav>
  </div>
</template>

<script>
import LayOut from "@/components/LayOut";
export default {
  name: "Detail",
  components:{
    LayOut,
  },
  data(){
    return {
      notice:{}
    }
  },
  created() {
    this.notice = this.$route.params.notice
  }
}
</script>

<style scoped lang="stylus">
.header
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