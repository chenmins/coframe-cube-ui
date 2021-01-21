<template>
  <div class="product_list">
    <span v-if="showTitle" class="product_list_title">{{title}}</span>
    <ul class="product_list_box" @click="go">
      <li class="list_item" :data-id="item.id"  v-for="item in data">
        <span >{{item.title}}</span>
        <i  class="cubeic-arrow icon"></i>
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
      console.log(e.target.dataset.id)
      this.$router.push({name:`ProductInc`,params:{id:e.target.dataset.id}})
    }
  }
}
</script>

<style scoped lang="stylus">

.product_list
  margin-left 20px
  margin-right 20px
  margin-top 10px
  background-color: #fff;
  border-radius 5px
.product_list_title
  font-size 18px
  margin 15px
  display block

.icon
  position: absolute;
  right 40px
.list_item
  text-align left
  padding 16px
  font-size 14px
  box-shadow 0 1px 1px rgba(#eee,.5)

</style>