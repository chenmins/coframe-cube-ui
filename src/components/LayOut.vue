<template>
  <div id="layout" @click="$emit('clicked')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayOut"
}
</script>

<style scoped lang="stylus">

#layout
  background-color: #fff;

</style>