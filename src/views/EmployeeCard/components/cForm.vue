<template>
  <cube-form :model="model"
             :options="{layout:'classic'}"
             class="form-control"
  >
    <cube-form-group>
      <cube-form-item :field="form[0]">
        <div class="time-show" @click="showTimePicker">{{ model.time || form[0].props.placeholder }}
          <i class="cubeic-arrow" style="float: right;"></i>
        </div>
      </cube-form-item>
    </cube-form-group>
  </cube-form>
</template>

<script>
export default {
  name: "cForm"
}
</script>

<style scoped>

</style>