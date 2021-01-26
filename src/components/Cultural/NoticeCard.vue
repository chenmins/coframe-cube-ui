<template>
<div id="Notice_card" @click="read">
  <div class="title">
    <slot name="title" ></slot>
  </div>
  <div class="tag">
    <slot></slot>
  </div>
  <div class="content">
    <slot name="content"></slot>
  </div>
  <div class="footer">
    <div class="date">
      <slot name="date">2021-01-22</slot>
    </div>
    <a class="readall">阅读全部</a>
  </div>
</div>
</template>

<script>
export default {
name: "NoticeCard",
  methods:{
    read(){
      this.$emit('read')
    }
  }
}
</script>

<style scoped lang="stylus">
#Notice_card
  text-align left
  border-bottom 1px solid $custom-gray
  padding-bottom 10px
  padding-top 20px
.title
  font-weight bold
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.tag
  margin 3px 0
.content
  font-size 12px
  line-height 16px
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden
.footer
  display flex
  justify-content: space-between;
  font-size 10px
  margin-top 10px
  .date
    color $custom-gray
  .readall
    font-size 12px
    color $custom-active-color

</style>