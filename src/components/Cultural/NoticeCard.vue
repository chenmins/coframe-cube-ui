<template>
  <div id="Notice_card" @click="read">
    <slot name="image"></slot>
    <div class="box">
    <span class="title">
      <slot name="title"></slot>
    </span>
      <span class="content">
      <slot name="content"></slot>
    </span>
      <span class="footer">
        <span class="date">
          <slot name="date"></slot>
        </span>

        <span class="from">
            <span class="read_all">
              <slot name="readAll"></slot>
            </span>
          <slot name="from"></slot>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeCard",
  methods: {
    read() {
      this.$emit('read')
    }
  }
}
</script>

<style scoped lang="stylus">

</style>