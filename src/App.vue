<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view />
    </transition>
    <div class="write" v-if="$route.meta.tag === '需求反馈'" @click="Replay">
      <Icon class-name="write_svg" svg-name="edit" height="24px" width="24px"></Icon>
    </div>
  </div>
</template>

<script>
// import {Demo} from "@controller";

export default {
  // provide() {
  //   return {
  //     reload: this.reload,
  //   }
  // },
  data() {
    return {
      isRouterAlive: true,
    };
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
    Replay() {
      this.$router.push({ name: "Replay" });
    },
  },
};
</script>

<style lang="stylus">
.loading_cover
  height 100%
  width 100%
  background hsla(0, 0%, 100%, .9)
  position absolute
  z-index: 98

  .loading
    position fixed
    top 50%
    left 50%
    transform translate(-50%, -50%)
    z-index 99

//按钮渐变
.cube-btn
  background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);

//picker 按钮颜色
.cube-picker-confirm, .cube-picker-cancel
  font-size 17px
  font-family PingFangSC-Regular, PingFang SC
  color #0099FF

//dialog文字颜色
.cube-dialog-btn
  font-family PingFangSC-Regular, PingFang SC
  color #999999

//dialog确定按钮颜色
.cube-dialog-btn_highlight
  color #fff
  background linear-gradient(90deg, #19D4FF 0%, #0F97FB 100%)


.schedule-footer
  height 24px
  width 24px

.schedule-avatar
  height 50px
  width 50px
  background-color red
  border-radius 50%
  margin-right 8px

.my-content
  display flex
  justify-content: center;
  margin 30px

.schedule-h1
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 22px;

.schedule-content
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 24px;

//input边框取消
.cube-input::after, .cube-select::after
  border none

//picker样式
.cube-picker-panel.cube-safe-area-pb
  border-radius 12px 12px 0 0

//dialog样式
.cube-dialog-main {
  border-radius 4px
}

.cube-dialog-title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #0F1826;
  line-height: 24px;
  padding 12px
}

.cube-dialog-btn {
  height 48px
}

.cube-dialog-btn {
  color: #999999;
  line-height: 22px;
}

.cube-dialog-btn_highlight {
  color #fff
  background: linear-gradient(90deg, #19D4FF 0%, #0F97FB 100%);
}

.write
  height 46px
  width 46px
  position fixed
  z-index 60
  background-color #fff
  border-radius 50%
  bottom 90px
  right 40px
  font-size 14px
  line-height 42px
  text-align center
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);

  .write_svg
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>

<style>
.cube-scroll-wrapper {
  overflow: visible;
  z-index: 1;
}

.cube-action-sheet-list {
  padding: 31px 15px;
}

.cube-action-sheet-panel.cube-safe-area-pb,
.cube-action-sheet-content {
  border-radius: 12px 12px 0 0;
}

.cube-action-sheet-content {
  padding-bottom: 31px;
}

.cube-action-sheet-title,
.cube-action-sheet-cancel {
  display: none;
}

.cube-action-sheet-item {
  margin: 7px 11px;
  float: left;
  background: #f7f7f7;
  border-radius: 17px;
  padding: 9px 18px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3b3b3b;
  line-height: 17px;
}

#app {
  font-family: PingFangSC-Medium, PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size: 16px;
  background-color: #f5f6fa;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1) revert;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
