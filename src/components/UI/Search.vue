<template>
  <div class="search clear-fix">
    <cube-input type="text" :clearable="true" :placeholder="placeholder"
      v-model="value" @keyup.enter.native="submitHandler" @input="changeValue"
    ></cube-input>
    <span @click="$emit('search')" v-show="cancel">{{cancel}}</span>
    <div class="search_icon">
      <div class="one"></div>
      <div class="two"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props:[
      'placeholder','clearable','cancel','value'
  ],
  methods: {
    submitHandler(e){
      this.$emit('search',e.target.value)
    },
    changeValue(e){
      if(e===''){
        this.$emit('reflash')

      }
    }
  },

}
</script>

<style scoped lang="stylus">
.search
  display flex
  padding 5px 12px
  font-size 14px
  border-bottom 1px solid rgba($custom-border-color, .3)
  z-index 70
  position: relative;
  background-color: #fff;

  .search_icon
    position absolute
    transform rotate(-45deg) translateY(-70%)
    top 50%
    left 28px

    .one
      height 10px
      width 10px
      border 1px solid #333
      border-radius 50%

    .two
      height 5px
      width 1px
      background-color #333
      position absolute
      transform translateX(5px)

  span
    line-height 30px

>>> .cube-input
  height 30px
  flex-grow 1
  margin-right 10px
  outline none
  border none

  &::after
    border none

  input
    padding-left 30px
    background-color #F2F2F2
    border-radius 15px
    height 28px
  input:

  :-webkit-input-placeholder
    font-size 10px


</style>