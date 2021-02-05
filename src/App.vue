<template>
  <div id="app"
  >
    <transition name="slide-fade" >
      <router-view/>
    </transition>

    <div class="write" v-if="$route.meta.name==='需求反馈'" @click="Replay">
      <Icon class-name="write_svg" svg-name="edit" height="24px" width="24px"></Icon>
    </div>
  </div>
</template>

<script>
  export default {
    provide() {
      return {
        reload: this.reload,
      }
    },
    data() {
      return {
        isRouterAlive: true,

      }
    },

    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      },
      Replay(){
        this.$router.push({name:'Replay'})
      },
    },


  }

</script>

<style lang="stylus">

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
    transform translate(-50%,-50%)
</style>

<style>
.cube-scroll-wrapper{
  overflow: visible;
  z-index: 1;
}

.cube-action-sheet-list{
  display: flex;
  padding: 31px 15px;
}
.cube-action-sheet-item{
  background: #F7F7F7;
  border-radius: 17px;
  padding: 1px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3B3B3B;
  line-height: 17px;
}

#app {
  font-family: PingFangSC-Medium, PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size:16px;
  background-color: rgb(249,249,249);
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
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0) revert;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

</style>