<template>
  <div class="notice_all">
    <NoticeCard @read="read">
      <template v-slot:title>
        关于信息技术中心研发出新的功能，办公效率提升200
      </template>
      <Tag color="#000">行政服务平台</Tag>
      <template v-slot:content>
        最近的行政服务平台用户：根据公司物业管理安排,请同事们吧工位摆放整齐,最近的行政服务平台用户：根据公司物业管理安排,请同事们吧工位摆放整齐
      </template>
      <div slot="date">22222</div>
    </NoticeCard>
  </div>
</template>

<script>
import NoticeCard from "@/components/Cultural/NoticeCard";
export default {
  name: "All",
  components:{
    NoticeCard
  },
  methods:{
    read(){
      console.log('read')
      this.$router.push({name:'公告详情',params:{id:1}})
    }
  }
}
</script>

<style scoped lang="stylus">
.notice_all
  padding-bottom 60px

</style>