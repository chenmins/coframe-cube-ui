<template>
  <div>
    <div class="sticky-header">{{menu.name}}</div>
    <ul >
      <li class="sticky-item" @click="goIn(item.name)" :key="index" v-for="(item,index) in menu.children[0]">
        {{item.name}}
        <i class="cubeic-arrow icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menus",
  props:[
      'menu'
  ],
  data(){
    return{
      treeTables:{
        "机构管理":"/admin/org-position",
        "人员管理":"/admin/employee",
        "成员角色":"/authority/role",
        "用户管理":"/authority/user",
        "角色模板":"/system-config/authority-template",
        "资源权限":"/system-config/resource-authority",
        "业务字典":"/system-config/business-dict",
        "操作日志":"/security-audit/operation-log"
      }
    }
  },
  methods:{
    goIn(e){
      this.$router.push({path:this.treeTables[e]})
      // this.$router.push({name:'employee',path:'employee'})

    },
  }
}
</script>

<style scoped lang="stylus">

.sticky-header
  background-color $menus-leave-one-bgc
  height 42px
  color $color-light-grey
  line-height 42px
.scroll-ele
  height 100%
  overflow auto
  -webkit-overflow-scrolling touch
  background-color #fff

.sticky-item
  position relative
  height 40px
  line-height 40px
  box-shadow 0 0 1px rgba(#4f4f4f,.3)

.icon
  position absolute
  right 20px


</style>