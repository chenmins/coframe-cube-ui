<template>
<div class="tag" :style="'background-color:'+backgroundColor+';color:'+color">
    <slot>Tag</slot>
</div>
</template>

<script>
export default {
name: "Tag",
  props:[
      'backgroundColor',
      'color'
  ],
}
</script>

<style scoped lang="stylus">
.tag
  color #fff
  display inline-block
  padding 3px 5px
  border-radius 3px
  font-size 10px

</style>