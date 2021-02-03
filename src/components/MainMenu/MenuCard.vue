<template>
  <div id="menu_card" @click="CardDetail">
    <div class="title" :style="'justify-content:'+justifyContent " @click="SeeAll">
      <span :style="'font-size: 18px;color:'+titleColor ">{{ name }}</span>
      <div v-show="!noAll " style="display: flex;align-items: center;">
        <div v-show="allText" style="font-size: 10px;color: #999999">查看全部</div>
        <i class="cubeic-arrow" style="font-size:10px;color: #999999;margin-left: 2px"></i>
      </div>
    </div>
    <div class='content' :style="'background-color:'+bgcColor" :class="shadow?'shadow':''">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "MenuCard",
  props: [
    'name', 'src', 'noAll', 'justifyContent',
    'allText', 'titleColor','shadow','bgcColor'
  ],
  methods: {
    SeeAll() {
      this.$emit('SeeAll')
    },
    CardDetail() {
      this.$emit('CardDetail')
    }
  }
}
</script>

<style scoped lang="stylus">
#menu_card
  margin 15px 12px
  border-radius 10px

  .content
    background-color #fff
    border-radius 10px
  .shadow
    box-shadow 0 3px 12px rgba($custom-shoaw-color, .06)
  .title
    display flex
    color #fff
    flex-direction row
    align-items center
    justify-content: space-between;
    font-size 18px
    line-height 25px
    padding-bottom 15px
    margin-left 14px

  img
    margin-right 5px

  span
    font-weight 600
</style>