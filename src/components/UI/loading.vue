<template>
  <div class="loading_cover" v-if="firstLoading">
    <cube-loading class="loading" :size="40"></cube-loading>
  </div>
</template>

<script>
export default {
  name: "loading"
}
</script>

<style scoped>

</style>