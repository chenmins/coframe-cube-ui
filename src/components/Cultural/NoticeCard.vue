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
#Notice_card
  display flex
  padding 21px 16px
  margin 12px
  max-width 100vh
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.04), 0px -1px 12px 0px rgba(0, 0, 0, 0.04);
  border-radius: 6px;


  .box
    display flex
    flex-direction column
    justify-content: space-between;
    .read_all
      font-size 12px
      color #0099FF
    .title
      font-size 16px
      margin-bottom: 8px;
      font-weight: 500;
      color: #000000;
      line-height: 22px;
      letter-spacing: 1px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

    .content
      margin 0 0 12px 0
      font-size 14px
      font-weight: 300;
      color: #666666;
      line-height: 22px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

    .footer
      font-size 12px
      font-weight: 300;
      color: #999999;
      line-height: 17px;
      display flex
      justify-content: space-between;
</style>