<template>
  <ul class="wapper"  @click="goRouter">
    <li class="item" :style="'height:'+height+'px'" v-for="item in ListData" :key="item.id" :data-id="item.id" :data-name="item.name">
      <slot :item="item" ></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "ListLayout",
  props:{
    height:{
      type:Number,
      default:40
    },
    ListData:{
      type:Array,
      default:()=>[]
    },
  },
  data(){
    return{

    }
  },
  created() {

    this.ListData.forEach(item=>{
      axios.get(`/api/organizations/${item.id}/employees`).then(res=>{
        item.totalElements = res.data.totalElements
      })
    })
  },
  methods:{
    goRouter(e){
      if(this.$route.fullPath.includes('staff')){
        this.$router.push({name:'Information',params:{id:e.target.dataset.id}})
        return
      }

      this.$store.commit('setEposition',{name:e.target.dataset.name,id:e.target.dataset.id})
      this.$router.push({name:'Staff',params:{id:e.target.dataset.id}})
    }
  }
}
</script>

<style scoped lang="stylus">
.wapper
  margin-top 5px
  border-top .75px solid rgb(221,221,221)
  .item
    background-color: #fff;
    display flex
    justify-content space-between
    align-items center
    border-bottom .75px solid rgb(221,221,221)
    padding 0 30px

</style>