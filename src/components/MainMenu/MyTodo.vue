<template>
  <MenuCard
      src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__b141aa3d288cf15d74fffee487868c6e.svg"
      name="我的待办" @SeeAll="SeeAll">
    <cube-slide :auto-play="false">
      <cube-slide-item v-for="(item, index) in todos" :key="index" @click.native="clickHandler(item, index)">
        <div class="type"  >访客预约</div>
        <div style="padding: 0 10px">
          <p class="who"><span>来访者：</span>{{ item.name }}</p>
          <p class="which"><span>到访部门：</span>{{ item.position }}</p>
          <p class="when"><span>来访时间：</span>{{ item.comeTime }}</p>
        </div>
        <Tag class="tag" color="rgb(23	,134	,255)">
          待审批
        </Tag>
      </cube-slide-item>
    </cube-slide>
  </MenuCard>
</template>

<script>
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "MyTodo",
  components: {
    MenuCard
  },
  data() {
    return {
      todos: []
    }
  },
  created() {
    let MainMenu = this.$store.state.MainMenu
    this.todos = MainMenu.todos
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
      console.log('当前轮播图序号为:' + index, item)
    },
    SeeAll(){
      this.$emit('SeeAll')
    }
  }

}
</script>

<style scoped lang="stylus">
>>> .cube-slide-dots
  span
    height 6px
    width 6px
    border-radius 50%
    transition all .5s ease
    margin-left: 5px;
    margin-top 5px

    &.active
      transform scale(1.2)
      background-color $custom-active-color

>>> .cube-slide
  font-size 14px
  text-align left

  .cube-slide-group
    margin-bottom 25px

  .cube-slide-item
    position relative

  .type
    font-size 13px
    font-weight bold
    display inline-block
    padding 6px 12px
    margin-bottom 10px
    border-bottom 1px solid rgba($custom-border-color, .3)
    border-left 1px solid rgba($custom-border-color, .3)
    border-right 1px solid rgba($custom-border-color, .3)

  .who
    font-size 16px

  .which, .when
    font-size 12px
    margin-top 10px
    color gray

  .tag
    border 1px solid $custom-active-color
    position absolute
    top 10px
    right 10px
</style>