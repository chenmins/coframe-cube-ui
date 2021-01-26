<template>
  <div class="comments_app">
    <Card>
      <template v-slot:card_topic>dsadasda</template>
      <template v-slot:content>dsadsadnaskdasdasd</template>
    </Card>
    <div style="margin-top: 20px">
      <div style="background-color:#fff;text-align: left;padding:15px">1000条评论</div>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
      <Card class="card" :isComment="true">
        <template v-slot:card_topic>dsadasda</template>
        <template v-slot:content>dsadsadnaskdasdasd</template>
      </Card>
    </div>
    <div class="go_comment">
      <cube-textarea v-model="value"
                     :placeholder="placeholder"
                     :maxlength="maxlength" style="flex-grow: 1;height: 90px"></cube-textarea>
      <cube-button class="btn">发送</cube-button>

    </div>
  </div>
</template>

<script>
import Card from "@/components/Cultural/Card";
import axios from "axios";
import urls from '@/utils/mock/url'  // 引入实现准备好的接口请求相关配置

export default {
  name: "Comments",
  components: {
    Card
  },
  data(){
    return{
      value:'',
      placeholder:'选最棒的照片作为主图，帖子更容易被追捧~',
      maxlength:200,
      userTableData: [] // 定义需要的数据
    }
  },
  created() {

  }
}
</script>

<style scoped lang="stylus">

.comments_app
  background-color $my-bgc-color
  height 100%

.card
  border-bottom 1px solid rgba($my-bgc-color, 1)

.go_comment
  display flex
  height 100px
  align-items center

.btn
  width 70px
  height 30px
  margin 0 10px
  line-height 2px
  background-color $custom-active-color
</style>