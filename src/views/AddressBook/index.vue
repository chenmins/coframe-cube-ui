<template>
  <div class="addressbox">
    <TitleNav bgc-color="#fff" color="#333">
      <Search v-show="! $route.meta.notShowInRouterView" :value="value" cancel="搜索" @search="search"
      @reflash="queryTreeChildNodes({'nodeId': `2082`})"></Search>
      <router-view></router-view>
    </TitleNav>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
import {mapActions, mapGetters,mapMutations} from "vuex";
export default {
name: "index",
  components:{
    Search
  },
  data(){
    return{
      value:'',
    }
  },

  methods:{
    ...mapActions('AddressBook',['queryTreeChildNodes']),
    ...mapMutations('AddressBook',['setOrganization']),
    search(e){
      this.setOrganization(this.searchOrg(e))
    },
  },
  computed: {
    ...mapGetters('AddressBook',['searchOrg'])
  }
}
</script>

<style scoped lang="stylus">
.addressbox
  background-color $my-bgc-color

</style>