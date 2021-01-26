<template>
  <div style="padding-bottom: 40px">
    <NewCard  @read="read"></NewCard>
  </div>
</template>

<script>
import NewCard from "@/components/Cultural/NewCard";
export default {
  name: "All",
  components:{
    NewCard,
  },
  methods:{
    read(){
      this.$router.push({name:'企业新闻详情',params:{id:1}})
    }
  }
}
</script>

<style scoped>

</style>