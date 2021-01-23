<template>
  <div id="app">
    <Nav :show-back="$route.meta.leave === 'LeaveTwoRouter'" :title="$route.meta.name"></Nav>
    <transition name="slide-fade" >
      <router-view/>
    </transition>
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
    },


  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh
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