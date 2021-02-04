<template>
  <div class="product_list">
    <div  v-if="showTitle" class="product_list_title">{{title}}</div>
    <ul class="product_list_box" >
      <li class="list_item" v-for="item in data" :data-id="item.id" @click="go(item)">
        <slot :scoped="item"></slot>
      </li>
    </ul>
    <img v-if="data.length===0" src="../assets/AdministrativeService/noData.png" alt="">
  </div>
</template>

<script>
export default {
name: "List",
props:{
  showTitle:{
    type:Boolean,
    default:true
  },
  title:'',
  data:{
    type:Array,
    default:[]
  }
},
  methods:{
    go(e){
      this.$emit('goRouter',e)
      // this.$router.push({name:`ProductInc`,params:{id:e.target.dataset.id}})
    }
  }
}
</script>

<style scoped lang="stylus">
.product_list
  background-color: #fff;
  border-radius 5px
.product_list_title
  font-size 18px
  display block
  text-align left
  padding 20px
.icon-arrow
  margin-left 6px
  color #ccc
.list_item
  display flex
  align-items center
  justify-content: space-between;
  padding 8px 16px 8px 12px
  position: relative;
  &:after
    content ''
    border-bottom 1px solid rgba(#ccc,.4)
    position absolute
    bottom 0
    left 64px
    display block
    width 100%
</style>