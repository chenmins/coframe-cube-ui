<template>
    <cube-button :type="type" @click="$emit('submit',e)">
      <slot></slot>
    </cube-button>
</template>

<script>
export default {
  name: "Button",
  props:[
      'type'
  ]
}
</script>

<style scoped lang="stylus">
>>>.cube-btn
  margin-top 18px
  height: 40px;
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
  border-radius: 20px;
  line-height 0
  font-size: 14px;

</style>