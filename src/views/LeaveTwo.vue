<template>
  <div id="admin_app">
    <Nav :title="navName"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
let navName
export default {
  name: "index",
  data(){
    return{
      navName:''
    }
  },
  beforeRouteEnter(to,from,next){
    navName = to.meta.name
    next()
  },
  created() {
    this.navName = navName
  },
  methods:{

  },

}
</script>

<style scoped>

</style>