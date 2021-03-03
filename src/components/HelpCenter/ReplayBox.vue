<template>
  <div class="replay_box">
    <span class="replay_username">
      @admin：
    </span>
    <span class="replay_content">
      {{listData.body}}
    </span>
  </div>
</template>

<script>
export default {
  name: "ReplayBox",
  props: {
      listData:{
      type:Object,
      default:()=>{
        return {
          id: 1,
          user: {
            avatar: 'https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__ce77de2733d2f72b27f5abf616a7b5ac.svg',
            username: 'supperman',
          },
          body: '欢迎大家家家家家家家家在家家家家家家家家家家家在家家家家家家在家家家家家家家家家家家家家家在家家家家家家在家家家家家家家家家家家家家家在家家家家家家在家家家家家家 家家家在家家家家家家在家家家家在这里给我们提APP相关的建议，产品经理会在这里查看大家的反馈情况。另外使用过程中遇到的问题或疑问，也可以一起提出来哟，帮助我们更好的改进产品~~~',
          replay: [
            {
              user: '管理员小张',
              content: '你好，感谢您的建议，我们会在下个版本中改进意见，请您持续关注。'
            }
          ],
          createDate: '2021-12-25',
        }
      }
    }
  },
  data(){
    return{
      userInfo:JSON.parse(localStorage.getItem('userInfo'))
    }
  }
}
</script>

<style scoped lang="stylus">
.replay_box
  background: #F7F7F7;
  padding 8px

.replay_username
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #6F78C8;
  line-height: 18px;
  letter-spacing: 1px;
  display inline-block
  margin-bottom 8px

.replay_content
  padding-bottom 10px
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333333;
  line-height: 18px;
  letter-spacing: 1px;
</style>