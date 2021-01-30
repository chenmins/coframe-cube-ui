<template>
  <div id="page">
      <LayOut class="container">
        <div @click="showDefault" class="selected">
          <span>今天 {{ date }}</span>
          <div>
            <span>全天</span>
            <i class="cubeic-arrow"></i>
          </div>
        </div>
        <div class="selected" @click="showType" >
          <span>问诊类型</span>
          <div>
            <span>请选择</span>
            <i class="cubeic-arrow"></i>
          </div>
        </div>

        <cube-button>查询</cube-button>
      </LayOut>
  </div>
</template>

<script>
export default {
  name: "BusinessPage",
  beforeRouteEnter(to,from,next){
    to.meta.name = to.params.id
    next()
  },
  data(){
    return {
      date:this.$dayjs().format('MM月DD日')
    }
  },
  created() {
    console.log(this.$route.meta.dataType.filter(i=>i.name==='one')[0].type)
  },
  methods:{
    showType(){
      this.$createActionSheet({
        title: '',
        data: this.$route.meta.dataType.filter(i=>i.name==='one')[0].type,
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    },
    showDefault() {
      this.$createActionSheet({
        title: '',
        data: [
          {
            content: this.$dayjs().format(' MM月DD日'),
          },
          {
            content:  this.$dayjs().add(1, 'day').format(' MM月DD日')
          },
          {
            content:  this.$dayjs().add(2, 'day').format(' MM月DD日') ,
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">

#page
  height $viewpoint-height
  background-color $my-bgc-color
  border 1px solid transparent
  button
    margin-top 50px
    border-radius 10px
    background-color $custom-active-color
  .container
    margin 20px
    padding 10px
    border-radius 10px
  .selected
    display flex
    justify-content space-between
    padding 20px
    div
      display flex
      align-items center
    span
      font-size 12px
</style>