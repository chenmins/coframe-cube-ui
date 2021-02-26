<template>
  <div id='Nav_app' :style=" 'background-color:'+backgroundColor+';color:'+color">
    <i @click="back" v-if="showBack" class="icon cubeic-back"></i>
    <slot>{{ title }}</slot>
    <div class="func">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showBack: {
      type: Boolean,
      default: false
    },
    title: '',
    backgroundColor: '',
    color: ''
  },
  methods: {
    back() {
      if (this.$route.meta.leave === 1) {
        this.$router.push({name: 'Login'})
      }
      if (this.$route.meta.leave === 2) {
        this.$router.push({name: 'Home'})
      }
      if (this.$route.meta.leave === 3) {

        this.$router.push({name: this.$route.meta.backRouter})
      }
    }
  }

}
</script>
<style scoped lang="stylus">
#Nav_app
  height: 60px
  text-align: center
  line-height: 60px
  position: fixed
  width 100%
  top 0
  background-color transparent
  z-index 60
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;

.icon
  position: absolute
  left: 0
  margin-left 12px
  height 20px
  width 20px

.func
  position absolute
  top 50%
  transform translateY(calc(-50% - 19px))
  right 0


</style>