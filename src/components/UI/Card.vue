<template>
  <div id="card" :class="shadow?'shadow':''"  @click.stop="cEmit">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:[
      'shadow'
  ],
  methods:{
    cEmit(){
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped lang="stylus">
#card
  text-align left
  padding 20px
  background-color #fff
  margin 12px
  border-radius 10px
  position relative
.shadow
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.04), 0px -1px 12px 0px rgba(0, 0, 0, 0.04);


</style>