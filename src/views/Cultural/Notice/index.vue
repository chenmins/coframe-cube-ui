<template>
  <div id="notice_app" >
    <img height="100vw" src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__69978fede7bad62225395de43eb158f3.svg" alt="">
    <SlideNav @changeHandle="changeHandle"  :selected-label="selectedLabel" :tabs="tabs" showSlider >
      <div class="scroll-list-wrap" style="height: calc(100vh - 220px)">
        <cube-scroll
            ref="scroll">
          <NoticeCard @read="read" class="content" v-for="notice in notices">
            <template v-slot:title>
              {{notice.title}}
            </template>
            <Tag color="#000">{{notice.who}}</Tag>
            <template v-slot:content>
              {{notice.content}}
            </template>
            <div slot="date">{{notice.time}}</div>
          </NoticeCard>
        </cube-scroll>
      </div>
    </SlideNav>
  </div>
</template>

<script>
import NoticeCard from "@/components/Cultural/NoticeCard";
import SlideNav from "@/components/Cultural/SlideNav";
export default {
  name: "index",
  components:{
    SlideNav,NoticeCard
  },
  data() {
    return {
      selectedLabel: '全部',
      tabs: [
        {
          label: '全部',
        }, {
          label: '系统公告',
        }, {
          label: '餐厅公告',
        }, {
          label: '物业公告',
        }
      ],
      notices:[]
    }
  },
  mounted() {
    // this.$router.push({name:'公告列表'})
    this.notices = this.$store.state.Cultural.noticeLists.all
  },
  methods:{
    read(){
      this.$router.push({name:'公告详情',params:{id:1}})
    },
    changeHandle(e){
      switch (e){
        case '全部':
          this.notices = this.$store.state.Cultural.noticeLists.all
          break
        case '系统公告':
          this.notices = this.$store.state.Cultural.noticeLists.system
          break
        case '餐厅公告':
          this.notices = this.$store.state.Cultural.noticeLists.restaurant
          break
        case '物业公告':
          this.notices = this.$store.state.Cultural.noticeLists.property
          break
      }
    }
  }
}
</script>

<style scoped lang="stylus">
#notice_app
  height $custom-bgc-height
.content
  margin 5px 20px 10px
</style>