<template>
  <div >
    <NavLayOut
        bgc-color="#fff"
    >
      <div class="header">
        <Search :value="value" cancel="搜索" ></Search>
      </div>
      <List :show-title="true" title="行政服务平台" :data="listData" >
          <template slot-scope="scoped">
              <div style="display: flex;align-items: center;color: #0F1826">
                <Icon svg-name="addressbook-qr" style="height: 44px;width: 44px;margin-right: 8px" ></Icon>
                <span>{{scoped.scoped.title}}</span>
              </div>
              <div>
                <span style="font-size: 14px;color: #ccc">50</span>
                <i  class="cubeic-arrow icon-arrow"></i>
              </div>
          </template>
      </List>
    </NavLayOut>
  </div>
</template>

<script>
import Search from "@/components/UI/Search";
export default {
name: "Question",
  components:{
    Search
  },
  data(){
  return{
    value:'',
    listData:[]
  }
  },
  created() {
    this.listData = this.$store.state.HelpCenter.listData
  },
  methods:{
    search(){
      console.log(this.value)
    },
    go(e){
      console.log('222')

      console.log(e)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>