<template>

  <div class="communication_app">
      <div style="background-color:#fff;">
        <img src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__e1d1defe0c2a8e31ed04fe4311a2d63c.svg" alt="">
        <div class="topics">
          <div class="topic">#哪个食堂的饭香#</div>
          <div class="topic">#哪个食堂的饭香#</div>
          <div class="topic">#哪个食堂的饭香#</div>
          <div class="topic">#哪个食堂的饭香#</div>
          <div class="topic">#哪个食堂的饭香#</div>
          <div class="topic more" @click="$router.push({name:'话题列表'})">更多话题 > </div>
          <div class="mid"></div>
        </div>
        <!--    <SlideNav class="demo" :selected-label="selectedLabel" :tabs="tabs"></SlideNav>-->
        </div>
    <SlideNav   headerClass='com_header' :center="true" show-slider="" :selected-label="selectedLabel" :tabs="tabs" >
     <template slot-scope="item">
           <Card :is-like="true" @checkComments="checkComments"  style="margin: 10px 10px 0;border-radius: 8px" >
             <template v-slot:username>{{item.scoped.label}}</template>
             <template v-slot:card_topic>dsadasda</template>
             <template v-slot:content>dsadsadnaskdasdasd</template>
           </Card>
       <Card    style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
       <Card   style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
       <Card    style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
       <Card   style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
       <Card    style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
       <Card   style="margin: 10px 10px 0" >
         <template v-slot:username>{{item.scoped.label}}</template>
         <template v-slot:card_topic>dsadasda</template>
         <template v-slot:content>dsadsadnaskdasdasd</template>
       </Card>
     </template>
    </SlideNav>

<!--    todo 发帖子-->

  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
import Card from "@/components/Cultural/Card";
export default {
  name: "index",
  components:{
    SlideNav,Card
  },
  data(){
    return{
          selectedLabel: '全部',
          tabs: [
            {
              label: '全部',
              comments:[
                {
                  username:'demo1',
                }
              ]
            }, {
              label: '热门',
            }, {
              label: '精选',
            }
          ]
    }
  },
  methods:{
    selectItem(e){
      console.log(e.target.innerHTML)
    },
    checkComments(){
      this.$router.push({name:'交流圈-评论详情',params:{id:1}})
    }
  }
}
</script>

<style scoped  lang="stylus">

.communication_app
  background-color $my-bgc-color
  min-height calc(100vh - 60px)
.topics
  display flex
  flex-direction column
  max-height 80px
  flex-wrap wrap
  position relative
  padding-bottom 10px
  margin 0 20px
  border-bottom 1px solid $custom-border-color
  text-align center
  .topic
    padding 5px 10px
    font-size 13px
  .more
    font-size 14px
  .mid
    position absolute
    height 80%
    background-color  $custom-border-color
    width 1px
    top 50%
    left 50%
    transform translate(-50%,-50%)
.communication_nav
  width 100%
  display flex
  justify-content space-around
  li
    flex-grow 1
    padding 10px
  .nav_active
    color $custom-active-color
    border-bottom 3px solid $custom-active-color
.send
  border 1px solid $custom-active-color
  padding 8px 20px
  border-radius 20px
  color $custom-active-color
  font-size 16px
  position fixed
  z-index 20
  bottom 60px
  right 20px
  background-color $my-bgc-color
  .iconfont
    color $custom-active-color
.cube-tab_active
  color $custom-active-color
</style>