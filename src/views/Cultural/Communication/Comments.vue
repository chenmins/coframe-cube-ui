<template>
  <div class="comments_app">
    <NavLayOut bgc-color="#fff" style="margin-bottom: 100px">
      <Card :is-comment="false">
        <template v-slot:content>dsadsadnaskdasdasd</template>
        <template v-slot:card_topic>#dasdada</template>
      </Card>
      <div style="margin-top: 20px">
        <div style="background-color:#fff;color:#999;font-size:15px;text-align: right;padding: 8px 20px">1000条评论</div>
        <Card class="card" :isComment="true" >
          <div slot="content" class="content">
            dsadsadnaskdasdasd
          </div>
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
    </NavLayOut>
    <div class="go_comment">
      <form style="width: 100%">
        <cube-textarea v-model="value"
                       class="inputarea"
                       :placeholder="placeholder"
                       :maxlength="maxlength" >

        </cube-textarea>
      </form>

    </div>
  </div>
</template>

<script>
import Card from "@/components/Cultural/Card";
import axios from "axios";
import urls from '@/utils/mock/url'  // 引入实现准备好的接口请求相关配置

import {PipCcoCciController} from "@controller";

export default {
  name: "Comments",
  components: {
    Card
  },
  data(){
    return{
      value:'',
      placeholder:'请输入评论',
      maxlength:200,
      userTableData: [] // 定义需要的数据
    }
  },
  created() {
    this.init()
  },
  methods:{
    async init(){
      //todo 交流圈详情
      let resp = await this.dispatch(PipCcoCciController.selAllComment,{id:this.$route.params.id})

      console.log(resp)

    },
    async submit(){
      let resp = await this.dispatch(PipCcoCciController.upCommentById,{})

      console.log(resp)
    }
  }
}
</script>

<style scoped lang="stylus">

.comments_app
  background-color $my-bgc-color
  position: relative;
  height 100vh
.card
  border-bottom 1px solid rgba($my-bgc-color, 1)

.go_comment
  display flex
  align-items center
  position: fixed;
  bottom 0
  width 100%
  z-index 65
  background: #FFFFFF;
  padding 15px 14px 13px 15px
  box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.12);
.inputarea
  flex-grow 1
  margin-right: 30px;
  height 32px
  background: #F5F6FA;
  border-radius 32px
  >>>textarea
    background: #F5F6FA;
    line-height: 15px;
    border-radius 32px
.cube-textarea-wrapper::after
  border none
.btn
  width 70px
  height 30px
  margin 0 10px
  line-height 2px
  background-color $custom-active-color
</style>