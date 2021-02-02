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
          <span>{{$route.meta.name==='医务室预约'?'问诊':$route.meta.name==='理发室预约'?'护理':$route.meta.name==='零点餐厅预约'?'选择餐厅':''}}类型</span>
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
  },
  methods:{
    showType(){
      let nameMap={
        '医务室预约':'hospital',
        '理发室预约':'barbershop',
        '零点餐厅预约':'restaurant',
      }
      let routerName = this.$route.meta.name
      this.$createActionSheet({
        title: '',
        data: this.$route.meta.dataType[nameMap[routerName]],
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